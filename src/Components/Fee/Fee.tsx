interface customFeeProps {
  distanceTitle: string;
  distance: number;
  hourRateTitle: string;
  hourlyRateAmount: number;
}

const Fee = ({
  distanceTitle,
  distance,
  hourRateTitle,
  hourlyRateAmount,
}: customFeeProps) => {
  return (
    <div className="flex items-center justify-between h-20 w-full bg-sea-green px-8">
      <div className="flex flex-col">
        <p className="text-black text-sm font-bold">{distanceTitle}</p>
        <p className="text-white text-3xl font-extrabold">{distance} miles</p>
      </div>
      <div className="flex flex-col"> 
        <p className="text-black text-sm font-bold">{hourRateTitle}</p>
        <p className="text-white text-3xl font-extrabold">${hourlyRateAmount}</p>
      </div>
    </div>
  );
};

export default Fee;
