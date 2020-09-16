

// const request = new XMLHttpRequest()

// request.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let body = document.querySelector("body");
//         let text1 = document.createElement("div");
        // text1.textContent = this.responseText; 
//         body.appendChild(text1)
        
//         console.log(this);
//     }
    

// }

// request.open("GET", "./sample.txt");
// request.send()


//-------------------------------------------------------------------------------------
fetch('./sample.txt')
  .then(function(response) {
    return response.text();
  })
  .then(function(text) {
    const title = document.createElement('h1');
      title.textContent = text;
      document.body.appendChild(title);
  })