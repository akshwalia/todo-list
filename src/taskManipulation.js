import { tasks } from "./index";
import updatePanel from "./updatingTasks";


function createTaskObject(name, projectname, priority, date, completed) {
    return { name, projectname, priority, date, completed };
}

function addTaskObject() {
    const currentlySelectedProject = document.querySelector('.active');

    const title = document.getElementById('title');
    const priority = document.getElementById('priority');
    const date = document.getElementById('date');

    const newtask = new createTaskObject(title.value,currentlySelectedProject.innerHTML,priority.value,date.value,'no');

    tasks.push(newtask);

    title.value="";
    priority.value="low";
    date.value="";
}

export { addTaskObject };