import { Check, Code, Heart, HelpCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DashboardLayout } from "@/components/DashboardLayout"

const Admin = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-black text-white space-y-6 animate-fade-in p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to Trex Panel!</h1>
          <p className="text-gray-400">Version: stable (1.0.0)</p>
        </header>

        <div className="space-y-6">
          {/* System Status Card */}
          <Card className="bg-zinc-900/50 border-zinc-800 text-white">
            <CardHeader className="flex flex-row items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <CardTitle>Your Panel is up to date</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                You are currently using stable (1.0.0). Your panel is up-to-date!
              </p>
            </CardContent>
          </Card>

          {/* Developer Information Card */}
          <Card className="bg-zinc-900/50 border-zinc-800 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-blue-500" />
                <CardTitle>Information for Developers</CardTitle>
              </div>
              <Button variant="secondary" className="bg-blue-500 hover:bg-blue-600 text-white">
                Bugs & Features
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Access development resources and contribute to the project.
              </p>
            </CardContent>
          </Card>

          {/* Support Card */}
          <Card className="bg-zinc-900/50 border-zinc-800 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <CardTitle>Support Trex Panel</CardTitle>
              </div>
              <Button variant="secondary" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Donate Directly
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Thank you for using Trex Panel, this could only be achieved through the support of you, 
                our contributors, and the rest of our supporters!
              </p>
              <p className="text-gray-400 mt-2">
                We appreciate any and all support from anybody.
              </p>
            </CardContent>
          </Card>

          {/* Help Card */}
          <Card className="bg-zinc-900/50 border-zinc-800 text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-blue-500" />
                <CardTitle>Need Help?</CardTitle>
              </div>
              <Button variant="secondary" className="bg-blue-500 hover:bg-blue-600 text-white">
                Read Documentation
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Check out the documentation first! If you still need assistance then, fly onto our{" "}
                <a href="#" className="text-blue-400 hover:underline">
                  Discord server
                </a>
                !
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Admin