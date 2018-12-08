// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result
  if (someValue <= 400) {
    result = 'This one is on me!';
  }
  else if (someValue >= 2500){
    result = 'No can do.'
  }
  else if (someValue >= 2000){
    result = 'I will gladly take your thirty bucks.'
  }
  return result
}

function ternaryCheckCity(someValue) {
  let result
  (someValue === 'NYC') ? result = 'Ok, sounds good.' : result = 'No go.';
  return result
}

function switchOnCharmFromTip(someValue){
  let result
  switch (someValue){
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    case 'thanks for everything':
      result = 'Bye.';
      break;
}
return result
}
