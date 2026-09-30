import { useNavigate } from "react-router-dom";

function CategoryCard({ title, image }) {
  const navigate = useNavigate();

  return (
    <div
      className="category-card"
      onClick={() =>
        navigate(`/search?q=${title}`)
      }
      style={{ cursor: "pointer" }}
    >

      <img
        src={image}
        alt={title}
        loading="lazy"
      />

      <div className="category-overlay">
        <h3>{title}</h3>

        <span>
          SHOP NOW →
        </span>
      </div>

    </div>
  );
}

export default CategoryCard;