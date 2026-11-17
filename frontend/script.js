const projectForm = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

let projects = [];

projectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("projectName").value;
    const description = document.getElementById("projectDescription").value;
    const category = document.getElementById("projectCategory").value;
    const status = document.getElementById("projectStatus").value;

    const project = {
        name,
        description,
        category,
        status
    };

    projects.push(project);

    displayProjects();

    projectForm.reset();
});

function displayProjects() {
    projectList.innerHTML = "";

    projects.forEach(function (project, index) {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        projectDiv.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <p><strong>Category:</strong> ${project.category}</p>
            <p><strong>Status:</strong> ${project.status}</p>

            <button onclick="editProject(${index})">Edit</button>
            <button onclick="deleteProject(${index})">Delete</button>
        `;

        projectList.appendChild(projectDiv);
    });
}

function editProject(index) {
    const project = projects[index];

    document.getElementById("projectName").value = project.name;
    document.getElementById("projectDescription").value = project.description;
    document.getElementById("projectCategory").value = project.category;
    document.getElementById("projectStatus").value = project.status;

    projects.splice(index, 1);

    displayProjects();
}

function deleteProject(index) {
    projects.splice(index, 1);

    displayProjects();
}