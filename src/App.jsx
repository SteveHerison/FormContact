import { useState } from "react";
import AlertSucess from "./components/AlertSucess";
import Form from "./components/Form";

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSuccess = () => {
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="h-screen w-screen bg-green-100">
      <AlertSucess visible={formSubmitted} />
      <Form onSuccess={handleFormSuccess} />
    </div>
  );
};

export default App;
