import './styles.scss';

export default function Header() {
    return(
        <header className="header">
            <div className="container header-container">
                <div className="header-title">
                    <h1>DSFilter</h1>
                </div>
                <div className="header-filter-count">
                    <p>6 produto(s)</p>
                </div>
            </div>
        </header>
    );
}