// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import "./CheckoutForm.css";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../providers/AuthProvider";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const CheckoutForm = ({ price }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [cardError, setCardError] = useState("");
//   const { user } = useContext(AuthContext);
//   const [axiosSecure] = useAxiosSecure();
//   const [clientSecret, setClientSecret] = useState("");
//   const [processing, setProcessing] = useState(false);
//   const [transactionId, setTransactionId] = useState("");
//   useEffect(() => {
//     console.log(price);
//     axiosSecure
//       .post("http://localhost:5000/create-payment-intent", { price })
//       .then((res) => {
//         console.log(res.data.clientSecret);
//         setClientSecret(res.data.clientSecret);
//       });
//   }, []);

//   //   axiosSecure.post("/create-payment-intent", { price }).then((res) => {
//   //     console.log(res.data.clientSecret);
//   //     setClientSecret(res.data.clientSecret);
//   //   });
//   // }, []);

//   ////////using useeffect

//   // useEffect(() => {
//   //   fetch(
//   //     "https://uppity-ants-production.up.railway.app/create-payment-intent",
//   //     {
//   //       method: "POST",
//   //       headers: {
//   //         "content-type": "application/json",
//   //       },
//   //       body: JSON.stringify(parseInt(price)),
//   //     }
//   //   )
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       setClientSecret(data.data.clientSecret);
//   //     });
//   // }, []);

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

//     setProcessing(true);
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
//     if (confirmError) {
//       console.log(confirmError);
//     }
//     console.log(paymentIntent);

//     setProcessing(false);
//     if (paymentIntent.status == "succeeded") {
//       setTransactionId(paymentIntent.id);
//     }
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
//         {/* <button type="submit" disabled={!stripe || !clientSecret}> */}
//         <button type="submit" disabled={!stripe || !clientSecret}>
//           Pay
//         </button>
//       </form>
//       {cardError && <h5 className="text-danger">{cardError}</h5>}
//       {transactionId && (
//         <h6 className="text-success">
//           Congratulations! Your payment is completed. Your transaction id: {transactionId}
//         </h6>
//       )}
//     </>
//   );
// };
// export default CheckoutForm;

//  THE ABOVE CODE WORKS FINE FOR PAYMENT

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({
  price,
  userEmail,
  classPic,
  className,
  availableSeat,
  email,
  instructorName,
  classId,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log(
      price,
      userEmail,
      className,
      classPic,
      availableSeat,
      email,
      instructorName,
      classId
    );
    if (price > 0) {
      axiosSecure
        .post(
          "https://uppity-ants-production.up.railway.app/create-payment-intent",
          { price }
        )
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown name",
            email: user?.email || "unknown email",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log(paymentIntent);

    setProcessing(false);
    if (paymentIntent.status == "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        // email: user?.email,
        transactionId: paymentIntent.id,
        peice: price,
        userEmail: userEmail,
        className: className,
        classPic: classPic,
        availableSeat: parseFloat(availableSeat),
        email: email,
        instructorName: instructorName,
        classId: classId,
        date: new Date(),
      };
      axiosSecure
        .post("https://uppity-ants-production.up.railway.app/payments", payment)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Payment Success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/enrolledclesses");
          }
        });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="my-5 payment-form"
        style={{ margin: "auto" }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {/* <button type="submit" disabled={!stripe || !clientSecret}> */}
        <button type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {cardError && <h5 className="text-danger">{cardError}</h5>}
      {transactionId && (
        <h6 className="text-success">
          Congratulations! Your payment is completed. Your transaction id:{" "}
          {transactionId}
        </h6>
      )}
    </>
  );
};
export default CheckoutForm;
