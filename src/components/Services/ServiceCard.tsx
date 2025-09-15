import { LucideIcon } from "lucide-react";

interface ServiceCardTypes {
  icon: LucideIcon; // ini tipe untuk lucide icon component
  title: string;
  shortDescription: string;
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon: Icon }) => {
  return (
    <div className="bg-secondary border-border flex flex-col items-center rounded-[14px] border p-5">
      {/* render icon component */}
      <Icon className="my-1 h-14 w-14 text-accent" aria-hidden />
      <h5 className="text-accent mt-2 mb-5 text-center text-base font-semibold">{title}</h5>
      <div className="bg-primary rounded-2xl p-4">
        <p className="text-primary-content text-center text-sm font-normal">{shortDescription}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
