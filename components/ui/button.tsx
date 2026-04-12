interface CustomButtonTypes {
  text: string;
}

const CustomButton = ({ text }: CustomButtonTypes) => {
  return (
    <div className="bg-primary px-5 py-2 rounded-lg text-background hover:bg-primary-hover active:bg-primary-active cursor-pointer transition delay-75">
      {text}
    </div>
  );
};

export default CustomButton;
