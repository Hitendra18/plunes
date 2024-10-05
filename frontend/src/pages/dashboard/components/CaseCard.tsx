import { BsTelephoneFill } from "react-icons/bs";

export const CaseCard = ({
  ip,
  name,
  age,
  mobileNo,
  serviceProvider,
  hospital,
  treatment,
}: {
  ip: number;
  name: string;
  age: number;
  mobileNo: string;
  serviceProvider: string;
  hospital: string;
  treatment: string;
}) => {
  return (
    <div className="border-2 border-primary-green rounded-lg overflow-hidden">
      <div className="bg-[#13B2AD] flex items-center text-white justify-between lg:px-6 px-2 py-1 font-medium text-center text-sm lg:text-base">
        <div className="flex items-center gap-3 lg:gap-8">
          <p>IP: {ip}</p>
          <p>{name}</p>
          <p>{age} Yrs</p>
        </div>
        <div className="flex items-center gap-1">
          <BsTelephoneFill />
          <p>{mobileNo}</p>
        </div>
      </div>
      <div className="lg:px-6 px-2 space-y-3 my-2 text-sm lg:text-base">
        <div className="flex items-center">
          <p className="w-[200px]">Service Provider - </p>
          <p>{serviceProvider}</p>
        </div>
        <div className="flex items-center">
          <p className="w-[200px]">Hosptial - </p>
          <p>{hospital}</p>
        </div>
        <div className="flex items-center">
          <p className="w-[200px]">Treatment - </p>
          <p>{treatment}</p>
        </div>
      </div>
    </div>
  );
};
