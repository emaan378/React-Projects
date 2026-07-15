import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import { GlobalContext } from '../../context/'

export default function Details() {
    const { recipeDetailsData, setRecipeDetailsData, favouritesList, setFavouritesList } = useContext(GlobalContext)
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        async function getRecipeDetails() {
            try {
                const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`)
                const data = await res.json();
                if (data?.data) {
                    setRecipeDetailsData(data?.data)
                } else {
                    setRecipeDetailsData(null)
                }
            } catch (e) {
                console.log(e)
                setRecipeDetailsData(null)
            }
        }
        getRecipeDetails()
    }, [id, setRecipeDetailsData])

    // check karo: ye recipe pehle se favourites mein hai kya?
    const isFavourite = favouritesList?.some(fav => fav.id === recipeDetailsData?.recipe?.id)

    function handleFavouriteToggle() {
        const recipe = recipeDetailsData?.recipe
        if (!recipe) return

        if (isFavourite) {
            // agar pehle se favourite hai, to list se hata do
            setFavouritesList(favouritesList.filter(fav => fav.id !== recipe.id))
        } else {
            // agar nahi hai, to add kar do
            setFavouritesList([...favouritesList, recipe])
        }
    }

    if (!id) {
        return (
            <div className="container mx-auto py-20 flex flex-col items-center gap-4">
                <p className="text-2xl font-semibold text-gray-500">Please select a recipe first</p>
                <Link to="/" className="text-sm py-2 px-6 rounded-lg uppercase font-medium tracking-wider shadow-md bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                    Browse Recipes
                </Link>
            </div>
        )
    }

    if (!recipeDetailsData?.recipe) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
                <p className="text-2xl font-semibold text-gray-500">Recipe not found</p>
                <Link to="/" className="text-sm py-2 px-6 rounded-lg uppercase font-medium tracking-wider shadow-md bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                    Browse Recipes
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
                <div className="h-64 lg:h-96 overflow-hidden rounded-xl group">
                    <img
                        src={recipeDetailsData?.recipe?.image_url}
                        className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                        alt="recipe"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-sm text-red-700 font-medium uppercase tracking-wide">
                    {recipeDetailsData?.recipe?.publisher}
                </span>
                <h3 className="font-bold text-3xl text-black">
                    {recipeDetailsData?.recipe?.title}
                </h3>
                <button
                    onClick={handleFavouriteToggle}
                    className={`text-sm p-3 px-8 rounded-lg uppercase mt-5 font-medium tracking-wider shadow-md transition-colors duration-300 w-fit ${isFavourite
                            ? "bg-white text-black border-2 border-black hover:bg-gray-100"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                >
                    {isFavourite ? "Remove from favourites" : "Save as favourites"}
                </button>
                <div className="mt-6">
                    <span className="text-2xl font-bold text-black">Ingredients</span>
                    <ul className="flex flex-col gap-2 mt-4">
                        {recipeDetailsData?.recipe?.ingredients?.map((ingredient, index) => (
                            <li key={index} className="flex gap-2 text-gray-700 border-b border-gray-100 pb-2">
                                <span className="font-semibold text-black min-w-fit">
                                    {ingredient.quantity} {ingredient.unit}
                                </span>
                                <span>{ingredient.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}