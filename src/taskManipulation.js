import { tasks } from "./index";
import updatePanel from "./updatingTasks";


function createTaskObject(name, projectname, important, date, completed) {
    return { name, projectname, important, date, completed };
}

function addTaskObject() {
    const currentlySelectedProject = document.querySelector('.active');

    const title = document.getElementById('title');
    const important = document.getElementById('important');
    const date = document.getElementById('date');

    const newtask = new createTaskObject(title.value,currentlySelectedProject.innerHTML,important.value,date.value,'no');

    tasks.push(newtask);

    title.value="";
    important.value="no";
    date.value="";
}

export { addTaskObject };