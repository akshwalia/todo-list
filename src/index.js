import showTodayPage from "./today";
import { removeSelectedClass, addNewProject} from "./addremoveProjects";
import showWeekPage from "./thisweek";

const today = document.getElementById('today');
const thisweek = document.getElementById('thisweek');
const stickywall = document.getElementById('stickywall');
const addproject = document.querySelector('.addproject');


const colors = ['#ffaeae', '#ffee93', '#ffc09f', '#a39fe1', '#fcf5c7', '#a0ced9', '#adf7b6'];
let tasks = [];

showTodayPage(tasks);

today.addEventListener('click', () => {
    removeSelectedClass();
    today.classList.add('selected');
    showTodayPage(tasks);
});

thisweek.addEventListener('click', () => {
    removeSelectedClass();
    thisweek.classList.add('selected');
    showWeekPage(tasks);
});

stickywall.addEventListener('click', () => {
    removeSelectedClass();
    stickywall.classList.add('selected');
});


addproject.addEventListener('click', addNewProject);

export {colors,tasks};