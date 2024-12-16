import { Card } from "@/components/ui/card"
import { Activity } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { time: "00:00", cpu: 45, ram: 65 },
  { time: "04:00", cpu: 55, ram: 70 },
  { time: "08:00", cpu: 65, ram: 75 },
  { time: "12:00", cpu: 70, ram: 80 },
  { time: "16:00", cpu: 60, ram: 72 },
  { time: "20:00", cpu: 50, ram: 68 },
  { time: "24:00", cpu: 45, ram: 65 },
]

export function PlayerChart() {
  return (
    <Card className="bg-[#0D0F1D] border-[#1E2433] text-white p-6 animate-fade-up lg:col-span-2">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Activity className="w-5 h-5 text-blue-500" />
        Server Usage
      </h2>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="ramGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E2433" />
            <XAxis 
              dataKey="time" 
              stroke="#6B7280"
              tick={{ fill: '#6B7280' }}
            />
            <YAxis 
              stroke="#6B7280"
              tick={{ fill: '#6B7280' }}
              unit="%"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#0D0F1D",
                border: "1px solid #1E2433",
                borderRadius: "8px",
                color: "white"
              }}
            />
            <Area
              type="monotone"
              dataKey="cpu"
              name="CPU Usage"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#cpuGradient)"
            />
            <Area
              type="monotone"
              dataKey="ram"
              name="RAM Usage"
              stroke="#10B981"
              fillOpacity={1}
              fill="url(#ramGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}