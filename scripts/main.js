form.addEventListner('submit', function(event) {
    event.preventDefault();
    coffeeOrders.push(form.fullName)
})