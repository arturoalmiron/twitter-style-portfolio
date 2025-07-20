"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Edit, Plus } from "lucide-react"
import Image from "next/image"

interface SkillCategory {
  id: number
  category: string
  icon: string
  skills: string[]
}

const initialSkillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Web Development",
    icon: "/placeholderbackground.png?height=40&width=40",
    skills: ["HTML", "CSS", "React"],
  },
  {
    id: 2,
    category: "Mobile Development",
    icon: "/placeholderbackground.png?height=40&width=40",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: 3,
    category: "AI Tools",
    icon: "/placeholderbackground.png?height=40&width=40",
    skills: ["OpenAI API", "TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    id: 4,
    category: "Database Management",
    icon: "/placeholderbackground.png?height=40&width=40",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
]

export function SkillsManager() {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(initialSkillCategories)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    category: "",
    icon: "",
    skills: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const skillsArray = formData.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill.length > 0)

    if (editingId) {
      setSkillCategories(
        skillCategories.map((cat) =>
          cat.id === editingId
            ? { ...cat, category: formData.category, icon: formData.icon, skills: skillsArray }
            : cat,
        ),
      )
      setEditingId(null)
    } else {
      const newCategory: SkillCategory = {
        id: Date.now(),
        category: formData.category,
        icon: formData.icon,
        skills: skillsArray,
      }
      setSkillCategories([...skillCategories, newCategory])
      setShowAddForm(false)
    }

    setFormData({ category: "", icon: "", skills: "" })
  }

  const handleEdit = (category: SkillCategory) => {
    setFormData({
      category: category.category,
      icon: category.icon,
      skills: category.skills.join(", "),
    })
    setEditingId(category.id)
    setShowAddForm(true)
  }

  const handleDelete = (id: number) => {
    setSkillCategories(skillCategories.filter((cat) => cat.id !== id))
  }

  const handleCancel = () => {
    setFormData({ category: "", icon: "", skills: "" })
    setEditingId(null)
    setShowAddForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Skill Categories</h3>
        <Button onClick={() => setShowAddForm(true)} disabled={showAddForm}>
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Skill Category" : "Add New Skill Category"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="category">Category Name</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="e.g., Web Development"
                  required
                />
              </div>
              <div>
                <Label htmlFor="icon">Icon URL</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="e.g., /placeholderbackground.png?height=40&width=40"
                  required
                />
              </div>
              <div>
                <Label htmlFor="skills">Skills (comma-separated)</Label>
                <Textarea
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  placeholder="e.g., HTML, CSS, React, JavaScript"
                  rows={3}
                  required
                />
                <p className="text-sm text-gray-500 mt-1">Separate each skill with a comma</p>
              </div>
              <div className="flex space-x-2">
                <Button type="submit">{editingId ? "Update" : "Add"} Category</Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {skillCategories.map((category) => (
          <Card key={category.id}>
            <CardContent className="pt-6">
              <div className="flex items-start space-x-3 mb-3">
                <Image
                  src={category.icon || "/placeholder.svg"}
                  alt={`${category.category} icon`}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(category)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(category.id)}>
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
