# **Secrets**

## Description

Secrets is a simple Node.js and Express web application that reveals a hidden page only if the correct password is entered. The app serves a homepage with a password input form, and if the password matches the expected value, users are redirected to a secret page containing a list of life tips. Otherwise, the user remains on the homepage.


## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [File Structure](#File-Structure)
- [Password](#Password)
- [Technologies](#Technologies)




## Installation 

1. Clone the repository
    * git clone 
3. Navigate to the project directory
    * cd Authentication-Demo
5. Install the required dependencies
    * npm i
   

## Usage
1. Star the server (in terminal)
   * node index.js or nodemon index.js
2. Open your browser and go to http://localhost:3000
3. Enter the password 'ILoveProgramming' on the homepage to access the hidden content.


## File Structure

* public/
  - index.html: The homepage where users enter the password.
  - secret.html: The hidden page displayed upon entering the correct password.

* solution.js: The Node.js server that handles routing and password validation.

## Password
The password required to view the secrets is hardcoded in the application. To access the secret page, use the password:
"ILoveProgramming"

## Technologies 
* Node.js: JavaScript runtime environment.
* Express: Web framework for Node.js.
* Body-Parser: Middleware to handle form data in the request.
