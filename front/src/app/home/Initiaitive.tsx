import { Card, CardContent } from '@/components/ui/card'
import { GraduationCap } from 'lucide-react'
import React from 'react'

const Initiaitive = () => {
  return (
    <div><section className="container mx-auto px-4 py-20 bg-gray-900">
    <h2 className="text-3xl font-bold text-white mb-12">Lorem ipsum dolor sit amet, lit exclusive squares</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-20">
      {['Square Space', 'Square Plus', 'Square Light', 'Square Champ'].map((square, index) => (
        <Card key={index} className="bg-gray-800 p-6">
          <CardContent className="flex flex-col items-center justify-center h-full">
            <GraduationCap className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-white text-lg font-semibold text-center">{square}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  </section></div>
  )
}

export default Initiaitive