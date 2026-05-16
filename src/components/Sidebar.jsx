import { Home, Settings, Wallet, ArrowLeftRight, Landmark, CreditCard, Toolbox, BadgePlus, CircleUserRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Sidebar() {
  const getNavLinkClass = ({ isActive }) =>
    `w-full flex font-medium items-center gap-5 text-base relative px-10 transition-colors ${
      isActive
        ? "text-blue-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-10 before:w-1.5 before:bg-blue-600 before:rounded-r-md"
        : "text-gray-400 hover:text-blue-600"
    }`;

  return (
    <div className="w-64 bg-white flex flex-col h-full overflow-visible py-5 border-r border-gray-200">
        <img src={Logo} alt="Logo" className="w-36 h-16 mb-8 m-10 mt-0" />

        <nav className="flex flex-col gap-10 w-full">

            <NavLink to="/" className={getNavLinkClass}>
                <Home />
                Dashboard
            </NavLink>

            <NavLink to="/Transactions" className={getNavLinkClass}>
                <ArrowLeftRight />
                Transactions
            </NavLink>
            
            <NavLink to="/Accounts" className={getNavLinkClass}>
                <CircleUserRound />
                Accounts
            </NavLink>

            <NavLink to="/Invesment" className={getNavLinkClass}>
                <Landmark />
                Investment
            </NavLink>

            <NavLink to="/Credits" className={getNavLinkClass}>
                <CreditCard />
                Credits Cards
            </NavLink>

            <NavLink to="/loans" className={getNavLinkClass}>
                <Wallet />
                Loans
            </NavLink>

            <NavLink to="/services" className={getNavLinkClass}>
                <Toolbox />
                Services
            </NavLink>

            <NavLink to="/privileges" className={getNavLinkClass}>
                <BadgePlus />
                My Privileges
            </NavLink>

            <NavLink to="/setting" className={getNavLinkClass}>
                <Settings />
                Setting
            </NavLink>

        </nav>
    </div>
  )
}

export default Sidebar