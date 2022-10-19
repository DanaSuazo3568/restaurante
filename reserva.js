function  agendar(){
    let nombre = document.getElementById('name_input').value;
        let email = document.getElementById('email_input').value;
        let telefono = document.getElementById('telefono_input').value;
        let documento = document.getElementById('documento_input').value;
        let tipo = document.getElementById('tipo-documento_input').value;
        let reserva = document.getElementById('reserva_input').value;
        let hora = document.getElementById('hora_input').value;
        let tiempo = document.getElementById('tiempo_input').value;

    
        
       var documentoPDF = new jsPDF();
       documentoPDF.setFontSize(20);
       documentoPDF.text(15, 15, 'Cita Agendada');
       documentoPDF.setFontSize(12);
       documentoPDF.text(20,30, 'Fecha: ' + new Date());
       documentoPDF.setFontSize(10);
       documentoPDF.text(20,40, 'nombre: ' + nombre);
       documentoPDF.text(20,50, 'tipo de documento: ' + tipo);
       documentoPDF.text(20,60, 'Numero de documento: ' + documento);
       documentoPDF.text(20,70, 'E-mail:' + email);
       documentoPDF.text(20,80, 'Numero de Telefono: ' + telefono);
    documentoPDF.text(20, 90, 'Reservada: ' + tiempo);
       documentoPDF.text(20, 100, 'fecha: ' + reserva);
       documentoPDF.text(20, 110, 'Hora: ' + hora);
       documentoPDF.save('Cita-Agendada');
    
    }