let $ = document
const arrowIcon = $.querySelectorAll(".arrow_icon")
const inputs = $.querySelectorAll(".form_input")
const backIcon = $.querySelectorAll(".back_icon")

const passFunc = (event: { target: any }) => {
    const input = event.target.previousElementSibling
    const parentEl = event.target.parentElement
    const nextForm = parentEl.nextElementSibling

    // Check For Validation
    if (input.type === "text" && validateUser(input)) {
        nextSibling(parentEl, nextForm)
    } else if (input.type === "email" && validateEmail(input)) {
        nextSibling(parentEl, nextForm)
    } else if (input.type === "password" && validateUser(input)) {
        nextSibling(parentEl, nextForm)
    } else {
        parentEl.classList.add("anim")
    }

    parentEl.addEventListener("animationend", () => {
        parentEl.classList.remove("anim")
    })
}

// Form Confirm
const validateUser = (input: any) => {
    if (input.value.length <= 6) {
        error("red")
        return false
    }
    else {
        error("linear-gradient(22deg, rgba(144, 41, 255, 1) 0%, rgba(0, 164, 255, 1) 100%)")
        return true
    }
}

const validateEmail = (input: any) => {
    const validation = /^[a-z0-9]+@[a-z]+\.+[a-z]{2,4}$/
    if (validation.test(input.value)) {
        error("linear-gradient(22deg, rgba(144, 41, 255, 1) 0%, rgba(0, 164, 255, 1) 100%)")
        return true
    } else {
        error("red")
        return false
    }
}

// Validate Error
const error = (color: string) => {
    $.body.style.background = color
}

// Next Sibling
const nextSibling = (parentEl: any, nextForm: any) => {
    parentEl.classList.add("inactive")
    parentEl.classList.remove("active")
    nextForm.classList.add("active")
    nextForm.classList.remove("inactive")
}

// Previous Sibling
const previousSibling = (event: {target: any}) => {
event.target.parentElement.classList.add("inactive")
event.target.parentElement.classList.remove("active")
event.target.parentElement.previousElementSibling.classList.add("active")
event.target.parentElement.previousElementSibling.classList.remove("inactive")
}

// Events
arrowIcon.forEach(icon => {
    icon.addEventListener("click", passFunc)
})

backIcon.forEach(icon => {
    icon.addEventListener("click", previousSibling)
})

inputs.forEach((input: any) => {
    input.addEventListener("keyup", (event: any) => {
        if (event.which === 13) {
              const parentEl = event.target.parentElement
              const nextForm = parentEl.nextElementSibling
          
              // Check For Validation
              if (input.type === "text" && validateUser(input)) {
                  nextSibling(parentEl, nextForm)
              } else if (input.type === "email" && validateEmail(input)) {
                  nextSibling(parentEl, nextForm)
              } else if (input.type === "password" && validateUser(input)) {
                  nextSibling(parentEl, nextForm)
              } else {
                  parentEl.classList.add("anim")
              }
          
              parentEl.addEventListener("animationend", () => {
                  parentEl.classList.remove("anim")
              })
        }
    })
})
