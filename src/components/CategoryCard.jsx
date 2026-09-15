function CategoryCard({ image, title }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} />

      <div className="category-info">
        <h3>{title}</h3>
        <button>Explore</button>
      </div>
    </div>
  );
}

export default CategoryCard;