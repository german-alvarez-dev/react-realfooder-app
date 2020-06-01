# React RealFooder SPA

Aplicación SPA de alimentos
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteración 0: preparación del entorno

- Clónate este repositorio e instala la aplicación.

- Examina minuciosamente el producto: una SPA que incluye tanto una navegación inicial como una página de inicio y toda la gestión de registro, login y logout resuelta.

- Comprueba cómo tanto el login como el logout y el signup son funcionales y se encuentran conectados a una API en heroku, con URL base `https://reactr-realfooder.herokuapp.com/api/`
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteración 1: país de usuario
- Comprueba cómo el componente `signup` envía a la API los campos `username` y `password` del usuario tras su registro, retornando el nuevo usuario creado en la base de datos al que, a su vez, se le inicia sesión. Podrás ver que el usuario retornado dispone de una propiedad `country` con valor por defecto `undefined`.

- Incluye una lista desplegable en el formulario de registro con los países de origen de los usuarios, que se encuentran en la API bajo la URL https://reactr-realfooder.herokuapp.com/api/countries. Para completar esta iteración necesitarás:
  - Crear en el componente los servicios específicos de los países e incluirlos junto con los servicios que ya figuran de autorización.
  - Guardar los países retornados en el estado del componente.
  - Iterarlos en la lista de selección para mostrar el nombre de cada país en cada `<option>`.

- Incluye este dato en el registro del usuario, eviando a la API el texto con el nombre del país seleccionado como `country` junto con `username` y `password`. Verfica que el usuario retornado tras el registro incluye el país que se ha seleccionado en la lista.

- El componente `signup` pasará a disponer entonces de una interfaz de aspecto como el que sigue:

![img1](https://res.cloudinary.com/ironhack-german/video/upload/e_loop/v1590927049/vid5.gif)
<p>&nbsp;</p>
<p>&nbsp;</p>


## Iteración 2: listado de alimentos
- La API dispone del endpoint https://reactr-realfooder.herokuapp.com/api/foods para retornar un JSON con todos los alimentos.

- Crea un componente `Foods-index` que sea renderizado en la URL `/alimentos`, e inclúyelo en la barra de navegación para que sea accedido por el usuario.

- El componente debe hacer una llamada a la API y mostrar los alimentos retornados en una interfaz de aspecto como el que sigue: 

![img1](https://res.cloudinary.com/ironhack-german/image/upload/v1590923235/s1.png)
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteración 3: filtrado de alimentos

- Incluye un pequeño filtro de texto en el componente para mostrar aquellos alimentos cuyo nombre contenga el texto ingresado, en caso de no haber concurrencias, muestra *sin resultados*:

![gif](https://res.cloudinary.com/ironhack-german/video/upload/e_loop/v1590924407/vid3.gif)
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteración 4: producto de proximidad

- Incluye una mención a *Proximidad* en las filas de aquellos productos que dispongan, entre sus países de origen (propiedad `origin` de cada producto), el país al que pertenece el usuario que haya iniciado sesión. Necesitarás transferirlo mediante una `prop` desde App a este componente para alcanzar el objetivo:

![gif](https://res.cloudinary.com/ironhack-german/image/upload/v1590941896/Captura_de_pantalla_2020-05-31_a_las_18.17.01.png)
