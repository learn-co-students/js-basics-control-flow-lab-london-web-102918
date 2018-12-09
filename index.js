// Write your code in this file!

function scuberGreetingForFeet(feet) {
  let phrase
  if (feet < 400) {
    phrase = "This one is on me!";
  } else if (feet > 2500) {
    phrase = "No can do."
  } else if (feet > 2000) {
    phrase = "I will gladly take your thirty bucks."
  }
  return phrase
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case  "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
