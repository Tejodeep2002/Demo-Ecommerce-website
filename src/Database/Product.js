
const products = [
    {
        id:1,
        name: "Woo Ninja",
        image: "./images/hoodie-1.jpg",
        price: "35.00",
        category:"hoodie",
        description:{
            color:"black",
            size:"XL",
        },
        instock:5,
        quantity:1
    },
    {
        id:2,
        name: "Grey Ninja",
        image: "./images/hoodie-2.jpg",
        price: "35.00",
        category:"hoodie",
        description:{
            color:"grey",
            size:"L",
        },
        instock:5,
        quantity:1
    },
    {
        id:3,
        name: "Rose Ninja",
        image: "./images/hoodie-3.jpg",
        price: "35.00",
        category:"hoodie",
        description:{
            color:"pink",
            size:"XL",
        },
        instock:5,
        quantity:1
    },
    {
        id:4,
        name: "Wow Hoodie",
        image: "./images/hoodie-4.jpg",
        price: "35.00",
        category:"hoodie",
        description:{
            color:"purple",
            size:"XL",
        },
        instock:5,
        quantity:1
    },
    {
        id:5,
        name: "Shadow Jeans",
        image: "./images/jeans-1.jpg",
        price: "35.00",
        category:"jeans",
        description:{
            color:"blue",
            size:"XL",
        },
        instock:5,
        quantity:1
    },
    {
        id:6,
        name: "Cheanos",
        image: "./images/jeans-2.jpg",
        price: "35.00",
        category:"jeans",
        description:{
            color:"black",
            size:"XL",
        },
        instock:5,
        quantity:1
    },
    {
        id:7,
        name: "Slim Polo Shirt",
        image: "./images/polo shirt-1.jpg",
        price: "35.00",
        category:"polo",
        description:{
            color:"blue",
            size:"M",
        },
        instock:5,
        quantity:1
    },
    {
        id:8,
        name: "Night Polo Shirt",
        image: "./images/polo shirt-2.jpg",
        price: "35.00",
        category:"polo",
        description:{
            color:"black",
            size:"L",
        },
        instock:5,
        quantity:1
    },
    {
        id:9,
        name: "Orenge Polo",
        image: "./images/polo shirt-3.jpg",
        price: "35.00",
        category:"polo",
        description:{
            color:"orenge",
            size:"XL",
        },
        instock:5,
        quantity:1
    },
    {
        id:10,
        name: "White Polo",
        image: "./images/polo shirt-4.jpg",
        price: "35.00",
        category:"polo",
        description:{
            color:"white",
            size:"M",
        },
        instock:5,
        quantity:1
    },
    {
        id:11,
        name: "Slim Trouser ",
        image: "./images/trouser-1.jpg",
        price: "35.00",
        category:"trouser",
        description:{
            color:"brown",
            size:"L"
        },
        instock:5,
        quantity:1
    },
    {
        id:12,
        name: "Tight Black trouser",
        image: "./images/trouser-2.jpg",
        price: "35.00",
        category:"trouser",
        description:{
            color:"black",
            size:"XL",
        },
        instock:5,
        quantity:1
    }
];


export default function getProducts(){
    return products;
}
