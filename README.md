# jsRegister
a checkbook register running on node js

## mysql db code:

create database jsRegister;

CREATE TABLE jsRegister.`events` (

`id` int(11) NOT NULL AUTO_INCREMENT,

`title` varchar(100) NOT NULL,

`start` datetime NOT NULL,

`end` datetime NOT NULL,

`amount` float NOT NULL,

PRIMARY KEY (`id`)

) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
