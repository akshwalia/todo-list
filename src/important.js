import { addNewProject } from "./addremoveProjects";
import { tasks } from "./index";
import { displayTasksOnScreen } from "./updatingTasks";

const heading = document.querySelector('.rightpanelheading');

const taskcontainer = document.querySelector('.tasks');

let importantTasks = [];

export default function showImportantPage(tasks) {
    heading.innerHTML = "Important Tasks";
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
        importantTasks = [];
        
        for(let task of tasks) {
            const taskdate = new Date(task.date);
            if(task.important == 'yes') {
                importantTasks.push(task);
            }
        }

        if(!importantTasks.length) {
            taskcontainer.innerHTML = "No tasks marked as important";
        }
        else {
            taskcontainer.innerHTML = "";
            for(let eachtask of importantTasks) {
                displayTasksOnScreen(eachtask);
            }
        }
    }

}