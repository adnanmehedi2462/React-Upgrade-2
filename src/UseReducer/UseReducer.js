import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const booksList=[
    {'id':1,'name':'Horror'},
    {'id':2,'name':'Action'},
    {'id':3,'name':'Loves'},
    {'id':4,'name':'Romantic'},
]
const Model=({modeltext})=>{
    return <h1>{modeltext}</h1>

}
const reducer=(state,action)=>{
    if (action.type==="ADD"){
        const allbooks=[...state.books,action.payload]
        return {
            ...state,
            books:allbooks,
            model_e_book_add_hoyche:true,
            modeltext:'Book add holo by reducer',


        }

    }
    if (action.type==="REMOVE"){
        const filter_removebook=[...state.books].filter(prev=>prev.id !== action.payload )
        return{
            ...state,
            books:filter_removebook,
            model_e_book_add_hoyche:true,
            modeltext:'Book remove holo',
        }

    }

    return state;

}
export const UseReducer = () => {
    const [bookState,dispatch]=useReducer(reducer,{
        books:booksList,
        model_e_book_add_hoyche:false,
        modeltext:'Book add my Reducer',




    })
    // const [books,setBooks]=useState(booksList)
    const [bookname,setBookName]=useState('')
    // const [model_e_book_add_hoyche,setModel_e_book_add_hoyche]=useState(false)
    // const [modeltext,setModelText]=useState('')
    
    const handelSubmit=(e)=>{
        e.preventDefault();
       const newBook={id:uuidv4(),name:bookname}
   
       dispatch({type:"ADD",payload:newBook})
        
        // setModel_e_book_add_hoyche(true);
        // setModelText(" book added")
        // setBooks([...bookState.books,newBook]
        setBookName(()=>"");


    }
    const setRemove=(id)=>{
        dispatch({type:"REMOVE",payload:id})

    }
   

  return (
    <div>
       
        <form onSubmit={handelSubmit}>
            <input type="text" value={bookname} placeholder="Books Name" onChange={(e)=>{setBookName(e.target.value)}} ></input>
             <button type='submit' >Submit</button>
        </form>
        <p>{bookState.model_e_book_add_hoyche && <Model modeltext={bookState.modeltext} />}
        </p>
        {bookState.books.map((list)=>(
            <>
            <li key={list.id}>
                {list.name}
                 <button onClick={()=>{setRemove(list.id)}} >Remove</button></li>
            
            </>

        ))}
    </div>
  )
}
