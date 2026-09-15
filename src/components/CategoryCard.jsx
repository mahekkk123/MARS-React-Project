function CategoryCard({ image, title }) {
  return (
    <div className="category-card">

      <div className="category-image">
        <img src={image} alt={title} />

        <div className="category-overlay">
          <button className="category-button">
            SHOP {title.toUpperCase()}
          </button>
        </div>
      </div>

      <h3>{title}</h3>

    </div>
  );
}

export default CategoryCard;