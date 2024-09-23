/*when the hambutger is clicked, toggles between showing and hiding the nav items*/
// document.getElementById("toggle-nav").onclick = () => {

// }

document.querySelector("#toggle-nav").onclick = () =>{
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

document.getElementById("click-link").onclick = (event) =>{
    event.preventDefault(); //dont go to link destination
    console.log("you clicked a link");
};

document.getElementById("txt-color").onchange =(e) =>{
    //console.log(e.target.value);
    //document.getElementById("ball").style.setProperty("background-color", e.target.value);
    document.querySelector(":root").style.setProperty("--ball-color", e.targer.value);
}

//move ball down wnen button clicked
let pos= 0;
document.getElementById("move-down").onclick = () =>{
    pos++;
    //console.log(pos);
    document.getElementById("ball").style.setProperty("top", pos + "px");
};

/*shoe volor mrddagr*/
document.getElementById("btn-show-color").onclick = () =>{
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = " ";

    if(color == "red"){
        //messageP.innerHTML = "Red is for anger";
        mood = "angry";
    }
    else if(color == "blue"){
        //messageP.innerHTML = "Blue is for moods";
        mood = "moody";
    }
    else{
       // messageP.innerHTML = "not "
       mood = "undefined";
    }

    messageP.innerHTML = `you chose ${color} so you are ${mood}`;

    /*donations*/
    /*get the numer if it is not a number of if it is negative, show error in error
    otherwise first show the percednt out of 10000 towards the goal
    create a visual representation with a box and gradient*/
    
    document.getElementById("btn-donate").onclick = () =>{
        const goal = 10000;
        const donation = document.getElementById("txt-donations").value;
        const error = document.getElementById("error-donations");
        error.innerHTML = ""; //clear previous error

        if(isNaN(donations) || donations < 0){
            error.innerHTML = "* Invalid";
            return;
        }
        //getting the percentage out of the positive number
        const percentGoal = donation / goal * 100;
        console.log(percentGoal + "%");
        document.querySelector(":root").style.setProperty("--funds", perecentGoal + "%");
    }
}
