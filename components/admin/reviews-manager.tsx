"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Edit, Plus, Star } from "lucide-react"

interface Review {
  id: number
  name: string
  role: string
  rating: number
  date: string
  content: string
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at Meta",
    rating: 5,
    date: "2 weeks ago",
    content:
      "Jane is an exceptional developer with great attention to detail. Her mentoring helped me understand complex React patterns.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer at Netflix",
    rating: 5,
    date: "1 month ago",
    content:
      "Outstanding technical knowledge and excellent communication skills. Highly recommend Jane for any full-stack project.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Frontend Developer at Spotify",
    rating: 4,
    date: "2 months ago",
    content: "Great mentor! Jane helped me transition from junior to mid-level developer. Her guidance was invaluable.",
  },
]

export function ReviewsManager() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    date: "",
    content: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingId) {
      setReviews(reviews.map((review) => (review.id === editingId ? { ...review, ...formData } : review)))
      setEditingId(null)
    } else {
      const newReview: Review = {
        id: Date.now(),
        ...formData,
      }
      setReviews([...reviews, newReview])
      setShowAddForm(false)
    }

    setFormData({ name: "", role: "", rating: 5, date: "", content: "" })
  }

  const handleEdit = (review: Review) => {
    setFormData({
      name: review.name,
      role: review.role,
      rating: review.rating,
      date: review.date,
      content: review.content,
    })
    setEditingId(review.id)
    setShowAddForm(true)
  }

  const handleDelete = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id))
  }

  const handleCancel = () => {
    setFormData({ name: "", role: "", rating: 5, date: "", content: "" })
    setEditingId(null)
    setShowAddForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Client Reviews</h3>
        <Button onClick={() => setShowAddForm(true)} disabled={showAddForm}>
          <Plus className="w-4 h-4 mr-2" />
          Add Review
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit Review" : "Add New Review"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Client Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Sarah Johnson"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role & Company</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., Product Manager at Meta"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rating">Rating</Label>
                  <Select
                    value={formData.rating.toString()}
                    onValueChange={(value) => setFormData({ ...formData, rating: Number.parseInt(value) })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <SelectItem key={rating} value={rating.toString()}>
                          <div className="flex items-center">
                            {[...Array(rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                            <span className="ml-2">
                              {rating} star{rating !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="e.g., 2 weeks ago"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="content">Review Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write the review content..."
                  rows={4}
                  required
                />
              </div>
              <div className="flex space-x-2">
                <Button type="submit">{editingId ? "Update" : "Add"} Review</Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{review.content}</p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(review)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(review.id)}>
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
