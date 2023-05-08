import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"



export class PlayersController {
  constructor() {
    console.log('is the controller working?')
  }
}

function drawPlayers() {

  let template = ''

  appState.players.forEach(p => {
    template += `
    <div>
      ${Player.name}
    </div>`
  })

  // @ts-ignore
  document.getElementById('app').innerHTML = template
  console.log('drawing players')
}

function doSomething() {
  console.log('button works')
}
