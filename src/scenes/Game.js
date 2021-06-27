import HudService from '../services/Hud'
import InputService from '../services/input'
import LevelService from '../services/level'
import Background from '../sprites/Background'

export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' })
  }

  create() {
    this.behavior = this.plugins.get('BehaviorPlugin')
    this.background = new Background(this)
    this.level = new LevelService(this, 'map')
    this.inputService = new InputService(this)
    this.hud = new HudService(this)
  }

  update(time, delta) {
    this.behavior.preUpdate()
    this.behavior.update()
    this.level.update(time, delta)
  }
}
