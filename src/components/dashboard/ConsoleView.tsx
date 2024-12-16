import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Terminal } from "lucide-react"

const consoleOutput = [
  "[INFO] Server started",
  "[INFO] Loading world...",
  "[INFO] World loaded successfully",
  "[INFO] Player Steve joined the game",
  "[INFO] Player Alex joined the game",
]

export function ConsoleView() {
  return (
    <Card className="bg-[#1E2433]/50 border-white/5 text-white">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Terminal className="w-5 h-5" />
          Console
        </h2>
        <Button variant="outline" size="sm" className="gap-2 border-white/10 bg-white/5 hover:bg-white/10 text-white">
          <Terminal className="w-4 h-4" />
          Send Command
        </Button>
      </div>
      <ScrollArea className="h-[350px] rounded-md border border-white/10 bg-black/20 mx-6 mb-6">
        <div className="space-y-2 font-mono p-4">
          {consoleOutput.map((line, i) => (
            <p key={i} className="text-sm text-white/70 hover:text-white transition-colors">
              {line}
            </p>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}