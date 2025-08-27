interface usuario {
    nombre: string, 
    edad: number, 
    curso: string, 
    direccion: { 
        calle: string, 
        ciudad: string, 
        pais: string
    },
    mostrarInfo: () => void;
}

const estudiante: usuario = { 
    nombre: 'Juan', 
    edad: 22, 
    curso: 'Matemáticas', 
    direccion: { 
        calle: 'Av. Siempre Viva', 
        ciudad: 'Bogotá', 
        pais: 'Colombia' 
    }, 
    mostrarInfo() { 
        return `${this.nombre} estudia ${this.curso} en 
${this.direccion.ciudad}`; 
    } 
}; 
 
console.log("Parte 1\n Punto 1 : "+ estudiante.mostrarInfo()); 

interface stock{
    id: number, 
    nombre: string, 
    precio: number, 
    stock: number, 
    mostrarDetalle: ()=>void;
}



const producto: stock= { 
    id: 1, 
    nombre: 'Laptop', 
    precio: 3500, 
    stock: 10, 
    mostrarDetalle() { 
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} 
unidades disponibles`; 
    } 
}; 
 
console.log("Punto 2 :"+producto.mostrarDetalle()); 

interface cine{
    titulo: string, 
    director: string, 
    duracion: number, 
    genero: string, 
    reproducir:() =>void;
}

const pelicula :cine = { 
    titulo: 'Avengers: Endgame', 
    director: 'Anthony y Joe Russo', 
    duracion: 181, 
    genero: 'Acción', 
    reproducir() { 
        return `Punto 3: Reproduciendo: ${this.titulo} - Dirigida por 
${this.director}`; 
    } 
}; 
 
console.log(pelicula.reproducir()); 

interface concecionario{
    marca: string, 
    modelo: string, 
    anio: 2022, 
    encender: ()=>void;
}

const vehiculo : concecionario = { 
    marca: 'Toyota', 
    modelo: 'Corolla', 
    anio: 2022, 
    encender() { 
        return `Punto 4: ${this.marca} ${this.modelo} está encendido`; 
    } 
}; 
 
console.log(vehiculo.encender()); 

interface nose{
    username: string, 
    password: string, 
    roles: [string, string], 
    login : ()=>void;
}

const usuario : nose= { 
    username: 'admin01', 
    password: '123456', 
    roles: ['admin', 'editor'], 
    login() { 
        return `Punto 5: Usuario ${this.username} ha iniciado sesión con roles: 
${this.roles.join(', ')}`; 
    } 
}; 

console.log(usuario.login())

export{}