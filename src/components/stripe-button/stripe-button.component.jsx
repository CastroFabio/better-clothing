import React, { useDebugValue } from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JwuyrFWT5HwzxBOVZlnjeR3bGAI5nQF6VWF27xQqhKXK5Iip44hniu1KXxq9JxfUAGweEHdzMYxDPrDI0elTVaI00OfBva3XC'
    
    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }

    return(
        <StripeCheckout
            label = 'Pay Now'
            name = 'BTTR Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is R${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;
