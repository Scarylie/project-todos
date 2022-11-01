/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      {
        id: '1',
        text: 'Watch video on actions & reducers',
        complete: false,
      },
      {
        id: '2',
        text: 'Follow redux codealong',
        complete: false,
      },
      {
        id: '3',
        text: 'Fork weekly assignment',
        complete: false,
      },
      {
        id: '4',
        text: 'Create a todo app',
        complete: false,
      },
    ],
  },
  reducers: {
    toggleTask: (store, action) => {
      console.log(store);
      console.log(action);
      //   store.items.find((item) => item.is === action.payload).complete =
      //     !store.items.find((item) => item.is === action.payload).complete;
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.complete = !item.complete;
        }
      });
    },

    addTask: (store, action) => {
      console.log(store);
      console.log(action);
    },
  },
});

export default tasks;
