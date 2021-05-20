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
)
