import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
// import Nav from "./Nav";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import bg from '../assets/bg.png'
import axios from "axios";


const Login = () => {

    const [loginError, setLoginError] = useState('')
    const [successLogin, setSuccessLogin] = useState('')

    const { register,reset,handleSubmit,formState: { errors },} = useForm()
    const onSubmit = async(data) => {
      const {email, password} = data
      
      const info = {
        email: data.email,
        password: data.password
      }
      setLoginError('')
      setSuccessLogin('')
        if(!/@gmail\.com$/.test(email)){
            return toast.error ('give a valid email')
           
        }

  
        await axios.post('https://react-interview.crd4lc.easypanel.host/api/login', info)
       .then(res=> {
        console.log(res.data);
        if(res.data.status === true) {
          toast.success('Login Succesfull')
          reset()
        }
      }) 
      .catch(error=>{
        console.error(error)
        toast.error(error.code)
    })
     

    }
  

    return (
        
      <div style={{ backgroundImage: `url(${bg})`}} className="bg-cover bg-center min-h-screen pt-10" >
        <Helmet>
                <title>Login || StoryStacks</title>
        </Helmet>
        {/* <Nav></Nav> */}
        
           <div className="w-full max-w-md my-10 p-8 space-y-3 rounded-xl mx-auto text-gray-100 h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-2xl font-bold text-center ">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block ">Email</label>
                <input type="text" name="username" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block">Password</label>
                <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("password", { required: true })}  />
                {errors.password && <span className="text-red-400">This field is required</span>}
            </div>
            <button className="block w-full p-3 text-center rounded-sm bg-[#000000] text-[#ccff00] ">Sign in</button>
        </form>

        <p className="text-green-500">{successLogin}</p>
        <p className="text-red-400">{loginError}</p>

        <p className="text-sm text-center sm:px-6">Don not have an account?
            <NavLink to='/register' rel="noopener noreferrer" href="#" className="underline text-[#ccff00]"> Register</NavLink>
        </p>
    </div>
   {/* <Footer></Footer> */}
     </div>
    );
};

export default Login;