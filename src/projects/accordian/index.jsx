import React, { useState } from 'react'
import data from '../accordian/data'
import './style.css'

export const Accordian = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (itemId) => {
        setSelected(selected === itemId ? null : itemId);
    }

    const handleMultiSelection = itemId => {
        let cpyMultiple = [...multiple];
        
        if(cpyMultiple.indexOf(itemId) === -1) cpyMultiple.push(itemId);
        else cpyMultiple.splice(cpyMultiple.indexOf(itemId), 1);
        setMultiple(cpyMultiple);
    }
    // console.log(selected, multiple);
    return (
        <div>
            <div className="wrapper">
                <button className='selectionBtn' onClick={()=>setEnableMultiSelect(!enableMultiSelect)}>Enable {enableMultiSelect ? "Single": "Multiple"} Selection</button>
                <div className="accordian">
                    {
                        data && data.length > 0 ?
                            data.map((dataItem, index) => <div key={index} className='item' onClick={enableMultiSelect ? ()=>handleMultiSelection(dataItem.id) :() => handleSingleSelection(dataItem.id)}>
                                <div className='title'>
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    selected === dataItem.id || (enableMultiSelect && multiple.includes(dataItem.id)) ? <div className='content'>{dataItem.answer}</div> : null
                                }
                            </div>)

                            : <div>Data not found</div>
                    }
                </div>
            </div>
        </div>
    )
}
