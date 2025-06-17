import { useNavigate } from "react-router";
import { useCheckoutStore } from "../store/checoutStore";
import type { CheckoutFormData } from "../schemas/checkoutSchema";
import CheckoutForm from "../components/forms/checkoutForm";

const Checkout = () => {
  const setCheckoutData = useCheckoutStore((state) => state.setData);
  const navigate = useNavigate();

  const handleSubmit = (data: CheckoutFormData) => {
    console.log("🚀 ~ handleSubmit ~ data:", data);
    setCheckoutData(data);
    navigate("/confirmation");
  };
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <CheckoutForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Checkout;
