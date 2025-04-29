import { caseDati } from "@/utils/dataCase";
import CardCasa from "@/components/CardCasa";

export default function CasePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Le Nostre Case</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {caseDati.map((casa) => (
          <CardCasa key={casa.id} casa={casa} />
        ))}
      </div>
    </div>
  )
}
