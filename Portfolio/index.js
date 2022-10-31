const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const tabLinks2 = document.getElementsByClassName("tab-links2");
const tabContents2 = document.getElementsByClassName("tab-contents2");

function opentab(tabname){
    for(i of tabLinks){
        i.classList.remove("active-link");
    }

    for(i of tabContents){
        i.classList.remove("active-tab");
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab")
}

function opentab2(tabname){
    for(i of tabLinks2){
        i.classList.remove("active-link");
    }

    for(i of tabContents2){
        i.classList.remove("active-tab");
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab")
}

// const activeLink = document.getElementsByClassName("active-link");

// activeLink.forEach(activeLinks => activeLinks.addEventListener('click', (e)=>{

// }))

