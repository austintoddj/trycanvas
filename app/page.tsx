import { Cta } from '@/components/cta'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Install } from '@/components/install'
import { ProductShowcase } from '@/components/product-showcase'
import { Quote } from '@/components/quote'
import { SocialProof } from '@/components/social-proof'
import { getSiteStats } from '@/lib/stats'

export default async function Home() {
  const stats = await getSiteStats()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <Install />
        <SocialProof stats={stats} />
        <Quote />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
