//every one sec go through and move the class of highlighted threw the gallery
//perferred solution
// setInterval(() =>{
//     let currentSection = document.querySelector(".items section.highlighted");

//     //highlight the first section
//     if(currentSection == null){
//         document.querySelector(".items section:first-child").classList.add("highlighted");
//         return;
//     }

//     let nextSection = currentSection.nextElementSibling;

//     //hit the end of the section thats highlighted.
//     if(nextSection == null){
//         nextSection = document.querySelector(".itemns section");
//     }

//     currentSection.classList.remove("highlighted");
//     nextSection.classList.add("highlighted");

// }, 500);


//second option to highlight the text.
//it highlights each text box after every couple of seconds
let count = 1;

setInterval(() =>{
    //remove highlights
    document.querySelectorAll(".items section").forEach((section)=>{
        section.classList.remove("highlighted");
    });

    //add highlighting to the section with the current count
    document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");
    count++;

    //if you reached the end of sections 
    if(count > document.querySelectorAll(".items section").length){
        count = 1; 
    }
},500);

