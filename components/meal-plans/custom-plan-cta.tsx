import { Button } from "@/components/ui/button"

export default function CustomPlanCTA() {
  return (
    <div className="bg-primary-600 rounded-xl p-8 text-center shadow-lg">
      <h3 className="text-3xl font-bold text-white mb-4">Create Your Custom Meal Plan</h3>
      <p className="text-primary-100 text-lg mb-6">Tailor your meals to your exact preferences and nutritional needs</p>
      <Button
        size="lg"
        className="px-10 py-4 bg-white text-primary-600 rounded-lg text-xl font-bold hover:bg-primary-100 transition-all transform hover:scale-105 shadow-md"
      >
        Create Your Own Plan
      </Button>
    </div>
  )
}

