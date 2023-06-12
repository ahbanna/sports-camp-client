// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import "./CheckoutForm.css";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [cardError, setCardError] = useState("");
//   const { user } = useContext(AuthContext);
//   const { axiosSecure } = useAxiosSecure();
//   const [clientSecret, setClientSecret] = useState("");
//   useEffect(() => {}, []);

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }

//     // Use your card Element with other Stripe.js APIs
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       console.log("[error]", error);
//       setCardError(error.message);
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
//     }

//     // confirm payment
//     const { paymentIntent, error: confirmError } =
//       await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             name: user?.displayName || "unknown name",
//             email: user?.email || "unknown email",
//           },
//         },
//       });
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button type="submit" disabled={!stripe}>
//           Pay
//         </button>
//       </form>
//       {cardError && <h5 className="text-danger">{cardError}</h5>}
//     </>
//   );
// };

// export default CheckoutForm;
