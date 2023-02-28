import { useContext } from 'react';
import { ContextProductsCount } from '../../utils/context-filter';
import './styles.scss';

export default function Header() {

    const {contextProductsCount} = useContext(ContextProductsCount);

    return(
        <header className="header">
            <div className="container header-container">
                <div className="header-title">
                    <h1>DSFilter</h1>
                </div>
                <div className="header-filter-count">
                    {
                        contextProductsCount > 0
                        ? <p>{contextProductsCount} produto(s)</p>
                        : <p>0 produto(s)</p>
                    }
                </div>
            </div>
        </header>
    );
}