// // App.js
// import React from 'react';
// import TaskForm from './components/TaskForm';
// import TaskList from './components/TaskList';

// const App = () => {
//   return (
//     <div>
//       <h1>Task Management App</h1>
//       <TaskForm />
//       <TaskList />
//     </div>
//   );
// };

// export default App;

// App.js
import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className="container">
      <h1>Task Management App</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;


