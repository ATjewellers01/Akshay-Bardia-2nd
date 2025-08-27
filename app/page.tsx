import { ProfileHeader } from "@/components/profile-header"
import { IntroductionSection } from "@/components/introduction-section"
import { ATPlusSection } from "@/components/at-plus-section"
import { RecognitionLeadershipSection } from "@/components/recognition-leadership-section"
import { PersonalCommitmentsSection } from "@/components/personal-commitments-section"
import { VisionSection } from "@/components/vision-section"
import { GratitudeSection } from "@/components/gratitude-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ProfileHeader />
      <IntroductionSection />
      <ATPlusSection />
      <RecognitionLeadershipSection />
      <VisionSection />
      <PersonalCommitmentsSection />
      <GratitudeSection />
      <Footer />
    </main>
  )
}
