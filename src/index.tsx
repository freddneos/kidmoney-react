import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from "miragejs";

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Retirou o lixo",
          category: 'Tarefas domesticas',
          amount: '200',
          type: 'deposit',
          date: new Date('2021-04-05 09:00:00')
        },
        {
          id: 2,
          title: "Agressao ao Irmao",
          category: 'Desobediencia',
          amount: '300',
          type: 'withdraw',
          date: new Date('2021-04-06 09:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
