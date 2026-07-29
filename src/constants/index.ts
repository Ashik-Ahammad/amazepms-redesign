import type { NavLink, ServiceItem, StatItem, TestimonialItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Recruitments", href: "/recruitments" },
  { label: "Our Strength", href: "/why-us" },
  { label: "Our Clients", href: "/clients" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const STATS: StatItem[] = [
  { value: "15000+", label: "Workforce" },
  { value: "300+", label: "Clients" },
  { value: "20M+", label: "Sq. ft. Managed" },
  { value: "PAN India", label: "Presence" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Facility Management",
    description:
      "Comprehensive facility management solutions covering maintenance, operations, and space optimization for commercial and residential properties.",
    icon: "Building2",
    gradient: "from-blue-500/20 to-indigo-500/20",
    span: "md:col-span-2",
  },
  {
    title: "Security Services",
    description:
      "Trained security personnel, CCTV surveillance, access control, and 24/7 monitoring to ensure safety of your premises and assets.",
    icon: "ShieldCheck",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Housekeeping",
    description:
      "Professional housekeeping services including daily cleaning, deep cleaning, and specialized sanitation protocols for spotless environments.",
    icon: "Sparkles",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Pest Control",
    description:
      "Eco-friendly pest management solutions with regular inspections, preventive treatments, and rapid response for infestation control.",
    icon: "Bug",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Horticulture & Landscaping",
    description:
      "Transform your outdoor spaces with expert landscaping, garden maintenance, and sustainable green solutions that enhance property value.",
    icon: "TreePine",
    gradient: "from-green-500/20 to-emerald-500/20",
    span: "md:col-span-2",
  },
  {
    title: "Mechanical & Electrical",
    description:
      "MEP maintenance services covering HVAC systems, plumbing, electrical installations, and preventive maintenance programs.",
    icon: "Wrench",
    gradient: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Swimming Pool Maintenance",
    description:
      "Complete pool care including water treatment, equipment servicing, cleaning, and safety compliance for residential and commercial pools.",
    icon: "Waves",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Fire & Safety",
    description:
      "Fire safety audits, equipment maintenance, emergency response planning, and compliance with all regulatory safety standards.",
    icon: "Flame",
    gradient: "from-red-500/20 to-orange-500/20",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Rajesh Kumar",
    role: "Director of Operations",
    company: "Mahindra World City",
    content:
      "Amaze PMS has completely transformed our facility management. Their team's dedication and professionalism is unmatched. The 24/7 security services give us complete peace of mind.",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Property Manager",
    company: "Golf View Residences",
    content:
      "Working with Amaze PMS has been exceptional. Their housekeeping and horticulture services maintain our property at the highest standards. Highly recommended.",
    avatar: "PS",
  },
  {
    name: "Anand Reddy",
    role: "Facilities Head",
    company: "CBRE South India",
    content:
      "The integrated approach of Amaze PMS—combining security, maintenance, and housekeeping—has streamlined our operations and significantly reduced costs.",
    avatar: "AR",
  },
];

export const TRUSTED_CLIENTS: string[] = [
  "Mahindra",
  "CBRE",
  "Golf View",
  "Kalpataru",
  "Wipro",
  "Adani",
];

export const FOOTER_LINKS = {
  menu: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Strength", href: "/why-us" },
  ],
  quickLinks: [
    { label: "Our Clients", href: "/clients" },
    { label: "Recruitments", href: "/contact" },
    { label: "Careers", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
  presence: [
    "Telangana",
    "Andhra Pradesh",
    "Karnataka",
    "Tamil Nadu",
    "Odisha",
  ],
};
