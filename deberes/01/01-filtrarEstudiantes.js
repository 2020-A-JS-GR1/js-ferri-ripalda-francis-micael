const estudiantes = [
    {
        id:1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];

estudiantes.forEach((estudiante) => {
    const vocales = ["a", "e", "i", "o", "u"];
        let notaExtra = 0;
        for (simbolo of estudiante.nombre){
            if ( vocales.indexOf(simbolo) !== -1){
                notaExtra += 0.1;
            } else {
                notaExtra += 0.05;
            }
        }
        console.log("Nombre:", estudiante.nombre,
            "| Nota original:", estudiante.nota,
            "| Nota nueva:", estudiante.nota + notaExtra);
        estudiante.nota += notaExtra;
});

estudiantesPasan = estudiantes.filter(estudiante => (estudiante.nota >= 14));
console.log("\nEstudiantes que pasaron\n", estudiantesPasan);

estudiantesJalados = estudiantes.filter(estudiante => (estudiante.nota < 14));
console.log("\nEstudiantes que se jalaron \n", estudiantesJalados);