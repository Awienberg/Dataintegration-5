'use strict';
const $ = function (foo) {
    return document.getElementById(foo);
}

let input = document.querySelector(".input");
let button = document.querySelector(".submit");
input.value = "";

// CVR
let cvr = new XMLHttpRequest()
    cvr.addEventListener("load", function() {
        let obj = JSON.parse(cvr.responseText);

        let name = obj.name;
        let add = obj.address;
        let city = obj.city;
        let desc = obj.industrydesc;
        let phone = obj.phone;
        let email = obj.email;


        $('name').innerHTML = name;
        $('add').innerHTML = add;
        $('city').innerHTML = city;
        $('desc').innerHTML = desc;
        $('phone').innerHTML = 'Tlf: ' + phone;
        $('email').innerHTML = 'Email: ' + email;
});
button.addEventListener("click", function(){
    cvr.open("GET", "https://cvrapi.dk/api?search=" + input.value + "&country=dk");
    cvr.send();
    
});



