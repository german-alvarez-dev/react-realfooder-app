# Webinar React: from 0 to SPA (parte 2)

Materiales de la segunda partde del webinar sobre  **React: from 0 to SPA** impartido desde Ironhack Madrid | 45 min - mar. 2020

## Grabaciones
- Segunda parte del webinar [en este vídeo](https://youtu.be/k13Pztr3ZLk?t=248).
- Primera parte del webinar (vídeo + códigos) [en este repositorio](https://github.com/german-alvarez-dev/webinar-react-spa-1).

## Instalación

`npm i` o `npm install` sobre el directorio del proyecto permite la instalación de las dependencias.

## Ejecución 

`npm start` sobre el directorio del proyecto lo ejecuta en modo de desarrollo.

## Challenge
-  Crea un componente de UI para el pie de página, de nombre *Footer*, e inclúyelo en `App.js` para que se muestre en cualquier vista.
- Manipula la vista de detalles de cada alimento de la siguiente forma: 
  - Haz uso de la propiedad `importTax` para, en caso de ser `true`, se muestre un aviso tras el precio donde se indica *aplican impuestos de importación*.
  - En caso de tratarse de un alimento con un aporte calórico inferior a 150 y un aporte protéico superior a 2, muestra en la pestaña *información nutricional* el comentario *apto para dieta deportiva*.
  - Muestra un botón bajo la descripción del producto con el texto *Cálculo PVP*. Al clickarlo, muestra una [ventana modal de Bootstrap React](https://react-bootstrap.github.io/components/modal/) donde figure una tabla con los diferentes precios finales resultantes de aplicar al coste los impuestos **exento (0%), reducido (10%)** y **general (21%)**. 
