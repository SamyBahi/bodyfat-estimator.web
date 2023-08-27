import { PropsWithChildren } from "react";

interface FormCardProps extends PropsWithChildren {
  title: string;
}

const FormCard = ({ title, children }: FormCardProps) => {
  return (
    <div className="bg-secondary/10 w-full h-full p-2 rounded-md hover:bg-secondary/20 transition-colors">
      <h2 className="text-secondary text-opacity-50">{title}</h2>
      {children}
    </div>
  );
};

export default FormCard;
