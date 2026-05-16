import { Pencil } from "lucide-react";

function SettingEditProfile() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-10 max-w-5xl">
      {/* Profile Picture */}
      <div className="flex justify-center md:justify-start items-start">
        <div className="relative">
          <img 
            src="https://randomuser.me/api/portraits/women/26.jpg" 
            alt="Profile" 
            className="w-42 h-42 rounded-full object-cover"
          />
          <button className="absolute bottom-1 right-0 md:bottom-2 md:-right-2 bg-[#1814F3] text-white w-8 h-8 rounded-full flex items-center justify-center p-1.5 border-2 border-white">
            <Pencil className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="flex-1 text-[#232323]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-[15px] mb-2">Your Name</label>
            <input type="text" defaultValue="Charlene Reed" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
          <div>
            <label className="block text-[15px] mb-2">User Name</label>
            <input type="text" defaultValue="Charlene Reed" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
          <div>
            <label className="block text-[15px] mb-2">Email</label>
            <input type="email" defaultValue="charlenereed@gmail.com" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
          <div>
            <label className="block text-[15px] mb-2">Password</label>
            <input type="password" defaultValue="**********" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
          <div>
            <label className="block text-[15px] mb-2">Date of Birth</label>
            <input type="text" defaultValue="25 January 1990" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
          <div>
            <label className="block text-[15px] mb-2">Present Address</label>
            <input type="text" defaultValue="San Jose, California, USA" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
          <div>
            <label className="block text-[15px] mb-2">Permanent Address</label>
            <input type="text" defaultValue="San Jose, California, USA" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
          <div>
            <label className="block text-[15px] mb-2">City</label>
            <input type="text" defaultValue="San Jose" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
          <div>
            <label className="block text-[15px] mb-2">Postal Code</label>
            <input type="text" defaultValue="45962" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
          <div>
            <label className="block text-[15px] mb-2">Country</label>
            <input type="text" defaultValue="USA" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-[#1A16F3] text-white px-16 py-3 rounded-2xl hover:bg-blue-700 transition w-full md:w-auto font-medium text-base">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingEditProfile;