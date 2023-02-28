import { ProductDTO } from "../../models/product";
import './styles.scss';

type Props = {
  product : ProductDTO;
}

export default function ProductCard({product} : Props) {
  return (
    <div className="product-card">
      <p>{product.name}</p>
      <h3>{product.price.toFixed(2)}</h3>
    </div>
  );
}
