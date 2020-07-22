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

In case you need to reboot the foods <a href="https://reactr-realfooder.herokuapp.com/api/foods/reboot">proceed here</a>. The foods collection will be dropped and seeded with the default set of products. 


