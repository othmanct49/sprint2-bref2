import { get_history, save_history, get_array } from './storage.js'

export const add_partie = (match, resultat, player_id) => {
  const partie = {
    id: `g_${Date.now()}`,
    playerId: player_id,
    // kansjlo date kamla (b l9adr dyal sa3a) bach n affichiwha b sa3a dyal lmghrib
    date: new Date().toISOString(),
    playerScore: match.player_score,
    computerScore: match.pc_score,
    result: resultat
  }
  const history = get_history()
  save_history([...history, partie])
}

export const delete_partie = (id) => {
  const history = get_history()
  save_history(history.filter(partie => partie.id !== id))
}

export const filtrer_history = (recherche, resultat, periode) => {
  const profiles = get_array()
  const maintenant = new Date()
  // nhar lyoum b sa3a locale (machi UTC)
  const aujourdhui = maintenant.toDateString()

  return get_history()
    .filter(partie => {
      const player = profiles.find(p => p.id === partie.playerId)
      const nom = player ? player.nickname : 'Joueur supprimé'
      return nom.toLowerCase().includes(recherche.toLowerCase())
    })
    .filter(partie => resultat === 'toutes' || partie.result === resultat)
    .filter(partie => {
      if (periode === 'aujourdhui') {
        return new Date(partie.date).toDateString() === aujourdhui
      }
      if (periode === '7jours') {
        return maintenant - new Date(partie.date) <= 7 * 24 * 60 * 60 * 1000
      }
      return true
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}