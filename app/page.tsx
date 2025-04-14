import TokenGenerator from "@/components/token-generator"
import ThemeSwitcher from "@/components/theme-switcher"
import SupportSection from "@/components/support-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card" // Importing Card components

export default function Home() {
  return (
    <main className="min-h-screen flex p-4 sm:p-8 ">
      {/* Sidebar */}
      <div className="w-64 bg-gray-700 p-4 mr-8 rounded-lg shadow-lg">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Other Tools</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-600">Coming Soon</p>
          </CardContent>
        </Card>

        {/* Additional sidebar content can go here, e.g., links or descriptions */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1">
        <div className="absolute top-4 right-4">
          <ThemeSwitcher />
        </div>
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Token Generator</h1>
          <TokenGenerator />
          <SupportSection />
        </div>
      </div>
    </main>
  )
}
