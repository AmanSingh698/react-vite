import React, { useRef } from "react";

const ProductCards = () => {
  const scrollRef = useRef(null);
  const products = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    name: `Premium Product ${i + 1}`,
    description: "High-quality material and sleek design.",
    image: "https://icecric.news/wp-content/uploads/2023/03/Virat-Kohli-1.webp",
  }));

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth; // Scroll by one full view
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="productsSection">
      <button className="prod-prev-btn" onClick={() => scroll("left")}>
        &#10094;
      </button>

      <div className="product-cards" ref={scrollRef}>
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>

      <button className="prod-next-btn" onClick={() => scroll("right")}>
        &#10095;
      </button>
    </div>
  );
};

export default ProductCards;
