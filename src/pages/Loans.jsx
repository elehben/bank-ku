import MainLayout from "../layouts/MainLayout"
import LoansCards from "../components/LoansCards"
import LoansTable from "../components/LoansTable"

function Loans() {
  return (
    <MainLayout>
        
        <div className="flex flex-col">
            <LoansCards />
            <LoansTable />
        </div>

    </MainLayout>
  )
}

export default Loans