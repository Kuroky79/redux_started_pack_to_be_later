import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, addManyCustomersAction, removeCustomerAction} from "./store/CustomerReducer";
import {fetchCustomers} from "./AsyncActions/customers";

const App = () => {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  const addCash = (cash) => {
      dispatch({type: 'ADD_CASH', payload: cash})
  }
  const getCash = (cash) => {
      dispatch({type: 'GET_CASH', payload: cash})
  }
    const addClient = (name) => {
      const customer = {
          name,
          id: Date.now()
      }
      dispatch(addCustomerAction(customer))
    }
    const removeClient = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }
    return (
      <div>
          <div>{cash}</div>
        <button onClick={()=>addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={()=>getCash(Number(prompt()))}>Снять со счетa</button>
          <button onClick={()=>addClient(prompt())}>Добавить клиента</button>
          <button onClick={()=>getCash(Number(prompt()))}>Удалить клиента</button>
          <button onClick={()=>dispatch(fetchCustomers())}>Получить клиентов из базы</button>
          {customers.length > 0
              ? <div>{customers.map(customer => <div onClick={()=> removeClient(customer)}>{customer.name}</div>)}</div>
              :
              <div>Клиенты отсутствуют!</div>}
      </div>

  );
};

export default App;
