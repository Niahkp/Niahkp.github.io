const doStuff = () =>{ 
    alert("Hello World");
};

const myButton = document.getElementById("btn-click");
//myButton.onclick = doStuff;

myButton.onclick = () =>{
    document.getElementById("message").innerHTML = "Hello Everyon!";
    document.getElementById("stuff").classList.add("special");
};

//add a second button called say goodbye
//when clicked change the text to goodbye everyone and remove the special styles

document.getElementById("btn-say-goodbye").onclick = () => {
    document.getElementById("message").innerHTML = "goodbye everyone";
    document.getElementById("stuff").classList.remove("special");
}

//show data from input field
// document.getElementById("txt-first-name").onkeyup= () =>{
//     const textBox = document.getElementById("txr-first-name");
//     //console.log(textBox.value);
//     document.getElementById("result").innerHTML = textBox.value;
// }

document.getElementById("txt-first-name").onkeyup= (event) =>{
    //const textBox = document.getElementById("txr-first-name");
    //console.log(event.target);
    document.getElementById("result").innerHTML = event.target.value;
    //document.getElementById("result").innerHTML = textBox.value;
}