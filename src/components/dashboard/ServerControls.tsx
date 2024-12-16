import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ServerCog, Play, Square, RotateCw } from "lucide-react"

export function ServerControls() {
  return (
    <Card className="bg-[#0D0F1D] border-[#1E2433] text-white">
      <div className="flex items-center justify-between p-6 border-b border-[#1E2433]">
        <h2 className="text-lg font-medium flex items-center gap-2">
          <ServerCog className="w-5 h-5 text-blue-500" />
          Server Information
        </h2>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border-emerald-500/20">
            <Play className="w-4 h-4 mr-2" />
            Start
          </Button>
          <Button size="sm" variant="outline" className="bg-red-500/10 hover:bg-red-500/20 text-red-500 border-red-500/20">
            <Square className="w-4 h-4 mr-2" />
            Stop
          </Button>
          <Button size="sm" variant="outline" className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 border-blue-500/20">
            <RotateCw className="w-4 h-4 mr-2" />
            Restart
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {[
          { name: "survival", status: "Running", players: 12, version: "1.20.1" },
          { name: "creative", status: "Running", players: 5, version: "1.20.1" },
          { name: "minigames", status: "Running", players: 3, version: "1.20.1" },
          { name: "skyblock", status: "Maintenance", players: 0, version: "1.20.1" }
        ].map((server, i) => (
          <div key={i} className="p-4 rounded-lg bg-[#0A0B14] hover:bg-[#0D0F1D] transition-colors border border-[#1E2433]">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium capitalize">{server.name}</span>
              <Badge 
                variant="outline" 
                className={server.status === "Running" 
                  ? "bg-emerald-500/10 text-emerald-500 border-0" 
                  : "bg-red-500/10 text-red-500 border-0"
                }
              >
                {server.status}
              </Badge>
            </div>
            <div className="space-y-1 text-sm text-white/50">
              <p>Players: {server.players}</p>
              <p>Version: {server.version}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}