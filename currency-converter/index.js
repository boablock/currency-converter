
    // MODELO-AFTER
    
    // Array para recolectar los datos de cada usuario
    const datosUsuarios =[
        {
            id:1,
            nombre:'Pedro',
            apellido: 'Perez',
            mail:'pedro_montero@gmail.com',
            usuario: 'Pepemonte1',
            contraseña: 'Pepe123',
        }
    ]

    datosUsuarios.filter(apellido => apellido.apellido === 'Perez');
    console.log(datosUsuarios);

    // Array para recolectar las conversiones de cada usuario
    const conversionesUsuarios =[
        {   
            id:1, 
            moneda: 1,
            crypto:1,
            monto: 10000, 
        },
        {
            id:2,
            moneda:2,
            crypto:1,
            monto: 100, 
        }
    ]
    console.log(conversionesUsuarios);

    const porfolio =[
        {}
    ]
    console.log(porfolio);

    const tusInversiones =[
        {}
    ]
    console.log(tusInversiones);
    
    let option;
    let precioBtc = 20000;
    let precioEth = 2000;
    let dolar = 300;
    let moneda;
    let crypto; 
    let monto;

    while (option !== 5){
        option = Number(prompt('Ingrese una opcion:\n 1) Login/sing-up\n 2)Conversor crypto\n 3)Tu porfolio\n 4) Tus inversiones \n5) Salir'));
        switch(option){
            case 1:
                const nombre = prompt('Ingresa tu nombre');
                const mail = prompt('Ingresa tu mail');
                const usuario = prompt('Ingresa tu usuario');
                const contraseña =prompt ('Ingresa tu contraseña')
                const id = getLastID() + 1;
                // const id = datosUsuarios.length + 1; //--> se haria de esta forma, pero lo hicimos con una funcion para abstraer y encapsular un comportamiento e invocarlo aca. 
                newUser(nombre, mail, usuario, contraseña, id);
                alert('Bienvenido ' + nombre + 'ID: '+ id);
                break;
            case 2:
                moneda = parseInt(prompt('ingrese un numero segun sea su moneda: \n 1)USD 2)ARS'));
                crypto = parseInt(prompt('Ingrese un numero segun la criptomoneda deseada: \n1)BTC \n2)ETH'));
                monto = parseInt(prompt('Ingrese el monto que desee convertir'));
                alert(converter(moneda, crypto, monto));
                newConvertion(moneda, crypto, monto);
                break;
            case 3:
                alert('Bienvenid@ a tu portfolio!');
                tuCrypto = prompt('Ingresa la cryptomoneda que poseas para conformar tu porfolio:\n1) ETH\n2) BTC\n3) ADA');
                cantidad = prompt('Ingresa la cantidad que posee de su cryptomoneda (en unidades)');
                break;
            case 4:
                alert('Bienvenido a la seccion inversiones')
                cryptoComprada = prompt('Ingrese la cyrptomoneda que a comprado: \n1) ETH\n2) BTC\n3) ADA');
                cantidadComprada= parseFloat('Ingrese la cantidad comprada en unidades');
                precioCompra = parseFloat( prompt('Ingrese el precio de compra'));
                fechaCompra = prompt('ingrese la fecha de compra')
                break;
            case 5:
                alert('Gracias por visitarnos!')
                break; 
            default:
                alert('La opcion ingresada no es correcta, intente nuevamente');
        }
    }

    function getLastID(){
        return datosUsuarios.length; //--> . length -> la cantidad de usuarios que tengo. 
    }

    function newUser (nombre, mail, usuario, contraseña, id){ //--> Se podrian haber puesto los promps aca adentro(testearlo en una nueva rama).
        datosUsuarios.push({
            nombre,
            mail,
            usuario, 
            contraseña,
            id,
        })
        return 'Usuario agregado correctamente ' + id; 
    }

    // function getAllUsers(){
    //     datosUsuarios.forEach((dato)=> console.log(dato.nombre + '-' + dato.mail + '-' + dato.usuario + '-' + dato.contraseña + '-' + id)); //--> "dato" va a ser cada elemento de datosUsuarios en cada iteracion. 
    // }
    
    function newConvertion (moneda, crypto, monto){
        conversionesUsuarios.push({
            moneda,
            crypto,
            monto
        })
        
    }

    function newPorfolio (tuCrypto, cantidad){
        porfolio.push({
            tuCrypto,
            cantidad,
        })
    }

    function newInvertion (cryptoComprada, cantidadComprada, precioCompra, fechaCompra){
        tusInversiones.push({
            cryptoComprada,
            cantidadComprada,
            precioCompra,
            fechaCompra,
        })
    }


    function converter(moneda, crypto, monto){
        if ( moneda === 1 && crypto === 1){
            return ('$' + monto + ' = '+ monto / precioBtc + 'BTC');
        }else if (moneda === 1 && crypto === 2){
            return ('$' + monto + ' = '+ monto / precioEth + 'ETH');
        } else if (moneda  === 2 && monto === 1){
            return ('$' + monto + ' = '+ monto / dolar / precioBtc + 'BTC');
        }else if (moneda === 2 && monto === 2){
            return ('$' + monto + ' = '+ monto / dolar / precioEth + 'ETH');
        }
    }
  
  


    // const suma = (a,b) => a / b; 
    // alert(suma(monto),precioBtc); 

    // function suma (a,b){
    //     return a/b; 
    // }

    // console.log(suma(100,10));




     