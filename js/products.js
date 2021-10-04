class Producto {
    constructor(
        categoria, tipoLlaves, codigoRaise, referencia, material, modeloMaquina, precio, img) {
        this.categoria = categoria;
        this.tipoLlaves = tipoLlaves;
        this.codigoRaise = codigoRaise;
        this.referencia = referencia;
        this.material = material;
        this.modeloMaquina = modeloMaquina.toUpperCase();
        this.precio = precio;
        this.img = img;
    };
};

const datos = [{
    categoria: "Disco",
    tipoLlaves: "Llaves lineales",
    codigoRaise: "P-1765",
    referencia: "HJ-0010",
    material: "HSS Coating",
    modeloMaquina: "Truper",
    precio: 1100,
    img: '../img/p1765.png',
},
{
    categoria: "Disco",
    tipoLlaves: "Llaves lineales",
    codigoRaise: "P-1764",
    referencia: "HJ-0111",
    material: "HSS Coating",
    modeloMaquina: "Defu",
    precio: 1000,
    img: '../img/p1764.png',
},
{
    categoria: "Disco",
    tipoLlaves: "Llaves lineales",
    codigoRaise: "P-4064",
    referencia: "X23MC",
    material: "HSS Coating",
    modeloMaquina: "Ilco 045",
    precio: 1100,
    img: '../img/p4064.png',
},
{
    categoria: "Cortador",
    tipoLlaves: "Llaves de Punto",
    codigoRaise: "P-695",
    referencia: "DW2090",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 300,
    img: '../img/p695.png',
},
{
    categoria: "Cortador",
    tipoLlaves: "Llaves de Punto",
    codigoRaise: "P-694",
    referencia: "DW2095",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 300,
    img: '../img/p694.png',
},
{
    categoria: "Cortador",
    tipoLlaves: "Llaves de Punto",
    codigoRaise: "P-1173",
    referencia: "DW2105",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 300,
    img: '../img/p1173.png',
},
{
    categoria: "Cortador",
    tipoLlaves: "Llaves de Regata",
    codigoRaise: "P-3121",
    referencia: "TH7015",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 300,
    img: '../img/p3121.png',
},
{
    categoria: "Cortador",
    tipoLlaves: "Llaves de Regata",
    codigoRaise: "P-3122",
    referencia: "EW5520B",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 300,
    img: '../img/p3122.png',
},
{
    categoria: "Cortador",
    tipoLlaves: "Llaves de Regata",
    codigoRaise: "P-3124",
    referencia: "EW5525B",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 300,
    img: '../img/p3124.png',
},
{
    categoria: "Guía",
    tipoLlaves: "Guía Llaves de Punto",
    codigoRaise: "P-679",
    referencia: "TH8090",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 250,
    img: '../img/p679.png',
},
{
    categoria: "Guía",
    tipoLlaves: "Guía Llaves de Punto",
    codigoRaise: "P-680",
    referencia: "TH8095",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 250,
    img: '../img/p680.png',
},
{
    categoria: "Guía",
    tipoLlaves: "Guía Llaves de Punto",
    codigoRaise: "P-682",
    referencia: "TH8105",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 250,
    img: '../img/p682.png',
},
{
    categoria: "Guía",
    tipoLlaves: "Guía Llaves de Regata",
    codigoRaise: "P-668",
    referencia: "TH7015",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 250,
    img: '../img/p668.png',
},
{
    categoria: "Guía",
    tipoLlaves: "Guía Llaves de Regata",
    codigoRaise: "P-669",
    referencia: "TH7020",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 250,
    img: '../img/p669.png',
},
{
    categoria: "Guía",
    tipoLlaves: "Guía Llaves de Regata",
    codigoRaise: "P-672",
    referencia: "TH7025",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    precio: 250,
    img: '../img/p672.png',
},
];

const listaProductos = [];

for (const item of datos) {
    listaProductos.push(
        new Producto(
            item.categoria,
            item.tipoLlaves,
            item.codigoRaise,
            item.referencia,
            item.material,
            item.modeloMaquina,
            item.precio,
            item.img
        )
    )
};
