function updateWidth() {
    var container = document.querySelector('#LOAD_SPACE');
    var container_all = document.querySelector('#CONTAINER');
    var widthDisplay = document.getElementById('WITH_DISPLAY');
    var width = container.offsetWidth;
    var width_all = container_all.offsetWidth;
    widthDisplay.textContent = 'Current Resolutions: ' + width + 'px' + ' All: '+ width_all + 'px';
}

window.addEventListener('resize', updateWidth);
// Инициализируем отображение ширины при загрузке страницы
// document.addEventListener('DOMContentLoaded', updateWidth);

function loadExample(event) {

    const loadProject = document.getElementById('RPOJECT-LOAD');
    

    const projectId = event.target.id;
    const activeButton = document.getElementById(projectId);

    document.querySelectorAll('.project-nav .button-project-nav').forEach(btn => btn.classList.remove('active-project'));
    activeButton.classList.add('active-project');

    switch (projectId) {
        case 'EX_1':    
            updateWidth();
            (loadProject.offsetWidth <= 1000)?loadProject.innerHTML = "Display small":loadProject.innerHTML = layoutPage1;
            break;
        case 'EX_2':
            (loadProject.offsetWidth <= 1500)?loadProject.innerHTML = "Display small":loadProject.innerHTML = layoutPage2;
            break;
        case 'EX_3':
            loadProject.innerHTML = layoutPage3;
            break;
        default:
          alert('ERROR');
    }
}

const layoutPage1 = `
<iframe src="https://example-1-eta.vercel.app/"></iframe>
`
const layoutPage2 = `
<iframe src="https://example-2-three.vercel.app/"></iframe>
`
const layoutPage3 = `
<iframe src="https://example-3.vercel.app/"></iframe>
`