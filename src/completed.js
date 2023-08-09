import { addNewProject } from "./addremoveProjects";
import { tasks } from "./index";
import { addTask } from "./projectPage";
import { displayTasksOnScreen } from "./updatingTasks";


const heading = document.querySelector('.rightpanelheading');

const taskcontainer = document.querySelector('.tasks');

const addTaskContainer = document.querySelector('.addtaskcontainer');

let completedTasks = [];

export default function showCompletedPage(tasks) {
    heading.innerHTML = "Completed Tasks";
    taskcontainer.innerHTML = "";
    if(!tasks.length) {
        taskcontainer.innerHTML = "No tasks completed";
    }
    else {
        addTaskContainer.innerHTML = "";

        completedTasks = [];
        taskcontainer.innerHTML = "";

        for(let task of tasks) {
            if(task.completed == 'yes') {
                completedTasks.push(task);
            }
        }

        if(!completedTasks.length) {
            taskcontainer.innerHTML = "No tasks completed";
        }
        else {
            taskcontainer.innerHTML = "";
            for(let eachtask of completedTasks) {
                displayTasksOnScreen(eachtask);
            }
        }
    }
}