export interface Job {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
}

export const contact = {
  name: "Mary San Agustin",
  title: "Staff Design Engineer",
  location: "Remote",
  phone: "(949) 291-2504",
  email: "marycsanagustin@gmail.com",
  linkedin: "linkedin.com/in/mary-san-agustin",
};

export const summary =
  "Design engineer with 7+ years building and scaling design systems from the ground up — token pipelines, themeable component libraries, and, most recently, the infrastructure that lets AI tools work reliably inside a design system. I build the layer between design intent and shipped code: the systems, docs, and tooling that let designers, engineers, and now AI agents all build from the same source of truth.";

export const experience: Job[] = [
  {
    company: "Enlyte",
    title: "Staff Design Technologist",
    dates: "Feb 2026 – Present",
    location: "Remote",
    bullets: [
      "Leading development of a RAG-powered MCP server that gives LLMs real-time design system context via vectorized semantic search, HTTP streaming, and intelligent caching — enabling AI coding assistants (VS Code and other MCP clients) to build directly from the live design system instead of stale docs or manual knowledge transfer translating static mockups into code.",
      "Architecting a React reference implementation environment that lets designers and engineers iterate in code against production component libraries, closing the gap between design intent and shippable UI.",
      "Raising technical fluency across design so non-engineers can work AI-augmented and code-adjacent, reducing the frontend capacity required to ship on-system UI.",
    ],
  },
  {
    company: "Enlyte",
    title: "Senior Design Technologist",
    dates: "Mar 2022 – Feb 2026",
    location: "Remote",
    bullets: [
      "Engineered a custom Figma plugin that automated the design token build pipeline, replacing a paid Enterprise API and saving $14K/year.",
      "Architected a dynamic theming infrastructure (TypeScript + Sass tokens) enabling cross-stack compatibility and a rebrand-ready foundation for dark mode, white-labeling, and high-contrast accessibility themes.",
      "Trusted cross-org advisor to engineers, designers, and product leads on frontend practices, tooling decisions, and system adoption — regularly asked to evaluate new hires across teams.",
    ],
  },
  {
    company: "Enlyte",
    title: "Design Technologist I–II",
    dates: "Apr 2019 – Mar 2022",
    location: "San Diego, CA",
    bullets: [
      "Led consolidation of multiple product ecosystems into a single React component library, establishing a shared design/engineering mental model and improving accessibility compliance.",
      "Replaced static documentation with a dynamically themeable Storybook system supporting rapid prototyping.",
      "Drove a data visualization research initiative, evaluating and implementing third-party charting libraries in React across multiple teams.",
      "Supported UI implementation for the greenfield reporting product miTrends and expanded design tokens for TypeScript.",
    ],
  },
  {
    company: "Zeeto.io",
    title: "Experience Designer",
    dates: "Dec 2018 – Jan 2019",
    location: "San Diego, CA",
    bullets: [
      "Designed and built mobile-responsive front-end experiences (Drupal, Bootstrap, Sass, JavaScript, jQuery).",
      "Ran data-driven A/B and multivariate experiments across design, usability, and copy to maximize client revenue.",
      "Built a reusable Sass theming system that shortened rollout time for new clients.",
    ],
  },
  {
    company: "CourseKey",
    title: "Software Engineer Intern",
    dates: "Oct 2018 – Nov 2018",
    location: "San Diego, CA",
    bullets: [
      "Translated Zeplin designs into responsive React UI using Material UI and ES6.",
      "Wrote unit tests for new and existing components with Enzyme and Jest.",
    ],
  },
];

export const skills = {
  "Design Systems": [
    "Token architecture",
    "Theming infrastructure",
    "Component libraries",
    "Storybook",
    "Figma (plugin development)",
  ],
  "AI-Native Workflows": [
    "MCP server development",
    "RAG / semantic search",
    "AI-assisted design-to-code",
    "LLM tooling integration",
  ],
  Engineering: ["React", "TypeScript", "JavaScript", "Sass/CSS", "HTML", "Node.js"],
  Practice: [
    "Accessibility (WCAG)",
    "Cross-functional partnership",
    "Design/eng alignment",
    "Technical mentorship",
  ],
};

export const education = [
  {
    school: "LEARN Academy",
    program: "Full Stack Web Development",
    dates: "2018",
  },
  {
    school: "UC Irvine",
    program: "B.F.A. Dance; B.A. Cognitive Psychology",
    dates: "",
  },
];
