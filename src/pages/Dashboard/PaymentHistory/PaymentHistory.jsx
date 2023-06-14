import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Slide } from "react-awesome-reveal";
import { Table } from "react-bootstrap";
import useTitle from "../../../hooks/useTitle";

const PaymentHistory = () => {
  useTitle("Payment History");
  const { user } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    fetch(
      `https://uppity-ants-production.up.railway.app/payments?userEmail=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // apply sorting
        const sortedHistory = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setHistory(sortedHistory);
        // setHistory(data);
      });
  }, []);
  return (
    <div className="payment-history-area">
      <Slide triggerOnce>
        <h3 className="main-heading text-center">My Payment History</h3>
      </Slide>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL</th>
            <th>User Email</th>
            <th>Transaction ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.userEmail}</td>
              <td>{item.transactionId}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentHistory;
