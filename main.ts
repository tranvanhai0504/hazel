scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.vy = -160
    info.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -220
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vx = -150
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = sprites.createProjectileFromSprite(img`
        . . . . . 5 5 
        . . . . . 5 5 
        . . . . 5 5 1 
        . . 1 5 5 5 . 
        . . 5 5 5 1 . 
        5 5 5 5 . . . 
        5 5 . . . . . 
        `, mySprite, vDarts, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.destroy(effects.fire, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim3`,
    200,
    true
    )
    vDarts = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.destroy(effects.fire, 500)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Main character`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    vDarts = 150
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`Main character1`)
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    vDarts = -150
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim2`,
    200,
    true
    )
    vDarts = 150
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`Main character4`)
})
info.onLifeZero(function () {
	
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
let vDarts = 0
let myDart: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`myImage1`)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`Main character`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(10, 160)
mySprite.ay = 650
story.spriteSayText(mySprite, "terrible smell!:(", 15, 1, story.TextSpeed.Fast)
myDart = sprites.create(img`
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    ....................................
    `, SpriteKind.Projectile)
info.setLife(1000)
game.onUpdate(function () {
    if (mySprite.vy < 0) {
        mySprite.setImage(assets.image`Main character2`)
    } else if (mySprite.vy > 0) {
        mySprite.setImage(assets.image`Main character3`)
    } else if (mySprite.vx == 0) {
        mySprite.setImage(assets.image`Main character`)
    }
    if (vDarts == -150) {
        if (mySprite.vy < 0) {
            mySprite.setImage(assets.image`Main character5`)
        } else if (mySprite.vy > 0) {
            mySprite.setImage(assets.image`Main character6`)
        } else if (mySprite.vx == 0) {
            mySprite.setImage(assets.image`Main character1`)
        }
    }
})
game.onUpdate(function () {
    animation.runImageAnimation(
    myDart,
    [img`
        . . . . 5 5 1 
        . . . . . 5 1 
        . . . . 5 5 . 
        . . . 5 5 5 . 
        . . 5 5 1 . . 
        . 1 5 5 1 . . 
        5 5 5 . . . . 
        `,img`
        . . . 5 . . . 
        . . . 5 5 . . 
        . . . 1 5 . . 
        . . . . 5 . . 
        . . 1 5 5 . . 
        . . 5 5 1 . . 
        . . 5 . . . . 
        `,img`
        5 5 5 1 . . . 
        . 1 5 5 5 . . 
        . . . 1 5 1 . 
        . . . . 5 5 1 
        . . . . . 5 5 
        . . . . . . 5 
        . . . . . . 5 
        `,img`
        . 1 . . . . . 
        1 5 5 5 5 5 . 
        5 5 . . 1 5 5 
        5 . . . . . 5 
        . . . . . . . 
        . . . . . . . 
        . . . . . . . 
        `],
    60,
    true
    )
})
