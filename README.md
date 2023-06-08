# Radiology Assistant
## Hand gesture tool for radiology image transformation - Final year project



## Tech Stacks Used:

- HTML
- CSS
- JavaScript
- Python (Flask)
- MongoDB
- Deep learning model (CNN Model)
- KNN classification algorithm
- Email.js 


## :point_down:Steps to initialize the project:

- Clone the repository

```
$ git clone https://github.com/anjupriya-v/radiology-assistant.git
```

- Redirect to the cloned repo directory

- Open up the terminal and redirect to client directory.

- Install the python requirements

```
pip install -r requirements.txt
```

- create the mongoDB account in the mongoDB atlas and create the cluster

- Note: A guide to create the mongoDB account and mongoDB URL
  https://www.youtube.com/watch?v=oVHQXwkdS6w


- click on connect and select connect your application.

- select python as Driver and select version as per the version that you have installed in your PC and get the MONGO DB url from it

- Then create the database user by clicking the database access from the mongoDB atlas menu and click on `Add New Database User`. Then provide the username and password and set the built-in role as `read and write to any database` and click on Add user.

- Replace the DB user name and password in the MongoDB URL.

- Create an .env file in the root directory. Set the key as `MONGODB_URL` and paste the MongoDB URL that you have copied as the value.


- To create the database, click the database from the mongoDB atlas menu. Then click `Browse Collections` and click `Create Database`

- Note: The database should be named as `RadiologyAssistant` and  the collection should be named as `Account` .

- Create the Secret key typing the following command in the terminal.

```
python -c 'import os; print(os.urandom(24))';
```

- Secret key will be generated and set the key as `SECRET_KEY` and paste the generated secret key as the value.


- Use email.js for sending the contact form data to your email inbox

- Create the email.js account in `https://www.emailjs.com/` and paste the service id, template id and user id in `/static/js/contact.js`

- A guide to Email.js

  https://www.youtube.com/watch?v=dgcYOm8n8ME

- For starting the application, type the following in the new command prompt

```
flask --app app --debug run
```
- The app will run on `http://127.0.0.1:5000/`

