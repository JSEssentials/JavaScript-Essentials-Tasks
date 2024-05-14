// TODO: Debug the code below. It contains 3 errors in total. Open the index.html file in your browser and check the console for errors.

document.addEventListener("DOMContentLoaded", () => {
    // Note: the document.getElementById() method is used to select an element from the HTML file.
    // The id is defined in the HTML object properties.

    const statusElement = document.getElementById("status"); // select the text element from html file
    const button = document.getElementById("button"); // select the button element from html file
    let body = document.body; // select the body element from html file
    const colorValue = "white"; // set the initial color value for the background

    button.addEventListener("click", () => {
        console.log("Button clicked!");

        // set the textcontent of HTML element "statusElement"
        stausElement.textContent = "Status updated!";

        // set the color of the text
        colorValue = "red"

        // set the body background color to colorValue
        body.style.backgroundColor = colorValue;
    });
});
