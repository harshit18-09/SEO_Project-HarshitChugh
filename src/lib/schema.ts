import type { Player, Team } from "@/lib/types"

export function teamSchema(team: Team) {
  return {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "name": team.name,
    "sport": "Basketball",
    "memberOf": "NBA"
  }
}

export function playerSchema(player: Player) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": player.name,
    "jobTitle": "Basketball Player"
  }
}
