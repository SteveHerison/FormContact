import { useContext, useState } from "react";
import InputsForm from "./InputsForm";
import { FormContext } from "../contexts/FormContext";
import { formFields } from "../data/FormFiled";
import AlertSuccess from "./AlertSucess";

const SignUp = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setShowSuccess(false); // Hide success message on form change
    if (type === "radio" && formData[id] === value) {
      setFormData((prevData) => ({
        ...prevData,
        [id]: false,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: type === "checkbox" ? checked : value,
      }));
    }
    setErrors((prevError) => ({
      ...prevError,
      [id]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};

    if (!formData.firstName.trim()) {
      newError.firstName = "Please enter your first name";
    }
    if (!formData.lastName.trim()) {
      newError.lastName = "Please enter your last name";
    }
    if (!formData.email.trim()) {
      newError.email = "Please enter your email address";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newError.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newError.message = "Please enter your message";
    }
    if (!formData.generalEnquiry && !formData.supportRequest) {
      newError.enquiryType = "Please select an enquiry type";
    }
    if (!formData.consent) {
      newError.consent = "You must consent to be contacted";
    }
    setErrors(newError);
    if (Object.keys(newError).length === 0) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        generalEnquiry: false,
        supportRequest: false,
        message: "",
        consent: false,
      });
      setShowSuccess(true);
    }
  };

  return (
    <div className="bg-white rounded-xl p-5">
      {showSuccess && <AlertSuccess />}
      <div className="w-[40rem] h-full">
        <h1 className="text-3xl mb-7">Contact Us</h1>
        <form onSubmit={handleSubmit} className="w-full h-full">
          <ul className="flex flex-col ">
            <div className="flex space-x-3">
              {formFields.slice(0, 2).map(({ id, label, type }) => (
                <li key={id} className="flex-1 mb-8">
                  <label htmlFor={id} className="flex flex-col">
                    {label}
                    <InputsForm
                      id={id}
                      type={type}
                      value={formData[id]}
                      onChange={handleChange}
                    />
                  </label>
                  {errors[id] && (
                    <p className="text-redConfg text-sm">{errors[id]}</p>
                  )}
                </li>
              ))}
            </div>

            {formFields.slice(2, 3).map(({ id, label, type }) => (
              <li key={id} className="flex-1 mb-8">
                <label htmlFor={id} className="flex flex-col">
                  {label}
                  <InputsForm
                    id={id}
                    type={type}
                    value={formData[id]}
                    onChange={handleChange}
                  />
                </label>
                {errors[id] && (
                  <p className="text-redConfg text-sm">{errors[id]}</p>
                )}
              </li>
            ))}

            <div className="flex flex-col">
              <label className="mb-2">Query type *</label>
              <div className="flex space-x-3 items-center">
                {formFields.slice(3, 5).map(({ id, label, type }) => (
                  <label
                    key={id}
                    htmlFor={id}
                    className="flex items-center space-x-2 border flex-1 rounded-xl p-3">
                    <InputsForm
                      id={id}
                      type={type}
                      value={formData[id]}
                      onChange={handleChange}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
            {errors.enquiryType && (
              <p className="text-redConfg text-sm">{errors.enquiryType}</p>
            )}

            {formFields.slice(5, 6).map(({ id, label, type }) => (
              <li key={id} className="flex-1 my-8">
                <label htmlFor={id} className="flex flex-col">
                  {label}
                  <InputsForm
                    id={id}
                    type={type}
                    value={formData[id]}
                    onChange={handleChange}
                  />
                </label>
                {errors[id] && (
                  <p className="text-redConfg text-sm">{errors[id]}</p>
                )}
              </li>
            ))}

            {formFields.slice(6).map(({ id, label, type }) => (
              <li key={id} className="flex-1 mb-8">
                <label htmlFor={id}>
                  <InputsForm
                    id={id}
                    type={type}
                    value={formData[id]}
                    onChange={handleChange}
                  />
                  {label}
                </label>
                {errors[id] && (
                  <p className="text-redConfg text-sm">{errors[id]}</p>
                )}
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-greenConfig-600 hover:bg-gre text-white text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
