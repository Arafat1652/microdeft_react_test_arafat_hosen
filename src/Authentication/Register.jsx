import axios from 'axios';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';

const Register = () => {

  
  const [regError, setRegError] = useState('')
  const [successReg, setSuccessReg] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  
  const { register,reset,handleSubmit,formState: { errors },} = useForm('')
    const onSubmit =async (data) => {
      
      const {email, password, fullName} = data
      const info = {
        name: data.fullName, 
        email: data.email,
        password: data.password
      }

      if(!/@gmail\.com$/.test(email)){
        
        return toast.error('give a valid email')
    }
   else if(password.length<8){
        return toast.error('password must be 8 character or longer')
       
    }

      axios.post('https://react-interview.crd4lc.easypanel.host/api/register', info)
      .then(res=> {
        console.log(res.data);
        if(res.data.status === true) {
          toast.success('Your Registration Succesfull')
          reset()
        }
      }) 
      .catch(error=>{
        console.error(error)
        toast.error(error.code)
    })
    

      
    } 
  
  return (
    <div style={{ backgroundImage: `url(https://s3.envato.com/files/208663800/02_misty-woods.jpg)`}} className="bg-cover bg-center p-20">
    <Helmet>
       <title>Register|| StoryStacks</title>
   </Helmet>
   {/* <Nav></Nav> */}
  <div className="w-full max-w-md my-10 p-8 space-y-3 rounded-xl mx-auto text-gray-100 h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
<h1 className="text-2xl font-bold text-center ">Register</h1>
<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
   <div className="space-y-1 text-sm">
       <label htmlFor="username" className="block ">Name</label>
       <input type="text" name="username" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400" {...register("fullName", { required: true })}  />
       {errors.fullName && <span className="text-red-400">This field is required</span>}
   </div>
   <div className="space-y-1 text-sm">
       <label htmlFor="username" className="block ">Email</label>
       <input type="email" name="username" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("email", { required: true })} />
       {errors.email && <span className="text-red-400">This field is required</span>}
   </div>

   <div className="space-y-1 text-sm relative">
       <label htmlFor="password" className="block ">Password</label>
       <input type={showPassword? 'password': 'text'} name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("password", { required: true })} />
       {errors.password && <span className="text-red-400">This field is required</span>}

       <span className="absolute top-9 right-4 text-black" onClick={()=> setShowPassword(!showPassword)}>{showPassword? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }</span>
   </div>
   <button className="block w-full p-3 text-center rounded-sm bg-[#000000] text-[#ccff00] ">Register</button>
</form>

<p className="text-green-500">{successReg}</p>
<p className="text-red-400">{regError}</p>

<p className="text-sm text-center sm:px-6 ">Already have an account?
   <NavLink to='/login' rel="noopener noreferrer" href="#" className="underline text-[#ccff00]"> Login</NavLink>
</p>
</div>
</div>
  );
};

export default Register;

