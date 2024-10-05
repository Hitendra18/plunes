import { useAuth } from "../../contexts/AuthContext";
import { Dropdown } from "./components/Dropdown";
import { StatusTag } from "./components/StatusTag";
import { SipTile } from "./components/SipTile";
import { ToggleButton } from "./components/ToggleButton";
import { SearchBar } from "./components/SearchBar";
import { CaseCard } from "./components/CaseCard";
import { sipData, caseData, statusData } from "../../constants/dashboard_data";

const CLASS = "border border-gray-400 m-1 p-2 rounded-lg custom-box-shadow";

export default function Dashboard() {
  const { userData, logout } = useAuth();

  return (
    <div className="w-full lg:h-screen flex flex-col">
      <div className="flex gap-8 px-4 py-1 items-center">
        <p>
          You are logged in as:{" "}
          <span className="text-secondary-green font-bold">
            {userData?.userId}
          </span>
        </p>
        <button
          onClick={logout}
          className="bg-primary-red px-4 py-1 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-col lg:flex-row mx-auto container overflow-hidden">
        <div className="lg:w-1/2 flex flex-col">
          {/* Patient Status */}
          <div className={`${CLASS}`}>
            <div className="flex justify-between">
              <h3 className="font-semibold lg:text-lg">Patient Status</h3>
              <Dropdown />
            </div>
            <div className="flex flex-wrap justify-around lg:gap-4 gap-2 lg:mt-8 mt-4">
              {statusData.map((status, index) => (
                <StatusTag
                  key={index}
                  text={status.text}
                  value={status.value}
                  color={status.color}
                />
              ))}
            </div>
          </div>
          {/* SIP */}
          <div
            className={`${CLASS} flex-grow overflow-y-scroll`}
            style={{ scrollbarWidth: "thin" }}
          >
            <div className="flex justify-between">
              <h3 className="font-semibold lg:text-lg">
                SIP (Service In Progress)
              </h3>
              <Dropdown />
            </div>
            <div className="mt-8 mb-2 max-h-[400px]">
              {sipData.map((sip, index) => (
                <SipTile
                  key={index}
                  text={sip.text}
                  value={sip.value}
                  color={sip.color}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Cases */}
        <div
          className={`${CLASS} lg:w-1/2 space-y-4 overflow-y-scroll`}
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="flex justify-between">
            <Dropdown />
            <Dropdown />
          </div>
          <div className="flex items-center justify-between">
            <ToggleButton />
            <SearchBar />
          </div>
          <div className="space-y-4">
            {caseData.map((caseInfo, index) => (
              <CaseCard
                key={index}
                ip={caseInfo.ip}
                age={caseInfo.age}
                name={caseInfo.name}
                mobileNo={caseInfo.mobileNo}
                serviceProvider={caseInfo.serviceProvider}
                hospital={caseInfo.hospital}
                treatment={caseInfo.treatment}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
