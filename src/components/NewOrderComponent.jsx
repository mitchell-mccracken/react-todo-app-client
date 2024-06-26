import React from 'react';
import { useState } from 'react';
import { HandleInputChange } from '../utils';
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import axios from 'axios';
import { setURL } from '../utils';

const NewOrderComponent = ( { show } ) => {

  const [ newOrder, setNewOrder ] = useState({
    type: '',
    size: '',
    cut: false,
  })


  const handleInputChange = HandleInputChange( setNewOrder );

  const logValues = () => { console.log( newOrder ) };

  const paymentFunction = ( token, verifiedBuyer ) => {
    console.log('token:', token);
    console.log('verifiedBuyer:', verifiedBuyer);

    axios.post( setURL('/api/user/payment'), { sourceId: token.token } )
    .then( res => {
      console.log(res.data)
    })
    .catch( e => console.error( e ) );

  };

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
      <div>
        <div>
          <input 
            type="text" 
            placeholder='card number'
          />
        </div>
        {/* <PaymentForm
          applicationId="sandbox-sq0idb-BO9q6ECgkcitNE4rJpOQiw"
          cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
            console.log('token:', token);
            console.log('verifiedBuyer:', verifiedBuyer);
          }}
          locationId='XXXXXXXXXX'
        >
          < CreditCard />
        </PaymentForm> */}
        <PaymentForm
          applicationId="sandbox-sq0idb-BO9q6ECgkcitNE4rJpOQiw"
          cardTokenizeResponseReceived={paymentFunction}
          locationId='XXXXXXXXXX'
        >
          < CreditCard />
        </PaymentForm>
      </div>
    </div>
  )
  : null
};


export default NewOrderComponent;