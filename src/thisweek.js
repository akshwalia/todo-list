import { addNewProject } from "./addremoveProjects";
import { tasks } from "./index";
import { displayTasksOnScreen } from "./updatingTasks";


const heading = document.querySelector('.rightpanelheading');

const taskcontainer = document.querySelector('.tasks');

let weekTasks = [];

export default function showWeekPage(tasks) {
    heading.innerHTML = "Tasks for this week";
    taskcontainer.innerHTML = "";
    if(!tasks.length) {
        taskcontainer.innerHTML = "No Task here, add a project and add tasks to get started"
        const addproject = document.createElement('div');
        addproject.innerHTML = "+ Add Project";
        addproject.classList.add('addprojectfresh');
        taskcontainer.appendChild(addproject);

        addproject.addEventListener('click', addNewProject);
    }
    else {
        weekTasks = [];
        taskcontainer.innerHTML = "";
        const today = new Date();
        const day = today.getDay();
        
        const start = today.getTime() - day*86400000;
        const end = today.getTime() + (7-day)*86400000;

        for(let task of tasks) {
            const taskdate = new Date(task.date);
            if(taskdate.getTime() > start && taskdate.getTime() < end) {
                weekTasks.push(task);
            }
        }

        if(!weekTasks.length) {
            taskcontainer.innerHTML = "No tasks scheduled for today";
        }
        else {
            taskcontainer.innerHTML = "";
            for(let eachtask of weekTasks) {
                displayTasksOnScreen(eachtask);
            }
        }
    }
}