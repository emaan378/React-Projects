// The Accordian component
import './style.css';
import React, { useState } from 'react';
import data from './data';
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    function handleSingleSelection(id) {
        setSelected(id===selected?null:id);
    }
    console.log("selected", selected);
    return (

        <div className="wrapper">
            <div className='accordian'>
                {
                    data && data.length > 0 ?
                        data.map((dataitem) => (
                            <div className='item'>
                                <div className='title' onClick={() => { handleSingleSelection(dataitem.id) }}>
                                    <h3>{dataitem.question}</h3>
                                    <span>+</span>
                                </div>
                                
                                {selected === dataitem.id ? <div className='content'>{dataitem.answer}</div> : null}
                                    
                               
                            </div>
                        ))
                        : <div>No Data Found!</div>
                }
            </div>

        </div>
    )
}