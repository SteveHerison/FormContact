const InputsForm = ({ id, type, value, onChange, name }) => {
  if (type === "textarea") {
    return (
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        className="max-h-24 w-full rounded-xl p-3 border"
      />
    );
  } else if (type === "radio" || type === "checkbox") {
    return (
      <input
        id={id}
        type={type}
        name={name}
        checked={value}
        onChange={onChange}
        className="mr-2 "
      />
    );
  } else {
    return (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="p-3 rounded-xl border"
      />
    );
  }
};

export default InputsForm;
