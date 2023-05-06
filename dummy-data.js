const DUMMY_TASKS = [
  {
    id: "t1",
    title: "create dashboard",
    description:
      "use tailwind css to create a table for each date there is a task.",
    completionDate: "05/10/2024",
    difficulty: 1,
  },
  {
    id: "t2",
    title: "make database schema",
    description: "use mongodb to create a schema for the database.",
    completionDate: "05/22/2024",
    difficulty: 13,
  },
  {
    id: "t3",
    title: "make components for dashboard",
    description: "use tailwind css to create buttons, navbar, etc.",
    completionDate: "05/10/2024",
    difficulty: 3,
  },
];

export function getAllTasks() {
  return DUMMY_TASKS;
}
