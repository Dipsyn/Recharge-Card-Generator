let CardArray = [];
let randomNumber;
let users;

function generate() {
  let codeInput = document.getElementById("codeInput");
  randomNumber = Math.floor(Math.random() * 12345678912 + 1);
  codeInput.value = randomNumber;
}

function save() {
    codeInput.value = "";
  users = {
    network: network.value,
    amount: amount.value,
    pin: "",
    codeInput : codeInput.value,
    status : "unused",
    dateCreated : new Date().toLocaleDateString(),
    dateUsed : "Not yet used",
  };

  if(network.value==="AIRTEL"){
    users.pin = `*555*${randomNumber}#`;
  }
  else if(network.value==="MTN"){
    users.pin = `*123*${randomNumber}#`;
  }
    else if(network.value==="GLO"){
    users.pin = `*323*${randomNumber}#`;
  }
  else if(network.value==="ETISALAT"){
    users.pin = `*222*${randomNumber}#`;
  }
  else {
    alert("Please select a network");
  }
CardArray.push(users);
console.log(CardArray);

displayUi();

}

function displayUi() {
    tableBody.innerHTML = "";
   for (let i = 0; i < CardArray.length; i++) {
    tableBody.innerHTML += `
    <tr>
    <th scope = "row" class="px-4 py-3 border-b">${i + 1}</th>
    <td class="px-4 py-3 border-b">${CardArray[i].network}</td>
    <td class="px-4 py-3 border-b">${CardArray[i].amount}</td>
    <td class="px-4 py-3 border-b">${CardArray[i].pin}</td>
    <td class="px-4 py-3 border-b">${CardArray[i].status}</td>
    <td class="px-4 py-3 border-b">${CardArray[i].dateCreated}</td>
    <td class="px-4 py-3 border-b">${CardArray[i].dateUsed}</td>
    <td class="px-4 py-3 border-b">
      <button onClick="deleteCard(${i})" class="bg-red-500 text-white p-2">Delete</button>
    </td>
  </tr>
  `
}
}

function recharge(){
    let pinInput = document.getElementById("pin").value.trim();
    let index = CardArray.findIndex((item) => item.pin === pinInput);

    if(index !== -1){
        let dateUsed = new Date().toLocaleDateString();
        CardArray[index].status = "used";
        CardArray[index].dateUsed = dateUsed;
        alert(`Recharge successful! Your ${CardArray[index].amount} card has been recharged.`);
        displayUi();
}
else{
    alert("Invalid pin. Please check the pin and try again.");
}

displayUi();
}


function deleteCard(index){
    alert("Are you sure you want to delete this card?");
    CardArray.splice(index, 1);
    displayUi();
}
