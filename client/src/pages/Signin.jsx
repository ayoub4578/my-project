

import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function Signin() {
  const [formdata,setformdata]= useState({});
  const [error,seterror]= useState(null);
  const [loading,setloading]= useState(false);
  const navigate = useNavigate();
  const handelchange =(e)=>{
    setformdata ({
      ...formdata,[e.target.id]:e.target.value,
    });  
  };

  const handelSubmit = async (e)=>{
    e.preventDefault();
    try{
      setloading(true);
      const res =  await fetch ('api/auth/sigin',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false){
        setloading(false);
        seterror(data.message);
        return;
      }
      setloading(false);
      seterror(null);
      navigate('/');
    }
      catch (error){
        setloading(false);
        seterror('something went wrong');

      }
  };
    return (
    <div>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Signin Page 
      </h1>
      <form className='flex flex-col gap-4 ' onSubmit={handelSubmit}>
         <input type="text" placeholder='email' className='border p-3 rounded-lg' 
        id='email'  onChange={handelchange}/> 
         <input type="password" placeholder='password' className='border p-3 rounded-lg' 
        id='password' onChange={handelchange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'loading...' : 'signin'}</button>

      </form>
      <div className="flex gap-2 mt-5">
        <p> dont have an account ?</p>
        <Link to ={"/signup"}>
        <span className='text-blue-700'>signup
          </span></Link>
      </div>
      {error && <p className='text-red-500 mt-3'>{error}</p>};
      
    </div>
  )
}

