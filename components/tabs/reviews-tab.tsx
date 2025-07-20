"use client"

import { Star } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at Meta",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2 weeks ago",
    content:
      "Jane is an exceptional developer with great attention to detail. Her mentoring helped me understand complex React patterns.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer at Netflix",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "1 month ago",
    content:
      "Outstanding technical knowledge and excellent communication skills. Highly recommend Jane for any full-stack project.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Frontend Developer at Spotify",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2 months ago",
    content: "Great mentor! Jane helped me transition from junior to mid-level developer. Her guidance was invaluable.",
  },
]

export function ReviewsTab() {
  const { t } = useLanguage()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{t("clientReviews")}</h3>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex items-start space-x-3">
              <Image
                src={review.avatar || "/placeholder.svg"}
                alt={review.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-medium text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.role}</div>
                  </div>
                  <div className="text-sm text-gray-500">{review.date}</div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
