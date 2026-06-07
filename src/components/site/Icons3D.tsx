// Hand-crafted gradient SVG glyphs that read as soft 3D
import type { SVGProps } from "react";

const Defs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#E6007E" />
      <stop offset="55%" stopColor="#7A2B8F" />
      <stop offset="100%" stopColor="#1E5BA8" />
    </linearGradient>
    <linearGradient id={`${id}-hi`} x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="white" stopOpacity="0.6" />
      <stop offset="100%" stopColor="white" stopOpacity="0" />
    </linearGradient>
    <radialGradient id={`${id}-glow`} cx="50%" cy="100%" r="50%">
      <stop offset="0%" stopColor="#E6007E" stopOpacity="0.5" />
      <stop offset="100%" stopColor="#E6007E" stopOpacity="0" />
    </radialGradient>
  </defs>
);

type IconProps = SVGProps<SVGSVGElement>;

const Base = ({ id, children, ...rest }: { id: string; children: React.ReactNode } & IconProps) => (
  <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" {...rest}>
    <Defs id={id} />
    <ellipse cx="48" cy="88" rx="30" ry="5" fill={`url(#${id}-glow)`} />
    {children}
  </svg>
);

export const AdvisoryIcon = (p: IconProps) => (
  <Base id="adv" {...p}>
    {/* Briefcase */}
    <rect x="16" y="32" width="64" height="44" rx="8" fill="url(#adv-grad)" />
    <rect x="16" y="32" width="64" height="14" rx="8" fill="url(#adv-hi)" />
    <rect x="36" y="22" width="24" height="14" rx="4" fill="none" stroke="url(#adv-grad)" strokeWidth="4" />
    <rect x="42" y="48" width="12" height="6" rx="2" fill="white" fillOpacity="0.85" />
  </Base>
);

export const StaffingIcon = (p: IconProps) => (
  <Base id="staff" {...p}>
    {/* Three people */}
    <circle cx="30" cy="34" r="9" fill="url(#staff-grad)" />
    <circle cx="66" cy="34" r="9" fill="url(#staff-grad)" />
    <circle cx="48" cy="28" r="11" fill="url(#staff-grad)" />
    <path d="M14 72c0-10 8-18 18-18s18 8 18 18" fill="url(#staff-grad)" />
    <path d="M46 72c0-10 8-18 18-18s18 8 18 18" fill="url(#staff-grad)" />
    <path d="M28 64c0-11 9-20 20-20s20 9 20 20v8H28z" fill="url(#staff-grad)" />
    <ellipse cx="48" cy="40" rx="14" ry="4" fill="url(#staff-hi)" />
  </Base>
);

export const TechIcon = (p: IconProps) => (
  <Base id="tech" {...p}>
    {/* Chip */}
    <rect x="22" y="22" width="52" height="52" rx="10" fill="url(#tech-grad)" />
    <rect x="32" y="32" width="32" height="32" rx="4" fill="white" fillOpacity="0.18" />
    <rect x="38" y="38" width="20" height="20" rx="2" fill="white" fillOpacity="0.9" />
    {["12","28","44","60","76"].map((y) => (
      <g key={y}>
        <rect x="10" y={Number(y) + 4} width="12" height="4" rx="1" fill="url(#tech-grad)" />
        <rect x="74" y={Number(y) + 4} width="12" height="4" rx="1" fill="url(#tech-grad)" />
        <rect x={Number(y) + 4} y="10" width="4" height="12" rx="1" fill="url(#tech-grad)" />
        <rect x={Number(y) + 4} y="74" width="4" height="12" rx="1" fill="url(#tech-grad)" />
      </g>
    ))}
    <rect x="22" y="22" width="52" height="18" rx="10" fill="url(#tech-hi)" />
  </Base>
);

export const ShieldIcon = (p: IconProps) => (
  <Base id="shield" {...p}>
    <path d="M48 12l30 10v22c0 18-13 32-30 38C31 76 18 62 18 44V22z" fill="url(#shield-grad)" />
    <path d="M48 12l30 10v18c-12-2-22 0-30 6-8-6-18-8-30-6V22z" fill="url(#shield-hi)" />
    <path d="M36 46l9 9 16-18" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </Base>
);

export const NetworkIcon = (p: IconProps) => (
  <Base id="net" {...p}>
    <circle cx="48" cy="22" r="9" fill="url(#net-grad)" />
    <circle cx="20" cy="62" r="9" fill="url(#net-grad)" />
    <circle cx="76" cy="62" r="9" fill="url(#net-grad)" />
    <circle cx="48" cy="74" r="9" fill="url(#net-grad)" />
    <path d="M48 22L20 62M48 22l28 40M20 62l28 12M76 62L48 74" stroke="url(#net-grad)" strokeWidth="3" />
    <circle cx="48" cy="22" r="4" fill="url(#net-hi)" />
  </Base>
);

export const GlobeIcon = (p: IconProps) => (
  <Base id="globe" {...p}>
    <circle cx="48" cy="48" r="32" fill="url(#globe-grad)" />
    <ellipse cx="48" cy="48" rx="32" ry="14" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.7" />
    <ellipse cx="48" cy="48" rx="14" ry="32" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.7" />
    <path d="M16 48h64" stroke="white" strokeWidth="2" strokeOpacity="0.7" />
    <circle cx="48" cy="48" r="32" fill="url(#globe-hi)" />
  </Base>
);

export const SparkIcon = (p: IconProps) => (
  <Base id="spark" {...p}>
    <path d="M48 10l8 24 24 8-24 8-8 24-8-24-24-8 24-8z" fill="url(#spark-grad)" />
    <path d="M48 10l8 24 24 8-12 4-20-6-8-24z" fill="url(#spark-hi)" />
  </Base>
);
