"use client";
import { useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, useScroll, Image as DreiImage, Scroll } from "@react-three/drei";
import { ALL_SERVICES_EXTENDED } from "@/constants";
import * as THREE from "three";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/Button";
// Math utility to smoothly interpolate values
const damp = THREE.MathUtils.damp;
function StackImage({ url, index, total }) {
    const ref = useRef(null);
    const scroll = useScroll();
    const { width, height } = useThree((state) => state.viewport);
    // Responsive sizing for the image card
    const isMobile = width < 4;
    const cardWidth = isMobile ? width * 0.85 : Math.min(width * 0.45, 6);
    const cardHeight = isMobile ? height * 0.5 : Math.min(height * 0.65, 8);
    useFrame((state, delta) => {
        if (!ref.current)
            return;
        // Calculate the current continuous scroll index
        const scrollIndex = scroll.offset * (total - 1);
        // Calculate distance of THIS card from the currently focused index
        const distance = index - scrollIndex;
        const material = ref.current.material;
        if (distance > 0) {
            // Card is IN THE STACK (behind the active card)
            const stackOffset = Math.min(distance, 4); // Show up to 4 cards behind
            const targetZ = -stackOffset * (isMobile ? 0.3 : 0.4);
            const targetY = -stackOffset * (isMobile ? 0.15 : 0.2);
            ref.current.position.z = damp(ref.current.position.z, targetZ, 4, delta);
            ref.current.position.y = damp(ref.current.position.y, targetY, 4, delta);
            ref.current.position.x = damp(ref.current.position.x, 0, 4, delta);
            ref.current.rotation.z = damp(ref.current.rotation.z, 0, 4, delta);
            ref.current.rotation.y = damp(ref.current.rotation.y, 0, 4, delta);
            // Calculate opacity (fade out deeper in stack)
            const targetOpacity = Math.max(0, 1 - stackOffset * 0.25);
            material.opacity = damp(material.opacity, targetOpacity, 4, delta);
        }
        else if (distance <= 0 && distance > -1.5) {
            // Card is THROWN AWAY (scrolled past)
            const progress = -distance; // 0 to 1.5
            // Throw trajectory
            const throwX = progress * (isMobile ? 3 : 8);
            const throwY = progress * 2 - Math.pow(progress, 2) * 5; // Arching path
            const throwRotZ = progress * -0.5;
            const throwRotY = progress * 0.5;
            ref.current.position.x = damp(ref.current.position.x, throwX, 6, delta);
            ref.current.position.y = damp(ref.current.position.y, throwY, 6, delta);
            ref.current.position.z = damp(ref.current.position.z, progress * 2, 6, delta);
            ref.current.rotation.z = damp(ref.current.rotation.z, throwRotZ, 6, delta);
            ref.current.rotation.y = damp(ref.current.rotation.y, throwRotY, 6, delta);
            // Fade out rapidly as it flies away
            const targetOpacity = Math.max(0, 1 - Math.pow(progress, 2));
            material.opacity = damp(material.opacity, targetOpacity, 6, delta);
        }
        else {
            // Hidden completely
            material.opacity = 0;
        }
    });
    return (<DreiImage ref={ref} url={url} transparent radius={0.25} position={[0, 0, 0]} scale={[cardWidth, cardHeight]}/>);
}
function Scene({ services }) {
    const { width } = useThree((state) => state.viewport);
    const isMobile = width < 4;
    // Shift the 3D stack to the right on desktop, center on mobile
    const stackPositionX = isMobile ? 0 : width * 0.2;
    return (<group position={[stackPositionX, 0, 0]}>
      {/* Reverse the array to map them back-to-front properly in the WebGL depth buffer */}
      {services.map((service, index) => (<StackImage key={service.title} url={service.image} index={index} total={services.length}/>))}
    </group>);
}
export function ServicesThreeStack() {
    // Render ALL services in the WebGL stack
    const stackServices = ALL_SERVICES_EXTENDED;
    return (<div className="w-full h-[100dvh] bg-background relative overflow-hidden" data-lenis-prevent="true">
      
      {/* Absolute Loading State */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
         <div className="w-10 h-10 border-2 border-brand rounded-full border-t-transparent animate-spin"/>
      </div>

      <Canvas className="z-10" camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1}/>
        
        <Suspense fallback={null}>
          <ScrollControls pages={stackServices.length} damping={0.15} distance={1.2}>
            <Scene services={stackServices}/>
            
            <Scroll html style={{ width: "100%", height: "100%" }}>
              {stackServices.map((service, index) => (<div key={service.title} className="w-full h-screen flex items-center justify-start pointer-events-none px-6 md:px-24">
                  {/* Text Overlay */}
                  <div className="max-w-xl flex flex-col items-start pointer-events-auto pb-40 md:pb-0">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-border bg-surface-glass backdrop-blur-md shadow-sm">
                      {(() => {
                const Icon = LucideIcons[service.icon] || LucideIcons.ArrowRight;
                return <Icon className="w-4 h-4 text-brand"/>;
            })()}
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {service.title.split(' ')[0]} Service
                      </span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-md">
                      {service.description}
                    </p>
                    
                    <Button variant="primary" icon={<LucideIcons.ArrowRight className="w-4 h-4"/>}>
                      Explore Service
                    </Button>
                  </div>
                </div>))}
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>);
}
