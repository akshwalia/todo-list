import { tasks } from "./index";

export default function updatePanel(projectname) {
    const menuoptions = document.querySelectorAll('.options');

    const currentlySelectedProject = document.querySelector('.active');

    for(let task of tasks) {
        if(currentlySelectedProject.innerHTML == task.projectname) {
            console.log(task);
        }
    }
}