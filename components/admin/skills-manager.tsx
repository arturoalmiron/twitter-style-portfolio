"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Edit, Plus } from "lucide-react"
import Image from "next/image"

interface Skill {
  id: number
  name: string
  icon: string
  category: string
}

const initialSkills: Skill[] = [
  { id: 1, name: "HTML, CSS", icon: "/placeholderbackground.png?height=40&width=40", category: "Frontend" },
  { id: 2, name: "JavaScript", icon: "/placeholderbackground.png?height=40&width=40", category: "Language" },
  { id: 3, name: "React", icon: "/placeholderbackground.png?height=40&width=40", category: "Frontend" },
  { id: 4, name: "Node.js", icon: "/placeholderbackground.png?height=40&width=40", category: "Backend" },
  { id: 5, name: "TypeScript", icon: "/placeholderbackground.png?height=40&width=40", category: "Language" },
  { id: 6, name: "Python", icon: "/placeholderbackground.png?height=40&width=40", category: "Language" },
]

const categories = ["Frontend", "Backend", "Language", "Cloud", "DevOps", "Database", "Mobile"]

export function SkillsManager() {
  const [skills, setSkills] = useState<Skill[]>(initialSkills)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    category: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      setSkills(skills.map((skill) => (skill.id === editingId ? { ...skill, ...formData } : skill)))
      setEditingId(null)
    } else {
      const newSkill: Skill = {
        id: Date.now(),
        ...formData,
      }
      setSkills([...skills, newSkill])
      setShowAddForm(false)
    }

    setFormData({ name: "", icon: "", category: "" })
  }

  const handleEdit = (skill: Skill) => {
    setFormData({
      name: skill.name,
      icon: skill.icon,
      category: skill.category,
    })
    setEditingId(skill.id)
    setShowAddForm(true)
  }

  const handleDelete = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id))
  }

  const handleCancel = () => {
    setFormData({ name: "", icon: "", category: "" })
    setEditingId(null)
    setShowAddForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Skills</h3>
        <Button onClick={() => setShowAddForm(true)} disabled={showAddForm}>
          <Plus className="w-4 h-4 mr-2" />
          Add Skill
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Skill" : "Add New Skill"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Skill Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., React"
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="icon">Icon URL</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="e.g., /placeholder.svg?height=40&width=40&query=React logo"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <Button type="submit">{editingId ? "Update" : "Add"} Skill</Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((skill) => (
          <Card key={skill.id}>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={`${skill.name} logo`}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{skill.name}</h4>
                  <p className="text-sm text-gray-500">{skill.category}</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(skill)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(skill.id)}>
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
