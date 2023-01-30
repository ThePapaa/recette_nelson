import React from 'react'
import './components.css'
const DietCards = (props) => {
    return (
        <div className={`diet-card ` + props.cardMode}>
            <button onClick={props.method} type='button' className={"btn-diet " + props.buttonMode}>{(props.buttonMode === "button-normal" ? "ADD" : <i className='fa-solid fa-trash-can'></i>)}</button>
            <img className='diet-image' src={props.image} alt="" />
            <h3>{props.name}</h3>
        </div>
    )
}

export default DietCards