"use client"

import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

const experiences = [
  {
    id: 1,
    company: "Millicom",
    period: "(2022-2025)",
    logo: "/experience/Logo_Tigo.svg?height=40&width=40",
    description: "QA Automation Engineer that develops and maintains automated test scripts to enhance regression coverage and accelerate release cycles.",
  },
  {
    id: 2,
    company: "Millicom",
    period: "(2019-2022)",
    logo: "/experience/Logo_Tigo.svg?height=40&width=40",
    description: "Agile QA Analyst that ensures high-quality deliverables by performing thorough manual testing within cross-functional Agile teams.",
  },
]

export function ExperienceTab() {
  const { t } = useLanguage()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">{t("myExperiences")}</h3>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Image
              src={exp.logo || "/placeholder.svg"}
              alt={`${exp.company} logo`}
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex-1">
              <div className="font-medium text-gray-900">
                {exp.company} {exp.period}
              </div>
              <div className="text-sm text-gray-600 mt-1">{exp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
