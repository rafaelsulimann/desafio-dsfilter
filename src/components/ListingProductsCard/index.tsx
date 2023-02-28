import { ProductDTO } from "../../models/product";
import ProductCard from "../ProductCard";

type Props ={
    products: ProductDTO[];
}

export default function ListingProductsCard({products} : Props) {
    return(
        <div className="container listing-products-card-container">
            <div className="listing-products-card">
                {
                    products &&
                    products.map(product => <ProductCard product={product} key={product.id}/>)
                }
            </div>
        </div>
    );
}