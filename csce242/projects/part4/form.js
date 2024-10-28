
document.getElementById("form-reservation").onsubmit = (e) =>{
    e.preventDefault(); //dont go to the action/ dont refresh page

    const form = e.target;

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const date = form.elements["date"].value;
    const time = form.elements["time"].value;
    const guests = form.elements["guests"].value;
    const termsChecked = form.elements["terms"].checked;

    console.log(`Reservation for ${name} on ${date} at ${time} for ${guests} guests`);
};

// const getRadioValue = (radioName) =>{
//     const radios = document.getElementsByName(radioName);

//     for(let i in radios){
//         if(radios[i].checked){
//             return radios[i].value;
//         }
//     }

//     return "";
// };