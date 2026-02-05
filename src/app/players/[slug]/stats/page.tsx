import players from "@/data/players.json"
import { buildMeta } from "@/lib/seo"
import type { Player } from "@/lib/types"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return (players as Player[]).map(player => ({ slug: player.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const player = (players as Player[]).find(p => p.id === slug)

  if (!player) {
    return buildMeta("Player Not Found", "NBA player stats not available.")
  }

  return buildMeta(
    `${player.name} NBA Stats`,
    `Points, assists, and rebounds of ${player.name}`
  )
}

export default async function PlayerStatsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const player = (players as Player[]).find(p => p.id === slug)

  if (!player) {
    notFound()
  }

  return (
    <main className="detail">
      <header className="detail-header">
        <p className="card-eyebrow">Stats</p>
        <h1 className="detail-title">{player.name}</h1>
        <p className="detail-subtitle">Per game averages</p>
      </header>
      <section className="detail-grid">
        <div className="detail-card">
          <p className="detail-label">Points</p>
          <p className="detail-value">{player.ppg}</p>
        </div>
        <div className="detail-card">
          <p className="detail-label">Assists</p>
          <p className="detail-value">{player.apg}</p>
        </div>
        <div className="detail-card">
          <p className="detail-label">Rebounds</p>
          <p className="detail-value">{player.rpg}</p>
        </div>
      </section>
      <div className="detail-links">
        <a className="detail-link" href={`/players/${player.id}`}>Back to player →</a>
        <a className="detail-link" href="/">Back to home →</a>
      </div>
    </main>
  )
}
