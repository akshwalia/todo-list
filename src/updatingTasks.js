import { tasks } from "./index";
import displayStartProjectPage from "./projectPage";

let i=1;

const taskcontainer = document.querySelector('.tasks');
const heading = document.querySelector('.rightpanelheading');

function displayTasksOnScreen(task) {
    const taskrow = document.createElement('div');
    taskrow.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = `${i}`;
    checkbox.classList.add('checkbox');
    const label = document.createElement('label');
    label.setAttribute('for',`${i}`);
    label.innerHTML = `${task.name}`;
    const priority = document.createElement('div');
    priority.innerHTML = `${task.priority}`;
    priority.classList.add('priority');
    const date = document.createElement('div');
    date.innerHTML = `${task.date}` || '--';
    date.classList.add('date');
    i++;

    taskrow.appendChild(checkbox);
    taskrow.appendChild(label);
    taskrow.appendChild(priority);
    taskrow.appendChild(date);

    taskcontainer.appendChild(taskrow);
}

export default function updatePanel() {
    const menuoptions = document.querySelectorAll('.options');

    const currentlySelectedProject = document.querySelector('.active');  //extracts the name of the currently selected project

    let tasksInCurrentlySelectedProject = [];

    for(let task of tasks) {
        if(currentlySelectedProject.innerHTML == task.projectname) {
            tasksInCurrentlySelectedProject.push(task);
        }
    }

    if(!tasksInCurrentlySelectedProject.length) {
        taskcontainer.innerHTML = "";
        displayStartProjectPage(currentlySelectedProject.innerHTML);
    }
        
    else {
        heading.innerHTML = `${currentlySelectedProject.innerHTML}`;
        taskcontainer.innerHTML = "";
        for(let eachtask of tasksInCurrentlySelectedProject) {
            displayTasksOnScreen(eachtask);
        }
    }
}

export {displayTasksOnScreen};