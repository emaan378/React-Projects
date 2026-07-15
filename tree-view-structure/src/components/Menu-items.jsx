import { useState } from "react";
import MenuList from "./Menu-lists";
import{FaPlus,FaMinus} from 'react-icons/fa'


export default function MenuItems({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]
        })
        
    }console.log(displayCurrentChildren)
    return (
        <li >
            <div className="menu-items">
                <p>{item.label}
                    {
                        item && item.children && item.children.length ?
                            <span onClick={() => handleToggleChildren(item.label)}>{
                                displayCurrentChildren[item.label] ? <FaMinus color="#ffff" size={20} /> : <FaPlus color="#ffff" size={25} />
                            }</span>
                            :null
                    }
                </p>
           </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]? 
                <MenuList list={item.children}/>  : null
            }
        </li>
    )
}