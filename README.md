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

HIVEMQ_CLOUD="YOUR_MQTT_CLOUD_URL"
HIVEMQ_USERNAME="YOUR_USERNAME"
HIVEMQ_PASSWORD="YOUR_PASSWORD"
TIMEZONE="+07:00"
TIMEZONE_OFFSET=7
```

To start the server
```
npm start
```

If you add something new in .env file, please update it in Jira Software and Messenger for everyone

