# HOW TO RUN THE PROJECT

1. Open 2 Terminal consoles, one for the folder /client and the other one for the folder /server
2. On each folder run: "npm install && npm start"
3. Server should run in the port :3000 and Client should run in the port :3001
4. If you have any questions or comments, you can email me at: ricvargas@gmail.com

# What can be improved?

1. This is a very simple demonstration of a React / TypeScript frontend application that sends requests to a Node / TypeScript application simulating a system that store credit card data.
2. This proof of concept app doesn't have any security at all, so adding security mechanisms on both applications is a MUST.
3. Also adding more functionality: Edit an existing record, Filter records, Deleting records plus the required testing coverage for those actions.
4. Even though the Frontend has responsive and accessible capabilities, it can still be enhanced.

# How do I test the application?

1. Client: open a Terminal console and run: "npm install && npm test". If you get an error because the Snapshots doesn't match with what is expected from the test, make sure to delete the contents from: "/client/src/__tests__/__snapshots__/"
2. Server: open a Terminal console and run: "npm install && npm test".
