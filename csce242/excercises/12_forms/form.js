document.getElementById("form-raccoon").onsubmit = (e) =>{
    e.preventDefault(); //dont go to the action/ dont refresh page

    const form = e.target;

    const racccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elelments["demeanor"].value;
    const termsChecked = form.elelments["terms"].checked;
    const size = getRadioValue("size");

    console.log(`${racccoonName} is ${size} sized and has a ${demeanor} demeanor`);
};

const getRadioValue = (radioName) =>{
    const radios = document.getElementsByName(radioName);

    for(let i in radios){
        if(radios[i].checked){
            return radios[i].value;
        }
    }

    return "";
};