import { Card, CardContent, Text } from '@/components/ui/card'

export default function IntroCard() {
  return (
    <Card className="bg-blue-900 text-white">
      <CardContent>
        <div className="flex items-center mb-4">
          {/* Icon placeholder */}
          <Text variant="h4" className="ml-2 uppercase font-bold">SOPRO</Text>
        </div>
        <Text className="mb-2 font-semibold">Um novo ar para a sua rotina</Text>
        <Text>
          Sua nova rotina começa aqui. Defina metas, crie hábitos saudáveis e acompanhe sua evolução.
        </Text>
        <Text>
          Aproveite todas as ferramentas que este Sistema de Organização e Planejamento para Redesenhar Objetivos.
        </Text>
      </CardContent>
    </Card>
  )
}