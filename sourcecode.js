 module.exports = {
   Client: 
  class Client { 
    constructor(client) {
      this.name = client && typeof client == "object" &&  client.name ? client.name : "Default Name"
      this.purpose = client && typeof client == "object" &&  client.purpose ? `This client is used for: ${client.purpose}` : "Default type of Client"
      this.version = client && typeof client == "object" &&  client.version && !isNaN(client.version) ? client.version : 'First Version'
      this.description = client && typeof client == "object" &&  client.description ? client.description : 'No description was provided'
      this.keywords = client && typeof client == "object" &&  client.keywords && Array.isArray(client.keywords) ? `- ${client.keywords.join(", - ")}` : "No keywords were provided."
      this.otherInfo = client && typeof client == "object" &&  client.otherInfo ? client.otherInfo : null
    }
    getInfo() {
      return `Hello! My name is: ${this.name}.\nI am used for/a ${this.purpose}!\nCurrently, I am on version ${this.version}.\nI will give you a description of me and my abilities: ${this.description}\nSome Words that categorize/generalize my usage are: ${this.keywords}.\nHere is some other info about me: ${this.otherInfo}`
    }
    missingProp() {
      var missingprop = [];
      if(this.name == "Default Name") missingprop.push('name');
      if(this.purpose == "Default type of Client") missingprop.push('purpose');
      if(this.version == "First Version") missingprop.push('version');
      if(this.description == "No description was provided") missingprop.push('description');
      if(this.keywords == "No keywords were provided.") missingprop.push('keywords');
      if(this.otherInfo == null) missingprop.push('otherInfo')
      return missingprop;
    }
  }
 }
