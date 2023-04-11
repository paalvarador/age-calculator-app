import { useState } from 'react';
import Card from './Components/Card/Card';

function App() {
  const [year, setYear] = useState(null)
  const [month, setMonth] = useState(null)
  const [day, setDay] = useState(null)

  var dayCorrect, monthCorrect, yearCorrect = -1
  var yearCalc = 0
  var monthCalc = 0 
  var dayCalc = 0

  function calculateAge(yearCalculate, monthCalculate, dayCalculate) {
    var actualDate = new Date()
    var dateCustom = `${yearCalculate}-${monthCalculate}-${dayCalculate}`
    
    const validateDate = Date.parse(dateCustom)

    if (validateDate) {
      // Calculate year
      yearCalc = Math.abs(actualDate.getFullYear() - yearCalculate)
      monthCalc = Math.abs(actualDate.getMonth()+1 - monthCalculate)
      dayCalc = Math.abs(actualDate.getDate() - dayCalculate)

      setYear(yearCalc)
      setMonth(monthCalc)
      setDay(dayCalc)
    }

    return "Must be a valid date"
  }

  function isDayCorrect(day) {
    if (!isNaN(day)) {
      if (day > 0 && day < 31) {
        return day
      } else {
        return -1
      }
    }
  }

  function isMonthCorrect(month) {
    if (!isNaN(month)) {
      if (month > 0 && month < 13) {
        return month
      } else {
        return -1
      }
    }
  }

  function isYearCorrect(year) {
    if (!isNaN(year)) {
      if (year > 0 && year < new Date().getFullYear) {
        return year
      } else {
        return -1
      }
    }
  }

  function handleChange(event) {
    if (event.target.id === 'day') {
      dayCorrect = isDayCorrect(event.target.value)
    }
    if (event.target.id === 'month') {
      monthCorrect = isMonthCorrect(event.target.value)
    }
    if (event.target.id === 'year') {
      yearCorrect = isYearCorrect(event.target.value)
    }

    if (dayCorrect > 0 &&
      monthCorrect > 0 &&
      yearCorrect > 0) {
        
      calculateAge(yearCorrect, monthCorrect, dayCorrect)
    }
  }

  return (
    <div className="App" onBlur={handleChange}>
      <Card year={year} month={month} day={day} />
    </div>
  );
}

export default App;
