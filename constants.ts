import { Partner } from './types';

export const BOOKING_URL = "https://cal.com/noman-gaz1/private-fit-call?month=2026-01&overlayCalendar=true";

export const NAV_LINKS = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Model', href: '#model' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Wall of Success', href: '#wall-of-success' },
  { label: 'Engagement', href: '#engagement' },
];

export const PHILOSOPHY_COMPARISON = {
  traditional: {
    title: "Traditional Volume Models",
    points: [
      "Optimize for reach and repetition",
      "Depend on probability and scale",
      "Measure success by activity",
      "Create noise before relevance",
      "Produce inconsistent outcomes",
      "Success is incidental"
    ]
  },
  accessDeal: {
    title: "The AccessDeal Model",
    points: [
      "Optimizes for alignment and discretion",
      "Operates inside closed environments",
      "Measures success by intent",
      "Introduces only when timing is real",
      "Produces predictable outcomes",
      "Success is engineered"
    ]
  }
};

export const SECTORS = [
  "Biotechnology & Life Sciences",
  "Pharmaceutical Services & Platforms",
  "Aerospace & Advanced Manufacturing",
  "Recruitment & Specialized Staffing",
  "Enterprise Technology & Infrastructure"
];

export const ACTIVE_PARTNERS_DATA: Partner[] = [
  { 
    id: 1, 
    name: "Biotechnology", 
    type: "Enterprise R&D", 
    region: "North America (Boston/SF)", 
    accessLevel: "C-Suite & Lab Directors",
    duration: "Month 4 of 6",
    nodeId: "BIO-09X",
    velocity: "High",
    compliance: "Verified Lvl 3",
    valueGenerated: "$12.5M",
    successMetric: "Pipeline Added",
    description: "Secured 3 strategic pilots with top-tier pharma conglomerates.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: 2, 
    name: "Cybersecurity", 
    type: "Infra & SaaS", 
    region: "Europe / UK", 
    accessLevel: "CISO / VP Engineering",
    duration: "Month 2 of 6",
    nodeId: "SEC-44A",
    velocity: "Medium",
    compliance: "ISO/SOC2 Match",
    valueGenerated: "$4.2M",
    successMetric: "Contract Value",
    description: "Penetrated 2 major banking infrastructures in London.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: 3, 
    name: "Recruitment", 
    type: "Specialized Staffing", 
    region: "Global / Remote", 
    accessLevel: "CHRO / Talent Acquisition",
    duration: "Month 5 of 6",
    nodeId: "HR-102",
    velocity: "Very High",
    compliance: "Verified",
    valueGenerated: "$850k",
    successMetric: "Monthly Recurring",
    description: "Exclusive supplier status for 4 Fortune 500 tech firms.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000"
  },
  { 
    id: 4, 
    name: "Wealth Management", 
    type: "Private Family Office", 
    region: "North America / CH", 
    accessLevel: "Principals / UHNW",
    duration: "Month 1 of 6",
    nodeId: "FIN-88Z",
    velocity: "Emerging",
    compliance: "Strict NDA",
    valueGenerated: "$22M",
    successMetric: "AUM Commitments",
    description: "Direct introductions to 3 sovereign wealth investment committees.",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=1000"
  }
];