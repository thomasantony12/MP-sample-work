# Documentation for ToDo App

## Introduction

This ToDo App is a task management application designed for the Mallu Programmers Community to help test my skills. It allows users to efficiently add, delete, edit, and manage tasks. User can toggle task statuses, filter tasks based on their current status, and perform bulk deletions.

## Features

1. Add New Task

   - Users can create new tasks by entering a title and optional description.

2. Delete Task

   - Individual tasks can be deleted by clicking on the delete button.

3. Edit Task

   - Users can modify the title or description of a task.

4. Toggle Task Status

   - Tasks can be marked as Completed or toggled back to Active.
   - The status updates visually to indicate completion.

5. View Tasks by Status

   - Filter tasks to view only Active or Completed tasks.
   - All tasks can also be displayed without filtering.

6. Bulk Delete Tasks

   - Users can select multiple tasks and delete them simultaneously.

## Technologies Used

1. Backend:
   - Express.js: REST API for handling task operations.
   - PostgreSQL: Database for storing tasks.

2. Frontend:
   - React (with Vite): Client-side application for a responsive user interface.
   - SCSS: For modular and maintainable styling.
   - JavaScript (ES6+): Core programming language.

## API Documentation

1. Add a New Task
   Endpoint: `POST /newTask`
   Description: Adds a new task to the database.
   
      Request Body:
      
      ```
      {
      "title": "Task Title"
      }
      ```
      
      Response:
      
      ```
      {
      "success": true,
      "message": "Task added successfully"
      }
      ```

2.  Delete a Task
    Endpoint: `DELETE /deleteTask`
    Description: Deletes a task by ID.
    
      Request Body:
      
      ```
      {
      "dId": 1
      }
      ```
      
      Response:
      
      ```
      {
      "success": true,
      "message": "Task deleted successfully"
      }
      ```

3. Edit a Task
   Endpoint: `PATCH /updateTask`
   Description: Updates a task’s title or description.
   
      Request Body:
      
      ```
      {
      "dId": 1,
      "title": "Updated Task Title"
      }
      ```
      
      Response:
      
      ```
      {
      "success": true,
      "message": "Task updated successfully"
      }
      ```

4. Toggle Task Status
   Description: Toggles a task's status between Active and Completed.   

5. Get All Tasks
   Endpoint: `GET /`
   Description: Retrieves all tasks or filters tasks based on their status.

6. Bulk Delete Tasks
   Endpoint: `DELETE /deleteTask`
   Description: Deletes multiple tasks at once.
   
      Request Body:
      
      ```
      {
      "ids": [1, 2, 3]
      }
      ```
      
      Response:
      
      ```
      {
      "success": true,
      "message": "Task deleted successfully"
      }
      ```

## Database Schema

   - Table: todolist

      | Column Name | Type | Description |
      | ----------- | ---- | ----------- |
      | `id`  | `SERIAL` | Unique identifier for a task. |
      | `title` | `VARCHAR(255)` | Title of the task. |
      | `status` | `VARCHAR(50)` | `Active` or `Completed`. |
      | `created_at` | `TIMESTAMP` | Timestamp of task creation. |


## Frontend Components

   1. TaskList

      - Displays tasks in a list format.
      - Allows filtering by status.

   2. TaskItem

      - Represents a single task.
      - Includes buttons for editing, toggling status, and deleting.

   3. AddTaskForm

      - A form for adding new tasks.
   
   4. BulkActions

      - Allows selecting multiple tasks and deleting them simultaneously.

## Installation and Setup

   1. Backend Setup:

      - Install dependencies:
      ```
      npm install
      ```
      - Start the server:
      ```
      node index.js
      ```

   2. Frontend Setup:

      - Install dependencies:
      ```
      npm install
      ```
      - Start the development server:
      ```
      npm run dev
      ```
   
   3. Database Setup:

      - Create a PostgreSQL database and run the schema migration script.
   
## Usage

   1. Start the Backend:
      ```
      Run the server on http://localhost:3000/.
      ```

   3. Start the Frontend:
      ```
      Access the app at http://localhost:5173/.
      ```

## ScreenShots
![App Image](https://github.com/user-attachments/assets/4b4ace13-626b-43d5-8a44-e10538809a2e)


