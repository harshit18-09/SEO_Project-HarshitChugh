import teams from "@/data/teams.json"
import { buildMeta } from "@/lib/seo"
import { teamSchema } from "@/lib/schema"
import type { Team } from "@/lib/types"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return (teams as Team[]).map(team => ({ slug: team.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const team = (teams as Team[]).find(t => t.id === slug)

  if (!team) {
    return buildMeta("Team Not Found", "NBA team profile not available.")
  }

  return buildMeta(
    `${team.name} NBA Team Profile`,
    `Detailed NBA profile of the ${team.name}`
  )
}

export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const team = (teams as Team[]).find(t => t.id === slug)

  if (!team) {
    notFound()
  }

  return (
    <main className="detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamSchema(team))
        }}
      />
      <header className="detail-header">
        <p className="card-eyebrow">Team</p>
        <h1 className="detail-title">{team.name}</h1>
        <p className="detail-subtitle">{team.city}</p>
      </header>
      <section className="detail-grid">
        <div className="detail-card">
          <p className="detail-label">Conference</p>
          <p className="detail-value">{team.conference}</p>
        </div>
        <div className="detail-card">
          <p className="detail-label">Championships</p>
          <p className="detail-value">{team.titles}</p>
        </div>
      </section>
      <div className="detail-links">
        <a className="detail-link" href="/">Back to home →</a>
      </div>
    </main>
  )
}
