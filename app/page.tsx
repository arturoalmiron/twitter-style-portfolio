import { ProfileHeader } from "@/components/profile-header"
import { ProfileStats } from "@/components/profile-stats"
import { ProfileAbout } from "@/components/profile-about"
import { ProfileTabs } from "@/components/profile-tabs"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white min-h-screen">
        <ProfileHeader />
        <div className="px-4 pb-6">
          <ProfileStats />
          <ProfileAbout />
          <ProfileTabs />
        </div>
      </div>
    </div>
  )
}
