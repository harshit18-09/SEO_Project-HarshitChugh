import players from "@/data/players.json"
import { buildMeta } from "@/lib/seo"
import { playerSchema } from "@/lib/schema"
import type { Player } from "@/lib/types"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return (players as Player[]).map(player => ({ slug: player.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const player = (players as Player[]).find(p => p.id === slug)

  if (!player) {
    return buildMeta("Player Not Found", "NBA player profile not available.")
  }

  return buildMeta(
    `${player.name} NBA Profile`,
    `Career overview and role of ${player.name}`
  )
}

export default async function PlayerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const player = (players as Player[]).find(p => p.id === slug)

  if (!player) {
    notFound()
  }

  return (
    <main className="detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(playerSchema(player))
        }}
      />
      <header className="detail-header">
        <p className="card-eyebrow">Player</p>
        <h1 className="detail-title">{player.name}</h1>
        <p className="detail-subtitle">{player.team}</p>
      </header>
      <section className="detail-grid">
        <div className="detail-card">
          <p className="detail-label">Position</p>
          <p className="detail-value">{player.position}</p>
        </div>
      </section>
      <div className="detail-links">
        <a className="detail-link" href={`/players/${player.id}/stats`}>View stats →</a>
        <a className="detail-link" href="/">Back to home →</a>
      </div>
    </main>
  )
}
