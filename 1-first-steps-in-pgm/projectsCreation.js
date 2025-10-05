function projectsCreation (architect, projectsCount) {
    let hoursForOneProject = 3;
    let fullHoursForAllProjects = projectsCount * hoursForOneProject;

    console.log(`The architect ${architect} will need ${fullHoursForAllProjects} hours to complete ${projectsCount} project/s.`);
}
// projectsCreation("George", 4);
projectsCreation("Sanya", 9);