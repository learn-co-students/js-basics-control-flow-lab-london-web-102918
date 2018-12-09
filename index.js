// Write your code in this file!

function scuberGreetingForFeet(feet) {
    let result
    if (feet <= 400) {
        result = "This one is on me!";
    } else if (feet > 2500) {
        result = "No can do.";
    } else if (feet > 2000) {
        result = "I will gladly take your thirty bucks.";
    } 
    return result
}

function ternaryCheckCity(city){
    return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
    switch (tip) {
        case 'generous':
            return "Thank you so much.";
            break;
        case 'not as generous':
            return "Thank you.";
            break;
        default:
            return "Bye."
    }
}