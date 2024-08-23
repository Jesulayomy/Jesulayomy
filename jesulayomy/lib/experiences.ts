const experiences = [
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
    tech: ['Flask', 'React', 'MySQL', 'Postman'],
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
    tech: ['Python', 'Django', 'MySQL', 'Postman']
  },
  {
    type: 'Volunteer',
    location: 'Remote',
    role: 'Full-Stack Developer',
    company: 'NUESA FUNAAB',
    duration: 'Jan 2024 - Apr 2024',
    tasks: [
      'Integrated Django-REST API with existing Next application resources, resulting in a full-stack application for use by over 1200 students.',
      'Performed code review and completely refactored over 8000 lines of code to conform to clean, readable, and DRY code.'
    ],
    tech: ['Next', 'Django']
  },
  {
    type: 'Volunteer',
    location: 'Remote, Abeokuta',
    role: 'Back-end Developer - Demetrius',
    company: 'NUESA FUNAAB',
    duration: 'Oct 2023 - Jan 2024',
    tasks: [
      'Implemented RESTful API to serve data of more than 700 books with over 2.7GB total file size through Google’s Drive API.',
      'Applied Drive API user authentication by using Google OAuth scopes to allow read and write access to the required books Drive folder.'
    ],
    tech: ['Django', 'MySQL', 'Drive']
  },
  {
    type: 'Volunteer',
    location: 'Hybrid, Abeokuta',
    role: 'Back-end Developer - Let\'s Attend Backend',
    company: 'NUESA FUNAAB',
    duration: 'Aug 2023 - Nov 2023',
    tasks: [
      'Created the backend Restful API for an Event Management web application using Flask.',
      'Developed authentication and Rest API views to support event management features.',
      'Wrote comprehensive documentation using flasgger and established community guidelines for contributors.'
    ],
    tech: ['Flask', 'swagger']
  },
];

export default experiences;
