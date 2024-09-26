document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("messageform");
    const currenttime = document.getElementById("currenttime");
    const submitName = document.getElementById("submitName");
    const submitBirthdate = document.getElementById("submitBirthdate");
    const submitgender = document.getElementById("submitgender");
    const submitMessage = document.getElementById("submitMessage");

    currenttime.innerText = new Date().toLocaleString();

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.querySelector('input[name="gender"] :this.Checked').value;
        const message = document.getElementById("message").value;

        submitName.innerText = name;
        submitBirthdate.innerText = birthdate;
        submitgender.innerText = gender;
        submitMessage.innerText = message;
    })
})