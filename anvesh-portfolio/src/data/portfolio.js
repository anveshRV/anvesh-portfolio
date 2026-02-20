export const portfolio = {
  name: "Gnyan Anvesh Reddy Visarapu",
  brand: "Gnyan Visarapu",
  role: "AI Engineer • Data Analytics • Full Stack",
  location: "Athens, GA • Open to relocate",
  email: "vg.anveshreddy@gmail.com",
  linkedin: "https://linkedin.com/in/anveshreddyvisarapu",
  github: "https://github.com/anveshRV",
  resume: "/resume.pdf",

  hero: {
    greeting: "HELLO",
    title: "I’m Gnyan Visarapu",
    subtitle:
      "I design data-driven AI systems and reliable web applications, with a strong focus on clean analytics, reproducible ML pipelines, and real-world performance.",
    ctas: [
      { label: "Download Resume", href: "/resume.pdf", kind: "primary" },
      { label: "View Projects", href: "/projects", kind: "secondary" },
    ],
    stats: [
      { label: "Records analyzed", value: "50K+" },
      { label: "Model precision", value: "82%" },
      { label: "Latency reduction", value: "~20%" },
    ],
  },

  highlights: [
    {
      title: "Production AI Pipelines",
      desc: "End-to-end ML workflows from data cleaning to GPU deployment for real-time inference.",
      tags: ["PyTorch", "TensorFlow", "AWS"],
    },
    {
      title: "Large-Scale Data Analytics",
      desc: "SQL-based performance analysis over 100K+ records with measurable reliability gains.",
      tags: ["SQL", "PostgreSQL", "MySQL"],
    },
    {
      title: "Anomaly Detection & Reporting",
      desc: "Built statistical and ML-based detection systems with Tableau dashboards.",
      tags: ["Isolation Forest", "Tableau", "EDA"],
    },
  ],

  works: [
    {
      role: "AI Engineer Intern",
      org: "Toptraits",
      logo: "/logos/toptraits.jfif",
      date: "Aug 2025 – Present • Remote (Alpharetta, GA)",
      bullets: [
        "Conducted exploratory data analysis on large-scale perception and sensor datasets to identify patterns, edge cases, and data quality issues, improving model robustness and reducing training noise.",
        "Designed, trained, and evaluated deep learning models using PyTorch and TensorFlow, enabling up to 30% faster model iteration through optimized data pipelines.",
        "Built end-to-end ML workflows covering data preprocessing, model training, validation, and GPU-accelerated deployment for real-time AI inference in production.",
      ],
    },
    {
      role: "Graduate Assistant",
      org: "University of Georgia",
      logo: "/logos/uga.jfif",
      date: "Nov 2024 – Present",
      bullets: [
        "Built an AI chatbot for department support using NLP/ML.",
        "Deployed on Azure with secure, scalable access.",
        "Improved faculty workflow by reducing repetitive queries.",
      ],
    },
    {
      role: "Software Engineer Intern",
      org: "Capgemini Technology Services",
      logo: "/logos/capgemini.jfif",
      date: "Mar 2023 – Sep 2023 • Mumbai, India",
      bullets: [
        "Analyzed application and database usage data using SQL to identify performance bottlenecks, contributing to a 20% reduction in response time.",
        "Cleaned, validated, and managed relational datasets (MySQL, PostgreSQL) with 100K+ records to ensure high data quality and support backend analytics.",
        "Collaborated with cross-functional teams to translate business requirements into data-driven backend solutions, achieving 95%+ defect-free production deployments.",
      ],
    },
    {
      role: "Recruiter",
      org: "Griffin LPU",
      logo: "/logos/griffin.jfif",
      date: "Aug 2022 – Mar 2023",
      bullets: [
        "Identified and engaged potential student members through various outreach activities and events, conducted interviews and assessments to evaluate candidates' fit for the organization, and provided support and guidance to new recruits, ensuring a smooth onboarding process and integration into the organization..",
      ],
    },
     {
      role: "Technology Intern",
      org: "LPU School of CSE",
      logo: "/logos/cslpu.jfif",
      date: "Jul 2022 – Dec 2022",
      bullets: [
        "Developed a portal connecting hospitals, donors, and recipients.",
        "Used MongoDB for tracking and coordination.",
        "Built interactive pages for smooth UX.",
      ],
    },
  ],

  projects: [
    {
      status: "Live",
      title: "Service Request Analytics & Anomaly Detection",
      year: "2025",
      summary:
        "A data analytics and ML system that surfaces operational bottlenecks and flags abnormal service behavior.",
      impact: [
        "Analyzed 50K+ records through structured EDA",
        "Improved data quality by ~25%",
        "Achieved 82% precision in anomaly detection",
        "Reduced manual reporting effort by ~40%",
      ],
      stack: ["Python", "SQL", "Isolation Forest", "Tableau"],
      type: "Data Science",
      links: {
        github: "",
      },
    },
    {
      title: "Movie Ticket Booking System",
      year: "2024",
      summary:
        "A full-stack ticketing platform with real-time seat selection, secure APIs, and demand analytics.",
      impact: [
        "Handled 500+ active users",
        "Integrated React, Spring Boot, and MySQL",
        "Used booking analytics to improve peak-time reliability",
      ],
      stack: ["React", "Spring Boot", "Hibernate", "MySQL"],
      type: "Full Stack",
      links: {
        github: "",
      },
    },
    {
      title: "KinterateAI Chatbot",
      year: "2025",
      summary:
        "An AI assistant for student queries with intent routing and domain-focused responses.",
      impact: ["500+ queries/month", "99.9% uptime", "~30% workload reduction"],
      stack: ["Python", "Flask", "Azure", "NLP"],
      type: "AI",
      links: {
        github: "",
      },
    },
     {
      title: "Text Suggestive & Predictive System",
      year: "2024",
      summary:
        "N-gram based next-word prediction using NLTK Brown Corpus with real-time web UI.",
      impact: ["85%+ accuracy", "<150ms latency", "1,000+ test sessions"],
      stack: ["Python", "NLTK", "Flask", "JavaScript"],
      type: "NLP",
      links: {
        github: "",
      },
    },
  ],

  skills: {
    "Data Science & ML": [
      "Python",
      "R",
      "Machine Learning",
      "Model Evaluation",
      "Statistical Modeling",
      "Computer Vision",
    ],
    "Analytics & Visualization": [
      "Tableau",
      "Power BI",
      "Redash",
      "Matplotlib",
      "Seaborn",
      "Google Data Studio",
      "Advanced Excel",
    ],
    "Databases & Tools": [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Microsoft SQL Server",
      "Git",
      "Visual Studio",
    ],
    "Cloud & Engineering": [
      "Flask",
      "AWS",
      "LLMs",
      "SDLC",
      "REST APIs",
    ],
  },

  education: [
    {
      school: "University of Georgia",
      logo: "/logos/uga.jfif",
      degree: "Masters in Computer Science (GPA: 3.55/4.0)",
      dates: "Jan 2024 – Present",
      details: [
        "Machine Learning",
        "Deep Learning",
        "Data Structures & Algorithms",
        "Software Engineering",
        "DBMS",
      ],
            coursework: [ 
              "Machine Learning",
        "Deep Learning",
        "Data Structures & Algorithms",
        "Software Engineering",
        "DBMS",
             ],

    },
    {
      school: "Lovely Professional University",
      logo: "/logos/lpu.jfif",
      degree: "Bachelor of Technology -BTech in Computer Science (GPA: 7.8/10)",
      dates: "Jun 2019 – Jun 2023",
      details: [
        "Data Analytics & Visualization",
        "OOPS",
        "Python",
        "Java",
        "Web Development",
        "Artificial Intelligence",
        "Operating Systems",
      ],

      coursework: [
        "OOPS",
        "Python",
        "Java",
        "Web Development",
        "Artificial Intelligence",
        "Operating Systems",

      ],

    },
  ],

  certifications: [],

  achievement:
    "Outstanding Project Award – UGA Textiles Department for building an AI-powered departmental chatbot.",
};
