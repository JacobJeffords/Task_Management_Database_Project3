**Task Management System Database**

**Description:**
This task management system allows the users to access, add, and modify individual task information. This README provides a quick overview of the application, structure, and deployment method.

**Features**
The Task Manager Database offers the following features: Task Access: Users can view their existing task that has been stored in a database. Create new users by creating an account requiring a username and password with authentication. 

**Usage**
Once the Database is running, you can use it as follows: Open the application in your web browser. Users can browse their task by clicking to the task bar link. This will display a list of open or closed tasks. 
To add a new task, the user will click on the "New Task" button. It will require the user to fill in the required fields, such as: username, task description, assigned date, due date, closed date, and notes. The task will be added upon a “Save” button on the form and will update the database. To modify or delete an existing task, you will click on the task and press an “Edit” button. To save the changes and update the database, you will need to click on the “Save” button. 

**Front End**
•	Login and Home Page

**Back End**


**Deployment**
The deployment is through AWS and the following are the steps:
1. Zip up the following folders:
   -Client
   -config
   -migrations
   -models
   -routes
   -index
   -package.json
   -package-lock.json
3. Created an AWS account
4. 


**Bugzilla:**
@Backend Errors
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
