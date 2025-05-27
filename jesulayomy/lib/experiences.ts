const experiences = [
  {
    type: 'Full-time',
    location: 'Boston MA',
    role: 'Software Engineer',
    company: 'Resilient Coders',
    duration: 'January 2025 - Present',
    tasks: [
      'Empowered users to manage shared expenses by creating PaySplit, a web application running on Express, MongoDB, and Gemini AI, reducing the average settlement time by 15% and minimizing calculation errors by 99%, by providing real-time updates through websockets, item selection, and custom payments for group expenses',
      'Generated $40,370 in contract revenue within one week from finalized client agreements, by effectively  collaborating with a team of 25 developers, to secure various client contracts',
      'Developed and deployed 13+ websites, applications, and software projects for clients, consistently exceeding client expectations for performance and usability, with 5 clients returning for new projects, through expertise in SEO, responsive design, and accessible coding practices across the entire software development life cycle',
    ],
    tech: ['React', 'PostgreSQL', 'Express'],
  },
  {
    type: 'Contract',
    location: 'Remote',
    role: 'Software Engineer',
    company: 'IWanBuy',
    duration: 'June 2024 - August 2024',
    tasks: [
      'Added Alembic migration system to existing flask application, resolving database rewrites when models are changed.',
      'Created vendor interface to allow vendors to manage prices, orders, and inventory.',
      'Built components and pages for the frontend using React, to serve backend API resources to users.',
      'Developed models, database and RESTful API for IWanBuy web application with Flask, Sqlalchemy and MySQL.',
    ],
    tech: ['Flask', 'React', 'MySQL'],
  },
  {
    type: 'Contract',
    location: 'Remote',
    role: 'Software Engineer (Backend)',
    company: 'GatherGo',
    duration: 'January 2024 - April 2024',
    tasks: [
      'Designed infrastructure for models, established CRUD patterns and built API documentation.',
      'Wrote test suites for quality code coverage by writing over 30 requests in Postman.',
      'Applied 13 successful API deployments with only 3 rollbacks, giving an 81% deployment success rate.'
    ],
    tech: ['Django', 'MySQL', 'Postman']
  },
  {
    type: 'Volunteer',
    location: 'Remote',
    role: 'Sofftware Engineer',
    company: 'NUESA FUNAAB',
    duration: 'Aug 2023 - Apr 2024',
    tasks: [
      'Integrated Django-REST API with existing Next application resources, resulting in a full-stack application for use by over 1200 students.',
      'Performed code review and completely refactored over 8000 lines of code to conform to clean, readable, and DRY code.',
      'Implemented RESTful API to serve data of more than 700 books with over 2.7GB total file size through Google’s Drive API.',
      'Applied Drive API user authentication by using Google OAuth scopes to allow read and write access to the required books Drive folder.',
      'Created the backend Restful API for an Event Management web application using Flask.',
      'Developed authentication and Rest API views to support event management features.',
      'Wrote comprehensive documentation using flasgger and established community guidelines for contributors.'
    ],
    tech: ['Next', 'Django', 'Drive']
  },
];

export default experiences;
