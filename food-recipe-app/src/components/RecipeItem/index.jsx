import {Link} from 'react-router-dom'
export default function RecipeItem({ item }) {
    return (
        <div className="flex flex-col w-72 overflow-hidden p-8 bg-white/75 shadow-xl border-2 gap-5 rounded-2xl border-white">
            <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                <img src={item?.image_url} alt='recipe-item' className="block w-full object-cover rounded-xl"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/400x300?text=No+Image";
                    }}/>
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-sm text-red-700 font-medium  uppercase tracking-wide">{item.publisher}</span>
                <h3 className="font-bold text-lg truncate text-black">{item.title}</h3>
                <Link to={`/recipe-item/${item?.id}`}
                    className='text-sm p-3 px-8 rounded-lg uppercase mt-5 font-medium tracking-wider inline-block shadow-md bg-black text-white  hover:bg-gray-800 transition-colors duration-300'>Recipe Details</Link>
            </div>
        </div>
    )
}