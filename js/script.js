
const Email = ["dariocostantini35@yahoo.it", "dariocostantini58@yahoo.it", "marcorossi@gmail.it"];
let chiediMail = (prompt("Qual è la tua mail?"))
// const dataMail = (Email[0, 2])
if (Email.includes(chiediMail)) {
	console.log("La mail è corretta");
} else {
	console.log('La mail non è corretta');
}