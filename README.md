
# Client Management App
Coded by Aivar Romandi

RESTful API using Node, Express and MongoDB

# Introduction
The app is for adding, deleting, modifying clients.

Every client is required to have an email and phone.  
The phone and email must be validated.  
The phone must be in format that is used in Great Britain.  
It doesn't let the user add a client if the email and phone aren't validated.
The phone numbers are encrypted, only the last 4 digits are not.  
Other fields can vary from request to request, having arbitrary both name and value.

# Usage
1. Download MongoDB before using if it isn't already installed
2. Open mongod.exe
3. Execute command: node app
4. Open localhost:3000 in browser

# Example Functionality
**Clients**
![clients](https://github.com/aivarro/Client-Managing-App/blob/master/clients.jpg?raw=true "clients")  
**Add a client**  
![add client](https://github.com/aivarro/Client-Managing-App/blob/master/addclient.jpg?raw=true "add client")  
**ew client has been added**
![added](https://raw.githubusercontent.com/aivarro/Client-Managing-App/master/added.JPG "added")  
**View of the client information**
![view client](https://github.com/aivarro/Client-Managing-App/blob/master/viewclient.JPG?raw=true "view client")
