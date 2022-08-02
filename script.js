function sendEmail() {
    Email.send({
        SecureToken: "729ab0ce-6313-4c14-8e07-a5b53ee12120",
        To: 'oksanaott302@gmail.com',
        From: document.getElementById("email").value,

        Subject: "New Contact Form Inquiry",
        Body: "Name:" + document.getElementById("name").value +
            "<br> Email:" + document.getElementById("email").value +
            "<br> Phone:" + document.getElementById("phone").value +
            "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert(message)
    );
}
