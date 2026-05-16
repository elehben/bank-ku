import MainLayout from "../layouts/MainLayout"
import Card from "../components/Card"
import RecentTransaction from "../components/RecentTransactions"
import WeeklyActivityChart from "../components/WeeklyActivityChart"
import ExpenseStatisticsChart from "../components/ExpenseStatisticsChart"
import BalanceHistoryChart from "../components/BalanceHistoryChart"
import QuickTransfer from "../components/QuickTransfer"

function Dashbord() {
  return (
    <MainLayout>
        
        {/* ROW 1: My Cards & Recent Transaction */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-5 mb-6 lg:mb-8">
            {/* Left Side: My Cards */}
            <div className="w-full lg:w-2/3 min-w-0">
                <div className="flex justify-between items-center mb-4 md:mb-5">
                    <h2 className="text-[18px] md:text-xl text-[#343C6A] font-semibold">
                        My Cards
                    </h2>
                    <h1 className="text-sm md:text-[15px] text-[#343C6A] font-semibold hover:text-blue-600 cursor-pointer">
                        See All
                    </h1>
                </div>
                {/* Horizontal scroll enabled on mobile AND tablet (md), visible full grid on desktop (lg) */}
                <div className="flex overflow-x-auto lg:overflow-visible gap-4 md:gap-6 lg:gap-8 pb-3 lg:pb-0 -mx-6 px-6 md:-mx-10 md:px-10 lg:mx-0 lg:px-0 scroll-smooth [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="w-[85%] sm:w-[325px] shrink-0 lg:shrink lg:flex-1 snap-center">
                        <Card variant="blue" />
                    </div>
                    <div className="w-[85%] sm:w-[325px] shrink-0 lg:shrink lg:flex-1 snap-center">
                        <Card variant="white" />
                    </div>
                </div>
            </div>

            {/* Right Side: Recent Transaction */}
            <div className="w-full lg:w-1/3 min-w-0 mt-2 lg:mt-0">
                <RecentTransaction />
            </div>
        </div>

        {/* ROW 2: Weekly Activity & Expense Statistics */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="w-full lg:w-2/3 min-w-0">
                <WeeklyActivityChart />
            </div>
            <div className="w-full lg:w-1/3 min-w-0">
                <ExpenseStatisticsChart />
            </div>
        </div>

        {/* ROW 3: Quick Transfer & Balance History */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            <div className="w-full lg:w-[42%] min-w-0">
                <QuickTransfer />
            </div>
            <div className="w-full lg:w-[58%] min-w-0">
                <BalanceHistoryChart />
            </div>
        </div>
        
    </MainLayout>
  );
}

export default Dashbord