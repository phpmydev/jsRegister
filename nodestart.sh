#!/bin/bash
# change these
IP=192.168.1.52
PORT=1992
# end change these

if nc -zv $IP $PORT
then
echo 'ok'
else
killall node
echo 'restarting the app'
nodemon --ignore html/ app.js < /dev/null > startup.log 2> err.log &
fi
echo 'done'
