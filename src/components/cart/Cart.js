import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

function Cart(props) {
    const { list } = props;
    const CartDown = <FontAwesomeIcon icon={faCartArrowDown} />
    let totalCost = 0, totalCredit = 0;
    for (const subject of list) {
        totalCost += subject.cost;
        totalCredit += subject.credit;
    }

    return (
        <div className='cart'>
            <h2>List Summary</h2>
            <h4>Subjects Selected:{props.list.length}</h4>
            <h5>Total Cost: ${totalCost}</h5>
            <h5>Total Credit: {totalCredit}</h5>
            {
                list.map(subject => <p>{subject.subject}-cost:{subject.cost} {CartDown}</p>)
            }
        </div>
    )
}

export default Cart
