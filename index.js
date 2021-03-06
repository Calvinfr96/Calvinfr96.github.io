const projects = [
    { name: 'Project 1', description: 'Build and host a dynamic personal website using JavaScript events and DOM manipulation' },
    { name: 'Project 2', description: 'Build a webpage that is dynamically populated with remote content from an API' },
    { name: 'Project 3', description: 'Build a front-end application with content dynamically populated from an API using React' },
    { name: 'Project 4', description: 'Design and create a Command Line Interface (CLI) application' },
    { name: 'Project 5', description: 'Build a full-stack application that persists data through an API' },
    { name: 'Project 6', description: 'Design and create a full-stack application using React and Rails API' }
];

function projectYellow(project) {
    project.style.backgroundColor = 'yellow';
}
function projectWhite(project) {
    project.style.backgroundColor = 'white';
}
function createCardFromProject(project) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML =
        `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    `;
    card.addEventListener('mouseover', function () { projectYellow(card) });
    card.addEventListener('mouseout', function () { projectWhite(card) });
    return card
};

const projectsContainer = document.getElementsByClassName('projects-container')[0];
for (i = 0; i < projects.length; i++) {
    card = createCardFromProject(projects[i]);
    projectsContainer.appendChild(card);
}