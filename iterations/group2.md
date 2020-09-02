# React RealFooder SPA

<p>&nbsp;</p>
<p>&nbsp;</p>

## Iteration 5: product details

- Include a button on each product on the list, linking to the URL `/alimento/:id`, replacing `:id` with each food ID. 

- Develop a component rendered under the mentioned path, showing the product's details following the design above. You'll need to make use of Bootstrap React's Tabs component.

-  Use the GET endpoint `https://reactr-realfooder.herokuapp.com/api/foods/details/:id` to fetch the product's details from the API, and don't forget to test it with Postman previous to develop in case you'd like to save time and work on the best conditions! <p>&nbsp;</p>

![gif](https://res.cloudinary.com/ironhack-german/video/upload/e_loop/v1591030188/vid6.gif)
<p>&nbsp;</p>
<p>&nbsp;</p>


## Iteration 6: new product

- Include a button on the product list to show a modal window containing a form. This form showld follow the image abobe aspect and will allow the user to create new foods on the app. Remember the button should only be rendered if the user is logged in, and make use ob Bootstrap React's Modal Window to archvieve the requested UI.

- Once the user has filled the fields (all required!) you can handle the form submission through the POST endpoint located at `https://reactr-realfooder.herokuapp.com/api/foods/newFood`, ready to receive the following payload: <p>&nbsp;</p>

  | Key        | Type           | Description  |
  | ------------- | ------------- | ------------- |
  | `name` | String | Product name  |
  | `description` | String | Product description  |
  | `img` | String | Product image URL - you can use [this one](https://res.cloudinary.com/ironhack-german/image/upload/v1591033289/no-image.jpg) if you wish  |
  | `price` | Number | Product price  |
  | `kcal` | Number | Caloric intake  |
  | `protein` | Number | Protein intake  |
  | `fat` | Number | Fat intake  |
  | `carbs` | Number | Carbs intake  |
  | `stock` | Number | Product stock  |
  | `importTax` | Boolean | Import tax apply?  |
  | `origin` | Array | Origin countries as an Array, one country per position taken from the comma-separated countries typed by the user on the form |
  | `owner_id` | String | Logged in user ID  |
  
- After filling the form, the new product automatically shows on the products list:
<p>&nbsp;</p>

![gif](https://res.cloudinary.com/ironhack-german/video/upload/c_crop,h_685,w_1280/e_loop/v1591117166/Secuencia_01_1.gif)
