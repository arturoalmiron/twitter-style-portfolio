"use client"

import { useLanguage } from "@/hooks/use-language"

export function ProfileStats() {
  const { t } = useLanguage()

  const stats = [
    { label: t("followers"), value: "15463" },
    { label: t("following"), value: "15" },
    { label: t("posts"), value: "114" },
    { label: t("hourlyRate"), value: "149$" },
  ]

  return (
    <div className="mt-20 mb-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Arturo Almiron</h1>
        <p className="text-gray-500">@arturo-almiron</p>
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
