function CategoryCard({ image, title }) {
  return (
    <div className="category-card">

      <div className="category-image">
        <img src={image} alt={title} />
      </div>

      <div className="category-info">
        <h3>{title}</h3>

        <button className="category-button">
          Explore
        </button>
      </div>

    </div>
  );
}

export default CategoryCard;