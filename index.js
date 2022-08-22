// code your solution here
function saturdayFun(activity) {
  if (activity !== undefined) {
    return `This Saturday, I want to ${activity}!`;
  }
  else {
    return "This Saturday, I want to roller-skate!";
  }

}

function mondayWork(activity) {
if (activity !== undefined) {
  return `This Monday, I will ${activity}.`
} else {
  return "This Monday, I will go to the office."
}
}

const wrapAdjective = (result = '*') => {

  return (phrase = "a hard worker") => {
  return `You are ${result}${phrase}${result}!`;
  
}


}
