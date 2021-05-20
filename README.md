# pizza-clients
A javascript package to help sort clients for people who use several(especially helpful if you use clients from multiple services)

# This package can be used for organizing any type of client and will show information about them, helping you organize them(if you have multiple)

 #               _**npm install pizza-clients**_
## How to use:  
```
const Clients = require('pizza-clients'); //importing the package
const client = new Clients.Client
(
  {
    name: 'Some name',
    purpose: 'Discord Bot',
    keywords: ['some keyword', 'some keyword 2', 'etc.'],
    description; 'Some description',
    version: 1.0,
    otherInfo: 'Some other information'
  }
) //creating a new client organizer
console.log(client)
/*
returns:
Client {
  name: 'Some name',
  purpose: 'This client is used for: Discord Bot',
  version: 1,
  description: 'Some description',
  keywords: '- some keyword, - some keyword 2, - etc.',
  otherInfo: 'Some other information'
}
*/
```
## Methods: 
>getInfo - Returns a short paragraph containing each value and describing the client.
>>Parameters - None

>missingProp - Returns an array containing all properties of a client that are set to their default values(you did not change them or invalid params were provided)
>>Parameters - None

> Example: [Example Client](https://replit.com/@PizzaOvenTacos/pizza-clients-example)
