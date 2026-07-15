import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/";

export default function Details() {
    const { recipeDetailsData, setRecipeDetailsData, favouritesList ,handleAddToFavourite } = useContext(GlobalContext);
    const { id } = useParams();

    useEffect(() => {
        async function getRecipeDetails() {
            try {
                const res = await fetch(
                    `https://forkify-api.jonas.io/api/v2/recipes/${id}`
                );

                const data = await res.json();

                if (data?.data) {
                    setRecipeDetailsData(data.data);
                }
            } catch (e) {
                console.log(e);
            }
        }

        getRecipeDetails();
    }, [id]);

    const recipe = recipeDetailsData?.recipe;

    return (
        <div className="container mx-auto px-5 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

                {/* Left Side */}
                <div>
                    <span className="text-sm uppercase tracking-widest text-red-600 font-semibold">
                        {recipe?.publisher}
                    </span>

                    <h1 className="text-4xl font-bold mt-3 leading-tight">
                        {recipe?.title}
                    </h1>

                    <button
                        onClick={(() => handleAddToFavourite(recipeDetailsData?.recipe))}
                        className="mt-8 bg-black text-white px-8 py-3 rounded-lg uppercase tracking-wider font-medium hover:bg-gray-800 duration-300"
                    >
                        {
                            favouritesList.findIndex((item)=> item.id === recipeDetailsData?.recipe?.id) !== -1 ? "Remove from Favourites" : "Add into Favourites"
                        }
                    </button>

                    <div className="mt-10">
                        <h2 className="text-3xl font-bold mb-6">
                            Ingredients
                        </h2>

                        <ul className="space-y-3">
                            {recipe?.ingredients?.map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="flex gap-3 border-b border-gray-200 pb-3"
                                >
                                    <span className="font-semibold whitespace-nowrap">
                                        {ingredient.quantity} {ingredient.unit}
                                    </span>

                                    <span className="text-gray-700">
                                        {ingredient.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Side */}
                <div className="sticky top-10">
                    <img
                        src={recipe?.image_url}
                        alt={recipe?.title}
                        className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                    />
                </div>

            </div>
        </div>
    );
}