import showTodayPage from "./today";
import { removeSelectedClass, addNewProject} from "./addremoveProjects";
import showWeekPage from "./thisweek";
import showImportantPage from "./important";
import showCompletedPage from "./completed";

const today = document.getElementById('today');
const thisweek = document.getElementById('thisweek');
const important = document.getElementById('importantmenu');
const completed = document.getElementById('completed');
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


important.addEventListener('click', () => {
    removeSelectedClass();
    important.classList.add('selected');
    showImportantPage(tasks);
})

completed.addEventListener('click', () => {
    removeSelectedClass();
    completed.classList.add('selected');
    showCompletedPage(tasks);
});

addproject.addEventListener('click', addNewProject);

export {colors,tasks};