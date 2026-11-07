
const admin= [{
    "id": 1,
    "email": "admin@example.com",
    "firstName": "Admin",
    "password": "123"
}]

const employees = [
  {
    id: 101,
    firstName: "John",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1, 
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create the landing page UI for the website.",
        taskDate: "2026-06-26",
        category: "Design"
      },
      {
        active: false,
        newTask: true,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve responsive issues in the navigation bar.",
        taskDate: "2026-06-20",
        category: "Frontend"
      }
    ]
  },
  {
    id: 102,
    firstName: "Emma",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 0,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Login API",
        taskDescription: "Implement authentication endpoints.",
        taskDate: "2026-06-27",
        category: "Backend"
      }
    ]
  },
  {
    id: 103,
    firstName: "Michael",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 0,
      failed: 1
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Database Migration",
        taskDescription: "Migrate legacy data to the new schema.",
        taskDate: "2026-06-22",
        category: "Database"
      }
    ]
  },
  {
    id: 104,
    firstName: "Sophia",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add Jest tests for user services.",
        taskDate: "2026-06-28",
        category: "Testing"
      }
    ]
  },
  {
    id: 105,
    firstName: "David",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 0,
      newTask: 0,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy App",
        taskDescription: "Deploy the latest version to production.",
        taskDate: "2026-06-21",
        category: "DevOps"
      }
    ]
  }
];
export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin)) 
}
export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return {employees,admin}
 }