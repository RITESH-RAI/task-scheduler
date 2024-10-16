class Task {
    constructor(name, priority, deadline, completed = false) {
        this.name = name;
        this.priority = priority;
        this.deadline = deadline;
        this.completed = completed;
    }
}

// Custom comparator for PriorityQueue
function compareTasks(a, b) {
    if (a.priority !== b.priority) {
        return a.priority - b.priority; // Higher priority first (smaller number is higher priority)
    }
    return a.deadline - b.deadline; // If same priority, handle earlier deadline first
}

class PriorityQueue {
    constructor(comparator) {
        this.queue = [];
        this.comparator = comparator;
    }

    enqueue(task) {
        this.queue.push(task);
        this.queue.sort(this.comparator); // Sorting the queue by priority and deadline
    }

    dequeue() {
        return this.queue.shift(); // Remove and return the first task (highest priority)
    }

    peek() {
        return this.queue[0]; // Look at the first task (highest priority) without removing it
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    display() {
        return this.queue;
    }
}

let taskQueue = new PriorityQueue(compareTasks);

// Function to add task to the priority queue
function addTask() {
    const taskName = document.getElementById('taskName').value;
    const taskPriority = document.getElementById('taskPriority').value;
    const taskDeadline = document.getElementById('taskDeadline').value;
    const taskHour = document.getElementById('taskHour').value;
    const taskMinute = document.getElementById('taskMinute').value;
    const taskPeriod = document.getElementById('taskPeriod').value;

    if (taskName === '' || taskDeadline === '') {
        showNotification("Please enter task name and deadline.");
        return;
    }

    // Convert hour to 24-hour format
    let hour = parseInt(taskHour);
    if (taskPeriod === 'PM' && hour < 12) hour += 12;
    if (taskPeriod === 'AM' && hour === 12) hour = 0;  // Midnight case

    const taskTime = `${taskDeadline}T${String(hour).padStart(2, '0')}:${taskMinute.padStart(2, '0')}:00`;
    const taskDeadlineDate = new Date(taskTime);

    // Map the priority to a number (Top = 1, Medium = 2, Low = 3)
    let priorityValue;
    switch (taskPriority) {
        case 'Top Priority':
            priorityValue = 1;
            break;
        case 'Medium Priority':
            priorityValue = 2;
            break;
        case 'Low Priority':
            priorityValue = 3;
            break;
    }

    const task = new Task(taskName, priorityValue, taskDeadlineDate);
    taskQueue.enqueue(task); // Add the task to the priority queue
    displayTasks();
    clearInputs();
    showNotification("Task added successfully!");
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear the task list

    const tasks = taskQueue.display();
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `<strong>${task.name}</strong> - ${taskPriorityString(task.priority)} - Due: ${task.deadline.toLocaleString()}`;
        taskList.appendChild(taskItem);
    });
}

// Convert priority number back to string for display
function taskPriorityString(priorityValue) {
    switch (priorityValue) {
        case 1:
            return "Top Priority";
        case 2:
            return "Medium Priority";
        case 3:
            return "Low Priority";
    }
}

// Notification system
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationSound = document.getElementById('notificationSound');

    notification.style.display = 'block';
    notification.innerHTML = message;
    notificationSound.play(); // Play sound

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Clear input fields
function clearInputs() {
    document.getElementById('taskName').value = '';
    document.getElementById('taskPriority').value = 'Top Priority';
    document.getElementById('taskDeadline').value = '';
    document.getElementById('taskHour').value = '';
    document.getElementById('taskMinute').value = '';
    document.getElementById('taskPeriod').value = 'AM';
}

// Periodically check for upcoming tasks and notify
setInterval(() => {
    const now = new Date();
    const tasks = taskQueue.display();
    tasks.forEach((task) => {
        if (task.deadline <= now && !task.completed) {
            showNotification(`Reminder: Your task "${task.name}" is due now!`);
            task.completed = true;
        }
    });
}, 60000); // Check every minute

// Toggle between light and dark mode
function toggleMode() {
    const body = document.getElementById('body');
    body.classList.toggle('dark-mode');

    // Store theme preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('themeMode', 'dark');
    } else {
        localStorage.setItem('themeMode', 'light');
    }
}

