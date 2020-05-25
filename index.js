<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    updateDOM()
} );

function updateDOM() {
    document.getElementById('text')
    .innerHTML = "This is really cool!";
}
      document.addEventListener("DOMContentLoaded", function() {
=======
    document.addEventListener("DOMContentLoaded", function() {
>>>>>>> 3e7b2c387296ccbf00ddf5211262d0c89735f1b3
      console.log("The DOM has loaded");
    });
     
    console.log(
      "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
    );
<<<<<<< HEAD
    function myFunction() {
        document.getElementById("text").innerHTML = "Hello World";
      }
=======
function updateDOM() {
    document.getElementById('text')
    .innerHTML = "This is really cool!";
}
>>>>>>> 3e7b2c387296ccbf00ddf5211262d0c89735f1b3
