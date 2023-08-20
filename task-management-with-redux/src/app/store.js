// store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskReducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
