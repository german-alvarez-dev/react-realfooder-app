# React RealFooder SPA
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteration 0: set up the environment

- Clone this repo and install the dependences.

- Check thoughtfully the app: a SPA including the initial navigation, as well as the index page and the entire login, signup and logout system solved. 

- Test how signup, login and logout work correctly before starting to develop!
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteration 1: user country
- When the user registers on the app, the Signup component sends the `username` and `password` to the API, returning the registered and logged in user object from the database. You'll see that each user has a `country` property with an `undefined` default value.

- Include a select list on the signup form filled with one of the the available countries per option. Those countries are stored separately on the API under the `https://reactr-realfooder.herokuapp.com/api/countries` endpoint (GET). In order to complete this iteration you'll need to :
  - Create the service related to the countries and instancing them on the component along with the auth services already included on it.
  - Save the returned countries from the API on the state.
  - Iterate them on the select list in order to show an `<option>` per country.

- Add this field on the info sent to the API during the signup process, as a `country` property containing the country name. This means that the API should receive 3 properties: `country`, `username` and `password`. Once done, verify the returned user object includes the selected country on the list. 

- Now your `signup` shwould look as it follows: <p>&nbsp;</p>

![img1](https://res.cloudinary.com/ironhack-german/video/upload/e_loop/v1590927049/vid5.gif)
<p>&nbsp;</p>
<p>&nbsp;</p>


## Iteration 2: foods list
- You will use now the `https://reactr-realfooder.herokuapp.com/api/foods` endpoint (GET) to get a JSON with all the foods from the API.

- Develop a `FoodsIndex` component under the `/alimentos` route, and include it on the Navbar to make it accesible for the user.

- The component should call the API for the foods array (yup, that's done through a service!), rendering returned foods as it shows: <p>&nbsp;</p>

![img1](https://res.cloudinary.com/ironhack-german/image/upload/v1590923235/s1.png)
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteration 3: foods filter

- Include a fancy text filter on the view to show those foods which name is or contains the typed text, on real time. In case there's no match, show some kind of _no results found_ message: <p>&nbsp;</p>

![gif](https://res.cloudinary.com/ironhack-german/video/upload/e_loop/v1590924407/vid3.gif)
<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteration 4: local products

- Show a _local product_ on each food when the logged in user's country matches with one of the countries contained on the `origin` food property. Obviously, this will only be shown for logged in users, and here's a clue: you can find the user's country stored on the `App` omponent state.
- You can log in with User 1 (country: spain) or User 2 (country: france) on the app to help you archieve this iteration.
- Finally, you'll have a product list similar to this: <p>&nbsp;</p>

![gif](https://res.cloudinary.com/ironhack-german/image/upload/v1590941896/Captura_de_pantalla_2020-05-31_a_las_18.17.01.png)
