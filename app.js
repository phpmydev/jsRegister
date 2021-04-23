/*
 * app.js
 * Author: Richard Whitney
 * Date: 2021-04-23
 *
 * */

'use strict';
var exec              = require('child_process').exec;
const spdy            = require('spdy');
var express           = require('express');
var fs                = require('fs');
var app               = express(),
    https             = require('https'),
    http              = require('http');
var db                = require('./db');
var config            = require('./config');
var ejs               = require('ejs');

app.use(function(req, res, next){
  res.set({
    'strict-transport-security': 'max-age=31536000',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-XSS-Protection': '1; mode=block',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'no-referrer'
  });
  next();
})

/*
 * app variables that are not node modules
 * */
var appPort = config.port,
    sockets = {},
    host    = config.host;

app.use(express.static("html"));

app.use(function(req,res,next){
  res.locals.ip = req.ip;
  console.log(res.locals.ip);
  next();
});

// js, css, images etc.
app.get('/include/:path/:file', function (req, res) {
  if(fs.existsSync( __dirname + '/html/' + req.params.path + '/' + req.params.file)){
    res.sendFile( __dirname + '/html/' + req.params.path + '/' + req.params.file);
  } else {
        res.render('index',{filename:'404',url:req.url,heading:''});
    }
});

app.get('/scripts/:mod/:file', function(req,res){
  switch(req.params.mod){
    case 'jquery':res.sendFile(__dirname + '/node_modules/jquery/dist/' + req.params.file);break;
    case 'socket.io':res.sendFile(__dirname + '/node_modules/socket.io-client/dist/' + req.params.file);break;
  }
});

var port = process.env.PORT || appPort;
console.log( port, host );

app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('view cache', false);

var certpath = config.certpath;
var options = {
    key     : fs.readFileSync(certpath + config.certKey),
    cert    : fs.readFileSync(certpath + config.cert)
}

var server = spdy.createServer(options, app).listen(port);

app.get('/favicon.ico',function(req,res){
    res.send('');
});

app.get('/images/favicon.png', function (req, res) {
    //~ res.sendFile( __dirname + '/html/images/favicon.png');
    res.sendFile( __dirname + '/html/images/' + config.favicon);
});

app.get('/',function(req,res){
    var date = new Date();
    res.render('index',{
      filename: __dirname + '/views/index',
      heading:'headings/blank',
      sitename: config.sitename,
      year: date.getFullYear(),
      port: config.port
    });

});

var io = require('socket.io').listen(server);


io.on('connection', function(socket){
    socket.on('event',function(data){
        db.sql('event', '', data);
    });

    socket.on('sum',function(data){
        db.sql('sum', '', function(err, row){
            if(err){
                console.log(err);
            }
            console.log(row);
            socket.emit('sum', row);

        });
    });

    socket.on('events',function(data){
        db.sql('events', '', function(err, row){
            if(err){return console.log(err);}
            //~ console.log(row);
            socket.emit('events', row);

        });
    });

    socket.on('charts',function(data){
        db.sql('charts', data,  function(err, row){
            if(err){return console.log(err);}
            //~ console.log(row);
            socket.emit('charts', row);

        });
    });

    socket.on('addEvent', function(data){
        db.sql('addEvent', data, function(err, row){
            if(err){return console.log(err);}
            console.log(row);
            socket.emit('addEvent', row);

        });
    });
});
