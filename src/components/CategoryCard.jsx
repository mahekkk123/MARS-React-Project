function CategoryCard({ title, image }) {
  return (
    <a
      href="#best-sellers"
      className="category-card"
      aria-label={`Shop ${title}`}
    >

      <div className="category-image">

        <img
          src={image}
          alt={`${title} beauty products`}
        />

        <div className="category-overlay">

          <div>
            <h3>
              {title}
            </h3>

            <span>
              SHOP NOW →
            </span>
          </div>

        </div>

      </div>

    </a>
  );
}

export default CategoryCard;