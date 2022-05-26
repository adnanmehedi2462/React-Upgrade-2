import React, { useRef } from 'react'


export const Useref = () => {


  const RefName=useRef();
  const Hendel =(e)=>{
    const name=RefName.current.value;
    e.preventDefault();
    console.log(name)
  }
  return (
    <form onSubmit={Hendel}>
        <input type="text" name='text' ref={RefName}></input>
        <button type='submit'>Submit</button>
    </form>
  )
}
