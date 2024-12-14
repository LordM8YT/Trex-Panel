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
    <Card className="glass-card p-6 animate-fade-up backdrop-blur-lg bg-card/50">
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
  )
}