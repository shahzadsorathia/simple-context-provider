import React, { useContext } from 'react'
import DataContext from '../../contexts/DataContext';

const Child = () => {
  //data context
  const data = useContext(DataContext)
  console.log("Hey we are inside child component", data)
  // console.log("data", data.data)
  // console.log("function", data.setData)
  
  const add = () => {
    data.setData(["Alpha", ...data.data])
  }

  return (
    <div>
      <h4>I'm the Child! :)</h4>
      <button onClick={() => add()} >Add Me</button>
    </div>
  );
}

export default Child;