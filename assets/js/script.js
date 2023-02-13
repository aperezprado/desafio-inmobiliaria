const propiedades = [
    {
        nombre: "Friuli-Venezia Giulia",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus urna sed sapien vehicula consequat. Aenean molestie blandit neque, in mattis magna efficitur nec.",
        src:"assets/images/property-1.jpeg",
        cuartos:6,
        metros:300
    },
    {
        nombre: "Marvel de Villa",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus urna sed sapien vehicula consequat. Aenean molestie blandit neque, in mattis magna efficitur nec.",
        src:"assets/images/property-2.jpeg",
        cuartos:2,
        metros:100
    },
    {
        nombre: "Ruposi Bangla Cottage",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus urna sed sapien vehicula consequat. Aenean molestie blandit neque, in mattis magna efficitur nec.",
        src:"assets/images/property-3.jpeg",
        cuartos:1,
        metros:180
    },
    {
        nombre: "MayaKanon de Villa",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus urna sed sapien vehicula consequat. Aenean molestie blandit neque, in mattis magna efficitur nec.",
        src:"assets/images/property-4.jpeg",
        cuartos:4,
        metros:250
    },
    {
        nombre: "Azorex de South Villa",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus urna sed sapien vehicula consequat. Aenean molestie blandit neque, in mattis magna efficitur nec.",
        src:"assets/images/property-5.jpeg",
        cuartos:3,
        metros:120
    },
    {
        nombre: "Radison de Villa",
        descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus urna sed sapien vehicula consequat. Aenean molestie blandit neque, in mattis magna efficitur nec.",
        src:"assets/images/property-6.jpeg",
        cuartos:8,
        metros:100
    },
];

let contenedor = document.querySelector("#contenedor");

function creaDomPropiedad(propiedad){
    let card = `
            <div class="col-xs-12 col-lg-4">
                <div class="card mx-auto mb-5">
                    <div class="card-body">
                        <img src="${propiedad.src}" alt="${propiedad.nombre}" class="card-img-top">
                        <h3 class="card-title">${propiedad.nombre}</h3>
                        <p class="card-text text-justify">${propiedad.descripcion}</p>
                        
                        <span class="info-properties">
                            <i class="fa-solid fa-bed"></i>${propiedad.cuartos}
                        </span>
                        <span class="info-properties">
                            <i class="fa-solid fa-house"></i>${propiedad.metros}m2
                        </span>
                    </div>
                    <div class="card-footer d-flex justify-content-center align-content-center">
                        <button class="btn btn-primary p-3 text-white"><i class="fa-solid fa-circle-plus"></i> Ver más</button>
                    </div>
                </div>
            </div>
        `
        contenedor.innerHTML += card;
}

function cargaInicial(){
    let counter = 0;
    contenedor.innerHTML = '';
    for(let propiedad of propiedades){
        creaDomPropiedad(propiedad);
        counter++
    }
    document.querySelector("#total").innerHTML = counter;
}

function buscaFiltro(){
    const hab = document.querySelector("#habitaciones").value;
    const desde = document.querySelector("#desde").value;
    const hasta = document.querySelector("#hasta").value;

    if((isNaN(hab) == false && hab > 0) && (isNaN(desde) == false && desde > 0) && (isNaN(hasta)==false && hasta > 0)){
        if(desde > hasta){
            alert('El valor DESDE no puede ser superior al valor HASTA');
        }
        else {
            let counter = 0;
            contenedor.innerHTML = '';
            for(let propiedad of propiedades){
                if(propiedad.cuartos == hab && propiedad.metros >= desde && propiedad.metros <= hasta){
                    creaDomPropiedad(propiedad);
                    counter++;
                }
            }
            document.querySelector("#total").innerHTML = counter;
        }
        
    }
    else {
        alert('Uno o más parmáetros de búsqueda son erroneos o estan vacios, favor revise antes de continuar')
    }
}