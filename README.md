# GitHub Issue Viewer Web Application

This web application allows you to view GitHub issues for a given repository.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- Git: [Download and Install Git](https://git-scm.com/)

## Getting Started

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ``````

2. Navigate to the project directory:
   ```bash
   cd github-issue-fetcher
   ``````

3. Install the project dependencies using npm:
   ```bash
   npm install
   ``````

##  Running the Application

To start the Express.js server and run the application, execute the following command
```bash
npm start
```

The application will be accessible at http://localhost:3000/issues/:owner/:repo in your web browser.Enter the GitHub repository owner and repo to view the issues.
For example: http://localhost:3000/issues/prisma/prisma


## Limitation
1. Pagination is not implemented
2. Authentication and Authorization is not implemented






