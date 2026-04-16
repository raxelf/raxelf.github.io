import Link from "next/link";

interface CustomButtonTypes {
  text: string;
  bg: boolean;
  action: string;
  newTab?: boolean;
}

const CustomButton = ({
  text,
  bg,
  action = "#",
  newTab,
}: CustomButtonTypes) => {
  if (!bg) {
    return (
      <Link
        href={action}
        target={newTab ? "_blank" : undefined}
        className="w-full md:w-auto text-center md:text-left px-6 py-2 rounded-lg text-primary hover:text-primary-hover active:text-primary-active cursor-pointer transition delay-75 font-bold"
      >
        {text}
      </Link>
    );
  }

  return (
    <Link
      href={action}
      target={newTab ? "_blank" : undefined}
      className="w-full md:w-auto text-center md:text-left bg-primary px-7 py-2 rounded-lg text-background hover:bg-primary-hover active:bg-primary-active cursor-pointer transition delay-75"
    >
      {text}
    </Link>
  );
};

export default CustomButton;
