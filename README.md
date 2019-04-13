# London-Unified-Departure-Times-App

This is a practice full stack web application project which is created with Angular7 & Nodejs & Typescript+ Restful API + "Transport for London Unified API".

London transport has a large number of complex data and can be collected from API.

The goal of this App is attempt to provide clear information to user and let them obtain the information more convenient.

<b>Technical Principals</b>: SOLID / Microservices / OOD

<b>Front End</b>: Angular 7 with Angular Material, bootstrap, rxjs, Flex-Layout

There is one component package - "station". It shows each bus stop's time table for selected bus line. So far, only 3 bus line can be selected from this App, all bus stops and time table info are provided by "Transport for London Unified API". It should be real-time data.

<b>Back End</b>: Nodejs 11 with Express, RESTful API

There is one controller supporting API for "station". It can provide London transport data for different services.
And of cause, it will keep all the log for any error.

<b>App start command</b>:   
1. pull and run "npm install" one each in "London-Unified-Departure-Times-APP" and "Nodejs-backend"
2. run "npm run start" one each in "London-Unified-Departure-Times-APP" and "Nodejs-backend"

<b>To Do</b>: user authentication / Google map / GPS / data base / front end e2e test & unit test/ API testing 

<b>Future</b>: This app can be easily scale up to support more London transport information with different UI ( even mobile App, for example Ionic )

<b>Personal Info</b>: https://www.linkedin.com/in/wayne-hong-456131a2/


  
