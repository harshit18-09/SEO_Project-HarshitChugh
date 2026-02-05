import Link from "next/link"
import type { Player } from "@/lib/types"

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div className="card">
      <div>
        <p className="card-eyebrow">Player</p>
        <h3 className="card-title">{player.name}</h3>
        <p className="card-meta">{player.position} · {player.team}</p>
      </div>
      <Link className="card-link" href={`/players/${player.id}`}>
        View Player →
      </Link>
    </div>
  )
}

