// Function declaration
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

// Function expression called with mondayWork()
let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}

let encouragingPromptFunction = wrapAdjective("!!!")
// encouragingPromptFunction("cute") => "You are !!!cute!!!!"

function wrapAdjective(flair="*") {
  return function(adjective="special") {
    return `You are ${flair}${adjective}${flair}!`
  }
}
