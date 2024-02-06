namespace SpriteKind {
    export const Quest = SpriteKind.create()
    export const Quest2 = SpriteKind.create()
    export const Boss1 = SpriteKind.create()
    export const Quest3 = SpriteKind.create()
    export const Chest = SpriteKind.create()
    export const Quest4 = SpriteKind.create()
    export const Boss2 = SpriteKind.create()
    export const Boss3 = SpriteKind.create()
    export const Torch = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.beamUp.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss2, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    info.changeScoreBy(20)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.showLongText("Level 6: The Lava Temple. Beware of the lava!", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorDark1)
    mySprite17 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Chest)
    tiles.placeOnRandomTile(mySprite17, sprites.dungeon.chestClosed)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quest, function (sprite, otherSprite) {
    game.showLongText("You made it this far! Here is your reward! Now keep going!", DialogLayout.Bottom)
    game.showLongText("Level 2: The Dark Forest. Beware of goblins and scorpions!", DialogLayout.Bottom)
    info.changeLifeBy(1)
    info.changeScoreBy(100)
    mySprite3.destroy()
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 . 5 . 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 7 7 7 7 7 . . . . . . . 
        . . . 7 7 8 7 8 7 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 e 7 7 . . . 
        . . . 7 7 3 3 3 7 7 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 e 7 . . . 
        . . . . 7 7 e 7 7 7 e 7 7 . . . 
        . . . . . 7 7 7 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Quest2)
    tiles.placeOnRandomTile(mySprite6, sprites.dungeon.collectibleInsignia)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 . . 7 7 . . . . 
        . . . . . . . 7 7 7 7 . . . . . 
        2 7 7 . . . a 7 7 2 7 2 . . . . 
        . . 7 7 7 7 a a 7 7 7 7 . . . . 
        2 7 7 . a a a a a f f 7 . 2 . . 
        . . . . a a a a 5 a 7 . . 7 . . 
        . . . . . a a a a a . 7 . 7 7 2 
        . . . . . . c c 5 c . 7 7 7 . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e . . e e . . . . . 
        . . . . . e . . . . e . . . . . 
        . . . . f e . . . . e . . . . . 
        . . . . f . . . . . f f f . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite4, sprites.dungeon.darkGroundNorthWest1)
    mySprite4.follow(mySprite, 50)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        . . . . . f f 2 2 . . . . . . . 
        . . . f f f . . . . . . . . . . 
        . . f f . . . . . . . . . . . . 
        . . f . . . . . . . . . . . . . 
        . f f . . . . . f f f f f . . . 
        . f . . . . f f f f 2 f 2 . . . 
        . f f f f f f f f f f f f . f f 
        . . f f f f f f f f f f f f . . 
        . . . . . f . . f . . f . f f f 
        . . . . . f . . f . . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite5, sprites.dungeon.darkGroundNorthEast1)
    mySprite5.follow(mySprite, 75)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 . . 7 7 . . . . 
        . . . . . . . 7 7 7 7 . . . . . 
        2 7 7 . . . a 7 7 2 7 2 . . . . 
        . . 7 7 7 7 a a 7 7 7 7 . . . . 
        2 7 7 . a a a a a f f 7 . 2 . . 
        . . . . a a a a 5 a 7 . . 7 . . 
        . . . . . a a a a a . 7 . 7 7 2 
        . . . . . . c c 5 c . 7 7 7 . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e . . e e . . . . . 
        . . . . . e . . . . e . . . . . 
        . . . . f e . . . . e . . . . . 
        . . . . f . . . . . f f f . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite4, sprites.castle.tileDarkGrass2)
    mySprite4.follow(mySprite, 50)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 . . 7 7 . . . . 
        . . . . . . . 7 7 7 7 . . . . . 
        2 7 7 . . . a 7 7 2 7 2 . . . . 
        . . 7 7 7 7 a a 7 7 7 7 . . . . 
        2 7 7 . a a a a a f f 7 . 2 . . 
        . . . . a a a a 5 a 7 . . 7 . . 
        . . . . . a a a a a . 7 . 7 7 2 
        . . . . . . c c 5 c . 7 7 7 . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e . . e e . . . . . 
        . . . . . e . . . . e . . . . . 
        . . . . f e . . . . e . . . . . 
        . . . . f . . . . . f f f . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite4.follow(mySprite, 50)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 . . 7 7 . . . . 
        . . . . . . . 7 7 7 7 . . . . . 
        2 7 7 . . . a 7 7 2 7 2 . . . . 
        . . 7 7 7 7 a a 7 7 7 7 . . . . 
        2 7 7 . a a a a a f f 7 . 2 . . 
        . . . . a a a a 5 a 7 . . 7 . . 
        . . . . . a a a a a . 7 . 7 7 2 
        . . . . . . c c 5 c . 7 7 7 . . 
        . . . . . . e e e e . . . . . . 
        . . . . . e e . . e e . . . . . 
        . . . . . e . . . . e . . . . . 
        . . . . f e . . . . e . . . . . 
        . . . . f . . . . . f f f . . . 
        . . . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite4, sprites.castle.tileDarkGrass2)
    mySprite4.follow(mySprite, 50)
    tiles.placeOnRandomTile(mySprite4, sprites.castle.tileDarkGrass2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.smallCrash.play()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 2 2 . . . . . . 
        . . . . . . 4 2 5 4 2 . . . . . 
        . . . 2 2 2 2 5 4 5 2 . . . . . 
        . . . . . . . 4 2 2 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss3, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss1, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    info.changeScoreBy(20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    info.changeLifeBy(5)
    game.showLongText("You found a magic healing PO!", DialogLayout.Bottom)
    mySprite10.destroy()
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    statusbar.spriteAttachedTo().destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quest3, function (sprite, otherSprite) {
    game.showLongText("The Amulet of Spamulet is found! Now I must take it to my Master!", DialogLayout.Center)
    mySprite8.destroy()
    info.changeLifeBy(5)
    tiles.setCurrentTilemap(tilemap`level7`)
    game.showLongText("Level 3: The Town of Phartingbutte. Beware of thieves!", DialogLayout.Bottom)
    mySprite11 = sprites.create(img`
        . . . . . . 5 5 5 . . . 6 . . . 
        . . . . . 5 5 5 5 5 . 9 6 9 . . 
        . . . . . 5 5 d c d . 9 6 9 . . 
        . . . . . 5 5 d d . . . e . . . 
        . . . . . . 8 8 8 8 . . e . . . 
        . . 1 1 8 8 e e e e 8 . e . . . 
        . . 1 1 8 8 b e e b 8 8 e . . . 
        . . 8 8 1 1 e b b e 8 8 8 d . . 
        . . 8 8 1 1 e e e e . 8 d d . . 
        . . . 8 1 8 f f 5 f . . e . . . 
        . . . . . . 4 2 4 2 . . e . . . 
        . . . . . . 4 2 4 2 . . e . . . 
        . . . . . . 4 2 4 2 . . e . . . 
        . . . . . . 4 2 4 2 . . e . . . 
        . . . . . f f . . f f . e . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Quest4)
    tiles.placeOnRandomTile(mySprite11, sprites.dungeon.stairSouth)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    mySprite9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . 6 9 . . 
        . . . . . . 5 5 2 . . . 6 9 . . 
        . . . . . 5 f f f f f . 6 9 . . 
        . . . . f f f 8 3 . . . 6 9 . . 
        . . . . . . 3 3 f . . 5 5 5 5 . 
        . . . . . c c f f . . f 3 3 . . 
        . . . . . c c c f f f f 3 3 . . 
        . . . . c c c f f f f f . . . . 
        . . . c c c f f f . . . . . . . 
        . c c c c c f f f . . . . . . . 
        c c c c c b b 5 b . . . . . . . 
        c c c c e e e e e . . . . . . . 
        . c . e e e . e e . . . . . . . 
        . . . e e . . e e . . . . . . . 
        . . . f f f . . f f f . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite9, sprites.dungeon.floorLight1)
    mySprite9.follow(mySprite, 50)
    mySprite9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . 6 9 . . 
        . . . . . . 5 5 2 . . . 6 9 . . 
        . . . . . 5 f f f f f . 6 9 . . 
        . . . . f f f 8 3 . . . 6 9 . . 
        . . . . . . 3 3 f . . 5 5 5 5 . 
        . . . . . c c f f . . f 3 3 . . 
        . . . . . c c c f f f f 3 3 . . 
        . . . . c c c f f f f f . . . . 
        . . . c c c f f f . . . . . . . 
        . c c c c c f f f . . . . . . . 
        c c c c c b b 5 b . . . . . . . 
        c c c c e e e e e . . . . . . . 
        . c . e e e . e e . . . . . . . 
        . . . e e . . e e . . . . . . . 
        . . . f f f . . f f f . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite9, sprites.dungeon.floorLight1)
    mySprite9.follow(mySprite, 50)
    mySprite9 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . 6 9 . . 
        . . . . . . 5 5 2 . . . 6 9 . . 
        . . . . . 5 f f f f f . 6 9 . . 
        . . . . f f f 8 3 . . . 6 9 . . 
        . . . . . . 3 3 f . . 5 5 5 5 . 
        . . . . . c c f f . . f 3 3 . . 
        . . . . . c c c f f f f 3 3 . . 
        . . . . c c c f f f f f . . . . 
        . . . c c c f f f . . . . . . . 
        . c c c c c f f f . . . . . . . 
        c c c c c b b 5 b . . . . . . . 
        c c c c e e e e e . . . . . . . 
        . c . e e e . e e . . . . . . . 
        . . . e e . . e e . . . . . . . 
        . . . f f f . . f f f . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite9, sprites.dungeon.floorLight1)
    mySprite9.follow(mySprite, 50)
    mySprite10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Chest)
    tiles.placeOnRandomTile(mySprite10, sprites.dungeon.chestClosed)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss3, function (sprite, otherSprite) {
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
    info.changeScoreBy(20)
})
sprites.onDestroyed(SpriteKind.Boss2, function (sprite) {
    game.showLongText("Curse you Adventureman! Time for me to leave. Follow me, and it will mean your doom!", DialogLayout.Top)
    game.showLongText("Level 5: The Dark Dungeon. Beware of bulls!", DialogLayout.Top)
    tiles.setCurrentTilemap(tilemap`level10`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
    mySprite10 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Chest)
    tiles.placeOnRandomTile(mySprite10, sprites.dungeon.chestClosed)
    mySprite14 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 2 . 
        . f . . . . . . f . . . . 2 2 . 
        . f f 2 2 2 2 f f . . . . 4 . . 
        . . . 7 2 7 2 . . . . . 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 4 2 . . . 
        . . . 5 5 2 2 2 4 2 2 2 2 . . . 
        . . . 2 2 2 4 2 2 2 2 2 4 . . . 
        . . 2 2 4 2 2 2 2 2 4 2 2 . . . 
        . 4 2 . . 2 2 . e e 2 2 2 . . . 
        2 2 . . 2 2 . . e e . 2 4 . . . 
        2 . . . 4 . . . . e e . 2 . . . 
        2 . . . 2 . . . . . f . 4 2 f . 
        f . . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite14, sprites.dungeon.darkGroundNorthWest1)
    mySprite14.follow(mySprite, 75)
    mySprite14 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 2 . 
        . f . . . . . . f . . . . 2 2 . 
        . f f 2 2 2 2 f f . . . . 4 . . 
        . . . 7 2 7 2 . . . . . 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 4 2 . . . 
        . . . 5 5 2 2 2 4 2 2 2 2 . . . 
        . . . 2 2 2 4 2 2 2 2 2 4 . . . 
        . . 2 2 4 2 2 2 2 2 4 2 2 . . . 
        . 4 2 . . 2 2 . e e 2 2 2 . . . 
        2 2 . . 2 2 . . e e . 2 4 . . . 
        2 . . . 4 . . . . e e . 2 . . . 
        2 . . . 2 . . . . . f . 4 2 f . 
        f . . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite14, sprites.dungeon.darkGroundSouthEast1)
    mySprite14.follow(mySprite, 75)
    mySprite14 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 2 . 
        . f . . . . . . f . . . . 2 2 . 
        . f f 2 2 2 2 f f . . . . 4 . . 
        . . . 7 2 7 2 . . . . . 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 4 2 . . . 
        . . . 5 5 2 2 2 4 2 2 2 2 . . . 
        . . . 2 2 2 4 2 2 2 2 2 4 . . . 
        . . 2 2 4 2 2 2 2 2 4 2 2 . . . 
        . 4 2 . . 2 2 . e e 2 2 2 . . . 
        2 2 . . 2 2 . . e e . 2 4 . . . 
        2 . . . 4 . . . . e e . 2 . . . 
        2 . . . 2 . . . . . f . 4 2 f . 
        f . . . f . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite14, sprites.dungeon.darkGroundSouthWest1)
    mySprite14.follow(mySprite, 75)
    mySprite15 = sprites.create(img`
        ................................
        ..f.............................
        ..f..........................f..
        ..f..........................f..
        ..fffff22222...............fff..
        ...ffff222222.....222222ffffff..
        .......22222222222222222fffff...
        ........2222222222222222........
        ..........2222222222222.........
        .........222222222222...........
        ........2277722277722...........
        ........22777222777222..........
        ........22777222777222..fffff...
        ..ffffff22222222222222fffffff...
        ..ffffff22222222222222ffffffff..
        .fffffff25552255522222ffffffff..
        .ffff...2555225552222......fff..
        .ffff...2555225552222......fff..
        .fff....f222222222222......fff..
        ..ff...fff2222222222fff.....ff..
        ..ff..ffff222222222ffff.....f...
        ...f..ffff..........fff.........
        ......fff............ff.........
        ......ff.............ff.........
        ......ff.............ff.........
        .......f.............f..........
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, SpriteKind.Boss3)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(mySprite15)
    tiles.placeOnRandomTile(mySprite15, sprites.dungeon.darkGroundNorthEast1)
    mySprite15.follow(mySprite, 50)
    mySprite16 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mySprite16, tiles.getTileLocation(6, 9))
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quest4, function (sprite, otherSprite) {
    game.showLongText("Your Master is inside, go on in!", DialogLayout.Bottom)
    game.showLongText("Level 4: The Basement. Defeat the boss!", DialogLayout.Bottom)
    mySprite11.destroy()
    info.changeLifeBy(5)
    tiles.setCurrentTilemap(tilemap`level9`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairSouth)
    mySprite12 = sprites.create(img`
        . . . . . . c c c c . . . . . . 
        . . . . . c c c c c c c c . . . 
        . . . . . d c c c c c . . . . . 
        . . . . d 4 d c c c . . . . . . 
        . . . . . d d c c c . . . . . . 
        . . . . . f f c c c . . . . . . 
        . . . . f f c c c c c . . . . . 
        d d c c c c c b c c c c . . . . 
        . d c c c c b c c b c c . . . . 
        . . c c c b c c c c b c . . . . 
        . . . . . c c c c c b c . . . . 
        . . . . . c c c b c b c . . . . 
        . . . . . c c c b c b c . . . . 
        . . . . . c c b c c c b c . . . 
        . . . . . c c b c c c c b . . . 
        . . . . . . f f . f f . . . . . 
        `, SpriteKind.Boss2)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(mySprite12)
    tiles.placeOnRandomTile(mySprite12, sprites.dungeon.floorLight0)
    game.showLongText("Why there you are Adventureman, have you brought me the Amulet of Spamulet? Excellent, hand it to me.", DialogLayout.Bottom)
    game.showLongText("FOOL! Now I will be all-powerful and noone can stop me! Time for you to die!", DialogLayout.Center)
    mySprite13 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . 3 7 7 3 7 . . 3 . . . 
        . . . . . 7 3 7 7 3 7 3 7 7 3 7 
        . . . . . 3 7 3 7 . 3 . . 3 . . 
        . . . . . . 3 7 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite13.follow(mySprite, 50)
    tiles.placeOnRandomTile(mySprite13, sprites.dungeon.floorLight0)
    mySprite13 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . 3 7 7 3 7 . . 3 . . . 
        . . . . . 7 3 7 7 3 7 3 7 7 3 7 
        . . . . . 3 7 3 7 . 3 . . 3 . . 
        . . . . . . 3 7 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite13.follow(mySprite, 50)
    tiles.placeOnRandomTile(mySprite13, sprites.dungeon.floorLight0)
    mySprite13 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 . . . . . . . . 
        . . . . . 3 7 7 3 7 . . 3 . . . 
        . . . . . 7 3 7 7 3 7 3 7 7 3 7 
        . . . . . 3 7 3 7 . 3 . . 3 . . 
        . . . . . . 3 7 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite13.follow(mySprite, 50)
    tiles.placeOnRandomTile(mySprite13, sprites.dungeon.floorLight0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss1, function (sprite, otherSprite) {
    music.spooky.play()
    info.changeLifeBy(-2)
})
sprites.onDestroyed(SpriteKind.Boss1, function (sprite) {
    mySprite8 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . . 5 f f f f f f f 5 . . . . . 
        . . 5 f 1 f f 2 2 2 5 . . . . . 
        . . 5 f f f 2 2 2 2 5 5 5 e e . 
        . . 5 f 2 2 2 2 2 3 5 e 5 . e e 
        . . 5 2 2 2 2 2 2 3 5 e 5 . . . 
        . . 5 2 2 2 2 2 3 3 5 e e . . . 
        . . 5 3 3 3 3 3 3 3 5 . e e . . 
        . . . 5 5 5 5 5 5 5 . . . e . . 
        . . . . . . . . . . . . . e . . 
        . . . . . . . . . . . . e e . . 
        . . . . . . . . . . e e e . . . 
        . . . . . . . . . e e . . . . . 
        . . . . . . . . . e . . . . . . 
        `, SpriteKind.Quest3)
    tiles.placeOnRandomTile(mySprite8, sprites.dungeon.floorLight0)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss2, function (sprite, otherSprite) {
    music.powerDown.play()
    info.changeLifeBy(-2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    info.changeScoreBy(20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Quest2, function (sprite, otherSprite) {
    game.showLongText("*ribbit* Hello, I am the Frog King. Beware Adventureman, there is a BOSS ahead!", DialogLayout.Center)
    mySprite6.destroy()
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
    mySprite7 = sprites.create(img`
        f..............................f
        fff...........................ff
        ffff.........................fff
        .ffff.......................fff.
        ..ffff.....................ffff.
        ....fff...................fffff.
        .....fff...fffffff.......ffff...
        ......fffffffffffffff...ffff....
        f......fffffffffffffff.ffff.....
        fff...fffffffffffffffffffff.....
        ffff..fffffffffffffffffff.......
        ffffffffffffffffffffffff........
        ..fffff22222ffff22222fff........
        ...ffff22222ffff22222fff.......f
        .....ff22222ffff22222fffffffffff
        .....fffffffffffffffffffffffffff
        .....fffffffffffffffffffff......
        .....fffffffffffffffffff........
        .....fffffffffffffffffff........
        ...fffffffffffffffffffff........
        ffffffffffffffffffffffffff......
        ffffffffffffffffffffffffffff....
        fffffffffffffffffffffff.ffffffff
        .......fffffffffffffff.....fffff
        ........ffffffffffffff.......fff
        ........ffffffffffffffff........
        .......fffff........fffff.......
        .....ffffff..........fffff......
        .....fffff............fffff.....
        ...fffff................ffff....
        ...ffff...................fff...
        .fffff.....................fff..
        `, SpriteKind.Boss1)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(mySprite7)
    tiles.placeOnRandomTile(mySprite7, sprites.dungeon.floorLight0)
    mySprite7.follow(mySprite, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.startEffect(effects.spray, 250)
    mySprite.x += -2
})
let mySprite7: Sprite = null
let mySprite13: Sprite = null
let mySprite12: Sprite = null
let mySprite16: Sprite = null
let mySprite15: Sprite = null
let mySprite14: Sprite = null
let mySprite9: Sprite = null
let mySprite11: Sprite = null
let mySprite8: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite6: Sprite = null
let mySprite17: Sprite = null
let mySprite10: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    ....................
    ..............69....
    ..............69....
    ..............69....
    .......5555...69....
    .......5583...69....
    .......53333..69....
    .......5333...69....
    .......222...5555...
    ....881125222233....
    ....881122222233....
    ....1188252...55....
    ....1188222.........
    .....1855a5.........
    .......eeee.........
    .......eeeee........
    .......ee.ee........
    .......ee.ee........
    .......ee.fff.......
    .......fff..........
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath8)
effects.clouds.startScreenEffect()
animation.runImageAnimation(
mySprite,
[img`
    ..............69....
    ..............69....
    .......555....69....
    ......55533...69....
    ......553383..69....
    ......55333...69....
    .......3333..5555...
    .....88112222233....
    .....88112222233....
    .....118822...55....
    .....118822.........
    ......18222.........
    .......eeee.........
    .......eeee.........
    .......ee.ee........
    .......ee.ee........
    .......ee.ee........
    ........ff.ff.......
    ....................
    ....................
    `,img`
    ..............69....
    ..............69....
    .......555....69....
    ......55533...69....
    ......553383..69....
    ......55333...69....
    .......3333..5555...
    .....88112222233....
    .....88112222233....
    .....118822...55....
    .....118822.........
    ......18222.........
    .......eeee....f....
    ......eeeeeeeeef....
    ......ee...eeee.....
    ....eeee............
    ...feee.............
    ...f................
    ....................
    ....................
    `],
250,
true
)
info.setLife(10)
info.setScore(0)
game.showLongText("Greetings Adventureman! You must travel to the Dark Forest to find the Amulet of Spamulet. Good luck!", DialogLayout.Center)
game.showLongText("Level 1: The Light Forest. Beware of skeletons!", DialogLayout.Bottom)
controller.moveSprite(mySprite, 100, 100)
mySprite.setVelocity(0, 0)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(15)
let mySprite2 = sprites.create(img`
    . . . . . . 1 1 1 . . . . . . . 
    . . . 6 . 1 2 1 2 1 . . 1 . . . 
    . . 6 . . 1 1 1 1 1 . . 1 1 . . 
    . . 6 . . . 1 f 1 . . 1 . . . . 
    . . 6 . . . . 1 . . 1 . . . . . 
    . . 6 . . 1 1 1 1 1 . . . . . . 
    . . 6 . 1 . . 1 . . . . . . . . 
    . 5 5 5 . . 1 1 1 . . . . . . . 
    . 5 1 . . . . 1 . . . . . . . . 
    . . 5 . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    `, SpriteKind.Enemy)
mySprite2.follow(mySprite, 20)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.darkGroundNorthWest1)
mySprite2 = sprites.create(img`
    . . . . . . 1 1 1 . . . . . . . 
    . . . 6 . 1 2 1 2 1 . . 1 . . . 
    . . 6 . . 1 1 1 1 1 . . 1 1 . . 
    . . 6 . . . 1 f 1 . . 1 . . . . 
    . . 6 . . . . 1 . . 1 . . . . . 
    . . 6 . . 1 1 1 1 1 . . . . . . 
    . . 6 . 1 . . 1 . . . . . . . . 
    . 5 5 5 . . 1 1 1 . . . . . . . 
    . 5 1 . . . . 1 . . . . . . . . 
    . . 5 . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass1)
mySprite2.follow(mySprite, 20)
mySprite2 = sprites.create(img`
    . . . . . . 1 1 1 . . . . . . . 
    . . . 6 . 1 2 1 2 1 . . 1 . . . 
    . . 6 . . 1 1 1 1 1 . . 1 1 . . 
    . . 6 . . . 1 f 1 . . 1 . . . . 
    . . 6 . . . . 1 . . 1 . . . . . 
    . . 6 . . 1 1 1 1 1 . . . . . . 
    . . 6 . 1 . . 1 . . . . . . . . 
    . 5 5 5 . . 1 1 1 . . . . . . . 
    . 5 1 . . . . 1 . . . . . . . . 
    . . 5 . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    `, SpriteKind.Enemy)
mySprite2.follow(mySprite, 20)
tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass1)
mySprite2 = sprites.create(img`
    . . . . . . 1 1 1 . . . . . . . 
    . . . 6 . 1 2 1 2 1 . . 1 . . . 
    . . 6 . . 1 1 1 1 1 . . 1 1 . . 
    . . 6 . . . 1 f 1 . . 1 . . . . 
    . . 6 . . . . 1 . . 1 . . . . . 
    . . 6 . . 1 1 1 1 1 . . . . . . 
    . . 6 . 1 . . 1 . . . . . . . . 
    . 5 5 5 . . 1 1 1 . . . . . . . 
    . 5 1 . . . . 1 . . . . . . . . 
    . . 5 . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite2, sprites.castle.tileGrass1)
mySprite2.follow(mySprite, 20)
mySprite3 = sprites.create(img`
    . . . . . . . e e e . . . . . . 
    . . . . . . e e 8 3 . . . . . . 
    . . . . . . e e 3 3 3 . 3 3 . . 
    . . . . . . e e 3 3 . . 6 3 . . 
    . . . . . e e 5 2 . . 6 9 . . . 
    . . . . . e e 3 3 3 6 9 9 . . . 
    . . . . . e e 6 3 6 9 9 9 . . . 
    . . . . e e 6 6 6 6 . . . . . . 
    . . . . e 6 6 9 6 9 . . . . . . 
    . . . . e 6 . 9 9 9 . . . . . . 
    . . . . . 6 3 5 9 5 . . . . . . 
    . . . . . 3 3 9 5 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . . 9 9 9 9 . . . . . . 
    . . . . . 9 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    `, SpriteKind.Quest)
tiles.placeOnRandomTile(mySprite3, sprites.castle.tileDarkGrass3)
mySprite10 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Chest)
tiles.placeOnRandomTile(mySprite10, sprites.dungeon.chestClosed)
