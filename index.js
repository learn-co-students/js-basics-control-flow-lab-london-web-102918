// Write your code in this file!
let scuberGreetingForFeet = function (feet) {
    if (feet <= 400) {
    return 'This one is on me!'
    } else if (feet < 2500) {
        return 'I will gladly take your thirty bucks.'
    } else {
        return 'No can do.'
    }
};

let ternaryCheckCity = function (city) {
     return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
};

let switchOnCharmFromTip = function (tip) {
    switch (tip) {
        case 'generous':
        return 'Thank you so much.'
        break;
        case 'not as generous':
        return 'Thank you.'
        break;
        default:
        return 'Bye.'
    }
};