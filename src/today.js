import { addNewProject } from "./addremoveProjects";
import { tasks } from "./index";
import { displayTasksOnScreen } from "./updatingTasks";

const heading = document.querySelector('.rightpanelheading');

const taskcontainer = document.querySelector('.tasks');

let todayTasks = [];

export default function showTodayPage(tasks) {
    heading.innerHTML = "Your Today's Tasks";
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
        taskcontainer.innerHTML = "";
        const today = new Date();
        todayTasks = [];
        
        for(let task of tasks) {
            const taskdate = new Date(task.date);
            if(today.toDateString() == taskdate.toDateString()) {
                todayTasks.push(task);
            }
        }

        if(!todayTasks.length) {
            taskcontainer.innerHTML = "No tasks scheduled for today";
        }
        else {
            taskcontainer.innerHTML = "";
            for(let eachtask of todayTasks) {
                displayTasksOnScreen(eachtask);
            }
        }
    }

}