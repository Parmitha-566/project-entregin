import { useEffect } from "react";
import { getDashboardStats } from "./api/adminApi";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import "./App.css";
import {
  dashboardData,
  schemeDemand,
  recommendationTrend,
  partnerPerformance,
  geographicDemand,
} from "./data/mockData";
const beneficiaryData = [
  { month: "Jan", beneficiaries: 180 },
  { month: "Feb", beneficiaries: 220 },
  { month: "Mar", beneficiaries: 190 },
  { month: "Apr", beneficiaries: 260 },
  { month: "May", beneficiaries: 230 },
  { month: "Jun", beneficiaries: 300 }
];

const schemeData = [
  { name: "Active", value: 8 },
  { name: "Pending", value: 5 },
  { name: "Completed", value: 12 }
];

function App() {

  useEffect(() => {
    getDashboardStats()
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>ENTREGIN</h2>

        <nav>
  <button
    className={activePage === "Dashboard" ? "active" : ""}
    onClick={() => setActivePage("Dashboard")}
  >
    Dashboard
  </button>

  <button
    className={activePage === "Beneficiaries" ? "active" : ""}
    onClick={() => setActivePage("Beneficiaries")}
  >
    Beneficiaries
  </button>

  <button
    className={activePage === "Schemes" ? "active" : ""}
    onClick={() => setActivePage("Schemes")}
  >
    Schemes
  </button>

  <button
    className={activePage === "Channel Partners" ? "active" : ""}
    onClick={() => setActivePage("Channel Partners")}
  >
    Channel Partners
  </button>

  <button
    className={activePage === "Analytics" ? "active" : ""}
    onClick={() => setActivePage("Analytics")}
  >
    Analytics
  </button>

  <button
    className={activePage === "Map" ? "active" : ""}
    onClick={() => setActivePage("Map")}
  >
    Map
  </button>

  <button
    className={activePage === "Settings" ? "active" : ""}
    onClick={() => setActivePage("Settings")}
  >
    Settings
  </button>
</nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Navbar */}
        <header className="navbar">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome to ENTREGIN administration panel</p>
          </div>

          <div className="admin-profile">
            <span>Admin</span>
            <div className="profile-circle">A</div>
          </div>
        </header>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <p>Total Beneficiaries</p>
            <h2>1,250</h2>
            <span>+12% this month</span>
          </div>

          <div className="stat-card">
            <p>Total Schemes</p>
            <h2>25</h2>
            <span>8 active schemes</span>
          </div>

          <div className="stat-card">
            <p>Channel Partners</p>
            <h2>40</h2>
            <span>35 active partners</span>
          </div>

          <div className="stat-card">
            <p>Total Applications</p>
            <h2>560</h2>
            <span>+8% this month</span>
          </div>

        </section>

       {activePage === "Dashboard" && (
  <>
    {/* Dashboard Content */}
    <section className="dashboard-grid">

      <div className="panel">
        <h2>Beneficiary Overview</h2>

        <div className="chart-placeholder">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="bar bar6"></div>
        </div>
      </div>

      <div className="panel">
        <h2>Scheme Statistics</h2>

        <div className="scheme-row">
          <span>Active Schemes</span>
          <strong>8</strong>
        </div>

        <div className="scheme-row">
          <span>Pending Schemes</span>
          <strong>5</strong>
        </div>

        <div className="scheme-row">
          <span>Completed Schemes</span>
          <strong>12</strong>
        </div>
      </div>

    </section>

    {/* Map */}
    <section className="panel map-panel">

      <h2>Beneficiary Distribution</h2>

      <div className="map-placeholder">
        <p>Interactive Map</p>
        <span>
          Beneficiary locations will appear here
        </span>
      </div>

    </section>
  </>
)}

{activePage === "Beneficiaries" && (
  <section className="panel">

    <h2>Beneficiaries</h2>

    <p>Manage and view all registered beneficiaries.</p>

    <table className="beneficiary-table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Location</th>
          <th>Scheme</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>BEN001</td>
          <td>Rahul Kumar</td>
          <td>32</td>
          <td>Karnataka</td>
          <td>Housing Scheme</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>BEN002</td>
          <td>Priya Sharma</td>
          <td>28</td>
          <td>Tamil Nadu</td>
          <td>Education Scheme</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>BEN003</td>
          <td>Arun Raj</td>
          <td>45</td>
          <td>Kerala</td>
          <td>Health Scheme</td>
          <td>Pending</td>
        </tr>

        <tr>
          <td>BEN004</td>
          <td>Meena Devi</td>
          <td>39</td>
          <td>Andhra Pradesh</td>
          <td>Women Welfare</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>BEN005</td>
          <td>Vijay Singh</td>
          <td>51</td>
          <td>Maharashtra</td>
          <td>Employment Scheme</td>
          <td>Pending</td>
        </tr>

      </tbody>

    </table>

  </section>
)}
{activePage === "Schemes" && (
  <section className="panel">

    <h2>Schemes</h2>

    <p>Manage and monitor government welfare schemes.</p>

    <table className="beneficiary-table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Scheme Name</th>
          <th>Category</th>
          <th>Beneficiaries</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>SCH001</td>
          <td>Housing Scheme</td>
          <td>Housing</td>
          <td>320</td>
          <td>Active</td>
          <td>
            <button className="view-button">View</button>
          </td>
        </tr>

        <tr>
          <td>SCH002</td>
          <td>Education Scheme</td>
          <td>Education</td>
          <td>210</td>
          <td>Active</td>
          <td>
            <button className="view-button">View</button>
          </td>
        </tr>

        <tr>
          <td>SCH003</td>
          <td>Health Scheme</td>
          <td>Health</td>
          <td>180</td>
          <td>Pending</td>
          <td>
            <button className="view-button">View</button>
          </td>
        </tr>

        <tr>
          <td>SCH004</td>
          <td>Women Welfare</td>
          <td>Women Welfare</td>
          <td>275</td>
          <td>Active</td>
          <td>
            <button className="view-button">View</button>
          </td>
        </tr>

        <tr>
          <td>SCH005</td>
          <td>Employment Scheme</td>
          <td>Employment</td>
          <td>265</td>
          <td>Completed</td>
          <td>
            <button className="view-button">View</button>
          </td>
        </tr>

      </tbody>

    </table>

  </section>
)}
{activePage === "Channel Partners" && (
  <section className="panel">

    <h2>Channel Partners</h2>

    <p>Manage and monitor all registered channel partners.</p>

    <table className="beneficiary-table">

      <thead>
        <tr>
          <th>ID</th>
          <th>Partner Name</th>
          <th>Organization</th>
          <th>Location</th>
          <th>Applications</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>CP001</td>
          <td>Seva Foundation</td>
          <td>NGO</td>
          <td>Karnataka</td>
          <td>125</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>CP002</td>
          <td>Rural Development Group</td>
          <td>NGO</td>
          <td>Tamil Nadu</td>
          <td>98</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>CP003</td>
          <td>Community Welfare Trust</td>
          <td>Trust</td>
          <td>Kerala</td>
          <td>76</td>
          <td>Active</td>
        </tr>

        <tr>
          <td>CP004</td>
          <td>Jan Seva Center</td>
          <td>Service Center</td>
          <td>Maharashtra</td>
          <td>64</td>
          <td>Pending</td>
        </tr>

        <tr>
          <td>CP005</td>
          <td>Grameen Support</td>
          <td>NGO</td>
          <td>Andhra Pradesh</td>
          <td>52</td>
          <td>Active</td>
        </tr>

      </tbody>

    </table>

  </section>
)}

{activePage === "Analytics" && (
  <>
    <section className="dashboard-grid">

      <div className="panel">
        <h2>Beneficiary Growth</h2>

        <div className="analytics-chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={beneficiaryData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="beneficiaries"
                fill="#4f46e5"
              />

            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="panel">
        <h2>Scheme Distribution</h2>

        <div className="analytics-chart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>

              <Pie
                data={schemeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {schemeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      ["#4f46e5", "#f59e0b", "#16a34a"][index]
                    }
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </section>

    <section className="stats-grid">

      <div className="stat-card">
        <p>Monthly Growth</p>
        <h2>12%</h2>
        <span>Beneficiary growth</span>
      </div>

      <div className="stat-card">
        <p>Active Schemes</p>
        <h2>8</h2>
        <span>Currently running</span>
      </div>

      <div className="stat-card">
        <p>Total Applications</p>
        <h2>560</h2>
        <span>Applications received</span>
      </div>

      <div className="stat-card">
        <p>Success Rate</p>
        <h2>82%</h2>
        <span>Successful applications</span>
      </div>

    </section>
  </>
)}

{activePage === "Map" && (
  <section className="panel">
    <h2>Beneficiary Map</h2>

    <div className="map-placeholder">
      <h3>Interactive Map</h3>
      <p>Map integration will be added in the next phase.</p>
    </div>
  </section>
)}

{activePage === "Settings" && (
  <section className="panel">
    <h2>Settings</h2>

    <div className="settings-container">
      <div className="stat-card">
        <h3>Profile</h3>
        <p>Admin</p>
      </div>

      <div className="stat-card">
        <h3>Notifications</h3>
        <p>Enabled</p>
      </div>

      <div className="stat-card">
        <h3>Theme</h3>
        <p>Dark Mode</p>
      </div>

      <div className="stat-card">
        <h3>Security</h3>
        <p>Password Protected</p>
      </div>
    </div>
  </section>
)}

      </main>
    </div>
  );
}

export default App;