const checkButton = document.querySelector("#check-btn");
const userInput = document.querySelector("#text-input")
const resultP = document.querySelector("#result")



const cleanInputStr = (str)=>{
    const regex = /[^A-Za-z0-9]/gi;
    
   
    return str.replace(regex,'')

}



const stringChecker = (str)=>{
  const userInputLower = cleanInputStr(str).toLowerCase()
  const result= ` ${userInputLower === [...userInputLower].reverse().join("") ? str+ " is": str+" is not"} a palindrome.`
  return result
}







checkButton.addEventListener("click",()=>{
  if (userInput.value===''){
    alert("Please input a value")
  }else{
  resultP.innerText = stringChecker(userInput.value)
  userInput.value=''
  }
})