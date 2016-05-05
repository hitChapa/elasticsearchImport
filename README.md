# elasticsearchImport
Here is the way to read a large JSON file,
Process the JSON Data,
Insert it into elasticsearch using nodejs


1. Open consumer.js and change elastic host
2. Open producer.js
    i. Process and format your data
    ii. Change index and type in which you would like to insert your data
3. Open terminal and go to code and run following
    i. sudo npm install (click here to install node and npm)
    ii. node --max_old_space_size=4096 producer.js
    iii. node --max_old_space_size=4096 consumer.js

Blog goo.gl/zXK1De
