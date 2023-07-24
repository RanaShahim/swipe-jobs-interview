import Title from "Components/Title/Title";
import Fee from "Components/Fee/Fee";
import CardInfos from "Components/Card-infos/CardInfos";
import { FaCalendar, FaMapPin, FaToolbox, FaUser } from "react-icons/fa";
import { parseISO, format } from "date-fns";
import ButtonBar from "Components/Button-Bar/ButtonBar";

interface CardCustomProps {
  jobData: any;
}

const Card = ({ jobData }: CardCustomProps) => {
  const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";
  const acceptUrl = `https://test.swipejobs.com/api/worker/${workerId}/job/${jobData[0]?.jobId}/accept`;
  const rejectUrl = `https://test.swipejobs.com/api/worker/${workerId}/job/${jobData[0]?.jobId}/reject`;

  const handleAcceptButtonClick = async () => {
    try {
      const response = await fetch(acceptUrl);

      if (!response.ok) {
        console.error("Failed to accept the job. Status:", response.status);
        throw new Error("Failed to accept the job.");
      }

      const data = await response.json();
      console.log("Job accepted successfully! Response data:", data);
    } catch (error) {
      console.error("Error accepting the job:", error);
    }
  };

  const handleRejectButtonClick = async () => {
    try {
      const response = await fetch(rejectUrl);

      if (!response.ok) {
        console.error("Failed to reject the job. Status:", response.status);
        throw new Error("Failed to reject the job.");
      }

      const data = await response.json();
      console.log("Job rejected successfully! Response data:", data);
    } catch (error) {
      console.error("Error rejecting the job:", error);
    }
  };

  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-11/12 flex flex-col items-center rounded mb-5">
        <img
          src={jobData[0]?.jobTitle?.imageUrl}
          alt="Logo"
          className="w-full h-80 mt-7 rounded-t-md"
        />
        <Title
          sectionTitle={jobData[0]?.jobTitle?.name}
          sectionDescription={jobData[0]?.company?.name}
        />
        <Fee
          distanceTitle="Distance"
          distance={jobData[0]?.milesToTravel}
          hourRateTitle="Hourly Rate"
          hourlyRateAmount={jobData[0]?.wagePerHourInCents / 100}
        />
        <CardInfos
          title="Shift Dates"
          children={jobData[0]?.shifts?.map((el: any) => (
            <p key={el?.startDate}>
              {format(parseISO(el?.startDate), "MMM d, EEE h a")} -{" "}
              {format(parseISO(el?.endDate), "MMM d, EEE h a")}
            </p>
          ))}
          icon={<FaCalendar size={20} />}
        ></CardInfos>
        <CardInfos
          title="Location"
          children={
            <>
              <p className="text-md">
                {jobData[0]?.company?.address?.formattedAddress}
              </p>
              <p className="text-xs text-gray-500">
                {jobData[0]?.milesToTravel} miles from your job search location
              </p>
            </>
          }
          icon={<FaMapPin size={20} />}
        ></CardInfos>
        <CardInfos
          title="Requirements"
          children={
            jobData[0]?.requirements
              ? jobData[0]?.requirements.map((requirement: any) => (
                  <p key={requirement} className="text-md">
                    - {requirement}
                  </p>
                ))
              : "None"
          }
          icon={<FaToolbox size={20} />}
        ></CardInfos>
        <CardInfos
          title="Report To"
          children={
            <p className="text-md">
              {jobData[0]?.company?.reportTo?.name}{" "}
              {jobData[0]?.company?.reportTo?.phone}
            </p>
          }
          icon={<FaUser size={20} />}
        ></CardInfos>
        <ButtonBar
          handleClickAccept={handleAcceptButtonClick}
          handleClickReject={handleRejectButtonClick}
        ></ButtonBar>
      </div>
    </div>
  );
};

export default Card;
