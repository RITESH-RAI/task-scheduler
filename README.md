
In this Task Scheduler project, we created a professional-looking web application that helps users schedule tasks based on their priority and deadline. Here’s a breakdown of what we implemented:

Features:
Task Management with Priority Queue:

We used a Priority Queue data structure to manage tasks. Each task has a priority (Top, Medium, Low) and a deadline.
Tasks are sorted based on their priority and deadline, ensuring the most urgent tasks are addressed first.
The priority is ranked from 1 (Top Priority) to 3 (Low Priority), and tasks are sorted in this order, with earlier deadlines being handled first.
Task Details Input:

Users can input the task name, priority, and set a deadline with a time using a 12-hour AM/PM format.
We convert the time to a 24-hour format to ensure accurate scheduling for comparison and task sorting.
Visual Display of Tasks:

The tasks are displayed in a list, where each task shows the name, priority, and deadline.
The task list dynamically updates as new tasks are added, displaying tasks sorted by priority and deadline.
Notification System:

A notification system is integrated to inform the user when a task is added successfully.
It includes both a visual notification (a message displayed at the top) and an audio notification (a sound played).
This gives real-time feedback, making the app more interactive and user-friendly.
Dark and Light Mode:

We implemented a toggle button to switch between dark mode and light mode.
This allows users to switch the color theme of the application for better visibility and a modern touch.
The styles change dynamically, adjusting the background, text, and button colors.
Responsive Design:

The application is designed to be responsive and looks great across different devices and screen sizes.
It’s styled with CSS to ensure clean, professional, and modern aesthetics.
Audio Feedback:

A sound notification is triggered when certain events (like adding a task) occur. This gives the user an additional layer of interactivity, similar to a mobile notification sound, improving user engagement.
Technologies Used:
HTML: To build the structure and layout of the task scheduler.
CSS: For designing and styling the user interface, including light/dark mode functionality.
JavaScript: To handle the logic of the application, such as adding tasks, managing the priority queue, displaying notifications, and toggling between dark and light mode
