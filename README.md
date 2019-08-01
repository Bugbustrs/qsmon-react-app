# qsmon-react-app
---
## Description
This is the web client of a the Quality of Service monitoring platform. It allows users to perform different networking measurements. some
These include ping, http, dns lookup, traceroute and tcp speed test.

It also allows users to view measurements they scheduled and the results return by those measurements. The scheduled measurements will be run on different probes which are android phones running customised version of mobiperf(a mobile app for running networking tests).

## Structure of this project
This project has two important folders to take note of.
1. server folder. It contains an express server to run build file in deployment on Heroku(*dont worry about this if you not going to deploy anything*).
2. The qsmon folder, here thus where our React code resides.

## How to run the web client
1. install nodejs from  [here](https://nodejs.org/en/)
2. clone this repo locally using  `git clone <repo url here>` e.g `git clone git@github.com:Bugbustrs/qsmon-react-app.git`
3. On the current directory where you cloned the repo, run `npm install`, this will install all the dependencies needed by the code in the folder *./server*
4. Change to the qsmon folder by doing *cd qsmon* and run `npm install` again, you guessed it, this will install the dependencies for the files in qsmon folder.
5. While on the qsmon folder, run `npm start` and wait for a browser page of the project to open. This will start a nodejs server that will server our react files.
6. After this you can now interact with the client.
