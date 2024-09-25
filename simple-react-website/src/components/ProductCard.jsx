

const ProductCard = ({product}) => {
  const {name, image, description, price} = product
  return (
    <div className="border border-[#5ee6c4] rounded-md p-3 ">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-center text-2xl font-medium my-4">{name}</h2>
      <p className="text-center">Price : <span className="text-[#5ee6c4]">{price}</span></p>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;