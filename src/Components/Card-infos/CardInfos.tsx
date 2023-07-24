import React from "react";

interface CardInfosProps {
  title: string;
  icon: any;
  children: React.ReactNode;
}

const CardInfos = ({ title, icon, children }: CardInfosProps) => {
  return (
    <div className="flex items-center p-4 w-full bg-white px-8 gap-5 border-b-2 border-gray-100">
      {icon}
      <div className="flex flex-col">
        <p className="text-lg font-bold">{title}</p>
        {children}
      </div>
    </div>
  );
};

export default CardInfos;
