"use client"

import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

const skills = [
  {
    name: "HTML, CSS",
    icon: "/placeholderbackground.png?height=40&width=40",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "/placeholderbackground.png?height=40&width=40",
    category: "Language",
  },
  {
    name: "React",
    icon: "/placeholderbackground.png?height=40&width=40",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: "/placeholderbackground.png?height=40&width=40",
    category: "Backend",
  },
  {
    name: "TypeScript",
    icon: "/placeholderbackground.png?height=40&width=40",
    category: "Language",
  },
  {
    name: "Python",
    icon: "/placeholderbackground.png?height=40&width=40",
    category: "Language",
  },
]

export function SkillsTab() {
  const { t } = useLanguage()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">{t("mySkills")}</h3>

      <div className="space-y-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Image
              src={skill.icon || "/placeholder.svg"}
              alt={`${skill.name} logo`}
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
