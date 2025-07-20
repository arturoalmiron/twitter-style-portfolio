import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function ProfileHeader() {
  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="h-48 bg-gradient-to-r from-orange-400 to-red-500 relative overflow-hidden">
        <Image src="/images/beach.jpg" alt="Cover" fill className="object-cover" />
      </div>

      {/* Profile Picture */}
      <div className="absolute -bottom-16 left-4">
        <div className="relative">
          <Image
            src="/images/profile_picture.jpg?height=120&width=120"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full border-4 border-white bg-white"
          />
          <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Follow Button */}
      <div className="absolute top-4 right-4">
        <Button variant="outline" className="bg-white/90 backdrop-blur-sm">
          Following
        </Button>
      </div>
    </div>
  )
}
