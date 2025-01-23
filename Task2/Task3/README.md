# Social Networking Application

This is a simple social networking application built with Node.js, Express, and a front-end using HTML, CSS, and JavaScript. The application allows users to create accounts, view profiles, and manage their information.

## Project Structure

```
social-network-app
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains user-related logic
│   │   └── userController.js
│   ├── models                # Defines data models
│   │   └── userModel.js
│   ├── routes                # API routes for the application
│   │   └── userRoutes.js
│   ├── views                 # Frontend views
│   │   └── index.html
├── public
│   ├── css                   # Styles for the application
│   │   └── styles.css
│   ├── js                    # Client-side JavaScript
│       └── scripts.js
├── package.json              # NPM configuration file
├── .gitignore                # Files to ignore in Git
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd social-network-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## Features

- User registration and authentication
- Profile management
- Responsive design
