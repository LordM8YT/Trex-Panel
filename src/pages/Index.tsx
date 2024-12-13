import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Server, Clock, Terminal, Power, Play, Square, ServerCog, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const data = [
  { time: "00:00", players: 25 },
  { time: "04:00", players: 18 },
  { time: "08:00", players: 12 },
  { time: "12:00", players: 30 },
  { time: "16:00", players: 45 },
  { time: "20:00", players: 38 },
  { time: "24:00", players: 22 },
];

const consoleOutput = [
  "[INFO] Server started",
  "[INFO] Loading world...",
  "[INFO] World loaded successfully",
  "[INFO] Player Steve joined the game",
  "[INFO] Player Alex joined the game",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 p-8 space-y-8 animate-fade-in">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stat-card hover-scale backdrop-blur-lg bg-card/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/5 rounded-full">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Online Players</p>
              <p className="text-2xl font-bold">22/100</p>
            </div>
          </div>
        </Card>

        <Card className="stat-card hover-scale backdrop-blur-lg bg-card/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-emerald-500/5 rounded-full">
              <MonitorPlay className="w-6 h-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Server Status</p>
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-0">
                Online
              </Badge>
            </div>
          </div>
        </Card>

        <Card className="stat-card hover-scale backdrop-blur-lg bg-card/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/5 rounded-full">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Uptime</p>
              <p className="text-2xl font-bold">24h 12m</p>
            </div>
          </div>
        </Card>

        <Card className="stat-card hover-scale backdrop-blur-lg bg-card/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/5 rounded-full">
              <Server className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">RAM Usage</p>
              <p className="text-2xl font-bold">4.2/8 GB</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card p-6 animate-fade-up lg:col-span-2 backdrop-blur-lg bg-card/50" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Player Count History
          </h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="playersGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--background))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    backdropFilter: "blur(8px)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="players"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#playersGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="glass-card p-6 animate-fade-up backdrop-blur-lg bg-card/50" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Console
            </h2>
            <Button variant="outline" size="sm" className="gap-2">
              <Terminal className="w-4 h-4" />
              Send Command
            </Button>
          </div>
          <ScrollArea className="h-[350px] rounded-md border bg-black/10 p-4">
            <div className="space-y-2 font-mono">
              {consoleOutput.map((line, i) => (
                <p key={i} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {line}
                </p>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>

      <Card className="glass-card p-6 animate-fade-up backdrop-blur-lg bg-card/50" style={{ animationDelay: "0.3s" }}>
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
    </div>
  );
};

export default Index;