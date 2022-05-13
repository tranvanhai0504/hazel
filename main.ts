scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    mySprite.vy = -160
    info.changeLifeBy(-1)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -220
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vDarts == 150) {
        animation.runImageAnimation(
        sworf,
        assets.animation`myAnim1`,
        40,
        false
        )
    } else if (vDarts == -150) {
        animation.runImageAnimation(
        sworf,
        assets.animation`myAnim4`,
        50,
        false
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    info.changeLifeBy(-1)
    mySprite.vx = -150
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = sprites.createProjectileFromSprite(assets.image`myImage0`, mySprite, vDarts, 0)
    animation.runImageAnimation(
    myDart,
    assets.animation`myAnim`,
    40,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    mySprite.destroy(effects.fire, 500)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    isDown = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isDown == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim3`,
        150,
        true
        )
    } else if (isDown == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim5`,
        200,
        true
        )
    }
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
    if (isDown == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim2`,
        150,
        true
        )
    } else if (isDown == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim0`,
        200,
        true
        )
    }
    vDarts = 150
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (vDarts == 150) {
        mySprite.setImage(assets.image`Main character4`)
    } else if (vDarts == -150) {
        mySprite.setImage(assets.image`Main character7`)
    }
    isDown = 1
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    myDart.destroy(effects.disintegrate, 50)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
})
let isDown = 0
let vDarts = 0
let sworf: Sprite = null
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
myDart = sprites.create(assets.image`myImage0`, SpriteKind.Projectile)
sworf = sprites.create(assets.image`myImage0`, SpriteKind.Projectile)
info.setLife(1000)
game.onUpdate(function () {
    if (mySprite.vy < 0 && isDown == 0) {
        mySprite.setImage(assets.image`Main character2`)
    } else if (mySprite.vy > 0 && isDown == 0) {
        mySprite.setImage(assets.image`Main character3`)
    } else if (mySprite.vx == 0 && isDown == 0) {
        mySprite.setImage(assets.image`Main character`)
    }
    if (vDarts == -150) {
        if (mySprite.vy < 0 && isDown == 0) {
            mySprite.setImage(assets.image`Main character5`)
        } else if (mySprite.vy > 0 && isDown == 0) {
            mySprite.setImage(assets.image`Main character6`)
        } else if (mySprite.vx == 0 && isDown == 0) {
            mySprite.setImage(assets.image`Main character1`)
        }
    }
})
game.onUpdate(function () {
    if (vDarts == 150) {
        sworf.left = mySprite.right
        sworf.y = mySprite.y
    } else if (vDarts == -150) {
        sworf.right = mySprite.right
        sworf.y = mySprite.y
    }
})
