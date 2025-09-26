export interface Experience {
  eventKey: string;
  title: string;
  company: string;
  dateRange: string;
  descriptionItems: string[];
}

export const experiences: Experience[] = [
  {
    eventKey: "vivid-seats",
    title: "Fullstack Developer",
    company: "Vivid Seats",
    dateRange: "May 2025 - August 2025",
    descriptionItems: [
      "Improved customer checkout conversion 5.1% by engineering new dynamic package pricing functionality via REST APIs and adding business logic into Java/Spring Boot backend microservices",
      "Implemented bundle-price display and discount messages into Cart/Billing React MFEs, taking the new features from ticket creation to feature-flag rollout and Splunk/Datadog production monitoring",
      "Raised JUnit coverage by 22% for pricing logic and RabbitMQ event validation, and expanded Selenium WebDriver flows for Cart/Billing React MFEs by revising the Page Object models",
      "Resolved 25+ bug tickets in Node.js and Spring Boot microservices through root-cause analysis using MongoDB event logs in Studio3T and Splunk"
    ]
  },
  {
    eventKey: "coravi",
    title: "Software Engineer",
    company: "CoreAVI",
    dateRange: "September 2024 - December 2024",
    descriptionItems: [
      "Spearheaded Python/Tkinter project for automating Project Manager slide deck generation, leveraging Pandas and Matplotlib, resulting in an 86% reduction of manual updates and saving 10+ hours/week for PMs",
      "Increased internal tool effectiveness 26% through five features and improved UX, utilizing Node.js, React and TailwindCSS",
      "Migrated 16 virtual machines to a Docker/Kubernetes platform on Azure Cloud with versioned Dockerfiles and Helm manifests to streamline CI/CD, and reduced maintenance effort by 30%"
    ]
  },
  {
    eventKey: "plooto",
    title: "QA Test Engineer",
    company: "Plooto",
    dateRange: "January 2024 - April 2024",
    descriptionItems: [
      "Implemented automated E2E UI and regression tests increasing coverage 16% using Playwright and Typescript",
      "Optimized daily regressions using Playwright’s fixture pattern to reduce tech debt and test runtime by 18%",
      "Identified 50+ defects and verified 30+ fixes in collaboration with devs/PMs and reconciled acceptance criteria"
    ]
  },
  {
    eventKey: "td-bank",
    title: "DevOps Engineer",
    company: "TD Bank",
    dateRange: "October 2022 - December 2022",
    descriptionItems: [
      "Conducted Spring Boot infrastructure builds and application deployments via Jenkins pipeline in private cloud",
      "Wrote detailed build documents in Confluence for LOB projects, resulting in a 29% productivity increase"
    ]
  },
];
