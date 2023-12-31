import { tasks } from "./index";
import { addTaskObject } from "./taskManipulation";
import updatePanel from "./updatingTasks";

const container = document.querySelector('.rightpanel');
const heading = document.querySelector('.rightpanelheading');
const addTaskContainer = document.querySelector('.addtaskcontainer');

const taskcontainer = document.querySelector('.tasks');
taskcontainer.innerHTML = "";

const addTask = document.createElement('div');
addTask.classList.add('addtask');
addTask.innerHTML = "+";
let first = true;
const popup = document.querySelector('.popupcontainer');

let present = true;


function addTaskPopup() {
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
        addTaskObject();
        popup.classList.add('hidden');
        present = false;
        updatePanel();
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

function displayAddTask () {
    addTaskContainer.innerHTML = "";
    addTaskContainer.appendChild(addTask);
}

export default function displayStartProjectPage(name) {
    heading.innerHTML = `${name}`;
    taskcontainer.innerHTML = "";

    displayAddTask();

    addTask.addEventListener('click', () => {
        addTaskPopup();
    });

}

export { addTask,displayAddTask };