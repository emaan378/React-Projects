import { useState, useEffect, useCallback } from "react"
import './style.css'

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false)

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
            }
        }
        catch (e) {
            console.log(e);
            setLoading(false);
        }
    }, [count])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true)
    }, [products])

    if (loading) {
        return <div>Loading Data! Please wait..</div>
    }

    return (
        <div className="container">
            <div className="product-container">
                {
                    products && products.length ?
                        products.map(item =>
                            <div key={item.id} className="product">
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>)
                        : null
                }
            </div>
            <div className="button-container">
                <button
                    disabled={disableButton}
                    className="btn" onClick={() => setCount(count + 1)}>Load More Products</button>
                {
                    disableButton ? <p>You have reached 100 products</p>
                        : null
                }
            </div>
        </div>
    )
}