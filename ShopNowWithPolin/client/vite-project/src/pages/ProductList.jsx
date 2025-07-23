import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/cartContext"; // 👈 Import the cart context

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // 👈 Access addToCart function from context

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">🛍️ Shop Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white border rounded-lg shadow p-4 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-blue-600 font-bold mb-4">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
