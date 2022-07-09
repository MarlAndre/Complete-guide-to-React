import {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown(true);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const handleCancel = () => {
    setIsShown(false)
  };

  return (
  <div className='new-expense'>
     {/* 👇️ show elements on click */}
     {!isShown && (
       <div>
          <button onClick={handleClick}>Add new expense</button>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown &&
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
        onCancel = {handleCancel}
        />
      }
  </div>
  );
};


export default NewExpense;
