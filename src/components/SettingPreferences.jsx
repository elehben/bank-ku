function SettingPreferences() {
  return (
    <div className="mt-10 text-[#232323]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div>
          <label className="block text-[15px] mb-2">Currency</label>
          <input type="text" defaultValue="USD" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
        </div>
        <div>
          <label className="block text-[15px] mb-2">Time Zone</label>
          <input type="text" defaultValue="(GMT-12:00) International Date Line West" className="w-full border border-[#DFEAF2] rounded-[15px] px-5 py-3.5 text-[#718EBF] outline-none" />
        </div>
      </div>

      <h3 className="text-[15px] font-medium mb-5">Notification</h3>
      
      <div className="flex flex-col gap-5 mb-8">
        <div className="flex items-center gap-5">
            <Toggle defaultChecked={true} />
            <span className="text-[15px]">I send or receive digita currency</span>
        </div>
        <div className="flex items-center gap-5">
            <Toggle defaultChecked={false} />
            <span className="text-[15px]">I receive merchant order</span>
        </div>
        <div className="flex items-center gap-5">
            <Toggle defaultChecked={true} />
            <span className="text-[15px]">There are recommendation for my account</span>
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

export default SettingPreferences;