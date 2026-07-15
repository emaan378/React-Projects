import { createContext ,useState} from "react";


export const GlobalContext = createContext(null);

export default function GlobalState({children}) {
    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favouritesList, setFavouritesList] = useState([]);
    function handleAddToFavourite(getCurrentItem) {
        console.log(getCurrentItem)
        let cpyFavouritesLists = [...favouritesList];
        const index = cpyFavouritesLists.findIndex(item => item.id === getCurrentItem.id);
        if (index === -1) {
            cpyFavouritesLists.push(getCurrentItem)
        } else {
            cpyFavouritesLists.splice(getCurrentItem)
        }
        setFavouritesList(cpyFavouritesLists);
        console.log(favouritesList)
    }
    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}`)
            const data = await res.json();
            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setLoading(false);
                setSearchParam('')
            }
            
        } catch (e) {
            console.log(e);
            setLoading(false);
            setSearchParam('')
        }
    }
    console.log(recipeList)
    return<GlobalContext.Provider value={{ favouritesList, setFavouritesList, handleAddToFavourite, searchParam, loading, recipeList, recipeDetailsData, setRecipeDetailsData, setSearchParam, handleSubmit }}> {children} </GlobalContext.Provider>
    
}