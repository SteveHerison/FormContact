import { useState } from "react";
import Radio from "../../assets/images/icon-radio-selected.svg";
import Checked from "../../assets/images/icon-checkbox-check.svg";

const formFields = [
  {
    id: "name",
    label: "First Name",
    type: "text",
  },
  {
    id: "lastname",
    label: "Last Name",
    type: "text",
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
  },
  {
    id: "generalEnquiry",
    label: "General Enquiry",
    name: "queryType",
    type: "radio",
  },
  {
    id: "supportRequest",
    label: "Support Request",
    name: "queryType",
    type: "radio",
  },
  {
    id: "message",
    label: "Message",
    rows: 3,
    type: "textarea",
  },
  {
    id: "check",
    type: "checkbox",
    label: "I consent to being contacted by the team",
  },
];

const Form = ({ onSuccess }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});

  const handleInputChange = ({ target }) => {
    const { id, value, type, checked, name } = target;
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
      ...(type === "radio" && { [name]: value }),
    }));

    // Clear error for the field being typed in
    setError((prev) => ({
      ...prev,
      [id]: undefined,
      ...(type === "radio" && { queryType: undefined }),
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    const newError = {};
    formFields.forEach(({ id, type }) => {
      if (type !== "checkbox" && type !== "radio" && !form[id]) {
        newError[id] = "This field is required";
        hasError = true;
      }
    });
    if (!form.queryType) {
      newError.queryType = "Please select a query type";
      hasError = true;
    }
    if (!form.check) {
      newError.check = "You must consent to being contacted";
      hasError = true;
    }
    setError(newError);

    if (!hasError) {
      onSuccess();
      setForm("");
    }
  };

  return (
    <div className="h-full w-full justify-center items-center flex">
      <section className="w-[40rem] bg-white p-7 rounded-xl">
        <h1 className="text-4xl mb-5 pb-3">Contact Us</h1>

        <form className="flex flex-col space-y-7 " onSubmit={handleFormSubmit}>
          <div className="flex space-x-4">
            {formFields.slice(0, 2).map(({ id, label, type }) => (
              <div key={id} className="flex flex-col flex-1 cursor-pointer">
                <label htmlFor={id}>
                  {label}
                  <strong className="text-emerald-500"> *</strong>
                </label>
                <input
                  value={form[id] || ""}
                  type={type}
                  id={id}
                  onChange={handleInputChange}
                  className={` border p-3 rounded-xl focus:outline-none cursor-pointer  focus:border-emerald-600 ${
                    error[id] && "border-red-500"
                  }`}
                />
                {error[id] && <p className="text-red-500">{error[id]}</p>}
              </div>
            ))}
          </div>
          {formFields.slice(2, 3).map(({ id, label, type }) => (
            <div key={id} className="flex flex-col">
              <label htmlFor={id}>
                {label}
                <strong className="text-emerald-500"> *</strong>
              </label>
              <input
                value={form[id] || ""}
                type={type}
                id={id}
                onChange={handleInputChange}
                className={` border p-3 rounded-xl focus:outline-none  focus:border-emerald-600  ${
                  error[id] && "border-red-500"
                }`}
              />
              {error[id] && <p className="text-red-500">{error[id]}</p>}
            </div>
          ))}
          <div className="flex flex-col">
            <label htmlFor={form.id} className=" pb-1 w-full">
              Query type <strong className="text-emerald-500">*</strong>
            </label>
            <div className="flex space-x-4">
              {formFields.slice(3, 5).map(({ id, label, type, name }) => (
                <div
                  key={id}
                  className={`flex-1 items-center gap-2  flex  border p-3 rounded-xl focus:outline-none cursor-pointer ${
                    form[name] === id ? "bg-emerald-100 border-emerald-700" : ""
                  }`}>
                  <input
                    checked={form[name] === id}
                    value={id}
                    name={name}
                    type={type}
                    onChange={handleInputChange}
                    id={id}
                    className={` border w-4 rounded-xl cursor-pointer  ${
                      form[name] === id && "hidden"
                    }`}
                  />
                  {form[name] === id ? (
                    <img src={Radio} alt="iconRadio" className="w-4" />
                  ) : (
                    ""
                  )}
                  <label htmlFor={id} className="cursor-pointer w-full">
                    {label}
                  </label>
                </div>
              ))}
            </div>
            {error.queryType && (
              <p className="text-red-500 mt-2">{error.queryType}</p>
            )}
          </div>

          {formFields.slice(5, 6).map(({ id, label, rows }) => (
            <div key={id} className="flex flex-col max-h-[12rem]">
              <label htmlFor={id}>
                {label}
                <strong className="text-emerald-500"> *</strong>
              </label>
              <textarea
                value={form[id] || ""}
                id={id}
                rows={rows}
                onChange={handleInputChange}
                className={` border p-3 rounded-xl focus:outline-none cursor-pointer focus:border-emerald-600  ${
                  error[id] && "border-red-500"
                }`}
              />
              {error[id] && <p className="text-red-500">{error[id]}</p>}
            </div>
          ))}
          {formFields.slice(6).map(({ id, type, label }) => (
            <div key={id} className="space-x-3 py-2">
              <label
                htmlFor={id}
                className="flex gap-2 items-center cursor-pointer">
                <input
                  checked={form[id] || false}
                  type={type}
                  id={id}
                  onChange={handleInputChange}
                  className={`w-4  ${form[id] && "hidden"}`}
                />
                {form[id] ? <img src={Checked} alt="" className="w-4" /> : ""}
                {label}
                <strong className="text-emerald-500"> *</strong>
              </label>
              {error[id] && <p className="text-red-500">{error[id]}</p>}
            </div>
          ))}
          <button
            className="bg-emerald-600 p-3 rounded-xl hover:bg-emerald-800 text-white"
            type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
