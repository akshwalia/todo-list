import { tasks } from "./index";
function createTaskObject(name, projectname, priority, date, completed) {
    return { name, projectname, priority, date, completed };
}

function addTaskObject(projectname) {
    const title = document.getElementById('title');
    const priority = document.getElementById('priority');
    const date = document.getElementById('date');

    console.log(title.value + " " + priority.value + " " + date.value);

    const newtask = new createTaskObject(title.value,projectname,priority.value,date.value,'no');

    console.log(newtask);

    tasks.push(newtask);
    
    title.value="";
    priority.value="low";
    date.value="";
}

export { addTaskObject };