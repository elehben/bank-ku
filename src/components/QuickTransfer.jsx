import { ChevronRight, Send } from "lucide-react";

const users = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    isHighlighted: true,
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    isHighlighted: false,
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    isHighlighted: false,
  },
];

function QuickTransfer() {
  return (
    <div className="w-full">
      <h2 className="text-xl text-[#343C6A] font-semibold mb-4">Quick Transfer</h2>
      <div className="bg-white rounded-3xl p-5 md:p-6 h-68.75d:h-[300px] w-full flex flex-col justify-center">
        
        {/* Users Carousel */}
        <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2 md:gap-6 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [-ms-overflow-style:none] scrollbar-none">
                {users.map((user) => (
                    <div key={user.id} className="flex flex-col items-center shrink-0">
                        <img 
                            src={user.image} 
                            alt={user.name} 
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mb-3"
                        />
                        <p className={`text-sm md:text-base ${user.isHighlighted ? "font-bold text-[#232323]" : "font-normal text-[#232323]"}`}>
                            {user.name}
                        </p>
                        <p className={`text-xs md:text-sm ${user.isHighlighted ? "font-bold text-[#718EBF]" : "font-normal text-[#718EBF]"}`}>
                            {user.role}
                        </p>
                    </div>
                ))}
            </div>
            
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-[0px_4px_15px_rgba(0,0,0,0.05)] flex justify-center items-center text-[#718EBF] shrink-0 ml-2 md:ml-4 hover:bg-slate-50 transition">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
        </div>

        {/* Input and Send Button */}
        <div className="flex items-center gap-3 md:gap-4 w-full">
            <span className="text-[#718EBF] text-[13px] md:text-base whitespace-nowrap">
                Write Amount
            </span>
            <div className="flex flex-1 bg-[#EDF1F7] rounded-full overflow-hidden items-center">
                <input 
                    type="text" 
                    defaultValue="525.50" 
                    className="bg-transparent w-full outline-none text-[#718EBF] px-4 md:px-6 text-[13px] md:text-base font-medium min-w-0"
                />
                <button className="bg-[#1A16F3] text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full flex items-center gap-2 md:gap-3 hover:bg-blue-700 transition">
                    <span className="text-[13px] md:text-base">Send</span>
                    <Send className="w-4 h-4 md:w-5 md:h-5 rotate-12 md:mb-0.5" />
                </button>
            </div>
        </div>

      </div>
    </div>
  );
}

export default QuickTransfer;