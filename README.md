**Task Management System Database**

**Description:**
This task management system allows the users to access, add, and modify individual task information. This README provides a quick overview of the application, structure, and deployment method.

**Features**
The Task Manager Database offers the following features: Task Access: Users can view their existing task that has been stored in a database. Create new users by creating an account requiring a username and password with authentication. 

**Usage**
Once the Database is running, you can use it as follows: Open the application in your web browser. This will open into the Task Management home page. In the home page
you will get a login page to enter your username and password with a login button. Once login, click on the Main Login button to laucn the Enter Your Task page. You will
enter Task Name, Task Details, Task Assignee, Task Date, and Task Due Date and it will have a submit button and will store the task. It will display the task and will also have a button to create new task.

**Front End**

•	On the login page, users can enter their username and password, which allows them to access their list of tasks.

•  On the tasks page, users can enter their tasks. The window will only accept up to 24 tasks, and task names have a character limit of 8.

•  Tasks will automatically be displayed in a grid on the page, and can be viewed, closed, and deleted when clicked.

**Back End**
•  Node.js
•  Express
•  postgresDB
•  user login and password authentication w/no token

**Deployment:**
The deployment is through AWS (Elastic Beanstalk) and the following are the steps:
1. Zip up the following folders from the backend code:
   -Client
   -config
   -migrations
   -models
   -routes
   -index
   -package.json
   -package-lock.json
3. Created an AWS account
4. Configure Service Access
   -aws-elastic-beanstalk-service-role
   -aws-ec2-service-role
5. Add Environment Variables (.env) inside backend 
   -NODE_ENV Production
   -DB_USERNAME
   -DB_PASSWORD
   -DB_DATABASE
   -DB_HOSTNAME
6. Setup postgres Database and migration script
7. Upload ZIP file in Elastic Beanstalk

**Bugzilla:**

•  Tasks page can accept impossible dates, such as six digit years, or dates that have already passed.

•  This error was corrected (added missing library in Index.js)
•  @Backend Errors
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
    
•  We were not able to connect our backend with frontend successfully.
