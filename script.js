function getFormInput() {
    message = "Welcome to Hoop Culture ";
    message = message + input_name.value;
    welcomeMessage.innerHTML = message;
}

function getValueInput() {
   question = "You chose to buy ";
   question = question + input_value.value + " " +  BasketballGear.value;
   summaryMessage.innerHTML = question;
}


