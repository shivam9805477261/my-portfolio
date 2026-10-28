export const profile = {
  name: "Shivam Choudhary",
  role: "Full Stack Developer",
  tagline: "I build web apps that work from the database to the button you click.",
  email: "shivam9805477261@gmail.com",
  github: "https://github.com/shivam9805477261",
  linkedin: "https://www.linkedin.com/in/shivam-choudhary-05bb26307",
  resume: "/Shivam_Choudhary_Resume.pdf",
  photo: "/profile.jpg",
};

export const skills = [
  { group: "Frontend", items: ["HTML", "CSS", "React.js", "JavaScript", "Bootstrap"] },
  { group: "Backend", items: ["PHP", "Laravel", "Node.js"] },
  { group: "Database", items: ["MySQL"] },
  { group: "CMS", items: ["WordPress"] },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Development of Logics",
    period: "6 months",
    points: [
      "Built features across the frontend and backend of real web apps.",
      "Worked with Laravel, PHP and MySQL.",
      "Created responsive React.js pages.",
    ],
  },
];

export const projects = [
  {
    title: "Real-Time Chat App",
    summary:
      "A full stack chat app with live messaging, private and group chats, built with a Laravel API, a Node.js Socket.io server and a React frontend.",
    features: [
      "Secure register and login with Laravel Sanctum",
      "Real-time 1-to-1 and group chat using Socket.io rooms",
      "Messages saved in MySQL, so history stays after reload",
      "Online status, typing indicator and unread message badges",
      "Delete message and delete conversation",
      "Profile photo upload and dark-theme UI",
    ],
    tech: ["React.js", "Laravel", "Node.js", "Socket.io", "MySQL"],
    code: "https://github.com/shivam9805477261/Chat-app.git",
    live: "",
  },
  {
    title: "Employee Task Management System",
    summary: "A web app where managers assign tasks to employees and track progress.",
    features: [
      "Admin and employee login",
      "Create, assign and update tasks",
      "Dashboard with task status",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    code: "https://github.com/shivam9805477261/Task_Management",
    live: "",
  },
];

export const services = [
  { title: "Full web apps", text: "Laravel or React apps with login, dashboards and databases." },
  { title: "Business websites", text: "Fast, mobile-friendly sites, including WordPress." },
  { title: "Fixes and upgrades", text: "Bugs, slow pages, or new features on your existing site." },
];