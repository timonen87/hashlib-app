"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/widgets/app-header/_ui/card";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "Это лучшее приложение, которым я когда-либо пользовался!",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "Я использую его ежедневно для создания новых фотографий!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description: "Это приложение изменило мою жизнь, я не могу представить, как буду работать без него!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description: "Лучший в своем классе, определенно стоящий премиум-подписки!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Рекомендации</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}