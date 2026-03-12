import TaskEntity from "./entity/task_entity";
import TaskListModel from "./model/task_list_model";
import TaskModel from "./model/task_model";
import { Priority, Status } from "./enums/enum";
import uuid from 'react-native-uuid';

// Helper arrays to add variance
const taskTitles = [
  "Finish quarterly report", "Buy groceries for the week", "Schedule dentist appointment",
  "Call mom", "Reply to pending emails", "Pay electricity bill", "Fix the leaky faucet",
  "Buy a birthday gift for John", "Go for a 5k run", "Read 50 pages of the new book"
];

const taskDescriptions = [
  "Requires compiling data from all departments.", "Need to get milk, eggs, bread, and fruits.", 
  "Dr. Smith at downtown clinic.", "Just to check in and say hi.", 
  "Inbox is getting full, need to clean it out.", "Due by the end of the month.", 
  "Kitchen sink has been dripping since yesterday.", "He likes tech gadgets or a good book.", 
  "Training for the upcoming marathon.", "Continuing the fantasy novel series."
];

// Generate exactly 60 items with varied data mapping to TaskEntity
const generateFakeData = (): TaskEntity[] => {
    return Array.from({ length: 60 }, (_, i) => {
        // Pseudo-randomizing from the helper arrays based on index
        const titleIndex = i % taskTitles.length;
        const descIndex = (i * 2 + 1) % taskDescriptions.length;
        
        // Priority cycles: LOW, MEDIUM, HIGH, LOW, ...
        const priority = i % 3 === 0 ? Priority.LOW : (i % 3 === 1 ? Priority.MEDIUM : Priority.HIGH);
        
        // Status cycles: OPEN, COMPLETED, OPEN, ...
        const status = i % 2 === 0 ? Status.OPEN : Status.COMPLETED;
        
        // Due date varies from today to 29 days from now
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + (i % 30));

        return {
            id: uuid.v4().toString(),
            title: `${taskTitles[titleIndex]} - Part ${Math.floor(i / 10) + 1}`,
            description: `${taskDescriptions[descIndex]} (Task ID: ${i + 1})`,
            dueDate: dueDate,
            priority: priority,
            status: status,
        };
    });
};


const listTitles = [
    "Work Projects", "Personal Chores", "Fitness Goals", 
    "Learning & Development", "Financial Planning", "Home Renovation",
    "Travel Itinerary", "Hobby Ideas", "Family Events", "Daily Routine"
];

const listDescriptions = [
  "Requires compiling data from all departments.", "Need to get milk, eggs, bread, and fruits.", 
  "Dr. Smith at downtown clinic.", "Just to check in and say hi.", 
  "Inbox is getting full, need to clean it out.", "Due by the end of the month.", 
  "Kitchen sink has been dripping since yesterday.", "He likes tech gadgets or a good book.", 
  "Training for the upcoming marathon.", "Continuing the fantasy novel series."
];

const generateFakeTaskLists = (): TaskListModel[] => {
    return Array.from({ length: 60 }, (_, i) => {
        const titleIndex = i % listTitles.length;
        const taskCount = Math.floor(Math.random() * 10) + 1; // 1 to 10 tasks
        const progress = Math.floor(Math.random() * 100); // 0 to 100%
        
        // Generate some fake tasks for this list
        const tasks: TaskModel[] = Array.from({ length: Math.min(taskCount, 3) }, (_, j) => ({
            id: uuid.v4().toString(),
            title: `Subtask ${j + 1} for List ${i + 1}`,
            description: `Description for subtask ${j + 1}`,
            dueDate: new Date().toISOString(),
            priority: j % 2 === 0 ? "High" : "Medium",
            status: j % 2 === 0 ? "Open" : "Completed",
        }));

        return {
            id: uuid.v4().toString(),
            title: `${listTitles[titleIndex]} ${Math.floor(i / 10) + 1}`,
            description: listDescriptions[titleIndex],
            taskCount,
            progress,
            tasks,
        };
    });
};

export const fakeTaskLists: TaskListModel[] = generateFakeTaskLists();
export const fakeTasks: TaskEntity[] = generateFakeData();
