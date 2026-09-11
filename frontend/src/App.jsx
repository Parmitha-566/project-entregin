import IndiaMap from "./components/IndiaMap";
import { useEffect } from "react";
import { getDashboardStats } from "./api/adminApi";
import { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaFileAlt,
  FaChartBar,
  FaMapMarkedAlt,
  FaUserShield
} from "react-icons/fa";
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
  governmentSchemes,
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
const [searchTerm, setSearchTerm] = useState("");
const [categoryFilter, setCategoryFilter] = useState("All");

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
  <FaUserShield /> Settings
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
           <h2>{dashboardData.totalBeneficiaries}</h2>
            <span>+12% this month</span>
          </div>

          <div className="stat-card">
            <p>Total Schemes</p>
            <h2>{dashboardData.totalSchemes}</h2>
            <span>8 active schemes</span>
          </div>

          <div className="stat-card">
            <p>Channel Partners</p>
           <h2>{dashboardData.activePartners}</h2>
            <span>35 active partners</span>
          </div>

          <div className="stat-card">
            <p>Total Applications</p>
           <h2>{dashboardData.totalApplications}</h2>
            <span>+8% this month</span>
          </div>

        </section>

       {activePage === "Dashboard" && (
  <>
    {/* Dashboard Content */}
    <section className="dashboard-grid">

      <div className="panel">
        <h2>Beneficiary Overview</h2>

        <ResponsiveContainer width="100%" height={250}>
  <BarChart data={schemeDemand}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#4f46e5" />
  </BarChart>
</ResponsiveContainer>
      </div>

      <div className="panel">
  <h2>Scheme Statistics</h2>

  <div className="scheme-row">
    <span>Total Schemes</span>
    <strong>{governmentSchemes.length}</strong>
  </div>

  <div className="scheme-row">
    <span>Active Schemes</span>
    <strong>
      {
        governmentSchemes.filter(
          (scheme) => scheme.status === "Active"
        ).length
      }
    </strong>
  </div>

  <div className="scheme-row">
    <span>Categories</span>
    <strong>
      {
        [...new Set(governmentSchemes.map(
          (scheme) => scheme.category
        ))].length
      }
    </strong>
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
    <td>Ravi Kumar</td>
    <td>35</td>
    <td>Karnataka</td>
    <td>PM-KISAN</td>
    <td>Active</td>
  </tr>

  <tr>
    <td>BEN002</td>
    <td>Priya Sharma</td>
    <td>28</td>
    <td>Tamil Nadu</td>
    <td>Ayushman Bharat</td>
    <td>Active</td>
  </tr>

  <tr>
    <td>BEN003</td>
    <td>Arun Kumar</td>
    <td>42</td>
    <td>Kerala</td>
    <td>PMAY</td>
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

<input
  type="text"
  placeholder="Search schemes..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{
    padding: "10px",
    width: "300px",
    marginBottom: "20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  }}
/>
<select
  value={categoryFilter}
  onChange={(e) => setCategoryFilter(e.target.value)}
  style={{
    padding: "10px",
    marginLeft: "10px",
    borderRadius: "6px",
  }}
>
  <option value="All">All Categories</option>
  <option value="Agriculture">Agriculture</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Housing">Housing</option>
  <option value="LPG Support">LPG Support</option>
  <option value="Street Vendors">Street Vendors</option>
</select>
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
  {governmentSchemes
  .filter(
    (scheme) =>
      scheme.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) &&
      (categoryFilter === "All" ||
        scheme.category === categoryFilter)
  )
  .map((scheme) => (
    <tr key={scheme.id}>
      <td>{scheme.id}</td>
      <td>{scheme.name}</td>
      <td>{scheme.category}</td>
      <td>{scheme.beneficiaries}</td>
      <td>{scheme.status}</td>
      <td>
        <button className="view-button">View</button>
      </td>
    </tr>
  ))}
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
            <BarChart data={schemeDemand}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

             <Bar
  dataKey="value"
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

      <div className="stat-card">
  <p>Top Scheme</p>
  <h2>PM-KISAN</h2>
  <span>Highest beneficiary reach</span>
</div>

    </section>
  </>
)}

{activePage === "Map" && (
  <section className="panel">
    <h2>Beneficiary Map</h2>
    <IndiaMap />
  </section>
)}

{activePage === "Settings" && (
  <section className="panel">

    <h2>Admin Settings</h2>

    <div className="stats-grid">

      <div className="stat-card">
        <h3>Admin Profile</h3>
        <p>Name: System Administrator</p>
        <p>Email: admin@entregin.gov</p>
        <p>Role: Super Admin</p>
      </div>

      <div className="stat-card">
        <h3>Notifications</h3>
        <p>Email Alerts: Enabled</p>
        <p>Application Updates: Enabled</p>
        <p>System Alerts: Enabled</p>
      </div>

      <div className="stat-card">
        <h3>System Information</h3>
        <p>Version: 1.0.0</p>
        <p>Status: Online</p>
        <p>Database: Connected</p>
      </div>

      <div className="stat-card">
        <h3>Security</h3>
        <p>Two-Factor Auth: Enabled</p>
        <p>Last Login: Today</p>
        <p>Password Status: Secure</p>
      </div>

    </div>

    <div className="panel" style={{ marginTop: "20px" }}>
      <h3>Platform Overview</h3>

      <table className="beneficiary-table">
        <tbody>
          <tr>
            <td>Total Beneficiaries</td>
            <td>{dashboardData.totalBeneficiaries}</td>
          </tr>

          <tr>
            <td>Total Schemes</td>
            <td>{governmentSchemes.length}</td>
          </tr>

          <tr>
            <td>Active Partners</td>
            <td>{dashboardData.activePartners}</td>
          </tr>

          <tr>
            <td>Total Applications</td>
            <td>{dashboardData.totalApplications}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </section>
)}

      </main>
    </div>
  );
}

export default App;