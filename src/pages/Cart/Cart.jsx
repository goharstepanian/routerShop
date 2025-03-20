import React from 'react'
import GoBackBtn from '../../components/GoBackBtn/GoBackBtn'
import { useLocation } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {
    const obj = useLocation()
  return (
      <div >
          <GoBackBtn />
          <div className='cart'>
              <img className="image" src={obj.state.image} alt={obj.state.title} />
              <div>
                  <h3>{obj.state.title}</h3>
                  <strong>{ obj.state.price}$</strong>
              </div>
          </div>
    </div>
  )
}

export default Cart