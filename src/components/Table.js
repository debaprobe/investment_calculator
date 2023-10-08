import React from 'react'

const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 3,
  maximumFractionDigits: 3
})
function Table(props) {
  return (
    <div>
        <table className="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {/* eslint-disable-next-line */}
              {props.data.map((yearData)=>(
                  <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                    <td>{formatter.format(yearData.yearlyInterest)}</td>
                    <td>{formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
                    <td>{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
                  </tr>
              ))}
            
            </tbody>
      </table>
    </div>
  )
}

export default Table