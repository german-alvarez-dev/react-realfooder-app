# React RealFooder SPA

Aplicación SPA de alimentos

## Iteración 0: preparación del entorno

- Clónate este repositorio e instala la aplicación.

- Examina minuciosamente el producto: una SPA que incluye tanto una navegación inicial como una página de inicio y toda la gestión de registro, login y logout resuelta.

- Comprueba cómo tanto el login como el logout y el signup están conectados a una API en heroku, con URL base `https://reactr-realfooder.herokuapp.com/api/`
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteración 1: listado de alimentos
- La API dispone del endpoint https://reactr-realfooder.herokuapp.com/api/foods para retornar un JSON con todos los alimentos.

- Crea un componente `Foods-index` que sea renderizado en la URL `/alimentos`, e inclúyelo en la barra de navegación para que sea accedido por el usuario.

- El componente debe hacer una llamada a la API y mostrar los alimentos retornados en una interfaz de aspecto como el que sigue: 

![img1](https://res.cloudinary.com/ironhack-german/image/upload/v1590923235/s1.png)
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteración 2: filtrado de alimentos

- Incluye un pequeño filtro de texto en el componente para mostrar aquellos alimentos cuyo nombre contenga el texto ingresado, en caso de no haber concurrencias, muestra *sin resultados*:

![gif1](https://res.cloudinary.com/ironhack-german/image/upload/v1590923818/_vid2.gif)
