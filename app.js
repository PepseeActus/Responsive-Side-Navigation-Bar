let closeBtn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.fa-search');

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
    if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("fa-bars", "fa-times"); //replacing the iocns class
    } else {
        closeBtn.classList.replace("fa-times","fa-bars"); //replacing the iocns class
    }
}

window.addEventListener('click', function(e){   
    if (!sidebar.contains(e.target) && sidebar.classList.contains("open")) {
        sidebar.classList.toggle("open");
    }
});