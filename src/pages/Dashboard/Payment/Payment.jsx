// import React from "react";
// import CheckoutForm from "./CheckoutForm";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useLocation } from "react-router-dom";
// // const stripePromise = loadStripe(
// //   `${import.meta.env.VITE_payment_gateway_stripe}`
// // );
// const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_stripe);

// const Payment = ({ props }) => {
//   const location = useLocation();
//   const { price } = location.state || {};
//   console.log(price);
//   return (
//     <div className="text-center">
//       <div className="section-title2 text-center">
//         <h3 className="main-heading">My Payment</h3>
//       </div>
//       <h2>You need to pay: ${price}. Pay now</h2>
//       <Elements stripe={stripePromise}>
//         <CheckoutForm price={price}></CheckoutForm>
//       </Elements>
//     </div>
//   );
// };

// export default Payment;

// payment success for above code

import React from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

// const stripePromise = loadStripe(
//   `${import.meta.env.VITE_payment_gateway_stripe}`
// );
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_stripe);

const Payment = ({ props }) => {
  const location = useLocation();
  const {
    price,
    instructorName,
    email,
    availableSeat,
    classPic,
    className,
    userEmail,
    classId,
  } = location.state || {};
  console.log(
    instructorName,
    email,
    availableSeat,
    className,
    classPic,
    userEmail,
    classId
  );
  return (
    <div className="text-center">
      <div className="section-title2 text-center">
        <h3 className="main-heading">My Payment</h3>
      </div>
      <h2>You need to pay: ${price}. Pay now</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          price={price}
          instructorName={instructorName}
          email={email}
          availableSeat={availableSeat}
          className={className}
          classPic={classPic}
          userEmail={userEmail}
          classId={classId}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
