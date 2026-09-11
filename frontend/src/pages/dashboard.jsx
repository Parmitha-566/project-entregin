import {
  dashboardData,
  schemeDemand,
  recommendationTrend,
  partnerPerformance,
  geographicDemand,
} from "../data/dashboardData";

function Dashboard() {
  console.log(dashboardData);
  console.log(schemeDemand);
  console.log(recommendationTrend);
  console.log(partnerPerformance);
  console.log(geographicDemand);

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold">
        Government Admin Dashboard
      </h1>

      <p className="text-gray-400 mt-2">
        Smart India Hackathon - SIH26092
      </p>
    </div>
  );
}

export default Dashboard;