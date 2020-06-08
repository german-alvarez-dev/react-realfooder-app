# React RealFooder SPA

Aplicación SPA de alimentos
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteración 5: detalles de producto

- Incluye un botón en cada producto de la lista que enlace a `/alimento/:id`, siendo `:id` el identificador de cada alimento.

- Crea un componente que se renderice al acceder a la URL, y que disponga de los detalles del producto siguiendo el aspecto que muestra la imagen inferior. Necesitarás hacer uso del componente de Tabs de Bootstrap.

-  Para obtener los detalles del producto, haz uso del endpoint `https://reactr-realfooder.herokuapp.com/api/foods/details/:id` de la API, obteniendo así un JSON con los detalles del alimento coincidente con el `:id`. Testea la validez del endpoint con Postman previo a comenzar.

![gif](https://res.cloudinary.com/ironhack-german/video/upload/e_loop/v1591030188/vid6.gif)
<p>&nbsp;</p>
<p>&nbsp;</p>


## Iteración 6: nuevo producto

- Incluye un botón en el índice de productos que despliegue un formulario para crear un nuevo producto en una ventana modal, siguiendo el aspecto de la imagen inferior. Necesitarás hacer uso del componente Modal de Bootstrap. Este botón sólo debe mostrarse si el usuario está logueado. 

- Una vez que el usuario ha rellenado los datos, podrá guardar el producto en la API a través del endpoint de tipo POST `https://reactr-realfooder.herokuapp.com/api/foods/newFood`, que espera el siguiente *payload* y retorna el producto creado en la BBDD (testea la validez del endpoint con Postman):

  | Key        | Type           | Description  |
  | ------------- | ------------- | ------------- |
  | `name` | String | Nombre del producto  |
  | `description` | String | Descripción del producto  |
  | `img` | String | Url de la imagen del producto (puedes usar [esta](https://res.cloudinary.com/ironhack-german/image/upload/v1591033289/no-image.jpg))  |
  | `price` | Number | Precio del producto  |
  | `kcal` | Number | Aporte calórico del producto  |
  | `protein` | Number | Aporte protéico del producto  |
  | `fat` | Number | Aporte de grasas del producto  |
  | `carbs` | Number | Aporte de cabrohidratos del producto  |
  | `stock` | Number | Stock del producto  |
  | `importTax` | Boolean | Aplica impuestos de importación  |
  | `origin` | Array | Array con los strings de los países de origen, que el usuario introduce separados por comas en el formulario  |
  | `owner_id` | String | ID del usuario que ha creado el producto  |
  
- Tras haber rellenado el formulario, el producto se visualiza con normalidad al final de la lista:
<p>&nbsp;</p>

![gif](https://res.cloudinary.com/ironhack-german/video/upload/c_crop,h_685,w_1280/e_loop/v1591117166/Secuencia_01_1.gif)
