import Link from "next/link"
import type { Team } from "@/lib/types"

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="card">
      <div>
        <p className="card-eyebrow">Team</p>
        <h3 className="card-title">{team.name}</h3>
        <p className="card-meta">{team.city}</p>
      </div>
      <Link className="card-link" href={`/teams/${team.id}`}>
        View Team →
      </Link>
    </div>
  )
}
