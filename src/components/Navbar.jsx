import { Search, Settings, Bell, Menu } from "lucide-react";
import { useLocation } from "react-router-dom";

function Navbar({ onMenuClick }) {
  const location = useLocation();
  
  const getPageTitle = (pathname) => {
    switch (pathname.toLowerCase()) {
      case '/':
        return 'Overview';
      case '/transactions':
        return 'Transactions';
      case '/accounts':
        return 'Accounts';
      case '/invesment':
        return 'Investments';
      case '/credits':
        return 'Credit Cards';
      case '/loans':
        return 'Loans';
      case '/services':
        return 'Services';
      case '/privileges':
        return 'My Privileges';
      case '/setting':
        return 'Setting';
      default:
        return 'Overview';
    }
  };

  const title = getPageTitle(location.pathname);

  return (
    <div className="bg-white px-6 md:px-7 lg:px-10 py-5 md:py-0 md:h-24 flex flex-col md:flex-row md:items-center justify-between border-b border-[#E6EFF5] gap-5 md:gap-0">

        <div className="flex justify-between items-center w-full md:w-auto relative">
            <button className="md:hidden text-[#343C6A]" onClick={onMenuClick}>
                <Menu className="w-7 h-7" />
            </button>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#343C6A] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                {title}
            </h2>
            
            {/* Profile Picture (Mobile only) */}
            <img 
                src="https://randomuser.me/api/portraits/women/26.jpg" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover cursor-pointer md:hidden"
            />
        </div>

        <div className="flex justify-between items-center w-full md:w-auto gap-4 md:gap-4 lg:gap-7">
            {/* Search Bar */}
            <div className="flex items-center bg-[#F5F7FA] rounded-full px-4 lg:px-5 py-3 lg:py-3.5 gap-2 lg:gap-3 w-full md:w-48 lg:w-64 max-w-full">
                <Search className="text-[#718EBF] w-4 h-4 lg:w-5 lg:h-5 shrink-0" />
                <input 
                    type="text"
                    placeholder="Search for something"
                    className="bg-transparent outline-none text-[13px] lg:text-[15px] text-[#343C6A] placeholder:text-[#8BA3CB] w-full" 
                />
            </div>

            <div className="hidden md:flex items-center gap-3 lg:gap-6">
                {/* Settings Button */}
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center text-[#718EBF] hover:bg-slate-200 transition cursor-pointer">
                    <Settings className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>

                {/* Notification Button */}
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#F5F7FA] rounded-full flex items-center justify-center text-[#718EBF] hover:bg-slate-200 transition cursor-pointer relative">
                    <Bell className="w-5 h-5 lg:w-6 lg:h-6" />
                    <span className="absolute top-2 right-2 lg:top-2.5 lg:right-2.5 w-2.25 h-2.25 lg:w-2.75 lg:h-2.75 bg-[#FE5C73] rounded-full border-[1.5px] lg:border-2 border-white"></span>
                </div>

                {/* Profile Picture (Desktop) */}
                <img 
                    src="https://randomuser.me/api/portraits/women/26.jpg" 
                    alt="Profile" 
                    className="w-10 h-10 lg:w-14 lg:h-14 rounded-full object-cover cursor-pointer"
                />
            </div>
        </div>

    </div>
  )
}

export default Navbar