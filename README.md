# React RealFooder SPA

Spanish foods SPA application

## Iterations

After reading this document, you can start solving each iteration group:
- Group 1 [in this link](https://github.com/german-alvarez-dev/react-realfooder-app/blob/master/iterations/group1.md)
- Group 2 [in this link](https://github.com/german-alvarez-dev/react-realfooder-app/blob/master/iterations/group2.md)
- Group 3 [in this link](https://github.com/german-alvarez-dev/react-realfooder-app/blob/master/iterations/group3.md)
- Group 4 [in this link](https://github.com/german-alvarez-dev/react-realfooder-app/blob/master/iterations/group4.md)

## About the API

You will need to use an API based on the `https://reactr-realfooder.herokuapp.com/api` URL, containing the following endpoints:

 | Path        | Method           | JSON response  |
  | ------------- | ------------- | ------------- |
  | `/countries` | GET | All available countries  |
  | `/foods`  | GET | All products  |
  | `/foods/details/:id` | GET | ID matching product's details  |
  | `/foods/newFood` | POST | Create new product  |
  | `/foods/delete/:id` | DELETE | Delete ID matching product  |
  
  
## Users available

You have two existent users on the database, in case you need them to make your tests: 
- **User 1** (username: `User 1`, pwd: `user 1`, origin `spain`)
- **User 2** (username: `User 2`, pwd: `user 2`, origin `france`)


## Product reboot

Have you created a bunch of food products that makes the application hard to manage? No worries! 

In case you need to reboot the foods, just press the link after the code and the foods collection will be dropped and seeded with the default following products:

````javascript

const foods = [
    {
        "origin": [
            "spain",
            "china",
            "mexico",
            "japan"
        ],
        "name": "Berenjena",
        "description": "Precio unitario, peso unitario aproximado 100 / 200 gramos. Variedad de origen francés.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033182/berenjena.jpg",
        "price": 3.2,
        "kcal": 25,
        "protein": 2,
        "fat": 6,
        "carbs": 5,
        "stock": 10,
        "importTax": false,
        "owner_id": "5ed53439fc300700177b3712"
    },
    {
        "origin": [
            "united states",
            "italy",
            "united kingdom",
            "france"
        ],
        "name": "Espárragos",
        "description": "Manojo de 10 unidades. Variedad de tronco ancho, origen Perú.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033182/esparragos.png",
        "price": 2.25,
        "kcal": 139,
        "protein": 5,
        "fat": 12,
        "carbs": 3,
        "stock": 10,
        "importTax": true,
        "owner_id": "5ed53446fc300700177b3713"
    },
    {
        "origin": [
            "china",
            "japan",
            "united states",
            "italy",
            "india"
        ],
        "name": "Lechuga romana",
        "description": "Variedad de tronco ancho, alargado y erguido. Precio unitario, peso aproximado 250 gramos. Embalaje plástico.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033181/lechuga.jpg",
        "price": 3.15,
        "kcal": 13,
        "protein": 1,
        "fat": 4,
        "carbs": 8,
        "stock": 10,
        "importTax": true,
        "owner_id": "5ed53439fc300700177b3712"

    },
    {
        "origin": [
            "mexico",
            "peru",
            "colombia",
            "chile",
            "kenya",
            "spain"
        ],
        "name": "Aguacate",
        "description": "Variedad grande de semilla ancha. Precio por kilogramo, variable a lo largo del año.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033182/aguacate.jpg",
        "price": 5.75,
        "kcal": 160,
        "protein": 4,
        "fat": 14,
        "carbs": 8,
        "stock": 10,
        "importTax": false,
        "owner_id": "5ed53446fc300700177b3713"
    },
    {
        "origin": [
            "china",
            "united states",
            "turkey",
            "egypt",
            "spain"
        ],
        "name": "Tomate rama",
        "description": "Rama entera original. Variedad de tomate ensalada en rama, peso aproximado 200 gramos. Origen España.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033181/tomate.jpg",
        "price": 2,
        "kcal": 18,
        "protein": 1,
        "fat": 17,
        "carbs": 3,
        "stock": 10,
        "importTax": false,
        "owner_id": "5ed53439fc300700177b3712"

    },
    {
        "origin": [
            "china",
            "india",
            "united states",
            "iran",
            "russia",
            "pakistan",
            "spain"
        ],
        "name": "Cebolla",
        "description": "Bolsa de 4 unidades, variedad española. Precio por bolsa, peso aproximado 350 / 400 gramos.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033181/cebolla.jpg",
        "price": 2.25,
        "kcal": 40,
        "protein": 7,
        "fat": 10,
        "carbs": 9,
        "stock": 10,
        "importTax": false,
        "owner_id": "5ed53446fc300700177b3713"
    },
    {
        "origin": [
            "china",
            "japan",
            "united states",
            "turkey",
            "france"
        ],
        "name": "Espinaca",
        "description": "Manojo de 150 gramos. Variedad alta de tronco estrecho, origen España.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033181/espinaca.jpg",
        "price": 1,
        "kcal": 23,
        "protein": 3,
        "fat": 2,
        "carbs": 4,
        "stock": 10,
        "importTax": true,
        "owner_id": "5ed53439fc300700177b3712"
    },
    {
        "origin": [
            "france",
            "china",
            "spain",
            "united states",
            "poland",
            "canada"
        ],
        "name": "Champiñón",
        "description": "Paquete de 100 gramos, variedad grande sin laminar de tronco cortado. No lavados. Origen España.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033181/champinon.jpg",
        "price": 2.1,
        "kcal": 22,
        "protein": 3,
        "fat": 6,
        "carbs": 3,
        "stock": 10,
        "importTax": false,
        "owner_id": "5ed53446fc300700177b3713"
    },
    {
        "origin": [
            "china",
            "iran",
            "spain",
            "japan",
            "russia"
        ],
        "name": "Pepino",
        "description": "Precio unitario, peso unitario aproximado 100 / 200 gramos. Variedad de origen francés.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033181/pepino.jpg",
        "price": 1.15,
        "kcal": 15,
        "protein": 2,
        "fat": 0,
        "carbs": 7,
        "stock": 10,
        "importTax": false,
        "owner_id": "5ed53439fc300700177b3712"

    },
    {
        "origin": [
            "china",
            "iran",
            "united states",
            "spain",
            "japan",
            "russia"
        ],
        "name": "Sandía",
        "description": "Sin pepitas, precio por 100 gramos. Peso unitario aproximado 600 / 800 gramos. Origen España.",
        "img": "https://res.cloudinary.com/ironhack-german/image/upload/v1591033181/melocoton.jpg",
        "price": 3.2,
        "kcal": 30,
        "protein": 3,
        "fat": 3,
        "carbs": 7,
        "stock": 10,
        "importTax": false,
        "owner_id": "5ed53439fc300700177b3712"
    }
]
````



