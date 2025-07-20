"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExperienceManager } from "@/components/admin/experience-manager"
import { SkillsManager } from "@/components/admin/skills-manager"
// import { ReviewsManager } from "@/components/admin/reviews-manager" // Comment this out
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ProjectsManager } from "@/components/admin/projects-manager"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Portfolio Admin</h1>
          </div>
        </div>

        <Tabs defaultValue="experience" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            {/* <TabsTrigger value="reviews">Reviews</TabsTrigger> */} {/* Comment this out */}          </TabsList>

          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Manage Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <ExperienceManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Manage Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <SkillsManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Manage Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <ProjectsManager />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Comment out this entire TabsContent block
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Manage Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <ReviewsManager />
              </CardContent>
            </Card>
          </TabsContent>
          */}
        </Tabs>
      </div>
    </div>
  )
}