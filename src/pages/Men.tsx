import { useContext, useEffect, useState } from "react";
import CartContext, { useTheme } from "../context/CartContext.jsx";
import "../styles/Men.css";
import CardC from "../components/CardC";

const Men = () => {
  const { itemList, addItemList } = useTheme();
  console.log(itemList);

  const [info, setInfo] = useState([]);
  useEffect(() => {
    showApi();
  }, []);

  const showApi = async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    setInfo(data);
  };

  const filteredM = info.filter(
    (item: { category: string }) =>
      item.category.includes("men") && !item.category.includes("women")
  );

  const itemsM = filteredM.map(
    (item: {
      title: string;
      description: string;
      image: string;
      price: number;
      category: string;
      id: number;
    }) => (
      <CardC
        title={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
        category={item.category}
        id={item.id}
      />
    )
  );

  return <section className="Men">{itemsM}</section>;
};

export default Men;
