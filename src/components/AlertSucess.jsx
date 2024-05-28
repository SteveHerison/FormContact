import { useEffect, useState } from "react";

const AlertSuccess = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 p-3 bg-green-100 text-green-800 rounded z-50 transition-all duration-500 ease-out ${
        visible ? "top-4 opacity-100" : "top-0 opacity-0"
      }`}>
      Form submitted successfully!
    </div>
  );
};

export default AlertSuccess;
