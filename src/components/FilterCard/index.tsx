import { useState } from "react";
import "./styles.scss";

type Props = {
  onFilter: Function;
};

type FormData = {
  minValue?: number;
  maxValue?: number;
};

export default function FilterCard({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({
    minValue: undefined,
    maxValue: undefined,
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    onFilter(formData.minValue, formData.maxValue);
  }

  function handleChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="container filter-card-container">
      <form className="filter-card" onSubmit={handleSubmit}>
        <div className="filter-card-input">
          <label htmlFor="minValue">Preço mínimo</label>
          <input
            id="minValue"
            value={formData.minValue}
            name="minValue"
            type="text"
            placeholder="Preço mínimo"
            onChange={handleChange}
          />
        </div>
        <div className="filter-card-input">
          <label htmlFor="maxValue">Preço mínimo</label>
          <input
            id="maxValue"
            name="maxValue"
            value={formData.maxValue}
            type="text"
            placeholder="Preço máximo"
            onChange={handleChange}
          />
        </div>
        <div className="filter-card-button-submit">
          <button type="submit">Filtrar</button>
        </div>
      </form>
    </div>
  );
}
