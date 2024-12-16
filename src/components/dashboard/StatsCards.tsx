import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MonitorPlay, Clock, Server } from "lucide-react"

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-[#0D0F1D] border-[#1E2433] text-white">
        <div className="flex items-center gap-4 p-6">
          <div className="p-3 bg-emerald-500/10 rounded-lg">
            <Users className="w-6 h-6 text-emerald-500" />
          </div>
          <div>
            <p className="text-sm text-white/50">Online Players</p>
            <p className="text-2xl font-bold">22/100</p>
          </div>
        </div>
      </Card>

      <Card className="bg-[#0D0F1D] border-[#1E2433] text-white">
        <div className="flex items-center gap-4 p-6">
          <div className="p-3 bg-blue-500/10 rounded-lg">
            <MonitorPlay className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-white/50">Server Status</p>
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-0">
              Online
            </Badge>
          </div>
        </div>
      </Card>

      <Card className="bg-[#0D0F1D] border-[#1E2433] text-white">
        <div className="flex items-center gap-4 p-6">
          <div className="p-3 bg-purple-500/10 rounded-lg">
            <Clock className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <p className="text-sm text-white/50">Uptime</p>
            <p className="text-2xl font-bold">24h 12m</p>
          </div>
        </div>
      </Card>

      <Card className="bg-[#0D0F1D] border-[#1E2433] text-white">
        <div className="flex items-center gap-4 p-6">
          <div className="p-3 bg-orange-500/10 rounded-lg">
            <Server className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <p className="text-sm text-white/50">RAM Usage</p>
            <p className="text-2xl font-bold">4.2/8 GB</p>
          </div>
        </div>
      </Card>
    </div>
  )
}