import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBook, faPen, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './SelectSubject.css'

function SelectSubject(props) {
    const { subject, category, level, credit, cost, img } = props.subject;
    const cap = <FontAwesomeIcon icon={faGraduationCap} />
    const book = <FontAwesomeIcon icon={faBook} />
    const pen = <FontAwesomeIcon icon={faPen} />
    const cartPlus = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className='sub'>
            <div className="SelectSub">
                <div className='info'>
                    <h1>{subject}</h1>
                    <p>Category: {category}</p>
                    <p>Level: {level}</p>
                    <p>Credit: {credit}</p>
                    <p>Cost: ${cost}</p>
                </div>
                <div>
                    <img src={img} alt={subject} />
                </div>
            </div>
            <span>{book}</span><span>{pen}</span><span>{cap}</span>
            <button onClick={() => props.AddToList(props.subject)}>{cartPlus} Add to List</button>
        </div>
    )
}

export default SelectSubject
