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

interface Project {
  id: number
  title: string
  description: string
  image: string
  timestamp: string
}

const initialProjects: Project[] = [
  {
    id: 3,
    title: "German Gender Game",
    description:
      "Game where you pick the right gender of the word in German.",
    image: "/projects/germangendergame.png?height=200&width=400",
    timestamp: "2d",
  },
  {
    id: 2,
    title: "Example of a web page for an apartment",
    description:
      "Example of a web page for an apartment.",
    image: "/projects/porta3.png?height=200&width=400",
    timestamp: "5d",
  },
  {
    id: 1,
    title: "WIP webapp for property management",
    description:
      "Webapp for property management.",
    image: "/projects/propiedades.png?height=200&width=400",
    timestamp: "5d",
  },
]

export function ProjectsManager() {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    timestamp: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      setProjects(projects.map((project) => (project.id === editingId ? { ...project, ...formData } : project)))
      setEditingId(null)
    } else {
      const newProject: Project = {
        id: Date.now(),
        ...formData,
      }
      setProjects([...projects, newProject])
      setShowAddForm(false)
    }

    setFormData({ title: "", description: "", image: "", timestamp: "" })
  }

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      image: project.image,
      timestamp: project.timestamp,
    })
    setEditingId(project.id)
    setShowAddForm(true)
  }

  const handleDelete = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id))
  }

  const handleCancel = () => {
    setFormData({ title: "", description: "", image: "", timestamp: "" })
    setEditingId(null)
    setShowAddForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Projects</h3>
        <Button onClick={() => setShowAddForm(true)} disabled={showAddForm}>
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Project" : "Add New Project"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., E-commerce Platform"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your project..."
                  rows={4}
                  required
                />
              </div>
              <div>
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="e.g., /placeholder.svg?height=200&width=400&query=project screenshot"
                />
              </div>
              <div>
                <Label htmlFor="timestamp">Time Posted</Label>
                <Input
                  id="timestamp"
                  value={formData.timestamp}
                  onChange={(e) => setFormData({ ...formData, timestamp: e.target.value })}
                  placeholder="e.g., 2d, 1w, 3h"
                  required
                />
              </div>
              <div className="flex space-x-2">
                <Button type="submit">{editingId ? "Update" : "Add"} Project</Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    {project.image && (
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={60}
                        height={40}
                        className="rounded object-cover"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="text-sm text-gray-500">{project.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{project.description}</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(project)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(project.id)}>
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
