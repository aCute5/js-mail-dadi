
const Email = ["dariocostantini35@yahoo.it", "dariocostantini58@yahoo.it", "marcorossi@gmail.it"];
const chiediMail = document.querySelector(".eleInput")
const eleOutput = document.querySelector(".mailoutput")
const eleInput = document.querySelector(".input")

eleInput.addEventListener("click", function(){
    let emailFound = false;
    for (let i = 0;  i < Email.length; i++) {
        if (chiediMail.value === Email[i]){
            emailFound = true;             
    }
    if (emailFound) {
        document.querySelector(".mail").innerHTML = chiediMail.value
    }else{
        document.querySelector(".mail").innerHTML = "La mai non è presente nel database"
    }
    }
})

// if (Email.includes(chiediMail)) {
// 	console.log("La mail è corretta");
//     document.querySelector(".mail").innerHTML = chiediMail 
// } else {
// 	console.log('La mail non è corretta');
//     document.querySelector(".mail").innerHTML = "La mail non è presente nel database"
// }



const rollDice = document.querySelector(".roll")
const userNumber =  document.getElementById("usernumber").innerHTML
const pcNumber = document.getElementById("pcnumber").innerHTML

rollDice.addEventListener("click", function (){
    const userNumber =  Math.floor(Math.random() * 6)
    const pcNumber =  Math.floor(Math.random() * 6)
    document.getElementById("usernumber").innerHTML = "Il tuo numero:" + userNumber;
    document.getElementById("pcnumber").innerHTML =  "Il numero del PC:" + pcNumber ;
    
    
    if (userNumber > pcNumber) {
        document.querySelector(".result").innerHTML = "Hai vinto"
    }
   else{
         document.querySelector(".result").innerHTML = "Hai perso"
   }
})
    
