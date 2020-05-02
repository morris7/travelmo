/**
 * Created by sam morris on 17/12/2015.
 */


var game = new Phaser.Game(800, 600, Phaser.AUTO, 'spaceGerbil', { preload: preload, create: create, update: update });
function preload() {

    game.load.image('star', 'assets/img/assets/star.png');
    game.load.image('gerbil', 'assets/img/assets/gerbilSanta.png');
    game.load.image('lollipop', 'assets/img/assets/small_lollipop.png');

}

var distance = 300;
var speed = 2;
var stars;
var player;
var cursors;
var points = 0;

var max = 200;
var xx = [];
var yy = [];
var zz = [];

function create() {

    if (game.renderType === Phaser.WEBGL)
    {
        max = 2000;
    }

    var sprites = game.add.spriteBatch();

    stars = [];

    for (var i = 0; i < max; i++)
    {
        xx[i] = Math.floor(Math.random() * 800) - 400;
        yy[i] = Math.floor(Math.random() * 600) - 300;
        zz[i] = Math.floor(Math.random() * 1700) - 100;

        var star = game.make.sprite(0, 0, 'star');
        if(i == 0) {
            var lollipop = game.make.sprite(0, 0, 'lollipop');
            lollipop.anchor.set(0.5);
            stars.push(lollipop);
            sprites.addChild(lollipop);
        }else{
            star.anchor.set(0.5);
            stars.push(star);
            sprites.addChild(star);
        }



    }

    // The player and its settings
    player = game.add.sprite(game.world.width/2-150, game.world.height/2-100, 'gerbil');
    player.scale.setTo(0.5, 0.5);
    player.anchor.setTo(0.5, 0.5);

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    cursors = game.input.keyboard.createCursorKeys();

    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#FFF' });

}

function update() {

    game.physics.arcade.overlap(player, stars, collectLollipop, null, this);

    for (var i = 0; i < max; i++)
    {


        stars[i].perspective = distance / (distance - zz[i]);
        stars[i].x = game.world.centerX + xx[i] * stars[i].perspective;
        stars[i].y = game.world.centerY + yy[i] * stars[i].perspective;

        zz[i] += speed;

        if (i == 0 && stars[i].perspective > 27)
        {
            var plus = Math.random() < 0.5 ? 0 : 1;
            if(plus) {
                xx[i] = Math.floor(Math.random() * 200);
                yy[i] = Math.floor(Math.random() * 100);
            } else{
                xx[i] = Math.floor(Math.random() * -200);
                yy[i] = Math.floor(Math.random() * -100);
            }
        }

        if (zz[i] > 290)
        {
            zz[i] -= 600;
        }

        stars[i].alpha = Math.min(stars[i].perspective / 2, 1);
        stars[i].scale.set(stars[i].perspective / 2);
        stars[i].rotation += 0.1;

        if(i == 0){
            player.angle += 1;
        }


    }



    if (cursors.left.isDown)
    {
        //  Move to the left
        if(player.body.velocity.x > -150) {
            player.body.velocity.x -= 20;
        }
        //player.body.velocity.y = 0;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        if(player.body.velocity.x < 150) {
            player.body.velocity.x += 20;
        }
        //player.body.velocity.y = 0;

        player.animations.play('right');
    }
    else if (cursors.up.isDown)
    {
        if(player.body.velocity.y > -150) {
            player.body.velocity.y -= 20;
        }
        //player.body.velocity.x = 0;
        player.animations.play('up');
    }
    else if (cursors.down.isDown)
    {
        if(player.body.velocity.y < 150) {
            player.body.velocity.y += 20;
        }
        //player.body.velocity.x = 0;
        player.animations.play('down');
    }
    else
    {
        //  Stand still
        player.animations.stop();


        //player.frame = 4;
    }


}

function collectLollipop (player, lollipop) {

    // Removes the star from the screen
    lollipop.kill();

    //  Add and update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

}