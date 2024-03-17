import React,{useEffect,useState} from "react";
import { Link,useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
//  const prevLocation="qaswa"
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Policies" prevLocation={prevLocation} />
      <div className="pb-10">
      <h1 className="max-w-[1400px] text-base text-lightText mb-2 text-xl"><span className="text-primeColor font-bold text-4xl content-center">
          TERMS & CONDITIONS
        </span><br /><br />
        Welcome to QASWA FRUITS TRADERS! By using our website and services, you agree to the following terms and conditions. Our website is intended for users who are at least [age] years old. We strive to provide accurate product information and pricing, but we cannot guarantee that all information is error-free or up to date. Placing an order constitutes an offer to purchase, subject to our acceptance. Payment is required at the time of purchase. We aim to deliver fresh fruits promptly, but delays may occur due to various factors. You may review our shipping and returns policy for more details. Our content, including images and text, is protected by copyright and other laws. You may not use our content without permission. We are not liable for any damages or losses resulting from the use of our website or products. These terms are governed by the laws of Indian Government. If you have any questions, please contact us.
        </h1>
        <br />
        <h1 className="max-w-[1400px] text-base text-lightText mb-2 text-xl"><span className="text-primeColor font-bold text-4xl content-center">
          PRIVACY POLICIES
        </span><br /><br />
        At QASWA FRUITS TRADERS, we are committed to protecting your privacy and ensuring the security of your personal information. When you visit our website or use our services, we may collect basic information such as your name, email address, and shipping address for order processing and communication purposes only. We do not share your information with third parties except for order fulfillment and essential business operations. Your payment information is securely processed and encrypted, and we do not store your credit card details on our servers. We may use cookies to improve your browsing experience and track website analytics, but you can opt out of cookies in your browser settings. By using our website, you consent to our privacy policy. If you have any questions or concerns about your privacy or how we handle your information, please contact us.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-sky-500 text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
