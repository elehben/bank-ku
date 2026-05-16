import { CreditCard, DollarSign, Coins } from "lucide-react";

const transactions = [
    {
        id: 1,
        title: "Deposit from my Card",
        date: "28 January 2021",
        amount: "-$850",
        type: "negative",
        icon: <CreditCard className="w-7 h-7 text-[#FFBB38]" />,
        bgColor: "bg-[#FFF5D9]"
    },
    {
        id: 2,
        title: "Deposit Paypal",
        date: "25 January 2021",
        amount: "+$2,500",
        type: "positive",
        // Using DollarSign as alternative for Paypal logo
        icon: <DollarSign className="w-7 h-7 text-[#396AFF]" />,
        bgColor: "bg-[#E7EDFF]"
    },
    {
        id: 3,
        title: "Jemi Wilson",
        date: "21 January 2021",
        amount: "+$5,400",
        type: "positive",
        icon: <Coins className="w-7 h-7 text-[#16DBCC]" />,
        bgColor: "bg-[#DCFAF8]"
    }
];

function RecentTransactions() {
  return (
    <div className="w-full h-58.75 mb-8">
        <h2 className="text-xl text-[#343C6A] font-semibold mb-4">
            Recent Transaction
        </h2>
        {/* Card Container */}
        <div className="bg-white rounded-3xl p-5 lg:p-6 flex flex-col justify-between h-full overflow-hidden">
            {transactions.map((tx) => (
                <div key={tx.id} className="flex justify-between items-center gap-2">
                    <div className="flex items-center gap-3 lg:gap-4 min-w-0">
                        {/* Icon Background */}
                        <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shrink-0 ${tx.bgColor}`}>
                            {tx.icon}
                        </div>
                        
                        {/* Text Detail */}
                        <div className="min-w-0">
                            <h1 className="text-[#232323] truncate font-medium text-sm lg:text-base mb-1">
                                {tx.title}
                            </h1>
                            <p className="text-[#718EBF] truncate text-xs lg:text-[15px]">
                                {tx.date}
                            </p>
                        </div>
                    </div>
                    
                    {/* Amount */}
                    <div className={`font-medium text-sm lg:text-base whitespace-nowrap ${tx.type === "positive" ? "text-[#41D4A8]" : "text-[#FF4B4A]"}`}>
                        {tx.amount}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default RecentTransactions;