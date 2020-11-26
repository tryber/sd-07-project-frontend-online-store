import React from 'react';

class CategoryFilters extends React.Component {
  render() {
    return(
      <aside className="categori-filters">
        <h3>Categorias:</h3>
        <div className="category-container">
          <form>
            <input type="radio" data-testid="category1" />
            <label>Categoria 1</label>

            <input type="radio" data-testid="category2" />
            <label>Categoria 2</label>

            <input type="radio" data-testid="category3" />
            <label>Categoria 3</label>

            <input type="radio" data-testid="category4" />
            <label>Categoria 4</label>

            <input type="radio" data-testid="category5" />
            <label>Categoria 5</label>
          </form>
        </div>
      </aside>
    );
  }
}

export default CategoryFilters;
