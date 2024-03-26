function calculateAge(){
    let day = document.querySelector(".dayInput").value;
    let month = document.querySelector(".monthInput").value;
    let year = document.querySelector(".yearInput").value;

    var birthday = new Date(year + "/" + month + "/" + day);

    console.log(birthday)

    if("" + birthday != "Invalid Date"){
        var edad = calculate(birthday);
    
        document.querySelector(".years").textContent = edad.years;
        document.querySelector(".months").textContent = edad.months;
        document.querySelector(".days").textContent = edad.days;
    }
}

function calculate(fechaNacimiento) {
    var fechaActual = new Date();
    var edad = {};
    var mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
    var edadAnios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if(mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())){
        var edadMeses = 12 + mes;
        edadAnios --;
    }else{
        var edadMeses = mes;
    }
    var edadDias = fechaActual.getDate() < fechaNacimiento.getDate() ? fechaActual.getDate() + 30 - fechaNacimiento.getDate() : fechaActual.getDate() - fechaNacimiento.getDate();
    
    edad.years = edadAnios;
    edad.months = edadMeses;
    edad.days = edadDias;
    
    return edad;
}