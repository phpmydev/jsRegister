/*
 * config.js
 * Author: Richard Whitney
 * Date: 2021-04-23
 *
 * */



module.exports = {
  port : 1992,
  sitename: 'JS REGISTER', /* appears in the upper left corner of your calendar*/
  favicon: 'favicon.png', /* under html/images */
  certpath: '/home/pi/', /* ./ if in this directory*/
  certKey: 'domain.key',
  cert: 'chained.pem',
  host: 'jsregister.jsnode.dev', /* inconsequential - sed only for console logging the domain*/
  dbhost: '192.168.1.100', /* localhost or remote pi running mysql */
  dbuser: 'yourdbusername',
  dbpassword: 'yourdbpassword',
  database: 'yourdbname',
}
