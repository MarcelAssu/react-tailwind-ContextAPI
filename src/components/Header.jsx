import { useCart } from "../contexts/CartContext";

export const Header = () => {
  const { cart } = useCart();
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">Minha Loja</h1>
      <div className="flex items-center space-x-2">
        <span className="bg-white text-blue-600 rounded-full px-3 py-1 text-sm font-semibold">
           {cart.length}
        </span>
      </div>
    </header>
  );
};