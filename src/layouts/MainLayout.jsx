import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex bg-gray-100 min-h-screen font-sans relative">
        
        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
            <div 
                className="fixed inset-0 bg-black/50 z-20 md:hidden"
                onClick={() => setIsSidebarOpen(false)}
            ></div>
        )}

        <aside className={`h-screen bg-white fixed top-0 left-0 border-r border-[#DFEAF2] z-30 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <Sidebar />
        </aside>

            <div className="flex-1 md:ml-64 flex flex-col w-full min-w-0">
                <div className="sticky top-0 z-10 bg-white">
                    <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
                </div>

                <div className="p-5 md:px-8 md:py-8 mb-8">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;