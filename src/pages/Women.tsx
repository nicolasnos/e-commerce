import { useEffect, useState } from "react";
import "../styles/Women.css";
import CardC from "../components/CardC";
import { baseAPI } from "../assets/constants";
import { CardGroup } from "react-bootstrap";

const Women = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    showApi();
  }, []);

  const showApi = async () => {
    const res = await fetch(baseAPI);
    const data = await res.json();
    setInfo(data);
  };

  const filteredM = info.filter((item: any) => item.category.includes("women"));

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
        item={item}
      />
    )
  );
  return <CardGroup className="Women">{itemsM}</CardGroup>;
};

export default Women;
