import React from 'react'

function Tester({value}){
    const testLog = (e)=>{
        e.preventDefault();
        alert( value.tipe);
    }

  return (
    <div>
        <a href="#" onClick={testLog}>aaaaaaa</a>
    </div>
  )
}

export default Tester