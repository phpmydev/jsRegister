/*
 * config.js
 * Author: Richard Whitney
 * Date: 2021-04-23
 *
 * */



module.exports = {
  port : 1992,
  sitename: 'JS REGISTER',
  favicon: 'favicon.png', /* under html/images */
  certpath: '/home/pi/',
  certKey: 'domain.key',
  cert: 'chained.pem',
  host: 'jsregister.jsnode.dev',
  dbhost: '192.168.1.100',
  dbuser: 'pmd',
  dbpassword: '',
  database: 'yourdbname',
}

/*
 *
 create database jsRegister;

CREATE TABLE jsRegister.`events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `amount` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
*
 * */

