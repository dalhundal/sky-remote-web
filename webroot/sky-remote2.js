function skyButton(thisButton) {
console.log("CLICKED: ", thisButton);
$.post('/control',{
        command: thisButton,
        ip: $('#ip').val()
});
}

function notSupported(thisButton) {
console.log("Unsupported button: ", thisButton);
alert("The " + thisButton + " button is not supported.")
}
