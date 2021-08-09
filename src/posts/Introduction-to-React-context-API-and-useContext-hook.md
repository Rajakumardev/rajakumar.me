---
title: "Introduction to React context API and useContext() hook."
date: "8th Aug 2021"
featuredImage: ./assets/images/react-context-rajakumar.jpg
---

![React Context Api](./assets/images/react-context-rajakumar.jpg)

Elo Elo, Hope you guys doing great, this post introduces you to react's context API 
 and `useContext()` hook. we will learn about how to use `React.CreateContext()` to create a store and access them using `useContext()` Hook.

>### Credits section
image credits -  [@hannahmorgan7](https://unsplash.com/@hannahmorgan7) 

##  What is context and where should we use it?

Ever in a situation where you have to pass props to a number of components to exchange data between components? well, it's known as props drilling.

Yes, props drilling is ok but in some places, props drilling will result in big messy code.

To solve these problems we can go with react context.

> Context provides a way to pass data through the component tree without having to pass props down manually at every level. -  [reactjs.org](https://reactjs.org/docs/context.html) 


Let's get started by creating a react application using CRA.


```
create-react-app todo_context
``` 

> yes we are following the to-do tradition LOL.

Add 2 new folders `src/components` and `src/context` let's concentrate on context first then we will create the components.

Add 2 new files inside the context folder `provider.js` and `store.js` now that we have created the required files we can start creating our first context.

## Setup Context

### store.js

```
import React from "react";

const Store = React.createContext({
  todos: [],
  addTodo: (todo) => {},
  deleteTodo: (index) => {}
});

export default Store;
``` 
Ok what is happening here, we are creating a context store/object using react's `createContext` function.

- we need `todo:[]` to store all the todos, for simplicity a single todo will look like the following.

```
{
    text: "Finish that side project please ;-; "
}
```

- `addTodo` function will add a single todo item to the todo array. 

- `deleteTodo` function will remove a todo item from the list based on the index.

finally, make sure to export Store so that we can use it from elsewhere.

### provider.js

```
import { useState } from "react";
import Store from "./store";

const TodoProvider = (props) => {
  const [todos, setToDos] = useState([]);
  const addTodo = (todo) => {
    if (todo) {
      setToDos([...todos, todo]);
    }
    console.log(todos);
  };
  const deleteTodo = (index) => {
    if (todos[index]) {
      const fliteredArr = todos.filter((element, i) => i !== index);
      setToDos(fliteredArr);
    }
  };
  return (
    <Store.Provider
      value={{
        todos,
        addTodo,
        deleteTodo
      }}
    >
      {props.children}
    </Store.Provider>
  );
};

export default TodoProvider;
```

The provider is just like any functional component that has state other functions.
as you can see we have a state `const [todos, setToDos] = useState([]);` and 2 functions `addTodo` and `deleteTodo` lets see one by one.

- `todos` state will maintain the todo list since it's a state the changes to this will rerender the provider and its child components in our case the entire application (later we will wrap our application within this provider).

> Tip:  Always wrap what you want to rerender when the context change. since this may lead to lesser performance. having multiple atomic contexts is better than a huge single context for the entire application. 

- `addTodo` and `deleteTodo` are for adding and deleting todo items.

- Now the `return` part here we are wrapping the `props.children` with `<Store.provider value ={}/>` so the provider is responsible for enabling child components to access the context data and renders (if data changed). in the value attribute we are passing the state and functions.

## Setup Components

Add 2 new files `AddTodoCtrl.js` and `TodoList.js` inside the components.

### AddTodoCtrl.js

```
import { useContext, useState } from "react";
import Store from "../context/store";

const AddTodoCtrl = (props) => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(Store);
  const handleOnClick = (event) => {
    if (todo) {
      addTodo(todo);
    } else {
      alert("please enter valid value");
    }
  };
  const handleOnChange = (event) => {
    if (event.target.value) {
      setTodo(event.target.value);
    }
  };
  return (
    <div>
      <input type="text" id="todoTxt" onChange={handleOnChange} />
      <button onClick={handleOnClick}> + </button>
    </div>
  );
};

export default AddTodoCtrl;
```
- it's an average form definitely not a good one :P
- `useContext(Store)` is a react hook that will return the current value for that context. we need addTodo let us destructure that.
- inside the onClick listener we are updating the todos list in the context with new todo item.

### TodoList.js
```
import { useContext } from "react";
import Store from "../context/store";

const TodoList = (props) => {
  const { deleteTodo,todos } = useContext(Store);
  const removeItem = (index) => {
    deleteTodo(index);
  };
  return (
    <div className="list-container">
      {todos.map((todo, index) => {
        return (
          <div
            className="list-item"
            onClick={() => removeItem(index)}
            key={index}>
            {todo}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
```

- This component needs 2 things from the context the `todos:[]` list data to show the list and `deleteTodo(index)` function to delete a todo item from the list.

### App.js

Now that we finished all the components we need for this application its finally time to glue all things together.

```
import AddTodoCtrl from "./components/AddTodoCtrl";
import TodoList from "./components/TodoList";
import TodoProvider from "./context/provider";
import "./styles.css";

export default function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>To do</h1>
        <hr />
        <TodoList />
        <AddTodoCtrl />
      </div>
    </TodoProvider>
  );
}
```
- Make sure to wrap all the JSX with `TodoProvider` without this you won't see the updated data in the UI.

>Take styles.css content from  [here](https://codesandbox.io/s/todocontextapi-w4mj7?file=/src/styles.css) 

Finally, run `npm start`.

Working application at  [codesanbox](https://codesandbox.io/s/todocontextapi-w4mj7) 


> This is my first article in a while, I am happy to start blogging again.

Found any bugs or you have any suggestions to improve my writing let me know via  [Twitter ](https://twitter.com/rajakumar_dev) or  [Instagram](https://www.instagram.com/rajakumar.me/).

Support me at  [BuyMeACoffee](buymeacoffee.com/rajakumar) 

