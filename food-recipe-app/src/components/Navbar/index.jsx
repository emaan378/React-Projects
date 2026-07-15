
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../context"
export default function Navbar() {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)
    console.log(searchParam);
    return (
        <nav className="flex justify-between py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-2xl font-semibold"> <NavLink to={'/'} className="hover:text-red-500 duration-300" >Food Recipe</NavLink></h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={searchParam} onChange={(event)=>setSearchParam(event.target.value)}
                    type="text" placeholder="Enter your items.." name="search" className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"></input>
            </form>
            <ul className="flex flex-wrap justify-center gap-5">
                <li>
                    <NavLink to={'/'} className={({ isActive }) =>
                        `duration-300 ${isActive ? "text-red-500 font-semibold" : "text-black hover:text-gray-700"}`
                    }>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favourites'} className={({ isActive }) =>
                        `duration-300 ${isActive ? "text-red-500 font-semibold" : "text-black hover:text-gray-700"}`
                    }>Favourites</NavLink>
                </li>
                <li>
                    <NavLink to={'/details'} className={({ isActive }) =>
                        `duration-300 ${isActive ? "text-red-500 font-semibold" : "text-black hover:text-gray-700"}`
                    }>Details</NavLink>
                </li>
            </ul>
        </nav>
    )
}