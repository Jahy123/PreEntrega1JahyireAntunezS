const ProductCard = ({ item }) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <img src={item.img} alt="" />
      <h2>{item.title}</h2>
      <h2>{item.description}</h2>
    </div>
  );
};

export default ProductCard;
