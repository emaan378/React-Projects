
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './style.css'

export default function ImageSlider({ url, limit = 5, page = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setcurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }

        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url]);
    console.log(images);
    if (loading) {
        return <div>Loading data! please wait</div>
    }
    if (errorMsg) {
        return <div>Error Ocurred! {errorMsg}</div>
    }
    function handleprevious() {
        setcurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleNext() {
        setcurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }
    return (

        <div className="container">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleprevious} />
            {
                images && images.length ?
                    images.map((imageIteam, index) => (
                        <img
                            key={imageIteam.id}
                            alt={imageIteam.download_url}
                            src={imageIteam.download_url}
                            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                        />
                    )) : null}
            <BsArrowRightCircleFill
                onClick={handleNext}
                className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length ?
                        images.map((_, index) => (
                            <button key={index}
                                className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                            onClick={()=>setcurrentSlide(index)}></button>))
                        : null
                }
            </span>
        </div>
    )
}