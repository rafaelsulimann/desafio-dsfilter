import { ProductDTO } from "../../models/product";

type Props = {
  product : ProductDTO;
}

export default function ProductCard({product} : Props) {
  return (
    <div className="product-card">
      <p>{product.name}</p>
      <h3>{product.price}</h3>
    </div>
  );
}
