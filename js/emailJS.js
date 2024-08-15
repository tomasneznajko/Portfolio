function sendEmail(){
    console.log('Entra cuchillo')
    var params = {
        email: document.querySelector('#correo').value,
        asunto: document.querySelector('#asunto').value,
        mensaje: document.querySelector('#mensaje').value,
    };
    console.log('Salen las tripas');
    const serviceID = 'service_57nu74b';

    const templateID = 'template_egs2u8m';
    console.log("Holaaa")
    emailjs
        .send(serviceID,templateID,params)
        .then((res)=> {
            document.querySelector('#correo').value = "";
            document.querySelector('#asunto').value = "";
            document.querySelector('#mensaje').value = "";
            console.log(res);
            alert("Su mensaje tititititiritiritirititititititiritiritirititititititiritiritiri ha sido enviado correctamente!");
            const modalElement = document.querySelector('#contacto');
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal.hide();
        })

        .catch((err) => {
            console.log(err);
            alert("Oh no! Algo ha salido mal!");
        })
        
}

