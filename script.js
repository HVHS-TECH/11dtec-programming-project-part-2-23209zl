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

function getInfo(){
    information = "Hi we are Hoop Culture. We sell basketball gears. For more information please go to Basketball Gear page. Thankyou!";
    infoMessage.innerHTML = information;
}
