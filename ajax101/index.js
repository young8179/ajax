const button = document.getElementById("button")

button.addEventListener("click", function(){
    generating()
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response) { 
        return response.json(); 
    })
    .then(function(data) {
    const img = document.createElement("img")
    const display = document.getElementById("display")
    img.setAttribute("src", data.message)
    img.setAttribute("class", "col-md-2" )
    img.setAttribute("style", "width: 10%")
    display.appendChild(img)
    generatingBack()    
  });
    
})

function generating(){
    button.textContent = "generating Doggo....."
}
function generatingBack(){
    button.textContent = "generating Doggo"
}

//---------------ajax 102 exercise---------------

const dropDown = document.getElementById("dropMenu")

dropDown.addEventListener("change", function(){
    

    fetch(`https://dog.ceo/api/breed/${dropDown.value}/images/random`)
    .then(function(response) { 
        return response.json(); 
    })
    .then(function(data) {
    const img = document.createElement("img")
    const display = document.getElementById("display")
    img.setAttribute("src", data.message)
    img.setAttribute("class", "col-md-2" )
    img.setAttribute("style", "width: 10%")
    display.appendChild(img)
    generatingBack()    
  });
})



fetch ("https://dog.ceo/api/breeds/list")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for (let i = 0; i < data.message.length; i++) {
            const option = document.createElement("option")
            option.textContent = data.message[i]
            dropDown.appendChild(option)
            
            // const pitbull = document.createElement("option")
            // pitbull.setAttribute("value", "pitbull")
            // pitbull.textContent = "Pit Bull"
            // dropDown.appendChild(pitbull)
            
            
        }
    })

   