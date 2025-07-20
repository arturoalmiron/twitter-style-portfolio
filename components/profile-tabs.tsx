"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExperienceTab } from "@/components/tabs/experience-tab"
import { SkillsTab } from "@/components/tabs/skills-tab"
// import { ReviewsTab } from "@/components/tabs/reviews-tab" // Comment this out
import { Plus } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { ProjectsTab } from "@/components/tabs/projects-tab"

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("experience")
  const { t } = useLanguage()

  const tabs = [
    { id: "experience", label: t("experience") },
    { id: "skills", label: t("skills") },
    { id: "projects", label: t("projects") },
    //{ id: "reviews", label: t("reviews") },
  ]

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-blue-100 text-blue-600 border border-blue-200"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
        {/* Comment out this entire Link block for production
        <Link href="/admin">
          <Button variant="outline" size="sm" className="ml-auto bg-transparent">
            <Plus className="w-4 h-4 mr-1" />
            {t("manage")}
          </Button>
        </Link>
        */}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "experience" && <ExperienceTab />}
        {activeTab === "skills" && <SkillsTab />}
        {activeTab === "projects" && <ProjectsTab />}
        {/* {activeTab === "reviews" && <ReviewsTab />} */} {/* Comment this out */}      </div>

      {/* Book Mentoring Button */}
      <div className="mt-8">
        <a 
          href="https://arturoalmiron.github.io/formulario-mvp/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <Button className="w-full bg-transparent" variant="outline" size="lg">
            {t("bookMentoring")}
          </Button>
        </a>
      </div>
    </div>
  )
}