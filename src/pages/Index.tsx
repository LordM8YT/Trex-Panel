import { Search, Settings, Layers, Moon } from "lucide-react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { StatsCards } from "@/components/dashboard/StatsCards"
import { PlayerChart } from "@/components/dashboard/PlayerChart"
import { ConsoleView } from "@/components/dashboard/ConsoleView"
import { ServerControls } from "@/components/dashboard/ServerControls"
import { Switch } from "@/components/ui/switch"

const Index = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#1A1F2C] text-white">
        {/* Header */}
        <div className="border-b border-white/10 bg-[#1A1F2C]/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center px-4 gap-4">
            <h1 className="text-lg font-semibold">Trex Panel</h1>
            <div className="ml-auto flex items-center gap-4">
              <Search className="h-5 w-5 text-white/70" />
              <Settings className="h-5 w-5 text-white/70" />
              <Layers className="h-5 w-5 text-white/70" />
              <Moon className="h-5 w-5 text-white/70" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-6 space-y-8">
          {/* Server Toggle */}
          <div className="flex items-center justify-end gap-2 text-sm text-white/70">
            <span>SHOWING OTHER'S SERVERS</span>
            <Switch />
          </div>

          {/* Server Status Message */}
          <div className="text-center text-white/50 py-12">
            <p>There are no other servers to display.</p>
          </div>

          <StatsCards />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <PlayerChart />
            <ConsoleView />
          </div>

          <ServerControls />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Index