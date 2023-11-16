//Buttons
let selectedNumberId = null; // Store the currently selected number ID
function buttons(elementId) {
  if (selectedNumberId !== null) {
    // Remove the "selected" class from the previously selected number
    const button = document.getElementById(selectedNumberId);
    button.classList.remove("selected");
  }
  // Add the "selected" class to the clicked number
  var selected = document.getElementById(elementId);
  selected.classList.add("selected");
  // Update the selected number ID
  selectedNumberId = elementId;

  //napíše číslo, ktoré je zvolené
  document.getElementById("rating_text").textContent = `You selected ${elementId} out of 5`; //musia tam byť tie divné úvodzovky(backtick pravý alt+7)
}

//Thank you page
function thanksPage(){
  //ak nie je zvolené žiadne číslo
  if (selectedNumberId === null){
    alert("Please select a number before proceeding")
    return; 
  }
  
  //prehodí sa jedna stránka na druhú
  document.getElementById("box_rating").style.display = "none";
  document.getElementById("box_thanks").style.display = "flex";
}

//šipka späť
function back(){
  document.getElementById("box_rating").style.display = ""; //nejakým spôsobom to funguje xdd
  document.getElementById("box_thanks").style.display = "none";
  
  //vráti späť štýl
  document.getElementById(selectedNumberId).classList.remove("selected");
  selectedNumberId = null;
}