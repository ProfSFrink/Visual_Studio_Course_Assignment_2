// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

/* Advanced Software and Web Developer Diploma
Course VIII: Visual Studio by Pitman Training / The Tech Academy
by Steven Partlow

Assigment 2: Create an ASP.NET Website that uses Git Version Control */

var id = null; // Variable to store our Animation element 

function myMove() {
    var elem = document.getElementById("Animation"); // Get the Animation element from the HTML document
    var pos = 0; // Set the position to 0

    clearInterval(id); // Stop any running setInterval methods
    id = setInterval(frame, 10); // Execute one frame of animation every 10 milliseconds
    function frame() { // This function executes one frame of animation
        if (pos == 350) { // Once the animation hits this position 
            clearInterval(id); // Stop the animation
        } else {
            pos++; // Increment the position
            elem.style.top = pos + 'px'; // Move the square down by one
            elem.style.left = pos + 'px'; // Move the square left by one
        } // End IF
    } // End FUNCTION
} // End FUNCTION
