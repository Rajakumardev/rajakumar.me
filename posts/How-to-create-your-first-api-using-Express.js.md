---
title: "How to create your first API using Express.js?"
date: "2023-10-09"
featuredImage: https://res.cloudinary.com/duvd47099/image/upload/v1698287636/personal-site/xfq1l7gqddh1jzxlukru.jpg
metaDescription: "Learn about the basics of creating Backends and APIs in node with Express.js with examples."
---

![How to create your first API using Express.js? - Rajakumar](https://res.cloudinary.com/duvd47099/image/upload/v1698287636/personal-site/xfq1l7gqddh1jzxlukru.jpg)

Hello Readers, Today we are going to make a simple API using expressjs.

Before starting, Let me explain what this API is going to do. since this is more of an expressjs intro tutorial, we will implement an API that calculates the total price given the quantity and price per piece as input.

## Project setup
Let's set up a node project with all the required dependencies.

Go to the project directory and run the following command to initialize an empty node project.

```
npm init -y
```

This will create 2 files.

package.json
package.lock.json
Now install the dependency by running the following command.

```
npm install expressjs --save
```

This command downloads the dependency from the npm registry inside the "node_modules" folder and adds expressjs as a dependency in package.json.

## Let’s code

It is time to create our first endpoint. first, create a file named `index.js` in the root directory.

> please note that routes and endpoints are inter changeable terms

### Initialize the express app
Before creating our endpoints we have to create our express app.

```
const express = require('express') //import the express library through require
const app = express(); //initialize the express app
```

This will import and initialize the express app and return a variable called `app` Through this we can access the built-in functions of the express library like `get()`, `post()`, etc.

### Creating a "ping" endpoint
Let’s create an endpoint that responds back "hello" if we hit it with a get request.

To achieve this we will use the `app.get()` function.

Add the below code at the end of the index.js file

```
app.get("/", (req, res) => {
 res.json({
  message: "hello"
 });
})
```

The get function requires 2 arguments.

- Path → `/`
- And the handler → `(req,res) => {}`

if the path matches it will execute the handler function.

But hold on if you run this code it will not work. we still need to do one more thing before we start using our API.

we have to listen to the incoming request from a specific port to do this we have a `listen` function.

Add the below code at the end of the index.js file
```
app.listen(3000);
```
This will make our API listen on port `3000`.

### Run the API
There are multiple ways to run this code but each type has pros and cons.

For simplicity, we will directly run this code like below.
```
node index.js
```
Now open the browser and go to `localhost:3000/` You should see a similar response as below.
```
{"message":"hello"}
```
That's it we created our first endpoint now let's create a useful one that calculates something.

### Creating a total price calculation endpoint
This is a little advanced endpoint (not really) this will accept two inputs, calculate the total price, and send the response.

Add the below code at the end of the `index.js` file.

```
app.get("/:quatity/:rate", (req, res) => {

 const quantity = req.params.quatity;
 const rate = req.params.rate;
 
 res.json({
  quantity,
  rate,
  total: quantity * rate  
 });
})
```

Okay, there is a lot going on in the above code let me explain 1 by 1.

In the first line, you can see the path has ":" in between which means that the segment in the URL is dynamic and the values given there will be available in `req.params.*` This is how we pass quantity and rate as inputs.

This is how the API URL looks like `localhost:3000/300/10` → 300 is the quantity and 10 is the rate.

in the next 2 lines, we are getting the quantity and rate values.

And finally, send the response JSON with the calculated value as "total".

## Conclusion
This is a very basic API in production / real-time projects there will be more endpoints and more integrations like a database to store user data or a mail server integration to send mail to users.

I will write more expressjs articles like this one with more advanced concepts. if you want to follow along please drop a follow.