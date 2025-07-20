"use client"

import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

const skillCategories = [
/*  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React"],
  },
  {
    category: "Mobile Development",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    category: "AI Tools",
    skills: ["OpenAI API", "TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    category: "Database Management",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },*/
]

const additionalSkills = [
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React"],
  },
  {
    category: "Mobile Development",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    category: "AI Tools",
    skills: ["OpenAI API", "TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    category: "Database Management",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    category: "Backend Technologies",
    skills: ["Node.js", "Express.js", "Django", "FastAPI"],
  },
]

export function SkillsTab() {
  const { t } = useLanguage()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">{t("mySkills")}</h3>

      <div className="space-y-6">
        {/* Main skill categories with icons */}
        {skillCategories.map((category) => (
          <div key={category.category}>
            {/* Category Header with Icon */}
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src={category.icon || "/placeholder.svg"}
                alt={`${category.category} icon`}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <h4 className="font-semibold text-gray-900">{category.category}</h4>
            </div>

            {/* Skills in this category */}
            <div className="ml-12 mb-4">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Additional skills without main icons */}
        {additionalSkills.map((category) => (
          <div key={category.category}>
            <h4 className="font-semibold text-gray-900 mb-3">{category.category}</h4>
            <div className="ml-4 mb-4">
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
