function app() {
    var openHamburger = document.querySelector("#close-hamburger")
    var closeHamburger = document.querySelector("#open-hamburger")
    var currentRoute = window.location.pathname

    var date = document.getElementById("date")
    var time = document.getElementById("time")
    var staffName = document.getElementById("staffName")
    var clientName = document.getElementById("clientsName")
    var typeOfIncident = document.getElementById("typeOfIncident")
    var description = document.getElementById("description")

    // -----YOU MIGHT NEED THIS FOR YOUR BACKEND STUFF, IF NOT.. DELETE IT

    // var dataRow = document.getElementById("dataRow")
    // var timeRow = document.getElementById("timeRow")
    // var staffNameRow = document.getElementById("staffNameRow")
    // var clientNameRow = document.getElementById("clientsNameRow")
    // var typeOfIncidentRow = document.getElementById("typeOfIncidentRow")
    // var descriptionRow = document.getElementById("descriptionRow")

    // date = date.value
    // time = time.value
    var submitButton = document.querySelector("#btn")

    var navlinks = document.querySelectorAll(".navlink")
    for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener("click", (e)=>{
            // e.preventDefault()
            console.log("hello")
        })     
    }
    // console.log(currentRoute)

    // for( i = 0; i < navlinks.length; i++){
    //     var linkRoute = navlinks[i].getAttribute("id")

    //     function clicked() {
    //         console.log(linkRoute)
    //     }

    //     navlinks[i].addEventListener("click", clicked)
    // }



    openHamburger.addEventListener("click", ()=>{
        document.querySelector(".mobile-nav").classList.add("show-mobilenav")

        console.log("working")
    })

    closeHamburger.addEventListener("click", ()=>{
        document.querySelector(".mobile-nav").classList.remove("show-mobilenav")

        console.log("working")
    })    

    submitButton.addEventListener("click", (e)=>{
        e.preventDefault()

        if (!date.value || !time.value || !staffName.value || !clientName || !typeOfIncident || !description.value){
            document.querySelector(".error").classList.add("show-error")

            setTimeout(() => {
                document.querySelector(".error").classList.remove("show-error")
            }, 1000);
        }else{
            document.querySelector(".success").classList.add("show-success")

            setTimeout(() => {
                document.querySelector(".success").classList.remove("show-success")
            }, 1000);
            setTimeout(() => {
                window.location.pathname = "/table.htm"
            }, 1500);
        }
    })
}

app()

//  ||   