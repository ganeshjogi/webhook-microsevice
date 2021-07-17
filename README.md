# webhooks microservice 

In this project webhooks microservice implemented by using molecular and express

---
## Requirements

For development, you will only need Node.js and a node global package.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm` .  After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Install

    $ git clone https://github.com/ganeshjogi/webhook-microsevice.git
    $ cd webhook-microsevice
    $ npm install



## Running the project

    $ npm start
    
# Testing project

For testing the project you can use the api platforms like postman to test apis developed in this project

1. List of all target urls
    
    API : http://localhost:8000/admin/list 

    Method : GET
    
    Parameters : None


2. Register New target url
    
   API : http://localhost:8000/admin/register

   Method : POST
             
    Parameters : targetUrl



3. Update existing target url

    API : http://localhost:8000/admin/update
    
    Method : PATCH
    
    Parameters : id


4. Delete target url                               
        
    API : http://localhost:8000/admin/delete
    
    Method : DELETE

    Parameters : id


5. Web hook trigger
       
     API : http://localhost:8000/ip
     
    Method : POST
 
    Parameters : ipAddress 
        

