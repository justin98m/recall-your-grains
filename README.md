# Recall The Grains

Recall The Grains is a full stack task management application. A user can
create, edit and delete tasks. The tasks are created , read , updated and
deleted from a json file local to the web server. This was an assignment assigned during the coding 11 Road 2 Hire cohort.


### Link to [Recall The Grains](http://ec2-54-91-92-34.compute-1.amazonaws.com:3000/)

## Tech used
HTML
CSS
Javascript
Node/Express
Nunjucks

## Control Flow
1. Client request Task items from server
2. Get Data From User to
  - Delete task
  - Edit task
  - Add task
3. Send Data To server with instructions on what function to call
  - Delete Task
    - Download Json Data from server storage as an array of objects
    - Remove client requested task from object
    - Write object over json
  - Add Task
    - Download Json Data from server storage as an array of objects
    - Add new task to object
    - Write object over Json file
  - Edit Task
    - Download Json Data from server storage as an array of objects
    - Find Task to edit in object
    - Rename the object's TaskName attribute
    - Write object over Json file
4. Update UI display
  - By requesting current state of server stored Json file

## Main Struggle
  - Manipulating `fetch` API
    - By sending a response to the object
        - solved using `res.send()` after completion of a server-side requested function
    - Then handling the success response
      - Solved with used of `async` and `await` keywords
