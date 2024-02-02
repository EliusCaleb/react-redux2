# How to set up the project
Create a new React project by running the following command in your terminal. Replace "your-project-name" with the name of your project.
```  
npm create vite@latest your-project-name -- --template react

cd your-project-name

npm install


```

# How to install Redux
```
npm install \

redux \

react-redux \

redux-thunk \

redux-devtools-extension



```

# How to set up reducers 

In the src directory, create a new folder called reducers, and inside that folder, create two new files: index.js and taskReducer.js.

The index.js file represents the root reducer, which combines all the individual reducers in the application. In contrast, the taskReducer.js file is one of the individual reducers that will be combined in the root reducer.

```
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;


```
use the following docs :

https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/
