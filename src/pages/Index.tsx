import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity, Cpu, Thermometer, Zap } from "lucide-react";

const data = [
  { time: "00:00", hashrate: 95 },
  { time: "04:00", hashrate: 85 },
  { time: "08:00", hashrate: 90 },
  { time: "12:00", hashrate: 100 },
  { time: "16:00", hashrate: 95 },
  { time: "20:00", hashrate: 88 },
  { time: "24:00", hashrate: 92 },
];

const Index = () => {
  return (
    <div className="min-h-screen p-8 space-y-8 animate-fade-in">
      <header className="text-center mb-12">
        <span className="px-3 py-1 text-xs font-semibold bg-secondary inline-block rounded-full mb-3">
          Mining Dashboard
        </span>
        <h1 className="text-4xl font-bold mb-2">Mining Status Overview</h1>
        <p className="text-muted-foreground">Real-time monitoring of your mining operations</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="stat-card hover-scale">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/5 rounded-full">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current Hashrate</p>
              <p className="text-2xl font-bold">92.5 MH/s</p>
            </div>
          </div>
        </Card>

        <Card className="stat-card hover-scale">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/5 rounded-full">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Workers</p>
              <p className="text-2xl font-bold">8/8</p>
            </div>
          </div>
        </Card>

        <Card className="stat-card hover-scale">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/5 rounded-full">
              <Thermometer className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Average Temp</p>
              <p className="text-2xl font-bold">62°C</p>
            </div>
          </div>
        </Card>

        <Card className="stat-card hover-scale">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-primary/5 rounded-full">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Power Usage</p>
              <p className="text-2xl font-bold">1.2 kW</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="glass-card p-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-xl font-semibold mb-4">Hashrate History</h2>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="hashrateGradient" x1="0" y1="0" x2="0" y2="1">
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
                dataKey="hashrate"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#hashrateGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="glass-card p-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-xl font-semibold mb-4">Worker Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="p-4 rounded-lg bg-secondary/50 hover-scale">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Worker {i + 1}</span>
                <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">Active</span>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Hashrate: 11.5 MH/s</p>
                <p>Temp: {60 + Math.floor(Math.random() * 5)}°C</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Index;