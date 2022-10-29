var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

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

var tabLinks2 = document.getElementsByClassName("tab-links2");
var tabContents2 = document.getElementsByClassName("tab-contents2");

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

