import "./card.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function Card({ product, btnName }) {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const pathName = useLocation();

  const isProductInWishList = true;

  const isProductInCart = true;

  return (
    <div className="sm-card">
      <div
        className="sm-card-img"
        title="Go To Product Page"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/products/${product._id}`);
        }}
      >
        {product.badgeName && (
          <span className="sm-card-badge">{product.badgeName}</span>
        )}
        <button
          className="sm-card-fav"
          title={`${
            isProductInWishList && user._id
              ? "Remove From Wishlist"
              : "Add To Wishlist"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            if (!user._id) {
              navigate("/auth", {
                state: { from: pathName },
                replace: true,
              });
            } else if (isProductInWishList) {
            } else {
            }
          }}
        >
          <i
            className={`fa-heart ${
              isProductInWishList && user._id ? "fas" : "far"
            }`}
          ></i>
        </button>
        <img src={product.image} alt={product.imageAlt} />
      </div>
      <div className="sm-card-content">
        <h2
          className="sm-card-content-title"
          title="Go To Product Page"
          onClick={() => navigate(`/products/${product._id}`)}
        >
          {product.title}
        </h2>
        <h2 className="sm-card-content-brand">
          <p className="sm-card-flex-rating">
            {`by  `}
            <span className="link-brand">{product.brandName}</span>
          </p>
          <span className="sm-card-rating">
            <i className="fas fa-star"></i> {product.rating}
          </span>
        </h2>

        <div className="sm-card-info">
          <span className="sm-card-info-price">
            {`${product.currency}${product.price.current}`}
            <span className="sm-card-info-price-old">
              {`${product.currency}${product.price.previous}`}
            </span>
            <span className="sm-card-info-price-save">
              {`(${product.discount}%Off)`}
            </span>
          </span>
          <button
            className="btn btn-primary cart-btn"
            title={isProductInCart && user._id ? "Go To Cart" : btnName}
            onClick={() => {
              if (!user._id) {
                navigate("/auth", {
                  state: { from: pathName },
                  replace: true,
                });
              } else if (isProductInCart) {
                navigate("/cart");
              } else {
              }
            }}
          >
            <i className="btn-cart fas fa-shopping-cart"></i>
            {isProductInCart && user._id ? "Go To Cart" : btnName}
          </button>
        </div>
      </div>
      {!product.inStock && (
        <div className="sm-card-overlay">
          <h3 className="sm-card-overlay-text">Out Of Stock</h3>
        </div>
      )}
    </div>
  );
}
