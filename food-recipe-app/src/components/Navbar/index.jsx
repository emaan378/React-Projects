
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../context"
import { ChefHat, Search as SearchIcon } from "lucide-react";
export default function Navbar() {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext)
    console.log(searchParam);
    return (
        <nav className="flex justify-between py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-2xl font-semibold"> <NavLink to={'/'} className="flex items-center gap-2 text-2xl font-semibold hover:text-red-500 duration-300"> <ChefHat size={28} className="text-red-500" />Food Recipe</NavLink></h2>
            <form
                className="relative w-full lg:w-auto"
                onSubmit={handleSubmit}>
                <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    value={searchParam} onChange={(event)=>setSearchParam(event.target.value)}
                    type="text" placeholder="Enter your items.." name="search" className="bg-white/75 p-3 pl-11 px-8 rounded-full outline-none w-full lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"></input>
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