# Employee Management System (EMS)

A role-based Employee Management System built with **React** and
**Vite**. The application provides separate Admin and Employee
dashboards for managing employees and tracking assigned tasks. It uses
the browser's `localStorage` for authentication-related data and
application data persistence.

## Features

### Admin

-   Log in through the authentication screen.
-   Create employee accounts.
-   Create and assign tasks to employees.
-   Add task details such as title, description, category, and date.
-   View employee task statistics, including new, active, completed, and
    failed tasks.
-   Monitor task progress across employees.

### Employee

-   Log in to the employee dashboard.
-   View assigned tasks.
-   Accept new tasks.
-   Mark tasks as completed or failed.
-   View task information, including its category, status, and assigned
    date.

### Application

-   Separate Admin and Employee dashboards.
-   Shared application state managed with React Context.
-   Browser-based data persistence using `localStorage`.

## Tech Stack

-   **React 19** -- UI development
-   **JavaScript** -- Application logic
-   **Tailwind CSS 4** -- Styling
-   **Vite 8** -- Development server and build tool
-   **React Context API** -- Shared state management
-   **Browser localStorage** -- Client-side data persistence

## Project Structure

``` text
EMS/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AdminDashboardElements/
│   │   │   ├── AssignedTask.jsx
│   │   │   └── CreateTask.jsx
│   │   ├── Auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashBoard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── EmpDashBoardElements/
│   │   │   ├── Header.jsx
│   │   │   ├── Tasks.jsx
│   │   │   └── TaskStatus.jsx
│   │   └── TaskList/
│   │       ├── AcceptTask.jsx
│   │       ├── CompleteTask.jsx
│   │       ├── FailedTask.jsx
│   │       └── NewTask.jsx
│   ├── context/
│   │   └── Context.jsx
│   ├── utils/
│   │   └── LocalStorage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) installed on your machine
-   npm (included with Node.js)
-   Git (optional, for cloning the repository)

### Installation

1.  Clone the repository:

    ``` bash
    git clone https://github.com/Ritik-9/EMS.git
    ```

2.  Move into the project directory:

    ``` bash
    cd EMS
    ```

3.  Install dependencies:

    ``` bash
    npm install
    ```

4.  Start the development server:

    ``` bash
    npm run dev
    ```

5.  Open the local URL printed in your terminal (Vite commonly uses
    `http://localhost:5173`).

## Available Scripts

  Command             Description
  ------------------- ---------------------------------------
  `npm run dev`       Starts the Vite development server
  `npm run build`     Creates a production build
  `npm run preview`   Previews the production build locally
  `npm run lint`      Runs ESLint

## Data Storage and Authentication

This project uses browser `localStorage` for client-side data
persistence. Authentication and application data are handled on the
frontend; the project does not currently use a backend server or a
remote database.

**Note:** `localStorage`-based authentication is suitable for a
learning/demo project, but it is not secure authentication for
production use. A production deployment should use a backend service,
securely managed credentials, and server-side authorization.

## Future Improvements

-   Integrate a backend API and database.
-   Implement secure server-side authentication and role-based
    authorization.
-   Add task deadlines, notifications, and additional
    employee-management features.
-   Add automated tests.

## Author

**Ritik Paras**

-   GitHub: [Ritik-9](https://github.com/Ritik-9)
-   Repository: [Employee Management
    System](https://github.com/Ritik-9/EMS)
