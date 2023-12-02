import React from 'react'
import { useRef,useState } from 'react'

const user={
    name:"Dakota",
    password: "Dakota-PW"
}

function Form() {
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const [data,setData] = useState({name:'',password:''})
    const [message,setMessage] = useState()

    const handleSubmit = (e)=>{
        e.preventDefault()
        setData((previous)=>({...previous,name:nameRef.current.value,password:passwordRef.current.value}));
        if(data.name === user.name){
            setMessage('logged in')
        }
    }

  return (
    <div>
        <form onClick={handleSubmit}>
            <label htmlFor="name">Name</label><br />
            <input ref={nameRef} className='border-2' type="text" name="name" id="name"/><br />
            <label htmlFor="password">Password</label><br />
            <input ref={passwordRef} className='border-2' type="password" name="password" id="password"/><br />
            {message}<br/>
            <button className='bg-blue-500 hover:bg-blue-700 px-3 text-white font-bold py-2'>Sign up</button>
        </form>
    </div>
  )
}

export default Form