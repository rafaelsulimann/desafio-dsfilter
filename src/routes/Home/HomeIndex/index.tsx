import { useContext, useEffect, useState } from "react";
import FilterCard from "../../../components/FilterCard";
import ListingProductsCard from "../../../components/ListingProductsCard";
import { ProductDTO } from "../../../models/product";
import * as productService from '../../../services/product-service';
import { ContextProductsCount } from "../../../utils/context-filter";
import './styles.scss';

type FormData = {
    minValue? : number;
    maxValue? : number;
}

export default function HomeIndex() {

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [formData, setFormData] = useState<FormData>({
        minValue: undefined,
        maxValue: undefined
    });
    const {setContextProductsCount} = useContext(ContextProductsCount);

    function handleFilter(minValue: number, maxValue: number) {
        setFormData({...formData, minValue: minValue, maxValue: maxValue});
    }

    useEffect(() => {
        const filteredProducts = productService.findByPrice(formData.minValue || 0, formData.maxValue || Number.MAX_VALUE);
        setProducts(filteredProducts);
        setContextProductsCount(filteredProducts.length);
    }, [formData])

    return(
        <main className="home-index">
            <section className="filter">
                <FilterCard onFilter={handleFilter}/>
            </section>
            <section className="listing">
                <ListingProductsCard products={products}/>
            </section>
        </main>
    );
}