import { Link, Outlet } from "react-router-dom"
import { Sidebar } from "./Sidebar"
import "./dashboard.styles.css"
import logo from "../../svgs/logo.svg"
import LogoutIcon from "@mui/icons-material/Logout"

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-nav-container">
        <div className="dashboard-nav">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="nav-links">
            <p>
              Logged in as: <br /> <b>admin@email.com</b>
            </p>
            <Link to="/login" className="nav-logout">
              <LogoutIcon style={{ color: "#b18a75dc" }} fontSize="small" />
              <b>Logout</b>
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard-main">
        <Sidebar />
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
