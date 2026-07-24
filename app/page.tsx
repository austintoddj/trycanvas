import { Cta } from '@/components/cta'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Install } from '@/components/install'
import { ProductShowcase } from '@/components/product-showcase'
import { SocialProof } from '@/components/social-proof'
import { getLatestRelease, getSiteStats } from '@/lib/stats'

export default async function Home() {
  const [stats, release] = await Promise.all([
    getSiteStats(),
    getLatestRelease()
  ])

  return (
    <>
      <Header stars={stats.stars} />
      <main>
        <Hero latestVersion={release?.tag} latestReleaseUrl={release?.url} />
        <ProductShowcase />
        <Features />
        <Install />
        <SocialProof stats={stats} />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
