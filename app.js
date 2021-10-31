var pages = ["Login","Home","About","View"]

function createNav(){
    var nav = document.createElement("nav")
    nav.classList.add("nav")
    document.body.appendChild(nav)

    for(var i = 1; i < pages.length; i++) {
        createButton(pages[i], pages[i])
    }

    function createButton(pg) {
        var button = document.createElement("button")
        button.innerHTML = pg
        button.addEventListener("click", function () {
            navigate(pg)
        })
        nav.appendChild(button)
    }
}

function createWrapper(){
    var wrapper = document.createElement("div")
    wrapper.classList.add("wrapper")
    document.body.appendChild(wrapper)
}

function navigate(pg){
    if(pg==="Login"){
        loginPage()
    }
    if(pg==="Home"){
        homePage()
    }else if(pg==="About"){
        aboutPage()
    }else if(pg==="View"){
        viewPage()
    }
}


// Pages

function loginPage(){
    createWrapper()
    var wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML = ""
    var userInput = document.createElement("input")
    var passInput = document.createElement("input")
    var logButton = document.createElement("button")
    var respDiv = document.createElement("div")
    userInput.placeholder = "Username", userInput.type = "text"
    passInput.placeholder = "Password", passInput.type = "password"
    logButton.innerHTML = "Log In"

    logButton.addEventListener("click",function(){
        var textValue = userInput.value
        if(textValue == "coolStudent123"){
            wrapper.innerHTML = ""
            wrapper.classList.remove("wrapper")
            createNav()
            createWrapper()
            navigate("Home")
        }
        else{
            respDiv.innerHTML = "Wrong User"
        }

    })

    wrapper.appendChild(userInput)
    wrapper.appendChild(passInput)
    wrapper.appendChild(logButton)
    wrapper.appendChild(respDiv)

}

function homePage(){
    var wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML=""
    var header = document.createElement("h1")
    header.innerHTML="Home Page"
    wrapper.appendChild(header)
}

function viewPage(){
    var wrapper = document.querySelector(".wrapper")
    wrapper.innerHTML = ""
    var header = document.createElement("h1")
    var note = document.createElement("input")
    var importance = document.createElement("input")
    var submitNote = document.createElement("button")
    var respDiv = document.createElement("div")
    submitNote.innerHTML = "Submit Note"
    note.placeholder = "Text"
    importance.placeholder = "Importance"
    header.innerHTML = "View Notes"

    submitNote.addEventListener("click",function(){
        var noteValue = note.value
        var importanceValue = importance.value
        if(noteValue.length > 1){
            respDiv.innerHTML = "The value is more than one"
            if(isNaN(importanceValue) == false){
                var createDiv = document.createElement("div")
                createDiv.innerHTML = importanceValue + " " + noteValue
                wrapper.appendChild(createDiv)
                respDiv.innerHTML = ""
            }
            else{
                respDiv.innerHTML = "Importance is not a number"
            }

        } else{
            respDiv.innerHTML = "Note needs to have more than one character"
        }


    })

    wrapper.appendChild(header)
    wrapper.appendChild(note)
    wrapper.appendChild(importance)
    wrapper.appendChild(submitNote)
    wrapper.appendChild(respDiv)
}



navigate("Login")