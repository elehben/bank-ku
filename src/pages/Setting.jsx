import { useState } from "react";
import MainLayout from "../layouts/MainLayout"
import SettingEditProfile from "../components/SettingEditProfile";
import SettingPreferences from "../components/SettingPreferences";
import SettingSecurity from "../components/SettingSecurity";

function Setting() {
  const [activeTab, setActiveTab] = useState("editProfile");

  return (
    <MainLayout>

        <div className="bg-white p-6 md:p-8 rounded-[25px]">
            
            {/* Tabs */}
            <div className="flex border-b border-[#F4F5F7] max-[425px]:justify-center gap-14 md:gap-14">
                <button 
                  onClick={() => setActiveTab('editProfile')}
                  className={`pb-2 md:pb-3 text-sm md:text-base font-medium px-2 transition-colors relative whitespace-nowrap ${activeTab === 'editProfile' ? 'text-[#1A16F3]' : 'text-[#718EBF] hover:text-[#1A16F3]'}`}
                >
                  Edit Profile
                  {activeTab === 'editProfile' && <span className="absolute bottom-[-8px] md:bottom-0 left-0 w-full h-[3px] bg-[#1A16F3] rounded-t-lg"></span>}
                </button>
                <button 
                  onClick={() => setActiveTab('preferences')}
                  className={`pb-2 md:pb-3 text-sm md:text-base font-medium px-2 transition-colors relative whitespace-nowrap ${activeTab === 'preferences' ? 'text-[#1A16F3]' : 'text-[#718EBF] hover:text-[#1A16F3]'}`}
                >
                  Preference
                  {activeTab === 'preferences' && <span className="absolute bottom-[-8px] md:bottom-0 left-0 w-full h-[3px] bg-[#1A16F3] rounded-t-lg"></span>}
                </button>
                <button 
                  onClick={() => setActiveTab('security')}
                  className={`pb-2 md:pb-3 text-sm md:text-base font-medium px-2 transition-colors relative whitespace-nowrap ${activeTab === 'security' ? 'text-[#1A16F3]' : 'text-[#718EBF] hover:text-[#1A16F3]'}`}
                >
                  Security
                  {activeTab === 'security' && <span className="absolute bottom-[-8px] md:bottom-0 left-0 w-full h-[3px] bg-[#1A16F3] rounded-t-lg"></span>}
                </button>
            </div>

            {/* Content Display */}
            {activeTab === 'editProfile' && <SettingEditProfile />}
            {activeTab === 'preferences' && <SettingPreferences />}
            {activeTab === 'security' && <SettingSecurity />}

        </div>
    </MainLayout>
  )
}

export default Setting