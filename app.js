document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('ClickMe');
    button.addEventListener("click",() => {
        alert("Button clicked!"); //this line will show an alert when the button is clicked 
    });
});