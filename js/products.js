class Producto {
    constructor(
        categoria, codigoRaise, referencia, material, modeloMaquina, stock, precio, img) {
        this.categoria = categoria;
        this.codigoRaise = codigoRaise;
        this.referencia = referencia;
        this.material = material;
        this.modeloMaquina = modeloMaquina.toUpperCase();
        this.stock = stock;
        this.precio = precio;
        this.img = img;
    };
};

const datos = [{
    categoria: "Disco",
    codigoRaise: "P-1765",
    referencia: "HJ-0010",
    material: "HSS Coating",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 1100,
    img: '../img/p1765.png',
},
{
    categoria: "Disco",
    codigoRaise: "P-1764",
    referencia: "HJ-0111",
    material: "HSS Coating",
    modeloMaquina: "Defu",
    stock: 5,
    precio: 1000,
    img: '../img/p1764.png',
},
{
    categoria: "Disco",
    codigoRaise: "P-4064",
    referencia: "X23MC",
    material: "HSS Coating",
    modeloMaquina: "Ilco 045",
    stock: 5,
    precio: 1100,
    img: '../img/p4064.png',
},
{
    categoria: "Cortador (Llaves de Punto)",
    codigoRaise: "P-695",
    referencia: "DW2090",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 300,
    img: '../img/p695.png',
},
{
    categoria: "Cortador (Llaves de Punto)",
    codigoRaise: "P-694",
    referencia: "DW2095",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 300,
    img: '../img/p694.png',
},
{
    categoria: "Cortador (Llaves de Punto)",
    codigoRaise: "P-1173",
    referencia: "DW2105",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 300,
    img: '../img/p1173.png',
},
{
    categoria: "Cortador (Llaves de Regata)",
    codigoRaise: "P-3121",
    referencia: "TH7015",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 300,
    img: '../img/p3121.png',
},
{
    categoria: "Cortador (Llaves de Regata)",
    codigoRaise: "P-3122",
    referencia: "EW5520B",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 300,
    img: '../img/p3122.png',
},
{
    categoria: "Cortador (Llaves de Regata)",
    codigoRaise: "P-3124",
    referencia: "EW5525B",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 300,
    img: '../img/p3124.png',
},
{
    categoria: "Guía para Cortador (Punto)",
    codigoRaise: "P-679",
    referencia: "TH8090",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 250,
    img: '../img/p679.png',
},
{
    categoria: "Guía para Cortador (Punto)",
    codigoRaise: "P-680",
    referencia: "TH8095",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 250,
    img: '../img/p680.png',
},
{
    categoria: "Guía para Cortador (Punto)",
    codigoRaise: "P-682",
    referencia: "TH8105",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 250,
    img: '../img/p682.png',
},
{
    categoria: "Guía para Cortador (Regata)",
    codigoRaise: "P-668",
    referencia: "TH7015",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 250,
    img: '../img/p668.png',
},
{
    categoria: "Guía para Cortador (Regata)",
    codigoRaise: "P-669",
    referencia: "TH7020",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 250,
    img: '../img/p669.png',
},
{
    categoria: "Guía para Cortador (Regata)",
    codigoRaise: "P-672",
    referencia: "TH7025",
    material: "Carburo de Tungsteno",
    modeloMaquina: "Truper",
    stock: 5,
    precio: 250,
    img: '../img/p672.png',
},
];

const listaProductos = [];

for (const item of datos) {
    listaProductos.push(
        new Producto(
            item.categoria,
            item.codigoRaise,
            item.referencia,
            item.material,
            item.modeloMaquina,
            item.stock,
            item.precio,
            item.img
        )
    )
};