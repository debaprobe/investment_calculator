
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const [userInput, setUserInput] = useState(null)

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
  };

  const yearlyData = []; // per-year results

  if(userInput){
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
 
  return (
    <div>
      <Header/>

      <Form onCalculate= {calculateHandler}/>
      {!userInput && <p style={{textAlign: 'center'}}>No investment Calculated yet</p>}
      {userInput && <Table data= {yearlyData} initialInvestment = {userInput['current-savings']}/> }
 
      {/* {userInput ? <Table/> : <p>No investment Calculated yet</p> } */}
      
    </div>
  );
}

export default App;
