import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "todo",
          date: new Date()
        },
        {
          id: 2,
          title: "Transaction 2",
          amount: 400,
          type: "withdraw",
          category: "todo",
          date: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
