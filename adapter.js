class PayPal {

    pay(amount) {

        return `Paiement PayPal : ${amount} €`;
    }
}

class PayPalAdapter {

    payer(amount) {

        const paypal = new PayPal();
        return paypal.pay(amount)
    }
}

class Stripe {

    makePayment(amount) {

        return `Paiement Stripe : ${amount} €`;
    }
}

class StripeAdaptor {

    payer(amount) {

        const stripe = new Stripe();
        return stripe.makePayment(amount);
    }
}


function processPayment(paymentMethod, amount) {

  console.log(paymentMethod.payer(amount));
}

// Utilisation

const paypalAdapter = new PayPalAdapter()
const stripeAdapter = new StripeAdaptor();

processPayment(paypalAdapter, 100);
processPayment(stripeAdapter, 150);
