import React, { useContext, useState, useEffect } from "react";
import classes from "./Orders.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from '../../Components/Product/ProductCard'

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;

    const ordersRef = collection(db, "users", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(ordersData);
      console.log("Orders snapshot:", ordersData);
    });

    return unsubscribe;
  }, [user]); 

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your orders</h2>
          {
            orders?.length === 0 && 
            <div style={{padding: "20px"}}>You don't have orders yet</div>
          }
          <div>
            {orders.map((order) => (
              <div key={order.id}>
                <hr/>
                <p>{order.id}</p>
                 {order.basket?.map((order, index) => (
                    <ProductCard 
                    flex={true}
                    product={order}
                    key={index}/>
                  ))}
                </div>
            ))}
           
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
