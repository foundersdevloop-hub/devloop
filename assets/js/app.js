const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const yearSpan = document.getElementById('year');

yearSpan.textContent = new Date().getFullYear();

navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
});

// Get all nav links for active state and mobile menu closing
const allNavLinks = document.querySelectorAll('.main-nav a');

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  if (nav && navToggle && nav.classList.contains('open')) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle) {
      nav.classList.remove('open');
    }
  }
});

// Close mobile menu when clicking a nav link
allNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      nav?.classList.remove('open');
    }
  });
});

// Active nav link handling
allNavLinks.forEach((link) => {
  if (!link.classList.contains('btn')) {
    link.addEventListener('click', () => {
      allNavLinks.forEach((item) => {
        if (!item.classList.contains('btn')) {
          item.classList.remove('active');
        }
      });
      link.classList.add('active');
    });
  }
});

const projectDetails = {
  dynamicforms: {
    domain: 'Web Application',
    title: 'DynamicForms Configuration Module',
    overview:
      'A sophisticated module that lets enterprises create complex form experiences from saved configurations. Built with .NET Core and Angular to ensure validation, real-time updates, and flexible rendering.',
    stack: ['.NET Core', 'Angular'],
    features: [
      'User-defined configuration for complex forms',
      'Dynamic adjustments based on saved configurations',
      'Real-time validation and rendering',
      'Personalized and user-friendly experience',
      'Support for multiple form types and structures',
    ],
  },
  telemarketing: {
    domain: 'Telemarketing / Business Apps',
    title: 'Telemarketing Platform',
    overview:
      'An end-to-end sales platform designed for fast-moving telemarketing teams with secure access, onboarding flows, and responsive dashboards.',
    stack: ['.NET Core 8', 'Angular', 'ASP.NET Identity'],
    features: [
      'Full-stack platform engineered from scratch',
      'Role-based access control using Angular Signals',
      'Claims-based authorization with secure login',
      'Email verification and profile management',
      'Responsive UI tuned for sales teams',
    ],
  },
  'data-processing': {
    domain: 'Data Management',
    title: 'Data Processing Platform',
    overview:
      'Backend and UI tooling that lets business teams submit, validate, and process large datasets through automated workflows.',
    stack: ['.NET Core', 'File Upload APIs'],
    features: [
      'File upload for bulk data submission',
      'Validation and processing automation',
      'Storage parity with UI functionality',
      'Operational dashboards for status tracking',
    ],
  },
  crm: {
    domain: 'CRM / Business Apps',
    title: 'Customer Relationship Management System',
    overview:
      'A refreshed CRM experience focused on multi-role collaboration, operational efficiency, and adaptable workflows.',
    stack: ['.NET', 'jQuery'],
    features: [
      'Support for advisor, staff, borrower, and admin roles',
      'Improved usability and streamlined flows',
      'Configurable features for evolving business needs',
    ],
  },
  schooler: {
    domain: 'Education Technology',
    title: 'Schooler',
    overview:
      'A creator-first learning platform with multimedia quizzes, revenue dashboards, and global-ready content delivery.',
    stack: ['Ruby on Rails', 'React.js', 'AWS S3', 'Bunny.net'],
    features: [
      'Media-rich quiz builder with S3 storage',
      'Rich text editor supporting multiple languages',
      'Custom audio/video playback experiences',
      'Teacher analytics and revenue insights',
      'Multi-currency payments with CSV/PDF exports',
      'i18n transformation from single-language to multilingual',
    ],
  },
  cirrusly: {
    domain: 'Cloud Security & Compliance',
    title: 'Cirrusly',
    overview:
      'A compliance cockpit that surfaces security scans, access controls, and CI/CD automation for cloud teams.',
    stack: ['Ruby on Rails', 'Stimulus', 'Turbo Frames', 'Docker', 'Heroku'],
    features: [
      'Authentication with organization-based access control',
      'Prowler security scans with severity handling',
      'Faceted search, filtering, and modern UX',
      'CI/CD pipelines with automated deployments',
    ],
  },
  winthrop: {
    domain: 'Business Process Automation',
    title: 'Winthrop',
    overview:
      'Automation pipelines that synchronize documents, notifications, and APIs using n8n workflows and Rails.',
    stack: ['n8n Workflows', 'Ruby on Rails', 'Sidekiq', 'Third-party APIs'],
    features: [
      'Document and notification automation',
      'Sidekiq-powered background jobs and retries',
      'Multi-platform data synchronization',
      'Robust error handling with client-ready documentation',
    ],
  },
  'urban-condo': {
    domain: 'Real Estate Platform',
    title: 'Urban Condo',
    overview:
      'A property marketplace uniting listings, chat, and CRM integrations for real-time collaboration.',
    stack: ['Ruby on Rails', 'AJAX', 'Follow Up Boss API', 'Action Cable'],
    features: [
      'Listings across rent, sale, and purchase journeys',
      'Real-time chat between clients and agents',
      'Dynamic CMS pages with Rails validations',
      'Follow Up Boss API integration',
    ],
  },
  'brief-adler': {
    domain: 'E-commerce & Campaign Ops',
    title: 'Brief Adler',
    overview:
      'Campaign orchestration software for Amazon sellers featuring automation, billing, and analytics.',
    stack: ['React.js', 'TypeScript', 'Amazon SP API', 'Node.js', 'MongoDB', 'AWS'],
    features: [
      'Type-safe architecture for campaign workflows',
      'MongoDB schemas for purchase and campaign data',
      'Amazon SP API integration with browser automation',
      'Stripe subscriptions and billing',
      'AWS deployments with CI/CD pipelines',
    ],
  },
  qikfinds: {
    domain: 'Product Research & Automation',
    title: 'QikFinds (Chrome Extension)',
    overview:
      'A research companion that pairs a Chrome extension with backend services for real-time product analysis.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Amazon SP API', 'Stripe'],
    features: [
      'Real-time product analysis inside the browser',
      'Business APIs secured with JWT authentication',
      'Amazon SP API integration for commerce data',
      'Stripe-powered subscription management',
    ],
  },
  'seller-repay': {
    domain: 'Financial Services & Automation',
    title: 'Seller Repay',
    overview:
      'Fintech APIs automating repayments with secure authentication, optimized queries, and observability.',
    stack: ['Node.js', 'MongoDB', 'AWS Lambda', 'S3', 'CloudWatch'],
    features: [
      'Scalable REST APIs with tuned MongoDB indexes',
      'JWT and OAuth2 authentication flows',
      'Serverless infrastructure built on AWS Lambda & S3',
      'Monitoring pipelines via CloudWatch and CI/CD',
    ],
  },
  bidx: {
    domain: 'AdTech & Data Analytics',
    title: 'BidX',
    overview:
      'A performance marketing brain that unifies Amazon Advertising data, ETL workflows, and interactive dashboards.',
    stack: ['Node.js', 'TypeScript', 'React.js', 'GraphQL', 'MongoDB', 'AWS'],
    features: [
      'Hybrid REST and GraphQL APIs for ad operations',
      'Amazon Advertising API integration',
      'Optimized ETL workflows for large datasets',
      'Interactive dashboards for ACOS, ROAS, CTR, and CPC',
    ],
  },
};

const projectModal = document.getElementById('project-modal');
const projectTitle = document.getElementById('project-modal-title');
const projectDomain = document.getElementById('project-modal-domain');
const projectOverview = document.getElementById('project-modal-overview');
const projectStack = document.getElementById('project-modal-stack');
const projectFeatureList = document.getElementById('project-modal-features');
const projectIcon = document.getElementById('project-modal-icon');

const getProjectIcon = (domain) => {
  const iconMap = {
    'Web Application': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad1)" stroke="url(#projectGrad1)" stroke-width="2"/>
      <rect x="16" y="20" width="32" height="24" rx="4" fill="white"/>
      <path d="M20 24H44M20 28H44M20 32H36" stroke="url(#projectGrad1)" stroke-width="2" stroke-linecap="round"/>
      <defs><linearGradient id="projectGrad1" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
    </svg>`,
    'Telemarketing / Business Apps': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad2)" stroke="url(#projectGrad2)" stroke-width="2"/>
      <path d="M32 22C28.686 22 26 24.686 26 28C26 31.314 28.686 34 32 34C35.314 34 38 31.314 38 28C38 24.686 35.314 22 32 22Z" fill="white"/>
      <path d="M20 44C20 39.582 23.582 36 28 36H36C40.418 36 44 39.582 44 44V46H20V44Z" fill="white"/>
      <defs><linearGradient id="projectGrad2" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#60a5fa"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
    </svg>`,
    'Data Management': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad3)" stroke="url(#projectGrad3)" stroke-width="2"/>
      <rect x="18" y="18" width="28" height="28" rx="2" fill="white"/>
      <path d="M22 26H42M22 32H42M22 38H36" stroke="url(#projectGrad3)" stroke-width="2" stroke-linecap="round"/>
      <defs><linearGradient id="projectGrad3" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient></defs>
    </svg>`,
    'CRM / Business Apps': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad4)" stroke="url(#projectGrad4)" stroke-width="2"/>
      <path d="M32 20L40 28L32 36L24 28L32 20Z" fill="white"/>
      <circle cx="32" cy="32" r="8" fill="url(#projectGrad4)"/>
      <defs><linearGradient id="projectGrad4" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#8b5cf6"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
    </svg>`,
    'Education Technology': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad5)" stroke="url(#projectGrad5)" stroke-width="2"/>
      <path d="M32 18L42 26V38L32 44L22 38V26L32 18Z" fill="white"/>
      <path d="M28 30L32 28L36 30V34L32 36L28 34V30Z" fill="url(#projectGrad5)"/>
      <defs><linearGradient id="projectGrad5" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
    </svg>`,
    'Cloud Security & Compliance': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad6)" stroke="url(#projectGrad6)" stroke-width="2"/>
      <path d="M24 28C20.686 28 18 30.686 18 34C18 37.314 20.686 40 24 40H40C43.314 40 46 37.314 46 34C46 30.686 43.314 28 40 28C39.448 28 39 27.552 39 27C39 23.686 36.314 21 33 21C30.794 21 28.794 22.206 27.794 24.206C26.206 22.794 24.206 22 22 22C18.686 22 16 24.686 16 28C16 31.314 18.686 34 22 34H24C24.552 34 25 33.552 25 33C25 30.794 26.794 29 29 29C31.206 29 33 30.794 33 33C33 33.552 33.448 34 34 34H40C43.314 34 46 31.314 46 28C46 24.686 43.314 22 40 22C38.794 22 37.794 22.794 37.206 24.206C35.794 22.206 33.794 21 31.5 21C28.186 21 25.5 23.686 25.5 27C25.5 27.552 25.948 28 26.5 28H24Z" fill="white"/>
      <path d="M32 28L36 32L32 36L28 32L32 28Z" fill="url(#projectGrad6)"/>
      <defs><linearGradient id="projectGrad6" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#60a5fa"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
    </svg>`,
    'Business Process Automation': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad7)" stroke="url(#projectGrad7)" stroke-width="2"/>
      <circle cx="32" cy="32" r="16" stroke="white" stroke-width="3"/>
      <circle cx="32" cy="32" r="8" fill="white"/>
      <path d="M32 20L32 14M32 50L32 44M20 32L14 32M50 32L44 32" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <defs><linearGradient id="projectGrad7" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#8b5cf6"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
    </svg>`,
    'Real Estate Platform': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad8)" stroke="url(#projectGrad8)" stroke-width="2"/>
      <path d="M32 18L42 28V46H22V28L32 18Z" fill="white"/>
      <path d="M26 34H38M26 38H38M26 42H34" stroke="url(#projectGrad8)" stroke-width="2" stroke-linecap="round"/>
      <defs><linearGradient id="projectGrad8" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
    </svg>`,
    'E-commerce & Campaign Ops': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad9)" stroke="url(#projectGrad9)" stroke-width="2"/>
      <path d="M20 24L28 20L36 24V40L28 44L20 40V24Z" fill="white"/>
      <path d="M24 28H32M24 32H32M24 36H30" stroke="url(#projectGrad9)" stroke-width="2" stroke-linecap="round"/>
      <defs><linearGradient id="projectGrad9" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#8b5cf6"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
    </svg>`,
    'Product Research & Automation': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad10)" stroke="url(#projectGrad10)" stroke-width="2"/>
      <circle cx="32" cy="32" r="12" stroke="white" stroke-width="3"/>
      <path d="M32 18L32 12M32 52L32 46M18 32L12 32M52 32L46 32" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <circle cx="32" cy="24" r="2" fill="white"/>
      <defs><linearGradient id="projectGrad10" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient></defs>
    </svg>`,
    'Financial Services & Automation': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad11)" stroke="url(#projectGrad11)" stroke-width="2"/>
      <path d="M20 32H44M32 20V44" stroke="white" stroke-width="4" stroke-linecap="round"/>
      <circle cx="32" cy="32" r="8" fill="white"/>
      <defs><linearGradient id="projectGrad11" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#8b5cf6"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
    </svg>`,
    'AdTech & Data Analytics': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#projectGrad12)" stroke="url(#projectGrad12)" stroke-width="2"/>
      <path d="M18 26H46M18 32H46M18 38H40" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <circle cx="14" cy="26" r="2" fill="white"/>
      <circle cx="14" cy="32" r="2" fill="white"/>
      <circle cx="14" cy="38" r="2" fill="white"/>
      <defs><linearGradient id="projectGrad12" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient></defs>
    </svg>`,
  };
  return iconMap[domain] || iconMap['Web Application'];
};

const closeModal = () => {
  projectModal?.classList.remove('active');
  document.body.classList.remove('modal-open');
};

const openModal = (key) => {
  const project = projectDetails[key];
  if (!project || !projectModal) return;

  projectTitle.textContent = project.title;
  projectDomain.textContent = project.domain;
  projectOverview.textContent = project.overview;
  if (projectIcon) {
    projectIcon.innerHTML = getProjectIcon(project.domain);
  }
  projectStack.innerHTML = '';
  project.stack.forEach((tech) => {
    const badge = document.createElement('span');
    badge.textContent = tech;
    projectStack.appendChild(badge);
  });
  projectFeatureList.innerHTML = '';
  project.features.forEach((feature) => {
    const li = document.createElement('li');
    li.textContent = feature;
    projectFeatureList.appendChild(li);
  });

  projectModal.classList.add('active');
  document.body.classList.add('modal-open');
};

document.querySelectorAll('.project-card').forEach((card) => {
  const key = card.getAttribute('data-project');
  if (!key) return;

  card.addEventListener('click', () => openModal(key));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openModal(key);
    }
  });
});

projectModal?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeModal !== undefined) {
    closeModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && projectModal?.classList.contains('active')) {
    closeModal();
  }
});

// Service Modal
const serviceDetails = {
  'web-app': {
    title: 'Web Application Development',
    overview:
      'DevLoop delivers enterprise-grade web applications that balance thoughtful product strategy with elite engineering execution. Every build begins with a discovery sprint that defines the outcomes, user behaviors, and KPIs that matter most. From there we architect performant, secure solutions using modern stacks such as React, Next.js, Angular, .NET, and Rails—selecting only the components that create measurable value. Accessibility, localization, observability, and automated testing are baked in from day one so launches are smoother and ongoing enhancements are effortless. Whether it is a mission-critical internal platform or a customer-facing portal with complex workflows, we align product, design, and development to ship experiences that feel polished, reliable, and unmistakably premium.',
  },
  cloud: {
    title: 'Cloud Solutions',
    overview:
      'DevLoop modernizes and manages cloud estates with a focus on compliance, reliability, and fiscal discipline. We craft landing zones on AWS, Azure, or hybrid footprints that codify identity, networking, and guardrails through infrastructure-as-code. Once deployed, our FinOps discipline keeps spend predictable through intelligent auto-scaling, rightsizing, and continuous telemetry. We pair resilient architectures—container platforms, serverless patterns, event-driven backbones—with zero-trust security controls, automated backup policies, and multi-region recovery strategies. Clients gain an elastic foundation that can absorb new workloads quickly, stay audit-ready, and surface health insights in real time so leaders can make confident operational decisions.',
  },
  api: {
    title: 'API Design & Integration',
    overview:
      'DevLoop engineers resilient API ecosystems that make data exchange effortless and auditable. We architect REST, GraphQL, and event-driven interfaces with clearly defined contracts, automated testing harnesses, and lifecycle governance so integrations remain predictable as products evolve. Security is enforced through OAuth2, mTLS, rate limiting, and observability that traces every transaction. For legacy environments we build modernization layers that decouple brittle systems while still honoring compliance requirements. Documentation portals, SDKs, and consumer onboarding playbooks ensure internal teams and external partners can integrate quickly without burning engineering cycles.',
  },
  'data-processing': {
    title: 'Data Processing & Automation',
    overview:
      'DevLoop turns disconnected data assets into trustworthy intelligence loops. We design ingestion pipelines that validate, normalize, and enrich data at the edge before orchestrating transformations with tools such as dbt, Airflow, and serverless ETL services. Automated quality gates, lineage tracking, and alerting keep stakeholders confident that dashboards and AI models are operating on accurate inputs. On top of the pipelines we deliver curated data products—executive-ready dashboards, operational workbenches, and proactive notifications—that surface insights at the exact moment teams need to act. Mundane reporting work becomes automated, while your analysts regain time for strategic analysis.',
  },
  'process-optimization': {
    title: 'Process Optimization',
    overview:
      'DevLoop partners with operations leaders to re-engineer processes so they are measurable, automated, and resilient. We map the current journey, quantify friction through data, and prototype future-state flows that remove handoffs and ambiguity. Using low-code automation, RPA, and tailored microservices, we digitize repetitive work while embedding business rules directly in the system of record. Governance dashboards track throughput, SLA adherence, and exception rates so executives can steer improvements with confidence. The outcome is a culture of continuous optimization where every team operates with clarity and accountability.',
  },
  devops: {
    title: 'DevOps & CI/CD',
    overview:
      'DevLoop implements DevOps programs that keep code flowing from commit to production with zero surprises. Our pipelines enforce automated quality gates, vulnerability scanning, and policy checks before releases reach production. We codify infrastructure with Terraform and Kubernetes, enabling repeatable environments across regions and clouds. Progressive delivery techniques—feature flags, blue/green, and canary strategies—ensure teams can release multiple times per day without risking downtime. Unified observability, incident automation, and SRE best practices give product owners real-time feedback loops so they can innovate quickly while maintaining impeccable reliability.',
  },
  'user-management': {
    title: 'User Management Systems',
    overview:
      'DevLoop architects identity platforms that combine robust security controls with human-friendly administration. We implement centralized identity stores, adaptive MFA, password-less experiences, and granular RBAC/ABAC policies so access can be tuned to any compliance requirement. Automated onboarding and offboarding workflows sync users across SaaS applications, internal tools, and customer portals while maintaining immutable audit trails. Admin consoles provide real-time visibility into sessions, policy deviations, and anomalous activity, empowering teams to act before risks escalate. The result is a governance foundation that scales with your organization without slowing it down.',
  },
  'erp-crm': {
    title: 'ERP & CRM Solutions',
    overview:
      'DevLoop designs unified ERP and CRM ecosystems that give every team the same source of truth. We align stakeholders around a modern data model, then configure or build modules for revenue operations, finance, supply chain, HR, and service that reflect the nuance of your business—not an off-the-shelf template. Intelligent workflow automation, contextual insights, and guided analytics elevate how teams sell, fulfill, and support customers. Seamless integrations and mobile-ready experiences keep field teams connected, while leadership gains instant visibility into pipeline health, cash flow, and operational capacity. It is a platform that scales gracefully and continually surfaces opportunities to grow revenue and margin.',
  },
};

const serviceModal = document.getElementById('service-modal');
const serviceTitle = document.getElementById('service-modal-title');
const serviceOverview = document.getElementById('service-modal-overview');
const serviceIcon = document.getElementById('service-modal-icon');

const getServiceIcon = (key) => {
  const iconMap = {
    'web-app': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#serviceGrad1)" stroke="url(#serviceGrad1)" stroke-width="2"/>
      <rect x="16" y="20" width="32" height="24" rx="4" fill="white"/>
      <path d="M20 24H44M20 28H44M20 32H36" stroke="url(#serviceGrad1)" stroke-width="2" stroke-linecap="round"/>
      <defs><linearGradient id="serviceGrad1" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
    </svg>`,
    'cloud': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#serviceGrad2)" stroke="url(#serviceGrad2)" stroke-width="2"/>
      <path d="M24 28C20.686 28 18 30.686 18 34C18 37.314 20.686 40 24 40H40C43.314 40 46 37.314 46 34C46 30.686 43.314 28 40 28C39.448 28 39 27.552 39 27C39 23.686 36.314 21 33 21C30.794 21 28.794 22.206 27.794 24.206C26.206 22.794 24.206 22 22 22C18.686 22 16 24.686 16 28C16 31.314 18.686 34 22 34H24C24.552 34 25 33.552 25 33C25 30.794 26.794 29 29 29C31.206 29 33 30.794 33 33C33 33.552 33.448 34 34 34H40C43.314 34 46 31.314 46 28C46 24.686 43.314 22 40 22C38.794 22 37.794 22.794 37.206 24.206C35.794 22.206 33.794 21 31.5 21C28.186 21 25.5 23.686 25.5 27C25.5 27.552 25.948 28 26.5 28H24Z" fill="white"/>
      <defs><linearGradient id="serviceGrad2" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#60a5fa"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
    </svg>`,
    'api': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#serviceGrad3)" stroke="url(#serviceGrad3)" stroke-width="2"/>
      <path d="M20 26H28V34H20V26ZM36 26H44V34H36V26ZM28 26H36V34H28V26ZM20 38H28V46H20V38ZM36 38H44V46H36V38ZM28 38H36V46H28V38Z" fill="white"/>
      <circle cx="18" cy="18" r="2" fill="white"/>
      <circle cx="32" cy="18" r="2" fill="white"/>
      <circle cx="46" cy="18" r="2" fill="white"/>
      <defs><linearGradient id="serviceGrad3" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
    </svg>`,
    'data-processing': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#serviceGrad4)" stroke="url(#serviceGrad4)" stroke-width="2"/>
      <rect x="18" y="26" width="28" height="4" rx="2" fill="white"/>
      <rect x="18" y="34" width="28" height="4" rx="2" fill="white"/>
      <rect x="18" y="42" width="24" height="4" rx="2" fill="white"/>
      <circle cx="14" cy="28" r="2" fill="white"/>
      <circle cx="14" cy="36" r="2" fill="white"/>
      <circle cx="14" cy="44" r="2" fill="white"/>
      <defs><linearGradient id="serviceGrad4" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#0ea5e9"/></linearGradient></defs>
    </svg>`,
    'process-optimization': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#serviceGrad5)" stroke="url(#serviceGrad5)" stroke-width="2"/>
      <circle cx="32" cy="32" r="16" stroke="white" stroke-width="3"/>
      <circle cx="32" cy="32" r="8" fill="white"/>
      <path d="M32 20L32 14M32 50L32 44M20 32L14 32M50 32L44 32" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <defs><linearGradient id="serviceGrad5" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#8b5cf6"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
    </svg>`,
    'devops': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#serviceGrad6)" stroke="url(#serviceGrad6)" stroke-width="2"/>
      <path d="M32 18L42 28V44L32 50L22 44V28L32 18ZM38 30.5L32 26L26 30.5V41.5L32 45.5L38 41.5V30.5Z" fill="white"/>
      <defs><linearGradient id="serviceGrad6" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
    </svg>`,
    'user-management': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#serviceGrad7)" stroke="url(#serviceGrad7)" stroke-width="2"/>
      <circle cx="32" cy="24" r="6" fill="white"/>
      <path d="M20 40C20 35.582 23.582 32 28 32H36C40.418 32 44 35.582 44 40V42H20V40Z" fill="white"/>
      <defs><linearGradient id="serviceGrad7" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#8b5cf6"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
    </svg>`,
    'erp-crm': `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#serviceGrad8)" stroke="url(#serviceGrad8)" stroke-width="2"/>
      <rect x="20" y="26" width="24" height="20" rx="2" fill="white"/>
      <path d="M24 30H40M24 34H40M24 38H36" stroke="url(#serviceGrad8)" stroke-width="2" stroke-linecap="round"/>
      <path d="M18 24H46V26H18V24Z" fill="white"/>
      <defs><linearGradient id="serviceGrad8" x1="0" y1="0" x2="64" y2="64"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs>
    </svg>`,
  };
  return iconMap[key] || iconMap['web-app'];
};

const closeServiceModal = () => {
  serviceModal?.classList.remove('active');
  document.body.classList.remove('modal-open');
};

const openServiceModal = (key) => {
  const service = serviceDetails[key];
  if (!service || !serviceModal) return;

  serviceTitle.textContent = service.title;
  serviceOverview.textContent = service.overview;
  if (serviceIcon) {
    serviceIcon.innerHTML = getServiceIcon(key);
  }

  serviceModal.classList.add('active');
  document.body.classList.add('modal-open');
};

document.querySelectorAll('.service-card').forEach((card) => {
  const key = card.getAttribute('data-service');
  if (!key) return;

  card.addEventListener('click', () => openServiceModal(key));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openServiceModal(key);
    }
  });
});

serviceModal?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeServiceModal !== undefined) {
    closeServiceModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && serviceModal?.classList.contains('active')) {
    closeServiceModal();
  }
});

// Team Modal
const teamDetails = {
  whail: {
    name: 'Whail Bin Sharif',
    role: 'Senior Software Developer',
    overview:
      'Whail is a Senior Software Developer with 8 years of extensive experience in full-stack development and DevOps. He specializes in building robust applications using Ruby on Rails and JavaScript, with a strong focus on creating scalable deployment solutions. Whail brings deep technical expertise to every project, ensuring that applications are not only functional but also performant and maintainable. His experience spans across various domains, from web applications to complex enterprise systems, always with an emphasis on best practices and clean code architecture.',
    skills: [
      'Full-stack development with Ruby on Rails',
      'JavaScript and modern frontend frameworks',
      'DevOps and scalable deployment strategies',
      'System architecture and design patterns',
      'Performance optimization and monitoring',
      'CI/CD pipeline implementation',
    ],
  },
  usman: {
    name: 'Muhammad Usman',
    role: 'Senior Software Developer',
    overview:
      'Muhammad Usman is a Senior Full Stack Developer with over 7 years of experience, specializing in Node.js, React.js, and AWS cloud infrastructure. He has extensive expertise in building scalable API solutions and designing robust infrastructure that can handle high traffic and complex business requirements. Usman is particularly skilled in data visualization, helping businesses transform raw data into actionable insights through intuitive dashboards and analytics platforms. His strong background in both frontend and backend development makes him a valuable asset for end-to-end project delivery.',
    skills: [
      'Node.js and Express.js backend development',
      'React.js and modern frontend frameworks',
      'AWS cloud infrastructure and services',
      'Scalable API design and implementation',
      'Data visualization and analytics',
      'Database optimization and query tuning',
    ],
  },
  suhaib: {
    name: 'Suhaib Hassan',
    role: 'Senior Software Developer',
    overview:
      'Suhaib is a Senior Software Developer with 9+ years of experience in full-stack development, with a particular focus on .NET Core and Angular. He has a proven track record of delivering enterprise-grade platforms with robust RESTful APIs that power complex business applications. Suhaib\'s expertise lies in building scalable, maintainable solutions using Microsoft technologies, and he excels at creating seamless integrations between frontend and backend systems. His deep understanding of the .NET ecosystem and modern web development practices ensures that every project he works on meets the highest standards of quality and performance.',
    skills: [
      '.NET Core and .NET Framework development',
      'Angular and TypeScript frontend development',
      'RESTful API design and implementation',
      'Entity Framework and database management',
      'Microservices architecture',
      'Enterprise application development',
    ],
  },
  farhan: {
    name: 'Farhan Khurram',
    role: 'Project Manager',
    overview:
      'Farhan is a Project Manager with 7 years of experience in leading software development projects using Agile, Scrum, and Waterfall methodologies. He has a strong command of project management tools like Jira and Trello, enabling him to effectively track progress, manage resources, and ensure timely delivery of projects. Farhan excels at bridging the gap between technical teams and stakeholders, translating business requirements into actionable development plans. His expertise in multiple project management methodologies allows him to adapt to different project needs, ensuring optimal outcomes for clients and teams alike.',
    skills: [
      'Agile and Scrum methodologies',
      'Waterfall project management',
      'Jira and Trello proficiency',
      'Stakeholder management and communication',
      'Resource planning and allocation',
      'Risk management and mitigation',
      'Team leadership and coordination',
    ],
  },
  waleed: {
    name: 'Waleed Haider',
    role: 'Senior QA Engineer',
    overview:
      'Waleed is a Senior QA Engineer with 8+ years of experience in both manual and automation testing. He specializes in using industry-leading testing tools like Selenium, Cypress, and JUnit to ensure the highest quality standards for software applications. Waleed has extensive expertise in API testing, performance testing, and CI/CD integration, making him instrumental in maintaining quality throughout the development lifecycle. His focus on comprehensive test coverage and automated testing strategies helps teams catch issues early and deliver reliable, bug-free software to clients.',
    skills: [
      'Manual and automated testing',
      'Selenium and Cypress test automation',
      'JUnit and testing frameworks',
      'API and integration testing',
      'Performance and load testing',
      'CI/CD pipeline integration',
      'Test strategy and planning',
      'Quality assurance best practices',
    ],
  },
};

const teamModal = document.getElementById('team-modal');
const teamTitle = document.getElementById('team-modal-title');
const teamRole = document.getElementById('team-modal-role');
const teamOverview = document.getElementById('team-modal-overview');
const teamSkillsList = document.getElementById('team-modal-skills');

const closeTeamModal = () => {
  teamModal?.classList.remove('active');
  document.body.classList.remove('modal-open');
};

const openTeamModal = (key) => {
  const team = teamDetails[key];
  if (!team || !teamModal) return;

  teamTitle.textContent = team.name;
  teamRole.textContent = team.role;
  teamOverview.textContent = team.overview;
  teamSkillsList.innerHTML = '';
  team.skills.forEach((skill) => {
    const li = document.createElement('li');
    li.textContent = skill;
    teamSkillsList.appendChild(li);
  });

  teamModal.classList.add('active');
  document.body.classList.add('modal-open');
};

document.querySelectorAll('.team-card').forEach((card) => {
  const key = card.getAttribute('data-team');
  if (!key) return;

  card.addEventListener('click', () => openTeamModal(key));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openTeamModal(key);
    }
  });
});

teamModal?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeTeamModal !== undefined) {
    closeTeamModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && teamModal?.classList.contains('active')) {
    closeTeamModal();
  }
});

// Why Us Modal - Individual Points
const whyUsPoints = {
  innovation: {
    title: 'Innovation-Driven Approach',
    description:
      'We continuously evaluate emerging frameworks, cloud services, and best practices—adopting the ones that create measurable competitive advantage. Every engagement blends modern architectures (Next.js, Node.js, .NET, cloud-native) with pragmatic delivery so you get solutions that are current today and adaptable tomorrow.',
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#whyUsModalGradient1)" stroke="url(#whyUsModalGradient1)" stroke-width="2"/>
      <path d="M32 20L40 28L32 36L24 28L32 20Z" fill="white"/>
      <path d="M20 32L28 40L36 32L28 24L20 32Z" fill="white"/>
      <path d="M32 44L40 36L32 28L24 36L32 44Z" fill="white"/>
      <defs>
        <linearGradient id="whyUsModalGradient1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8b5cf6"/>
          <stop offset="1" stop-color="#2563eb"/>
        </linearGradient>
      </defs>
    </svg>`,
  },
  agile: {
    title: 'Agile Delivery Models',
    description:
      'Engagements run in focused sprints with clear milestones, stakeholder demos, and rapid feedback loops. Our program management playbook pairs Scrum/Kanban ceremonies with tools such as Jira and Linear so you always see what is shipping next and how it maps back to your objectives.',
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#whyUsModalGradient2)" stroke="url(#whyUsModalGradient2)" stroke-width="2"/>
      <circle cx="32" cy="32" r="12" fill="white"/>
      <circle cx="32" cy="20" r="4" fill="white"/>
      <circle cx="44" cy="32" r="4" fill="white"/>
      <circle cx="32" cy="44" r="4" fill="white"/>
      <circle cx="20" cy="32" r="4" fill="white"/>
      <defs>
        <linearGradient id="whyUsModalGradient2" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stop-color="#60a5fa"/>
          <stop offset="1" stop-color="#8b5cf6"/>
        </linearGradient>
      </defs>
    </svg>`,
  },
  partnership: {
    title: 'Long-Term Partnerships',
    description:
      'We operate as an embedded extension of your team—learning the nuances of your business, proactively surfacing risks, and staying engaged after launch. The goal is to build trust through accountability, not just deliverables.',
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#whyUsModalGradient3)" stroke="url(#whyUsModalGradient3)" stroke-width="2"/>
      <path d="M32 18C28.686 18 26 20.686 26 24C26 27.314 28.686 30 32 30C35.314 30 38 27.314 38 24C38 20.686 35.314 18 32 18Z" fill="white"/>
      <path d="M20 40C20 35.582 23.582 32 28 32H36C40.418 32 44 35.582 44 40V42H20V40Z" fill="white"/>
      <defs>
        <linearGradient id="whyUsModalGradient3" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stop-color="#8b5cf6"/>
          <stop offset="1" stop-color="#2563eb"/>
        </linearGradient>
      </defs>
    </svg>`,
  },
  scale: {
    title: 'Scalability & Security',
    description:
      'Architectures are designed for growth from day one with elastic infrastructure, rigorous performance testing, and observability baked in. Security is enforced through zero-trust design, encryption standards, and regular audits so compliance is never in question.',
    icon: `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="30" fill="url(#whyUsModalGradient4)" stroke="url(#whyUsModalGradient4)" stroke-width="2"/>
      <circle cx="32" cy="32" r="16" stroke="white" stroke-width="3"/>
      <circle cx="32" cy="32" r="8" fill="white"/>
      <path d="M32 16L32 10M32 54L32 48M16 32L10 32M54 32L48 32" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <defs>
        <linearGradient id="whyUsModalGradient4" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2563eb"/>
          <stop offset="1" stop-color="#8b5cf6"/>
        </linearGradient>
      </defs>
    </svg>`,
  },
};

const whyUsModal = document.getElementById('why-us-modal');
const whyUsTitle = document.getElementById('why-us-modal-title');
const whyUsDescription = document.getElementById('why-us-modal-description');
const whyUsIcon = document.getElementById('why-us-modal-icon');

const closeWhyUsModal = () => {
  whyUsModal?.classList.remove('active');
  document.body.classList.remove('modal-open');
};

const openWhyUsModal = (pointKey) => {
  const point = whyUsPoints[pointKey];
  if (!point || !whyUsModal) return;

  whyUsTitle.textContent = point.title;
  if (whyUsDescription) {
    whyUsDescription.textContent = point.description;
  }
  if (whyUsIcon) {
    whyUsIcon.innerHTML = point.icon;
  }

  whyUsModal.classList.add('active');
  document.body.classList.add('modal-open');
};

// Add click handlers to each why-us feature
document.querySelectorAll('.why-us-feature').forEach((feature) => {
  const pointKey = feature.getAttribute('data-why-us-point');
  if (!pointKey) return;

  feature.addEventListener('click', () => openWhyUsModal(pointKey));
  feature.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openWhyUsModal(pointKey);
    }
  });
});

whyUsModal?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeWhyUsModal !== undefined) {
    closeWhyUsModal();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && whyUsModal?.classList.contains('active')) {
    closeWhyUsModal();
  }
});

const projectSlider = document.querySelector('.project-slider');
if (projectSlider) {
  const track = projectSlider.querySelector('[data-slider-track]');
  const prevBtn = projectSlider.querySelector('.slider-btn.prev');
  const nextBtn = projectSlider.querySelector('.slider-btn.next');
  const cards = track ? Array.from(track.querySelectorAll('.project-card')) : [];
  let currentIndex = 0;
  
  const getCardsPerView = () => {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    return 3;
  };
  
  let cardsPerView = getCardsPerView();

  const scrollToGroup = (groupIndex, instant = false) => {
    if (!track || !cards.length) return;
    cardsPerView = getCardsPerView();
    const maxGroups = Math.ceil(cards.length / cardsPerView);
    const clamped = Math.max(0, Math.min(groupIndex, maxGroups - 1));
    const targetIndex = clamped * cardsPerView;
    const target = cards[targetIndex];
    if (target) {
      track.scrollTo({
        left: target.offsetLeft,
        behavior: instant ? 'auto' : 'smooth',
      });
      currentIndex = clamped;
      updateButtons();
    }
  };

  const updateButtons = () => {
    if (!prevBtn || !nextBtn) return;
    cardsPerView = getCardsPerView();
    const maxGroups = Math.ceil(cards.length / cardsPerView);
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxGroups - 1;
  };

  const progressBar = document.getElementById('project-progress-bar');
  const updateProgress = () => {
    if (!track || !progressBar || !cards.length) return;
    cardsPerView = getCardsPerView();
    const maxGroups = Math.ceil(cards.length / cardsPerView);
    const progress = ((currentIndex + 1) / maxGroups) * 100;
    progressBar.style.width = `${progress}%`;
  };

  const scrollToGroupWithProgress = (groupIndex, instant = false) => {
    scrollToGroup(groupIndex, instant);
    updateProgress();
  };

  prevBtn?.addEventListener('click', () => scrollToGroupWithProgress(currentIndex - 1));
  nextBtn?.addEventListener('click', () => scrollToGroupWithProgress(currentIndex + 1));

  window.addEventListener('resize', () => {
    cardsPerView = getCardsPerView();
    scrollToGroupWithProgress(0, true);
  });
  scrollToGroupWithProgress(0, true);
  updateButtons();
  updateProgress();
}

// Services Slider
const servicesSlider = document.querySelector('.services-slider');
if (servicesSlider) {
  const track = servicesSlider.querySelector('[data-slider-track]');
  const prevBtn = servicesSlider.querySelector('.slider-btn.prev');
  const nextBtn = servicesSlider.querySelector('.slider-btn.next');
  const cards = track ? Array.from(track.querySelectorAll('article')) : [];
  let currentIndex = 0;
  
  const getCardsPerView = () => {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    return 3;
  };
  
  let cardsPerView = getCardsPerView();

  const scrollToGroup = (groupIndex, instant = false) => {
    if (!track || !cards.length) return;
    cardsPerView = getCardsPerView();
    const maxGroups = Math.ceil(cards.length / cardsPerView);
    const clamped = Math.max(0, Math.min(groupIndex, maxGroups - 1));
    const targetIndex = clamped * cardsPerView;
    const target = cards[targetIndex];
    if (target) {
      track.scrollTo({
        left: target.offsetLeft,
        behavior: instant ? 'auto' : 'smooth',
      });
      currentIndex = clamped;
      updateButtons();
    }
  };

  const updateButtons = () => {
    if (!prevBtn || !nextBtn) return;
    cardsPerView = getCardsPerView();
    const maxGroups = Math.ceil(cards.length / cardsPerView);
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxGroups - 1;
  };

  const progressBar = document.getElementById('services-progress-bar');
  const updateProgress = () => {
    if (!track || !progressBar || !cards.length) return;
    cardsPerView = getCardsPerView();
    const maxGroups = Math.ceil(cards.length / cardsPerView);
    const progress = ((currentIndex + 1) / maxGroups) * 100;
    progressBar.style.width = `${progress}%`;
  };

  const scrollToGroupWithProgress = (groupIndex, instant = false) => {
    scrollToGroup(groupIndex, instant);
    updateProgress();
  };

  prevBtn?.addEventListener('click', () => scrollToGroupWithProgress(currentIndex - 1));
  nextBtn?.addEventListener('click', () => scrollToGroupWithProgress(currentIndex + 1));

  window.addEventListener('resize', () => {
    cardsPerView = getCardsPerView();
    scrollToGroupWithProgress(0, true);
  });
  scrollToGroupWithProgress(0, true);
  updateButtons();
  updateProgress();
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');
if (scrollToTopBtn) {
  const toggleScrollButton = () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  };

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  window.addEventListener('scroll', toggleScrollButton);
  toggleScrollButton();
}

// Animated Counter for Hero Stats
const animateCounter = (element, target, duration = 2000, suffix = '') => {
  const start = 0;
  const startTime = performance.now();
  const isPercentage = suffix === '%';

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    
    const current = Math.floor(start + (target - start) * easeOutQuart);
    
    if (isPercentage) {
      element.textContent = `${current}${suffix}`;
    } else {
      element.textContent = `${current}${suffix}`;
    }

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      // Ensure final value is set
      element.textContent = `${target}${suffix}`;
    }
  };

  requestAnimationFrame(updateCounter);
};

// Initialize counter animation when hero stats come into view
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px',
  };

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const valueElements = entry.target.querySelectorAll('.value[data-target]');
        valueElements.forEach((el) => {
          const target = parseInt(el.getAttribute('data-target'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          animateCounter(el, target, 2000, suffix);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  statsObserver.observe(heroStats);
}
