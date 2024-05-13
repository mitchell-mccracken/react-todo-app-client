import React from 'react';
import { useState } from 'react';
import { HandleInputChange } from '../utils';


const NewOrderComponent = ( { show } ) => {

  const [ newOrder, setNewOrder ] = useState({
    type: '',
    size: '',
    cut: false,
  })


  const handleInputChange = HandleInputChange( setNewOrder );

  const logValues = () => { console.log( newOrder ) };

  return (show) ? 
  (
    <div id='new-order-component' className='FCNW'>
      <div>
        <input 
          type="text" 
          placeholder='type' 
          name='type' 
          value={newOrder.type} 
          onChange={handleInputChange} 
        />
      </div>
      <div>
        <input 
          type="text" 
          name="size" 
          placeholder='size' 
          value={newOrder.size}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input 
          type="checkbox" 
          name='cut'
          value={newOrder.cut}
          onChange={handleInputChange}
        />
        <label htmlFor="">Cut?</label>
      </div>
      <div>
        <button onClick={logValues}>Show values</button>
      </div>
    </div>
  )
  : null
};


export default NewOrderComponent;