"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Edit, Plus } from "lucide-react"

interface Experience {
  id: number
  company: string
  period: string
  description: string
}

const initialExperiences: Experience[] = [
  {
    id: 1,
    company: "Millicom",
    period: "(2022-2025)",
    description: " QA Automation Engineer that develops and maintains automated test scripts to enhance regression coverage and accelerate release cycles.",
  },
  {
    id: 2,
    company: "Millicom",
    period: "(2019-2022)",
    description: "Agile QA Analyst that ensures high-quality deliverables by performing thorough manual testing within cross-functional Agile teams.",
  },
]

export function ExperienceManager() {
  const [experiences, setExperiences] = useState<Experience[]>(initialExperiences)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    company: "",
    period: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      setExperiences(experiences.map((exp) => (exp.id === editingId ? { ...exp, ...formData } : exp)))
      setEditingId(null)
    } else {
      const newExperience: Experience = {
        id: Date.now(),
        ...formData,
      }
      setExperiences([...experiences, newExperience])
      setShowAddForm(false)
    }

    setFormData({ company: "", period: "", description: "" })
  }

  const handleEdit = (experience: Experience) => {
    setFormData({
      company: experience.company,
      period: experience.period,
      description: experience.description,
    })
    setEditingId(experience.id)
    setShowAddForm(true)
  }

  const handleDelete = (id: number) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  const handleCancel = () => {
    setFormData({ company: "", period: "", description: "" })
    setEditingId(null)
    setShowAddForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Experience Entries</h3>
        <Button onClick={() => setShowAddForm(true)} disabled={showAddForm}>
          <Plus className="w-4 h-4 mr-2" />
          Add Experience
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Experience" : "Add New Experience"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g., Google, LLC"
                  required
                />
              </div>
              <div>
                <Label htmlFor="period">Period</Label>
                <Input
                  id="period"
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  placeholder="e.g., (2020-2025)"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your role and responsibilities..."
                  required
                />
              </div>
              <div className="flex space-x-2">
                <Button type="submit">{editingId ? "Update" : "Add"} Experience</Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {experiences.map((experience) => (
          <Card key={experience.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">
                    {experience.company} {experience.period}
                  </h4>
                  <p className="text-gray-600 mt-2">{experience.description}</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(experience)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(experience.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
