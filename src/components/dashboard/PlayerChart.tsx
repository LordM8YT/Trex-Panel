import { Card } from "@/components/ui/card"
import { Users } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { time: "00:00", players: 25 },
  { time: "04:00", players: 18 },
  { time: "08:00", players: 12 },
  { time: "12:00", players: 30 },
  { time: "16:00", players: 45 },
  { time: "20:00", players: 38 },
  { time: "24:00", players: 22 },
]

export function PlayerChart() {
  return (
    <Card className="glass-card p-6 animate-fade-up lg:col-span-2 backdrop-blur-lg bg-card/50">
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
  )
}