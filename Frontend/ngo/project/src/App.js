import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./Component/NavigationBar";
import { Home } from "./Component/Home";
import { AboutUs } from "./Component/AboutUs";
import { AskForHelp } from "./Component/AskForHelp";
import { Donate } from "./Component/Donate";
import { Login } from "./Component/Login";
import { SignUp } from "./Component/SignUp";
import { AdminLogin } from "./Component/AdminLogin";
import { AdminDashboard } from "./Component/AdminDashboard";
import { DonerList } from "./Component/DonerList"; // Ensure this path is correct
import { VolunteerList } from "./Component/VolunteerList";
import { Volunteer } from "./Component/Volunteer";
import {
  BASE_ROUTE,
  ABOUT_US,
  ASK_FOR_HELP,
  DONATE,
  LOG_IN,
  SIGN_UP,
  ADMIN_LOGIN,
  ADMIN_DASHBOARD,
  DONER_LIST,
  VOLUNTEER_LIST,
  VOLUNTEER,
  DONATION_STATUS,
} from "./Constants/AppRoute";
import { DonationStatus } from "./Component/CheckDonationStatus";

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path={BASE_ROUTE} element={<Home />} />
        <Route path={ABOUT_US} element={<AboutUs />} />
        <Route path={ASK_FOR_HELP} element={<AskForHelp />} />
        <Route path={DONATE} element={<Donate />} />
        <Route path={LOG_IN} element={<Login />} />
        <Route path={SIGN_UP} element={<SignUp />} />
        <Route path={ADMIN_LOGIN} element={<AdminLogin />} />
        <Route path={ADMIN_DASHBOARD} element={<AdminDashboard />} />
        <Route path={DONER_LIST} element={<DonerList />} />
        <Route path={VOLUNTEER_LIST} element={<VolunteerList />} />
        <Route path={VOLUNTEER} element={<Volunteer />} />
        <Route path={DONATION_STATUS} element={<DonationStatus />} />
      </Routes>
      </BrowserRouter>
     
      
  );
}

export default App;