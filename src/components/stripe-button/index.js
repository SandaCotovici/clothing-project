import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = 100 * price
  const publishableKey =
    'pk_test_51HhHQpKmjRdglL2ffUdjWczeijtWmsBjkqh2qoJ8rdUTDRM6WHw77rKUMw4b0XPKzW1HgV1fTZeauoy4SH9FXyoe00DAy0juwI'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Succesful!')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
