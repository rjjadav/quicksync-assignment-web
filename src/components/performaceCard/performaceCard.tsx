
const PerformaceCardComponent = ({ rep }: any) => {
    const initials = rep.salesRep
      .split(" ")
      .map((n: any) => n[0])
      .join("");
  
    return (
      <div className="rounded-2xl shadow-sm p-4 flex items-center gap-4 bg-white border">
        <div
          className="h-12 w-12 rounded-full text-white flex items-center justify-center text-lg font-bold bg-blue-500">
          {initials}
        </div>
        <div>
          <div className="text-lg font-semibold">{rep.salesRep}</div>
          <div className="text-sm text-gray-600">{rep.region}</div>
          <div className="mt-1 text-sm text-gray-700">
            Revenue: <strong>${rep.totalRevenue.toFixed(2)}</strong>
          </div>
          <div className="text-sm">
            Deals: <strong>{rep.numberOfDeals}</strong> | Avg Deal:{" "}
            <strong>${rep.avgDealSize.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    );
  };

export default PerformaceCardComponent;