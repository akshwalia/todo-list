import { tasks } from "./index";
import { addTaskObject } from "./taskManipulation";

const container = document.querySelector('.rightpanel');
const heading = document.querySelector('.rightpanelheading');

const taskcontainer = document.querySelector('.tasks');
taskcontainer.innerHTML = "";

const addTask = document.createElement('button');
addTask.innerHTML = "Add Task";
let first = true;
const popup = document.querySelector('.popupcontainer');

let present = true;


function addTaskPopup(name) {
    present = true;

    popup.classList.remove('hidden');

    const formbox = document.querySelector('.formbox');

    const buttons = document.querySelector('.buttons');

    buttons.innerHTML = "";

    const add = document.createElement('button');
    const cancel = document.createElement('button');
    add.innerHTML = "Add";
    cancel.innerHTML = "Cancel";

    cancel.setAttribute('type', 'button');
    add.setAttribute('type', 'button');

    buttons.appendChild(add);
    buttons.appendChild(cancel);

    //sends for object creation and addition
    add.addEventListener('click', () => {
        addTaskObject(name);
        popup.classList.add('hidden');
        present = false;
    });

    //cancel button removes the overlay
    cancel.addEventListener('click', (e) => {
        popup.classList.add('hidden');
    });

    //links enter  key to add button
    document.addEventListener('keydown', (e) => {
        if (present) {
            if (e.key === "Enter") {
                add.click();
            }
        }
    });

    //prevents bubbling
    formbox.addEventListener('click', (e) => {
        e.stopPropagation();
    });
     //overlay closes when clicked on background
    popup.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.classList.add('hidden');
    });
}

export default function displayProjectPage(name) {
    heading.innerHTML = `${name}`;
    taskcontainer.innerHTML = "yayyy you created project";

    if (first) {
        first = false;
        container.appendChild(addTask);
    }

    addTask.addEventListener('click', () => {
        addTaskPopup(name);
    });

    if(tasks) {
        for(let task of tasks) {
            console.log(task);
        }
    }
}