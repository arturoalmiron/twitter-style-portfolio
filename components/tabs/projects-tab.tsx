"use client"

import Image from "next/image"
import { MessageCircle, Repeat2, Heart, BarChart3, Bookmark, Share } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const projects = [
  {
    id: 1,
    title: "WIP webapp for property management",
    description:
      "Webapp for property management.",
    timestamp: "2d",
    image: "/projects/propiedades.png?height=400&width=400",
    likes: 24,
    retweets: 8,
    comments: 5,
    views: 156,
  },
  {
    id: 2,
    title: "German Gender Game",
    description:
      "Game where you pick the right gender of the word in German.",
    timestamp: "5d",
    image: "/projects/germangendergame.png?height=400&width=400",
    likes: 42,
    retweets: 15,
    comments: 12,
    views: 289,
  },
  {
    id: 3,
    title: "Example of a web page for an apartment",
    description:
      "Example of a web page for an apartment.",
    timestamp: "1w",
    image: "/projects/porta3.png?height=200&width=400",
    likes: 18,
    retweets: 6,
    comments: 3,
    views: 124,
  },
]

export function ProjectsTab() {
  const { t } = useLanguage()

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">{t("myProjects")}</h3>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex space-x-3">
              {/* Profile Picture */}
              <Image
                src="/placeholderbackground.png?height=40&width=40"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />

              <div className="flex-1">
                {/* Header */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">Arturo Almiron</span>
                  <span className="text-gray-500">@arturo-almiron</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500 text-sm">{project.timestamp}</span>
                </div>

                {/* Content */}
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-1">{project.title}</h4>
                  <p className="text-gray-700">{project.description}</p>
                </div>

                {/* Project Image */}
                {project.image && (
                  <div className="mb-3 rounded-xl overflow-hidden border border-gray-200">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}

                {/* Interaction Buttons */}
                <div className="flex items-center justify-between max-w-md text-gray-500">
                  <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-blue-50">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{project.comments}</span>
                  </button>

                  <button className="flex items-center space-x-2 hover:text-green-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-green-50">
                      <Repeat2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{project.retweets}</span>
                  </button>

                  <button className="flex items-center space-x-2 hover:text-red-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-red-50">
                      <Heart className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{project.likes}</span>
                  </button>

                  <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-blue-50">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{project.views}</span>
                  </button>

                  <button className="hover:text-blue-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-blue-50">
                      <Bookmark className="w-4 h-4" />
                    </div>
                  </button>

                  <button className="hover:text-blue-500 transition-colors group">
                    <div className="p-2 rounded-full group-hover:bg-blue-50">
                      <Share className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
