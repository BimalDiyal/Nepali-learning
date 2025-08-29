import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const AuthHeader = ({ title, subtitle }) => {
  const navigate = useNavigate();

  return (
    <div className="text-center mb-8">
      {/* Logo and Brand */}
      <div
        className="flex items-center justify-center gap-3 mb-6 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <div className="w-12 h-12">
          <img src={logo} alt="Nepali Learn Logo" className="w-full h-full object-contain" />
        </div>
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-800">
            Nepali <span className="text-yellow-500">Learn</span>
          </h1>
          <p className="text-sm text-gray-500">Master Nepali Language</p>
        </div>
      </div>

      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default AuthHeader; 