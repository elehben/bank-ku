import { User, Briefcase, TrendingUp, Wrench } from "lucide-react";

const loanCards = [
    {
        id: 1,
        title: "Personal Loans",
        amount: "$50,000",
        icon: <User className="w-7 h-7 text-[#396AFF]" />,
        bgColor: "bg-[#E7EDFF]"
    },
    {
        id: 2,
        title: "Corporate Loans",
        amount: "$100,000",
        icon: <Briefcase className="w-7 h-7 text-[#FFBB38]" />,
        bgColor: "bg-[#FFF5D9]"
    },
    {
        id: 3,
        title: "Business Loans",
        amount: "$500,000",
        icon: <TrendingUp className="w-7 h-7 text-[#FF82AC]" />,
        bgColor: "bg-[#FFE0EB]"
    },
    {
        id: 4,
        title: "Custom Loans",
        amount: "Choose Money",
        icon: <Wrench className="w-7 h-7 text-[#16DBCC]" />,
        bgColor: "bg-[#DCFAF8]"
    }
];

function LoansCards() {
    return (
        <div className="flex overflow-x-auto md:grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-5 pb-4 -mx-5 px-5 md:mx-0 md:px-0 scroll-smooth [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [-ms-overflow-style:none] [scrollbar-width:none]">
            {loanCards.map((card) => (
                <div key={card.id} className="bg-white rounded-3xl p-4 lg:p-5 flex items-center gap-3 lg:gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer w-[75%] shrink-0 md:w-auto md:shrink snap-center">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0 ${card.bgColor}`}>
                        {card.icon}
                    </div>
                    <div className="min-w-0">
                        <p className="text-[#718EBF] text-[13px] lg:text-[15px] max-lg:truncate mb-1">{card.title}</p>
                        <h3 className="text-[#232323] text-lg lg:text-lg font-semibold whitespace-nowrap">{card.amount}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LoansCards;