# PET-IOT-BE
## Set up Backend
Clone the repository using following command
```
https://github.com/hungvo2003vn-pet-org/PET-IOT-BE.git
```

To install dependency, open terminal
```
npm install
```

Create .env file. Example file:
```
PORT = 8080
ACCESS_TOKEN_KEY = "YOUR_ACCESS_TOKEN_KEY"
REFRESH_TOKEN_KEY = "YOUR_REFRESH_TOKEN_KEY"
ACCESS_TOKEN_EXPIRES_TIME="7d"
REFRESH_TOKEN_EXPIRES_TIME="30d"
MONGO_DB="YOUR_MONGODB_URI"
```

To start the server
```
npm start
```

If you add something new in .env file, please update it in Jira Software and Messenger for everyone

