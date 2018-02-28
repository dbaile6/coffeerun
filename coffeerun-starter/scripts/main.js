var coffeeOrder = document.getElementById('coffeeOrder').value;
var emailAddress = document.getElementById('emailInput').value;
var flavorShot = document.getElementById('flavorShot').value;
var caffeine = document.getElementById('strengthLevel').value;
var size = document.querySelector('input[name="size"]:checked').value;

console.log(coffeeOrder)
console.log(emailAddress)
console.log(size)
console.log(flavorShot)
console.log(strengthLevel)


function addNewOrder() {
    document.getElementById('form-group').addEventListener('submit', function(event) {
    event.preventDefault();
    newOrder = new Array();
    newOrder.push(coffeeOrder + emailAddress + size + flavorShot + caffeine);
    document.getElementById("lastForm").appendChild(newOrder);
})
}

addNewOrder()

console.log(newOrder)