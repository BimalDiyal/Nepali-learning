
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan } = location.state || {};

  if (!plan) {
    return (
      <div className="text-center py-20 text-xl">
        No plan selected.{" "}
        <button
          className="text-blue-600 underline"
          onClick={() => navigate("/")}
        >
          Go back
        </button>
      </div>
    );
  }

  const handleEsewaPay = () => {
    const { amount } = plan;
    const params = {
      amt: amount,
      psc: 0,
      pdc: 0,
      txAmt: 0,
      tAmt: amount,
      pid: "1234567890",
      scd: "EPAYTEST",
      su: "http://localhost:3000/esewa-success",
      fu: "http://localhost:3000/esewa-failure",
    };

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://uat.esewa.com.np/epay/main";

    for (let key in params) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = params[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="bg-[#F3F4F6] min-h-screen flex flex-col justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Payment Summary</h2>
        <p className="text-lg font-medium">{plan.title}</p>
        <p className="text-gray-600 mt-2">{plan.price}</p>
        <button
          onClick={handleEsewaPay}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold"
        >
          Pay with eSewa (${plan.amount})
        </button>
      </div>
    </div>
  );
}
