import { useCart } from "../context/cartContext"; // 👈 Import the hook

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // 👈 Use the context

    useEffect(() => {   
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
    }, []);


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shop Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 bg-white"
          >
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="font-bold text-blue-600">${product.price}</p>
            <button
              className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
