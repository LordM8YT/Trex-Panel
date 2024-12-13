import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Users, Server, Clock } from "lucide-react";

const data = [
  { time: "00:00", players: 25 },
  { time: "04:00", players: 18 },
  { time: "08:00", players: 12 },
  { time: "12:00", players: 30 },
  { time: "16:00", players: 45 },
  { time: "20:00", players: 38 },
  { time: "24:00", players: 22 },
];

const Index = () => {
  return (
    <div className="min-h-screen p-8 space-y-8 animate-fade-in">
      <header className="text-center mb-12">
        <span className="px-3 py-1 text-xs font-semibold bg-secondary inline-block rounded-full mb-3">
          Server Dashboard
        </span>
        <h1 className="text-4xl font-bold mb-2">Minecraft Server Status</h1>
        <p className="text-muted-foreground">Real-time monitoring of your Minecraft server</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stat-card hover-scale">
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

        <Card className="stat-card hover-scale">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/5 rounded-full">
              <Server className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Server Status</p>
              <p className="text-2xl font-bold">Online</p>
            </div>
          </div>
        </Card>

        <Card className="stat-card hover-scale">
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

        <Card className="stat-card hover-scale">
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

      <Card className="glass-card p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-xl font-semibold mb-4">Player Count History</h2>
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

      <Card className="glass-card p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-xl font-semibold mb-4">Server Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "survival", status: "Running", players: 12, version: "1.20.1" },
            { name: "creative", status: "Running", players: 5, version: "1.20.1" },
            { name: "minigames", status: "Running", players: 3, version: "1.20.1" },
            { name: "skyblock", status: "Maintenance", players: 0, version: "1.20.1" }
          ].map((server, i) => (
            <div key={i} className="p-4 rounded-lg bg-secondary/50 hover-scale">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium capitalize">{server.name}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  server.status === "Running" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
                }`}>
                  {server.status}
                </span>
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