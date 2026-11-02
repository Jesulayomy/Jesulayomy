const experiences = [
  {
    company: "HubSpot",
    experiences: [
      {
        type: "Full-time",
        location: "New York, US",
        role: "Software Engineer",
        team: "Context Governance",
        imageYear: "2026A",
        duration: "November 2026 - Present",
        tasks: ["--"],
        tech: ["Java", "React", "JavaScript"]
      },
      {
        type: "Full-time",
        location: "New York, US",
        role: "Software Engineer",
        team: "AI Foundational Context",
        imageYear: "2026A",
        duration: "March 2026 - November 2026",
        tasks: [
          "Built audit history trail and provenance for 13 individual context types, improving customer visibility and trust into what context was modified",
          "Launched the first version of Context Home, providing 13+ consumers with shared library components, deeplinks and permissions access. With over 3000 Daily active users managing context as captured on amplitude",
          "Migrated consumers of Data sources (custom agents, prospecting agent) to the context layer, used by 5 bedrock agents"
        ],
        tech: ["Amplitude", "React", "JavaScript"]
      },
      {
        type: "Full-time",
        location: "New York, US",
        role: "Software Engineer",
        team: "Knowledge Vault",
        imageYear: "2025B",
        duration: "October 2025 - March 2026",
        tasks: [
          "Reduced customer management time for adding articles to Knowledge vaults, by implementing a knowledge base sync feature that alows customers to add over 1000 articles in a custom agent's knowledge"
        ],
        tech: ["JavaScript", "Amplitude", "React"]
      }
    ]
  },
  {
    company: "Resilient Coders",
    experiences: [
      {
        type: "Full-time",
        location: "Boston MA",
        role: "AI Engineer",
        imageYear: "2025B",
        duration: "August 2025 - October 2025",
        tasks: [
          "Built an adaptive learning tutor built with Gemini AI that implements three proven learning alterables: Tutorial Instruction, Feedback-Corrective, and Reinforcement Learning, closing the gap of 1:1 tutoring for students"
        ],
        tech: ["Google Gemini", "React", "MongoDB"]
      },
      {
        type: "Full-time",
        location: "Boston MA",
        role: "Software Engineer",
        imageYear: "2025A",
        duration: "January 2025 - August 2025",
        tasks: [
          "Empowered users to manage shared expenses by creating PaySplit, a web application running on Express, MongoDB, and Gemini AI, reducing the average settlement time by 15% and minimizing calculation errors by 99%, by providing real-time updates through websockets, item selection, and custom payments for group expenses",
          "Generated $40,370 in contract revenue within one week from finalized client agreements, by effectively  collaborating with a team of 25 developers, to secure various client contracts",
          "Developed and deployed 13+ websites, applications, and software projects for clients, consistently exceeding client expectations for performance and usability, with 5 clients returning for new projects, through expertise in SEO, responsive design, and accessible coding practices across the entire software development life cycle"
        ],
        tech: ["React", "PostgreSQL", "Express"]
      }
    ]
  },
  {
    company: "IWanBuy",
    experiences: [
      {
        type: "Contract",
        location: "Remote",
        role: "Software Engineer",
        imageYear: "2024",
        duration: "June 2024 - August 2024",
        tasks: [
          "Added Alembic migration system to existing flask application, resolving database rewrites when models are changed.",
          "Created vendor interface to allow vendors to manage prices, orders, and inventory.",
          "Built components and pages for the frontend using React, to serve backend API resources to users.",
          "Developed models, database and RESTful API for IWanBuy web application with Flask, Sqlalchemy and MySQL."
        ],
        tech: ["Flask", "React", "MySQL"]
      }
    ]
  },
  {
    company: "GatherGo",
    experiences: [
      {
        type: "Contract",
        location: "Remote",
        role: "Software Engineer",
        team: "Backend",
        imageYear: "2024",
        duration: "January 2024 - April 2024",
        tasks: [
          "Designed infrastructure for models, established CRUD patterns and built API documentation.",
          "Wrote test suites for quality code coverage by writing over 30 requests in Postman.",
          "Applied 13 successful API deployments with only 3 rollbacks, giving an 81% deployment success rate."
        ],
        tech: ["Django", "MySQL", "Postman"]
      }
    ]
  },
  {
    company: "NUESA FUNAAB",
    experiences: [
      {
        type: "Volunteer",
        location: "Remote",
        role: "Software Engineer",
        imageYear: "2023",
        duration: "Aug 2023 - Apr 2024",
        tasks: [
          "Integrated Django-REST API with existing Next application resources, and built a full-stack student association app for use by over 1200 students.",
          "Performed code review and completely refactored over 8000 lines of code to conform to clean, readable, and DRY code.",
          "Implemented RESTful API to serve data of more than 700 books with over 2.7GB total file size through Google’s Drive API.",
          "Applied Drive API user authentication by using Google OAuth scopes to allow read and write access to the required books Drive folder.",
          "Created the backend Restful API for an Event Management web application using Flask.",
          "Developed authentication and Rest API views to support event management features.",
          "Wrote comprehensive documentation using flasgger and established community guidelines for contributors."
        ],
        tech: ["Next", "Django", "Drive"]
      }
    ]
  }
];

export default experiences;
