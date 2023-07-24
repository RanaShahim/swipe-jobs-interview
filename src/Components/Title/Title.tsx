interface customTitleProps {
  sectionTitle: string;
  sectionDescription: string;
}

const Title = ({ sectionTitle, sectionDescription }: customTitleProps) => {
  return (
    <div className="flex flex-col w-full p-5 bg-white justify-center">
      <h2 className="text-2xl font-bold">{sectionTitle}</h2>
      <h2 className="text-1xl font-bold-200">{sectionDescription}</h2>
    </div>
  );
};

export default Title;
