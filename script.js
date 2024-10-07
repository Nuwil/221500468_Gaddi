var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    var image = document.querySelector('.column-2 img');
    if (tabname === 'skills') {
        image.src = 'images/skills.jpg';
    } else if (tabname === 'experience') {
        image.src = 'images/experience.jpg';
    } else if (tabname === 'education') {
        image.src = 'images/education.jpg';
    } else if (tabname === 'hobbies') {
        image.src = 'images/hobbies.jpg';
    } else if (tabname === 'body-info') {
        image.src = 'images/body-info.jpg';
    }
}
