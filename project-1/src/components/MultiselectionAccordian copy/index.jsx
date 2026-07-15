// The Accordian component
import './style.css';
import React, { useState } from 'react';
import data from './data';
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const[multiple,setMultiple]=useState([])
    function handleSingleSelection(id) {
        setSelected(id===selected?null:id);
    }
    function handleMultiSelection(id) {
        let cpymultiple=[...multiple]
        const findIndexOfCurrentId = cpymultiple.indexOf(id)
        console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) {
            cpymultiple.push(id);
        }
        else {
            cpymultiple.splice(findIndexOfCurrentId,1)
        }
        setMultiple(cpymultiple)
    }
   
    console.log("selected", multiple);
    return (

        <div className="wrapper">
            <button onClick={() => {
                setEnableMultiSelection(!enableMultiSelection)
            }}>Enable MultiSelection</button>
            <div className='accordian'>
                {
                    data && data.length > 0 ?
                        data.map((dataitem) => (
                            <div className='item' key={dataitem.id}>
                                <div className='title'
                                    onClick={enableMultiSelection
                                        ?() => { handleMultiSelection(dataitem.id)}
                                        :() => { handleSingleSelection(dataitem.id) }}>
                                    <h3>{dataitem.question}</h3>
                                    <span>{(selected === dataitem.id || multiple.includes(dataitem.id)) ? '-' : '+'}</span>
                                
                                </div>
                                
                                {selected === dataitem.id ||multiple.indexOf(dataitem.id)!== -1? <div className='content'>{dataitem.answer}</div> : null}
                                    
                               
                            </div>
                        ))
                        : <div>No Data Found!</div>
                }
            </div>

        </div>
    )
}