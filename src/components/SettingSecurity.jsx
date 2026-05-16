function SettingSecurity() {
  return (
    <div className="mt-10 text-[#232323]">
      <h3 className="text-[15px] font-medium mb-5">Two-factor Authentication</h3>
      
      <div className="flex items-center gap-5 mb-10">
          <Toggle defaultChecked={true} />
          <span className="text-[15px] text-[#232323]">Enable or disable two factor authentication</span>
      </div>

      <h3 className="text-[15px] font-medium mb-5">Change Password</h3>

      <div className="flex flex-col gap-6 mb-8 w-full md:w-1/2">
        <div>
          <label className="block text-[15px] mb-2">Current Password</label>
          <input type="password" defaultValue="**********" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
        </div>
        <div>
          <label className="block text-[15px] mb-2">New Password</label>
          <input type="password" defaultValue="**********" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
        </div>
      </div>

      <div className="flex justify-end mt-8">
          <button className="bg-[#1A16F3] text-white px-16 py-3 rounded-2xl hover:bg-blue-700 transition w-full md:w-auto font-medium text-base">
            Save
          </button>
      </div>
    </div>
  );
}

function Toggle({ defaultChecked }) {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
            <div className="w-12.5-7 bg-[#DFEAF2] peer-focus:outline-none rounded-full peer peer-checked:bg-[#16DBCC] after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5.5"></div>
        </label>
    );
}

export default SettingSecurity;