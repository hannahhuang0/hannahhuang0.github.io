// https://p5js.org
// This code comes from this tutorial
// command(osx)console(win) / in the comment command in any language

var schmoDiv = document.getElementById("schmo marie");

// schmoDiv.hidden = true;
if(schmoDiv === null){
    //do something!
}
console.log(schmoDiv);


// -----------------------------------------------
// https://www.w3schools.com/tutorial/onclicked
function ourDivWasClicked(){
    if(schmoDiv.innerHTML === "Hello"){
    schmoDiv.innerHTML = "howdy!"; 
    }else{
        schmoDiv.innerHTML = "Hello";
    }
}

schmoDiv.onclick = ourDivWasClicked;
//end tutorial code
// -----------------------------------------------

/// remixing to change colours and shapes (example of what you can write about your changes to the code)
