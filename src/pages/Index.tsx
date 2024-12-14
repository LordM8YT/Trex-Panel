import { ServerCog } from "lucide-react"
import { DashboardLayout } from "@/components/DashboardLayout"
import { StatsCards } from "@/components/dashboard/StatsCards"
import { PlayerChart } from "@/components/dashboard/PlayerChart"
import { ConsoleView } from "@/components/dashboard/ConsoleView"
import { ServerControls } from "@/components/dashboard/ServerControls"

const Index = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 space-y-8 animate-fade-in">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <ServerCog className="w-6 h-6 text-primary animate-float" />
            <span className="px-3 py-1 text-xs font-semibold bg-secondary/50 backdrop-blur-sm inline-block rounded-full">
              Server Dashboard
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Minecraft Server Control Panel
          </h1>
          <p className="text-muted-foreground">Advanced server management and monitoring</p>
        </header>

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PlayerChart />
          <ConsoleView />
        </div>

        <ServerControls />
      </div>
    </DashboardLayout>
  )
}

export default Index