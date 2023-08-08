import { addNewProject } from "./addremoveProjects";

const heading = document.querySelector('.rightpanelheading');

const taskcontainer = document.querySelector('.tasks');

export default function showTodayPage(tasks) {
    heading.innerHTML = "Your Today's Tasks";
    if(!tasks.length) {
        taskcontainer.innerHTML = "No Task here, add a project and add tasks to get started"
        const addproject = document.createElement('div');
        addproject.innerHTML = "+ Add Project";
        addproject.classList.add('addprojectfresh');
        taskcontainer.appendChild(addproject);

        addproject.addEventListener('click', addNewProject);
    }
}