import TransactionList from "@/components/transaction-list"
import TransactionForm from "@/components/transaction-form"
import Dashboard from "@/components/dashboard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExpensesChart from "@/components/expenses-chart"
import CategoryChart from "@/components/category-chart"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Personal Finance Visualizer - Stage 2</h1>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="charts">Charts</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Dashboard />
        </TabsContent>

        <TabsContent value="transactions" className="space-y-8">
          <TransactionForm />
          <TransactionList />
        </TabsContent>

        <TabsContent value="charts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExpensesChart />
            <CategoryChart />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

