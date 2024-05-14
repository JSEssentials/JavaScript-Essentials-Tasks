//TODO: Debug the code below. it contains 3 errors in total
// To get started, open the index.html file in your browser and check the console from inspect options for errors.

document.addEventListener("DOMContentLoaded", () => {
    // Note: the document.getElementById() method is used to select an element from the HTML file.
    // The id is defined in the HTML object properties.

    const statusElement = document.getElementById("status"); // select the text element from html
    const button = document.getElementById("update-button"); // select the button element from html
    let body = document.body; // select the body element from html
    let colorValue = "white"; // set the initial color value for the background

    button.addEventListener("click", () => {
        console.log("Button clicked!");

        // set the textcontent of HTML element "statusElement"
        statusElement.textContent = "Status updated!";

        // set the color of the text
        colorValue = "red"

        // set the body background color to colorValue
        body.style.backgroundColor = colorValue;
    });
});
