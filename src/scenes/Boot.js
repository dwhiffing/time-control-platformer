export default class extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' })
  }

  preload() {
    const progress = this.add.graphics()
    const { width, height } = this.sys.game.config

    this.load.on('progress', (value) => {
      progress.clear()
      progress.fillStyle(0xffffff, 1)
      progress.fillRect(0, 0, width * value, height)
    })

    this.load.tilemapTiledJSON('map', 'assets/maps/map2.json')

    this.load.audio('upgrade', 'assets/audio/upgrade.mp3', { instances: 3 })
    this.load.audio('music', 'assets/audio/music.mp3')
    this.load.audio('pickup', 'assets/audio/pickup.mp3', { instances: 3 })
    this.load.audio('enemyDead', 'assets/audio/enemyDead.mp3', { instances: 3 })
    this.load.audio('hit2', 'assets/audio/hit2.mp3', { instances: 3 })
    this.load.audio('hit', 'assets/audio/hit1.mp3', { instances: 3 })
    this.load.audio('shoot', 'assets/audio/shoot.mp3', { instances: 3 })
    this.load.audio('jump', 'assets/audio/jump.mp3', { instances: 1 })

    this.load.image('background', 'assets/images/background.png')
    this.load.image('title', 'assets/images/title.png')
    this.load.spritesheet('tilemap', 'assets/images/tilemap.png', {
      frameWidth: 16,
      frameHeight: 16,
    })

    this.load.bitmapFont(
      'pixel-dan',
      'assets/pixel-dan.png',
      'assets/pixel-dan.xml',
    )

    this.load.on('complete', () => {
      progress.destroy()
      this.scene.start('Game')
      // this.scene.start('Menu')
      // this.sound.play('music', { loop: true, volume: 0.5 })
    })
  }
}
