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

This command downloads the dependency from the npm registry inside the “node_modules” folder and adds expressjs as a dependency in package.json.

## Let’s code

It is time to create our first endpoint. first, create a file named “index.js” in the root directory.

> please note that routes and endpoints are inter changeable terms

### Initialize the express app
Before creating our endpoints we have to create our express app.

```
const express = require('express') //import the express library through require
const app = express(); //initialize the express app
```