import './styles.scss';

export default function FilterCard() {
    return(
        <div className="container filter-card-container">
            <form className="filter-card">
                <div className="filter-card-input">
                    <label htmlFor="minValue">Preço mínimo</label>
                    <input id="minValue" name="minValue" type="text" placeholder="Preço mínimo"/>
                </div>
                <div className="filter-card-input">
                    <label htmlFor="maxValue">Preço mínimo</label>
                    <input id="maxValue" name="maxValue" type="text" placeholder="Preço máximo"/>
                </div>
                <div className='filter-card-button-submit'>
                    <button type='submit'>Filtrar</button>
                </div>
            </form>
        </div>
    );
}