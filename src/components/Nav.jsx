import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    const [theme, setTheme] = useState('light')

    const handleThemeToogle=e=>{
      // console.log(e.target.checked)
        if(e.target.checked){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }
    useEffect(()=>{
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme', localTheme)

    },[theme])

    console.log(theme,'theme')

    return (
        <div className="navbar bg-base-100 z-10 shadow-lg px-4 sm:px-8">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl gap-0 text-secondary">MicroDeft<span className="text-primary">Test</span></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-5 px-1">
            <NavLink to='/' className={({isActive})=> isActive? 'font-bold text-primary': 'font-bold'}>Home</NavLink>
            <NavLink to='/addCourse' className={({isActive})=> isActive? 'font-bold text-primary': 'font-bold'}>Add Course</NavLink>
            <NavLink to='/register' className={({isActive})=> isActive? 'font-bold text-primary': 'font-bold'}>Register</NavLink>
            <NavLink to='/login' className={({isActive})=> isActive? 'font-bold text-primary': 'font-bold'}>Login</NavLink>
          </ul>
        </div>
        <label className="cursor-pointer ml-3 grid place-items-center">
  <input onChange={handleThemeToogle}  type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
      </div>
    );
};

export default Nav;