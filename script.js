function getFormInput(){
    if (isNaN(input_name.value)){
    message = "Welcome to Hoop Culture ";
    message = message + input_name.value;
    welcomeMessage.innerHTML = message;
} else {
    invalidMessage = "Please enter a valid name!";
    welcomeMessage.innerHTML = invalidMessage;
}
} 

function getInfo(){
    information = "Hi we are Hoop Culture. We sell basketball gears. For more information please go to Basketball Gear page. Thankyou!";
    infoMessage.innerHTML = information;
}

function getValueInput() {
    const gearPrices = {
        "Basketball Wristband": 2,
        "Basketball Socks": 5,
        "Basketball Headband": 10,
        "Basketball Shorts": 15,
        "Basketball Jersey": 30,
        "Basketball Shoes": 50,
    };

     let question = "You chose to buy ";
     let quantity = input_value.value;
     let gear = BasketballGear.value;
     let cost = gearPrices[gear] * quantity;

     question = question + quantity + " " + gear + "(s). ";
     question = question + "The total cost for this much gear you have selected is $" + cost + ".";
   
    summaryMessage.innerHTML = question;
}

function resetInput(){
   document.getElementById("input_name").value = "";
   document.getElementById("input_value").value = "";
}
