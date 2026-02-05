import teams from "@/data/teams.json"
import players from "@/data/players.json"
import TeamCard from "@/components/TeamCard"
import PlayerCard from "@/components/PlayerCard"

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="card-eyebrow">NBA Intelligence</p>
          <h1 className="hero-title">NBA Teams & Player Profiles</h1>
          <p className="hero-subtitle">Franchises and key players.</p>
        </div>
        <div className="hero-metrics">
          <div className="metric">
            <span>Teams</span>
            <strong>{teams.length}</strong>
          </div>
          <div className="metric">
            <span>Players</span>
            <strong>{players.length}</strong>
          </div>
          <div className="metric">
            <span>Coverage</span>
            <strong>2026 Season</strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">NBA Teams</h2>
          <p className="section-copy">Teams and their home cities.</p>
        </div>
        <div className="grid">
          {teams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">NBA Players</h2>
          <p className="section-copy">Position and team.</p>
        </div>
        <div className="grid">
          {players.map(player => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>
    </main>
  )
}
