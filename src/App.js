import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const App = () => {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
      dispatch({type: 'ADD_CASH', payload: cash})
  }
  const getCash = (cash) => {
      dispatch({type: 'GET_CASH', payload: cash})
  }


    return (
      <div>
          <div>{cash}</div>
        <button onClick={()=>addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={()=>getCash(Number(prompt()))}>Снять со счетa</button>
      </div>
  );
};

export default App;
