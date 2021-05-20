const Clients = require('pizza-clients');
const client = new Clients.Client
(
  {
    name: 'A testing client',
    purpose: 'Git Example',
    keywords: ['Example', 'Organized'],
    description: 'A testing client that can be used to sort information that I would like to keep track of.',
    version: 1.0,
    otherInfo: 'This client-sorter is one of my first decent-sized projects.'
  }
); //because this is class based, you can easily make multiple clients on the same repo.
console.log(client); /*
returns: 
Client {
  name: 'A testing client',
  purpose: 'This client is used for: Git Example',
  version: 1,
  description: 'A testing client that can be used to sort information that I would like to keep track of.',
  keywords: '- Example, - Organized',
  otherInfo: 'This client-sorter is one of my first decent-sized projects.'
*/
console.log(client.getInfo()); /*
returns: 
Hello! My name is: A testing client.
I am used for/a This client is used for: Git Example!
Currently, I am on version 1.
I will give you a description of me and my abilities: A testing client that can be used to sort information that I would like to keep track of.
Some Words that categorize/generalize my usage are: - Example, - Organized.
Here is some other info about me: This client-sorter is one of my first decent-sized projects.
*/
console.log(client.missingProp()); /*
returns: 
[]
if we did not define everything, it would return every property that is the default value.
if we defined client as this:
const client = new Clients.Client()
it would return: 
[
  'name',
  'purpose',
  'version',
  'description',
  'keywords',
  'otherInfo'
]
*/
