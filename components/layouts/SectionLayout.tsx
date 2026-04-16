interface sectionLayoutProp {
  label?: string;
  heading: string;
}

const SectionLayout = ({ label, heading }: sectionLayoutProp) => {
  return (
    <>
      {label && (
        <div className="py-4 tracking-widest uppercase text-primary font-bold text-xs md:text-sm">
          <span>{label}</span>
        </div>
      )}

      <h2 className="font-bold text-2xl md:text-3xl mb-8">{heading}</h2>
    </>
  );
};

export default SectionLayout;
