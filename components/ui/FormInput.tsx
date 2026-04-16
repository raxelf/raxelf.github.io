interface formInputProp {
  label: string;
  placeholder: string;
  inputType: string;
}

const FormInput = ({ label, placeholder, inputType }: formInputProp) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label}
        className="uppercase text-gray-200 tracking-widest text-sm"
      >
        {label}
      </label>

      {inputType === "textarea" ? (
        <textarea
          name={label}
          id={label}
          placeholder={placeholder}
          className="bg-primary-active/30 border border-background/50 rounded-lg py-2 px-4 text-gray-200"
          rows={4}
        />
      ) : (
        <input
          type={inputType}
          name={label}
          id={label}
          className="bg-primary-active/30 border border-background/50 rounded-lg py-2 px-4 text-gray-200"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormInput;
