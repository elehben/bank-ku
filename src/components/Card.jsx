import Chip from "../assets/Chip_Card.png";

function Card({ 
    variant = "blue", 
    balance = "$5,756", 
    cardHolder = "Eddy Cusuma", 
    validThru = "12/22", 
    cardNumber = "3778 **** **** 1234" 
}) {
  const isBlue = variant === "blue";

  return (
    <div className={`w-full h-[235px] rounded-3xl overflow-hidden flex flex-col justify-between font-sans transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer ${isBlue ? "bg-linear-to-br from-[#4C49ED] to-[#0A06F4] text-white" : "bg-white text-[#343C6A] border border-[#DFEAF2]"}`}>
        
        {/* Top Section */}
        <div className="p-5 xl:p-6 flex justify-between items-start">
            <div>
                <p className={`text-xs font-base ${isBlue ? "text-white/70" : "text-[#718EBF]"}`}>
                    Balance
                </p>
                <h3 className={`text-lg md:text-xl lg:text-lg xl:text-xl font-medium ${isBlue ? "text-white" : "text-[#343C6A]"}`}>
                    {balance}
                </h3>
            </div>
            
            {/* Chip Icon */}
            <img src={Chip} alt="Chip" className={`w-8 lg:w-7 xl:w-9 ${isBlue ? "" : "brightness-0 opacity-80"}`} />
        </div>

        {/* Middle Section */}
        <div className="px-5 xl:px-6 flex gap-10 md:gap-16 lg:gap-8 xl:gap-14">
            <div>
                <p className={`text-[10px] md:text-xs font-base ${isBlue ? "text-white/70" : "text-[#718EBF]"}`}>CARD HOLDER</p>
                <p className={`text-xs md:text-sm lg:text-xs xl:text-sm font-semibold truncate max-w-[100px] md:max-w-none lg:max-w-[90px] xl:max-w-none ${isBlue ? "text-white" : "text-[#343C6A]"}`}>{cardHolder}</p>
            </div>
            <div>
                <p className={`text-[10px] md:text-xs font-base ${isBlue ? "text-white/70" : "text-[#718EBF]"}`}>VALID THRU</p>
                <p className={`text-xs md:text-sm lg:text-xs xl:text-sm font-semibold ${isBlue ? "text-white" : "text-[#343C6A]"}`}>{validThru}</p>
            </div>
        </div>

        {/* Bottom Section */}
        <div className={`px-5 xl:px-6 py-4 flex justify-between items-center ${isBlue ? "bg-linear-to-b from-white/15 to-transparent" : "border-t border-[#DFEAF2]"}`}>
            <p className={`text-sm md:text-xl lg:text-base xl:text-xl font-medium tracking-wider md:tracking-widest lg:tracking-wider xl:tracking-widest ${isBlue ? "text-white" : "text-[#343C6A]"}`}>
                {cardNumber}
            </p>
            
            {/* Mastercard Logo Mockup */}
            <div className="flex shrink-0">
                <div className={`w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-full ${isBlue ? "bg-white/50" : "bg-[#9199AF]/50"}`}></div>
                <div className={`w-6 h-6 md:w-8 md:h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8 rounded-full -ml-3 md:-ml-4 lg:-ml-3 xl:-ml-4 ${isBlue ? "bg-white/30" : "bg-[#9199AF]/30"}`}></div>
            </div>
        </div>

    </div>
  );
}

export default Card;