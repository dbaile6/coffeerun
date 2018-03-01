var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';
var $SUBMIT = $('[type="submit"]');
var data = {};

function setValues(key, keyValue) {
    localStorage.setItem(key, keyValue);
    data[key] = keyValue;
};

function getCoffee() {
    var coffeeType = 'coffee';
    var $coffeeValue = $('[name="coffee"]').val();
    setValues(coffeeType, $coffeeValue);
}
function getEmail() {
    var email = 'emailAddress';
    var $emailValue = $('[name="emailAddress"]').val();
    setValues(email, $emailValue);
}
function getSize() {
    var size = 'size';
    var $sizeValue = $('[name="size"]').val();
    setValues(size, $sizeValue);
}
function getFlavor() {
    var flavor = 'flavor';
    var $flavorValue = $('[name="flavor"]').val();
    setValues(flavor, $flavorValue);
}
function getStrength() {
    var strength = 'strength';
    var $strengthValue = $('[name="strength"]').val();
    setValues(strength, $strengthValue);
}

function submitClick() {
    $('[data-type-button="submit"]').on('click', function () {
        event.preventDefault();
        getCoffee();
        getEmail();
        getSize();
        getFlavor();
        getStrength();
        $.post(URL, data, function (resp) {
            console.log(resp);
        });
    });
};


function getOrdersFromAPI() {
    $.getJSON(URL, 'coffeeOrders', function (data) {
        $.each(data, function (key, val) {
            $(".past-order span")
                .append("Order: " + key + ": " + "orders a " + val['coffee'] + " " + val['size'] + " with " + val['flavor'] + ", " + val['strength'] + "mg strong." + "<br />");
        });
    });
};

function getAllPastOrders() {
    $('[data-type-button="orders"]').on('click', function () {
        event.preventDefault();
        $(".past-orders-container").show();
        getOrdersFromAPI();
    });
};

function getValues() {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        $(".local-storage-past-order span")
            .append(key + ": " + value + "<br />");

    }
};

// 1 A
function getOrderFromStorage() {
    $('[data-type-button="personal-order"]').on('click', function () {
        event.preventDefault();
        $(".local-orders-container").show();
        getValues();
    });
};

$(".local-orders-container").hide();
$(".past-orders-container").hide();


getOrderFromStorage();  
getAllPastOrders();
submitClick(); 
