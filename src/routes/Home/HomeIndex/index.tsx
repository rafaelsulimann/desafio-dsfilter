import { useEffect, useState } from "react";
import FilterCard from "../../../components/FilterCard";
import ListingProductsCard from "../../../components/ListingProductsCard";
import { ProductDTO } from "../../../models/product";
import * as productService from '../../../services/product-service';
import './styles.scss';

export default function HomeIndex() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        setProducts(productService.findByPrice(0, Number.MAX_SAFE_INTEGER));
    }, [])

    return(
        <main className="home-index">
            <section className="filter">
                <FilterCard />
            </section>
            <section className="listing">
                <ListingProductsCard products={products}/>
            </section>
        </main>
    );
}