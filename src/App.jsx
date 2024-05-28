import SignUp from "./components/SignUp";
import { FormProvider } from "./contexts/FormContext";

const App = () => {
  return (
    <FormProvider>
      <div className="w-full h-full flex justify-center items-center container m-auto p-5">
        <SignUp />
      </div>
    </FormProvider>
  );
};

export default App;
