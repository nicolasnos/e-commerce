import { useEffect, useState } from "react";
import "../styles/Electronic.css";
import CardC from "../components/CardC";

const Electronic = () => {
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
    (item: any) =>
      item.category.includes("electronic") || item.category.includes("jewelery")
  );

  const itemsM = filteredM.map(
    (
      item: {
        title: string;
        description: string;
        image: string;
        price: number;
        category: string;
      },
      i: number
    ) => (
      <CardC
        title={item.title}
        description={item.description}
        image={item.image}
        price={item.price}
        category={item.category}
        key={i}
      />
    )
  );
  return <section className="Electronic">{itemsM}</section>;
};

export default Electronic;
