const loansData = [
    { sl: "01.", money: "$100,000", left: "$40,500", duration: "8 Months", interest: "12%", installment: "$2,000 / month", active: true },
    { sl: "02.", money: "$500,000", left: "$250,000", duration: "36 Months", interest: "10%", installment: "$8,000 / month", active: false },
    { sl: "03.", money: "$900,000", left: "$40,500", duration: "12 Months", interest: "12%", installment: "$5,000 / month", active: false },
    { sl: "04.", money: "$50,000", left: "$40,500", duration: "25 Months", interest: "5%", installment: "$2,000 / month", active: false },
    { sl: "05.", money: "$50,000", left: "$40,500", duration: "5 Months", interest: "16%", installment: "$10,000 / month", active: false },
    { sl: "06.", money: "$80,000", left: "$25,500", duration: "14 Months", interest: "8%", installment: "$2,000 / month", active: false },
    { sl: "07.", money: "$12,000", left: "$5,500", duration: "9 Months", interest: "13%", installment: "$500 / month", active: false },
    { sl: "08.", money: "$160,000", left: "$100,800", duration: "3 Months", interest: "12%", installment: "$900 / month", active: false },
];

function LoansTable() {
    return (
        <div className="w-full">
            <h2 className="text-xl md:text-2xl text-[#343C6A] font-semibold mb-3">Active Loans Overview</h2>
            
            <div className="bg-white rounded-3xl p-5 w-full overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-[#718EBF] font-medium border-b border-[#d7d9dd]">
                            <th className="pb-2 font-medium px-4 hidden md:table-cell">SL No</th>
                            <th className="pb-2 font-medium px-2 md:px-4 text-[13px] md:text-base">Loan Money</th>
                            <th className="pb-2 font-medium px-2 md:px-4 text-[13px] md:text-base whitespace-nowrap">Left to repay</th>
                            <th className="pb-2 font-medium px-4 hidden md:table-cell">Duration</th>
                            <th className="pb-2 font-medium px-4 hidden md:table-cell">Interest rate</th>
                            <th className="pb-2 font-medium px-4 hidden md:table-cell">Installment</th>
                            <th className="pb-2 font-medium px-0 md:px-2 text-[13px] md:text-base text-center md:text-left">Repay</th>
                        </tr>
                    </thead>
                    <tbody className="text-[#232323] text-[13px] md:text-[15px]">
                        {loansData.map((loan, idx) => (
                            <tr key={idx} className="border-b border-[#F2F4F7] last:border-none">
                                <td className="py-4 px-4 hidden md:table-cell">{loan.sl}</td>
                                <td className="py-4 px-2 md:px-4">{loan.money}</td>
                                <td className="py-4 px-2 md:px-4">{loan.left}</td>
                                <td className="py-4 px-4 hidden md:table-cell">{loan.duration}</td>
                                <td className="py-4 px-4 hidden md:table-cell">{loan.interest}</td>
                                <td className="py-4 px-4 hidden md:table-cell">{loan.installment}</td>
                                <td className="py-4 px-0 md:px-4 text-right md:text-left">
                                    <button className={`px-4 md:px-8 py-2 md:py-2.5 rounded-full border border-2 text-[12px] md:text-[15px] font-medium transition whitespace-nowrap ${loan.active ? "border-[#396AFF] text-[#396AFF] hover:bg-blue-50" : "border-[#232323] text-[#232323] hover:bg-gray-50"}`}>
                                        Repay
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {/* Total Row */}
                        <tr className="text-[#FF4B4A] font-medium text-[13px] md:text-[15px]">
                            <td className="pt-6 px-2 hidden md:table-cell">Total</td>
                            <td className="pt-6 px-2 text-[#FF4B4A] md:hidden">Total</td>
                            <td className="pt-6 px-2">$125,0000</td>
                            <td className="pt-6 px-2">$750,000</td>
                            <td className="pt-6 px-2 hidden md:table-cell"></td>
                            <td className="pt-6 px-2 hidden md:table-cell"></td>
                            <td className="pt-6 px-2 hidden md:table-cell">$50,000 / month</td>
                            <td className="pt-6 px-2"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LoansTable;