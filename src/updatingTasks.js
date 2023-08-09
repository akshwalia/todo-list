import { tasks } from "./index";
import displayStartProjectPage from "./projectPage";

import starFull from './images/star.svg';
import starOutline from './images/star-outline.svg'

let i = 1;

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
    label.setAttribute('for', `${i}`);
    label.innerHTML = `${task.name}`;
    let important = document.createElement('img');
    
    if (task.important === 'yes') {
        important.src = starFull;
    }
    else
        important.src = starOutline;

    important.classList.add('important');
    const date = document.createElement('div');
    date.innerHTML = `${task.date}` || '--';
    date.classList.add('date');
    i++;

    taskrow.appendChild(checkbox);
    taskrow.appendChild(label);
    taskrow.appendChild(important);
    taskrow.appendChild(date);

    taskcontainer.appendChild(taskrow);

    important.addEventListener('click', () => {
        if (task.important === 'no') {
            important.src = starFull;
            task.important = 'yes';
        }
        else {
            important.src = starOutline;
            task.important = 'no';
        }
    });

    if(task.completed == 'yes') {
        label.style.textDecoration = "line-through";
        taskrow.style.backgroundColor = "#d4d4d4";
        checkbox.checked = true;
    }
    
    

    checkbox.addEventListener('click', () => {
        if (checkbox.checked == true) {
            label.style.textDecoration = "line-through";
            taskrow.style.backgroundColor = "#d4d4d4";
            task.completed = 'yes';
        }
        else {
            label.style.textDecoration = "none";
            taskrow.style.backgroundColor = "rgb(222, 222, 252)";
            task.completed = 'no';
        }
    });
}

export default function updatePanel() {
    const menuoptions = document.querySelectorAll('.options');

    const currentlySelectedProject = document.querySelector('.active');  //extracts the name of the currently selected project

    let tasksInCurrentlySelectedProject = [];

    for (let task of tasks) {
        if (currentlySelectedProject.innerHTML == task.projectname) {
            tasksInCurrentlySelectedProject.push(task);
        }
    }

    if (!tasksInCurrentlySelectedProject.length) {
        taskcontainer.innerHTML = "";
        displayStartProjectPage(currentlySelectedProject.innerHTML);
    }

    else {
        heading.innerHTML = `${currentlySelectedProject.innerHTML}`;
        taskcontainer.innerHTML = "";
        for (let eachtask of tasksInCurrentlySelectedProject) {
            displayTasksOnScreen(eachtask);
        }
    }
}

export { displayTasksOnScreen };