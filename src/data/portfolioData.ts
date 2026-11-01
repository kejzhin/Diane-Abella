export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  responsibilities: string[];
  keyStrengths: string[];
  badgeColor: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: { name: string; level: string; description: string }[];
}

export interface ReferenceItem {
  name: string;
  role: string;
  company: string;
  location: string;
  endorsement: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Diane B. Abella",
    displayName: "Diane Abella",
    title: "Service Desk Specialist",
    secondaryTitle: "Customer Support & Administration Professional",
    location: "Jamestown Subd. Talisay Cebu, Philippines",
    phone: "09424983778",
    formattedPhone: "+63 942 498 3778",
    email: "pmica12112014@gmail.com",
    profileImage: "/assets/aistudio/image_762aa43a.png",
    resumeDocument: "/assets/aistudio/image_090ad6a7.png",
    careerOverview:
      "I manage handling users and employees of Hotel, creating tickets, and performing administrative tasks. Resolving password reset issues and troubleshooting technical and account problems with care and efficiency.",
    extendedBio:
      "With a strong foundation in Business Administration from the University of Cebu and proven front-line experience at Verizon and hotel service operations, I bridge user-centric empathy with systematic problem resolution. Whether guiding customers through intricate billing questions, provisioning security access requests, or de-escalating critical helpdesk tickets, I bring organizational discipline, clear communication, and dependable follow-through.",
  },
  metrics: [
    {
      value: "3+ Yrs",
      label: "Support Experience",
      detail: "Hotel Service Desk & Telecoms",
    },
    {
      value: "BBA",
      label: "Degree in Business Admin",
      detail: "University of Cebu (2018)",
    },
    {
      value: "100%",
      label: "Ticket Diligence",
      detail: "Password resets, access & admin",
    },
    {
      value: "Cebu, PH",
      label: "Current Base",
      detail: "Jamestown Subd. Talisay",
    },
  ],
  experiences: [
    {
      id: "service-desk",
      role: "Service Desk",
      company: "Hotel Operations & Enterprise Services",
      period: "Sept 2025 | Present",
      location: "Cebu, Philippines",
      type: "Helpdesk & User Support",
      description:
        "Front-line technical administration and customer service for hotel personnel and guests, managing account lifecycles and incident ticketing.",
      responsibilities: [
        "Helping Customers with their account management, access setup, and onboarding inquiries.",
        "Executing rapid password resets and credential recovery under tight service standards.",
        "Submitting and coordinating access requests in compliance with internal security guidelines.",
        "Doing admin tasks including ticket routing, daily queue tracking, and incident escalation documentation.",
        "Troubleshooting end-user issues across hotel front-desk and back-office digital systems.",
      ],
      keyStrengths: [
        "Account Provisioning",
        "Password Resets",
        "Access Requests",
        "Ticketing Systems",
        "Administrative Tracking",
      ],
      badgeColor: "bg-[#FFF0F6] text-[#E55E99] border-[#FFC8DC]",
    },
    {
      id: "customer-service",
      role: "Customer Service",
      company: "Verizon",
      period: "Nov 2022 - 2025",
      location: "International Account Operations",
      type: "Telecommunications & Billing Support",
      description:
        "High-touch customer advocacy and tier-1 dispute resolution for one of the world's leading telecommunications providers.",
      responsibilities: [
        "Helping with users' bill explanations, itemized monthly invoices, and plan inclusions.",
        "Handling disputes and bills breakdown with meticulous analytical accuracy and de-escalation.",
        "Offering alternative solutions to save money through personalized plan adjustments and promotions.",
        "Navigating complex CRM and billing databases to update subscriber records and resolve queries on first contact.",
        "Maintaining superior customer satisfaction scores and delivering professional verbal and written care.",
      ],
      keyStrengths: [
        "Billing Dispute Resolution",
        "Cost-Saving Advisory",
        "Customer De-escalation",
        "Account Reconciliation",
        "CRM Navigation",
      ],
      badgeColor: "bg-[#FFF0F6] text-[#E55E99] border-[#FFC8DC]",
    },
  ] as ExperienceItem[],
  skills: [
    {
      id: "technical",
      name: "Technical & Helpdesk Operations",
      description: "Hands-on expertise in digital account management, service queue workflows, and IT support essentials.",
      skills: [
        {
          name: "Basic computer literacy skills",
          level: "Proficient",
          description: "Comfortable across enterprise software suites, cloud applications, and workplace operating systems.",
        },
        {
          name: "Password reset & recovery",
          level: "Advanced",
          description: "Swift authentication support, multi-factor credential updates, and account unlocking.",
        },
        {
          name: "Access request submission",
          level: "Proficient",
          description: "Routing, verifying, and logging internal role access requests with security awareness.",
        },
        {
          name: "Ticketing & administrative tasks",
          level: "Advanced",
          description: "Creating, tagging, prioritizing, and closing support tickets with comprehensive notes.",
        },
      ],
    },
    {
      id: "organizational",
      name: "Organizational & Planning Acumen",
      description: "Structured methodologies for prioritizing urgent tasks, time management, and orderly documentation.",
      skills: [
        {
          name: "Organizational skills",
          level: "Expert",
          description: "Maintaining orderly service logs, digital records, and structured administrative filing.",
        },
        {
          name: "Strategic planning and scheduling skills",
          level: "Proficient",
          description: "Coordinating support coverage, task queues, and meeting operational deadlines smoothly.",
        },
        {
          name: "Time-management skills",
          level: "Advanced",
          description: "Balancing high-volume incoming requests with administrative duties without dropping SLA targets.",
        },
      ],
    },
    {
      id: "communication",
      name: "Communication & Customer Relations",
      description: "Empathetic, clear, and calm verbal and written dialogue across diverse customer temperaments.",
      skills: [
        {
          name: "Verbal and written communication skills",
          level: "Expert",
          description: "Articulate phone etiquette, clear ticketing notes, and professional email correspondence.",
        },
        {
          name: "Dispute resolution & de-escalation",
          level: "Advanced",
          description: "Handling sensitive billing grievances and technical friction with patience and poise.",
        },
        {
          name: "Alternative cost-saving advisory",
          level: "Proficient",
          description: "Identifying optimal service bundles and solutions that deliver value to the user.",
        },
      ],
    },
  ] as SkillCategory[],
  education: {
    degree: "Bachelor of Business Administration",
    institution: "University of Cebu",
    year: "2018",
    location: "Cebu, Philippines",
    highlights: [
      "Comprehensive training in business management, administration, and organizational systems.",
      "Developed strategic planning, business communication, and analytical problem-solving foundation.",
      "Provided the operational discipline applied across telecommunications and service desk roles.",
    ],
  },
  reference: {
    name: "Ludy Ramirez",
    role: "CEO",
    company: "Power Consumerism",
    location: "Newtown Pardo",
    endorsement:
      "Diane brings dedication, reliability, and exemplary communication to every task she undertakes. Her organizational skills, attention to detail, and client-first mindset make her an exceptional asset to any professional service team.",
  } as ReferenceItem,
};
