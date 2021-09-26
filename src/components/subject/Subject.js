import React from 'react'
import { useState, useEffect } from 'react'
import './Subject.css'
import SelectSubject from '../selectSubject/SelectSubject'
import Cart from '../cart/Cart';

function Subject() {
    const [subject, setSubject] = useState([]);
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('./subjects.JSON')
            .then(res => res.json())
            .then(data => setSubject(data))

    }, [])

    const hanldeAddToList = subject => {
        const newList = [...list, subject]
        setList(newList);

    }


    return (
        <div className='subject'>
            <div className="selectSubjcet">
                {subject.map(subject => <SelectSubject
                    key={subject.key}
                    subject={subject}
                    AddToList={hanldeAddToList}>
                </SelectSubject>)}
            </div>
            <div className="cart">
                <Cart list={list}></Cart>
            </div>

        </div>
    )
}

export default Subject
