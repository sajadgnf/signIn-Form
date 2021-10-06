"use strict";
var $ = document;
var arrowIcon = $.querySelectorAll(".arrow_icon");
var inputs = $.querySelectorAll(".form_input");
var backIcon = $.querySelectorAll(".back_icon");
var passFunc = function (event) {
    var input = event.target.previousElementSibling;
    var parentEl = event.target.parentElement;
    var nextForm = parentEl.nextElementSibling;
    // Check For Validation
    if (input.type === "text" && validateUser(input)) {
        nextSibling(parentEl, nextForm);
    }
    else if (input.type === "email" && validateEmail(input)) {
        nextSibling(parentEl, nextForm);
    }
    else if (input.type === "password" && validateUser(input)) {
        nextSibling(parentEl, nextForm);
    }
    else {
        parentEl.classList.add("anim");
    }
    parentEl.addEventListener("animationend", function () {
        parentEl.classList.remove("anim");
    });
};
// Form Confirm
var validateUser = function (input) {
    if (input.value.length <= 6) {
        error("red");
        return false;
    }
    else {
        error("linear-gradient(22deg, rgba(144, 41, 255, 1) 0%, rgba(0, 164, 255, 1) 100%)");
        return true;
    }
};
var validateEmail = function (input) {
    var validation = /^[a-z0-9]+@[a-z]+\.+[a-z]{2,4}$/;
    if (validation.test(input.value)) {
        error("linear-gradient(22deg, rgba(144, 41, 255, 1) 0%, rgba(0, 164, 255, 1) 100%)");
        return true;
    }
    else {
        error("red");
        return false;
    }
};
// Validate Error
var error = function (color) {
    $.body.style.background = color;
};
// Next Sibling
var nextSibling = function (parentEl, nextForm) {
    parentEl.classList.add("inactive");
    parentEl.classList.remove("active");
    nextForm.classList.add("active");
    nextForm.classList.remove("inactive");
};
// Previous Sibling
var previousSibling = function (event) {
    event.target.parentElement.classList.add("inactive");
    event.target.parentElement.classList.remove("active");
    event.target.parentElement.previousElementSibling.classList.add("active");
    event.target.parentElement.previousElementSibling.classList.remove("inactive");
};
// Events
arrowIcon.forEach(function (icon) {
    icon.addEventListener("click", passFunc);
});
backIcon.forEach(function (icon) {
    icon.addEventListener("click", previousSibling);
});
inputs.forEach(function (input) {
    input.addEventListener("keyup", function (event) {
        if (event.which === 13) {
            var parentEl_1 = event.target.parentElement;
            var nextForm = parentEl_1.nextElementSibling;
            // Check For Validation
            if (input.type === "text" && validateUser(input)) {
                nextSibling(parentEl_1, nextForm);
            }
            else if (input.type === "email" && validateEmail(input)) {
                nextSibling(parentEl_1, nextForm);
            }
            else if (input.type === "password" && validateUser(input)) {
                nextSibling(parentEl_1, nextForm);
            }
            else {
                parentEl_1.classList.add("anim");
            }
            parentEl_1.addEventListener("animationend", function () {
                parentEl_1.classList.remove("anim");
            });
        }
    });
});
