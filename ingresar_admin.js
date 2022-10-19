function boton(){
    console.log("holaa");
    let hola = document.getElementById('username').value;
    let hola2 = document.getElementById('password').value;

    if(hola == "santiagocaro@gmail.com" && hola2 == "1234567890"){
        window.location="admin.html"
    }

    }