import { colors, tasks } from "./index";
import displayStartProjectPage from "./projectPage";
import updatePanel from "./updatingTasks";

let i=0;

let options = document.querySelectorAll('.option');

function removeSelectedClass() {
    options.forEach(opt => {
        opt.classList.remove('selected');
    });
}

function removeActiveClass() {
    document.querySelector('.active').classList.remove('active');
}

const projectContainer = document.querySelector('.projectcontainer');

let notPresent = true;
let first=true;

function addNewProject() {
    if (notPresent) {
        const inputbox = document.createElement('input')
        inputbox.setAttribute('type', 'text');
        inputbox.setAttribute('id', 'inputbox')
        inputbox.style.margin = "8px 12px";

        const projecticon = document.createElement('projecticon');
        projecticon.classList.add('projecticon');
        projecticon.style.backgroundColor = `${colors[i]}`;
        i++;
        if(i==6)
            i=0;

        const projectname = document.createElement('div');

        const option = document.createElement('div');
        option.classList.add('option');
        option.classList.add('projectoption');


        projectContainer.appendChild(inputbox);

        inputbox.focus();

        notPresent = false;

        let done = false;

        document.addEventListener('keydown', (e) => {
            if (e.key == "Enter" && inputbox.value !== "" && !done) {
                projectname.innerHTML = `${inputbox.value}`;
                projectContainer.removeChild(inputbox);
                notPresent = true;

                option.appendChild(projecticon);
                option.appendChild(projectname);

                projectContainer.appendChild(option);
                

                options = document.querySelectorAll('.option');

                removeSelectedClass();
                if(!first) {
                    removeActiveClass();
                }
                option.classList.add('selected');
                projectname.classList.add('active');
                
                first=false;
                displayStartProjectPage(inputbox.value);
                
                done =true;

                document.removeEventListener('keydown', () => {});
            }
        });

        option.addEventListener('click', () => {
            removeSelectedClass();
            removeActiveClass();
            option.classList.add('selected');
            projectname.classList.add('active');
            
            if(!tasks.length)
                displayStartProjectPage(document.querySelector('.active').innerHTML);
            else 
                updatePanel();
        })
    }
    else {
        projectContainer.removeChild(document.getElementById('inputbox'));
        notPresent=true;
    }
}

export {removeSelectedClass,addNewProject};