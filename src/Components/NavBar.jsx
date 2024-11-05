import { BiSolidCameraMovie } from "react-icons/bi";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../Context/ThemeContext";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    const{theme,toggleTheme} = useTheme()
  return (
    <div className=" md:flex md:justify-around items-center h-28 shadow-lg px-4 border-b-2 border-slate-400 py-2">
      <div className="flex items-center gap-2 ">
        <span className="text-5xl">
          <BiSolidCameraMovie />
        </span>
        <h1 className="md:text-3xl text-xl font-bold italic">
          Movies Search App
        </h1>
      </div>
      <div className="flex justify-between md:w-1/2 items-center">
        <div>
          <ul className="flex flex-row gap-8">
            <li className="italic">
              <NavLink to={"/"}
              className={({isActive})=>{return isActive? "underline":''}}
                          > Home </NavLink>
            </li>
            <li className="italic">
              <NavLink to={'/movies'}
               className={({isActive})=>isActive? 'underline':''}
                          >Movies </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button
            type="button"
            className="py-2 px-4 border-2 border-slate-700 rounded-lg"
            onClick={() => toggleTheme()}
          >
            {theme === "dark" ? <LuSun /> : <LuMoon />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar