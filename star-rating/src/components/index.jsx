
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import './style.css';
export default function StarRating({ noOfStars = 5 }) {
    const [rating, setrating] = useState(0)
    const [hover, sethover] = useState(0)
    function handleClick(getCurrentIndex) {
        setrating(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex) {
        sethover(getCurrentIndex);


    }
    function handleMouseLeave() {

        sethover(rating)

    }
    return (
        <div className="star-rating">{
            [...Array(noOfStars)].map((_, index) => {
                index += 1;
                return <FaStar
                    className={index <= (hover || rating) ? "active" : 'inactive'}
                    key={index}
                    onClick={() => handleClick(index)}
                    onMouseMove={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    size={40} />
            })
        }

        </div>
    )

}