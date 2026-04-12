interface CustomButtonTypes {
  text: string;
}

const CustomButton = ({ text }: CustomButtonTypes) => {
  return (
    <div className="bg-primary px-6 py-2 rounded-lg text-background hover:bg-primary-hover active:bg-primary-active cursor-pointer">
      {text}
    </div>
  );
};

export default CustomButton;
