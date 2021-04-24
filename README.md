# jsRegister
a checkbook register running on node js

## This app is meant to be run on a local network - there is no login or authentication


### mysql db code:

create database jsRegister;

CREATE TABLE jsRegister.`events` (

`id` int(11) NOT NULL AUTO_INCREMENT,

`title` varchar(100) NOT NULL,

`start` datetime NOT NULL,

`end` datetime NOT NULL,

`amount` float NOT NULL,

PRIMARY KEY (`id`)

) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

### Run the preceding sql in mysql workbench or mysqladmin on the server running mysql

if you want to change the dbname, change the sql above and edit config.js to reflect your db and credentials.

You will need to make several changes in config.js, the main configuration file to suit your app

### Install node js

see https://phoenixnap.com/kb/update-node-js-version

### Install nodemon globally with 
* sudo npm i nodemon -g
* npm install // to pull the node_modules, which are not included in this repo

### After you run the sql code, unpack the app at your desired location

get a free cert from let's encrypt https://letsencrypt.org and install it at your desired location (can be in the root of your app)

cd /home/your/node/location

run ./nodestart.sh

### navigate to https://your.local.domain:port

add events by using the form given

if you have any issues with this app, submit an issue
