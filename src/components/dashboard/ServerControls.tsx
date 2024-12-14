import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ServerCog, Play, Square, Power } from "lucide-react"

export function ServerControls() {
  return (
    <Card className="glass-card p-6 animate-fade-up backdrop-blur-lg bg-card/50">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ServerCog className="w-5 h-5" />
          Server Information
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Play className="w-4 h-4" />
            Start
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Square className="w-4 h-4" />
            Stop
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Power className="w-4 h-4" />
            Restart
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: "survival", status: "Running", players: 12, version: "1.20.1" },
          { name: "creative", status: "Running", players: 5, version: "1.20.1" },
          { name: "minigames", status: "Running", players: 3, version: "1.20.1" },
          { name: "skyblock", status: "Maintenance", players: 0, version: "1.20.1" }
        ].map((server, i) => (
          <div key={i} className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors backdrop-blur-sm hover-scale">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium capitalize">{server.name}</span>
              <Badge 
                variant="outline" 
                className={server.status === "Running" 
                  ? "bg-emerald-500/10 text-emerald-500 border-0" 
                  : "bg-destructive/10 text-destructive border-0"
                }
              >
                {server.status}
              </Badge>
            </div>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Players: {server.players}</p>
              <p>Version: {server.version}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}