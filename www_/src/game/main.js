game.module(
    'game.main'
)
    .require(
        'engine.core'
    )
    .body(function () {
    /****************************/
    /**** Pre-loading Assets ****/
    /****************************/
    
    //Music 
        game.addAudio('sound/hbd.*','hbd');
    //Sounds
        game.addAudio('sound/boop.*','boop'); //http://soundbible.com/1601-Mario-Jumping.html
        game.addAudio('sound/ching.*', 'ching'); //https://www.freesound.org/people/LittleRobotSoundFactory/sounds/270303/
    //Background image
        game.addAsset('bg_01.png');
    //HBD text
        game.addAsset('text_01.png');
    //Spritesheets
     //Cake source: http://piq.codeus.net/picture/25855
        game.addAsset('cakeSP.png');
    //Fran's floating head
        game.addAsset('fran_01.png');
        game.addAsset('franSp_01.png');
        game.addAsset('franSp_02.png');
        game.addAsset('franSp_03.png');
        game.addAsset('franSp_04.png');
        game.addAsset('fran_02.png');
    //Speechbubbles
        game.addAsset('hi_dad.png');
        game.addAsset('hope.png');
        game.addAsset('presents.png');
        game.addAsset('forgot.png');
        game.addAsset('fix.png');
        game.addAsset('open.png');
        game.addAsset('click++.png');
    //Continue hint
        game.addAsset('continue.png');
    //Present
        game.addAsset('A_present.png');
    
    /*********************/
    /**** Game Scenes ****/
    /*********************/
    
    
    /**********************/
    /** Main Start Scene **/
    /**********************/
        game.createScene('Main', {
            init: function () {
            //Music
           // game.audio.playMusic("lingonsalt",true);
            //Sound
              game.audio.playSound("boop", false);
                
            //Adding the background to the game
                var bg_01 = new game.Sprite('bg_01.png');
                this.stage.addChild(bg_01);
            
            //Continue hint
                var cont = new game.Sprite('continue.png');
                this.stage.addChild(cont);
                cont.x = 5;
                cont.y = 365;
            
            // Creates spritesheet with frame size 142x227
                var spritesheet02 = new game.SpriteSheet('franSp_01.png', 142, 227);
            // Returns 2 frames long animation, starting from frame 2
                var anim02 = spritesheet02.anim(2, 0);
                anim02.animationSpeed = 0.05;
                anim02.play();
                anim02.addTo(this.stage);
            // Define animation frames with array
                var anim03 = spritesheet02.anim([0, 1]);
                anim02.x = 121;
                anim02.y = 81;
            
                var bubble_01 = new game.Sprite('hi_dad.png')
                this.stage.addChild(bubble_01);
                bubble_01.x = 250;
                bubble_01.y = 50;
            },

        //Setting to new scene
            click: function () {
                game.system.setScene('Scene2');
            }

        });
    
    /***************/
    /* Second Scene */
    /***************/
        game.createScene('Scene2', {
            init: function () {
            
            //Sound
              game.audio.playSound("boop", false);
                
            //Adding the background to the game
                var bg_01 = new game.Sprite('bg_01.png');
                this.stage.addChild(bg_01);
            
            //Continue hint
                var cont = new game.Sprite('continue.png');
                this.stage.addChild(cont);
                cont.x = 5;
                cont.y = 365;
            
            // Creates spritesheet with frame size 142x227
            var spritesheet02 = new game.SpriteSheet('franSp_01.png', 142, 227);
            // Returns 2 frames long animation, starting from frame 2
                var anim02 = spritesheet02.anim(2, 0);
                anim02.animationSpeed = 0.05;
                anim02.play();
                anim02.addTo(this.stage);
            // Define animation frames with array
                var anim03 = spritesheet02.anim([0, 1]);
                anim02.x = 121;
                anim02.y = 81;
            
                var bubble_02 = new game.Sprite('hope.png')
                this.stage.addChild(bubble_02);
                bubble_02.x = 215;
                bubble_02.y = 50;
            
            },

        //Setting new scene
            click: function () {
                game.system.setScene('Scene3');
            }

        });
    
    /***************/
    /* Third Scene */
    /***************/
        game.createScene('Scene3', {
            init: function () {
            
            //Sound
              game.audio.playSound("boop", false);
                
            //Adding the background to the game
                var bg_01 = new game.Sprite('bg_01.png');
                this.stage.addChild(bg_01);
            
            //Continue hint
                var cont = new game.Sprite('continue.png');
                this.stage.addChild(cont);
                cont.x = 5;
                cont.y = 365;
            
            // Creates spritesheet with frame size 142x227
                var spritesheet03 = new game.SpriteSheet('franSp_02.png', 173, 227);
            // Returns 2 frames long animation, starting from frame 2
                var anim03 = spritesheet03.anim(2, 0);
                anim03.animationSpeed = 0.05;
                anim03.play();
                anim03.addTo(this.stage);
            // Define animation frames with array
                var anim04 = spritesheet03.anim([0, 1]);
                anim03.x = 90;
                anim03.y = 81;
            
                var bubble_03 = new game.Sprite('presents.png')
                this.stage.addChild(bubble_03);
                bubble_03.x = 250;
                bubble_03.y = 50;
            },

        //Setting to new scene
            click: function () {
                game.system.setScene('Scene4');
            }

        });
    
    /****************/
    /* Fourth Scene */
    /****************/
        game.createScene('Scene4', {
            init: function () {
            //Sound
              game.audio.playSound("boop", false);
                
            //Adding the background to the game
                var bg_01 = new game.Sprite('bg_01.png');
                this.stage.addChild(bg_01);
            
            //Continue hint
                var cont = new game.Sprite('continue.png');
                this.stage.addChild(cont);
                cont.x = 5;
                cont.y = 365;
            
            // Creates spritesheet with frame size 142x227
                var spritesheet04 = new game.SpriteSheet('franSp_03.png', 173, 227);
            // Returns 2 frames long animation, starting from frame 2
                var anim04 = spritesheet04.anim(2, 0);
                anim04.animationSpeed = 0.05;
                anim04.play();
                anim04.addTo(this.stage);
            // Define animation frames with array
                var anim05 = spritesheet04.anim([0, 1]);
                anim04.x = 90;
                anim04.y = 81;
            },

        //Setting to new scene
            click: function () {
                game.system.setScene('Scene5');
            }

        });
    
    /***************/
    /* Fifth Scene */
    /***************/
        game.createScene('Scene5', {
            init: function () {
            //Sound
              game.audio.playSound("boop", false);
                
            //Adding the background to the game
                var bg_01 = new game.Sprite('bg_01.png');
                this.stage.addChild(bg_01);
            
            //Continue hint
                var cont = new game.Sprite('continue.png');
                this.stage.addChild(cont);
                cont.x = 5;
                cont.y = 365;
            
            // Creates spritesheet with frame size 142x227
                var spritesheet04 = new game.SpriteSheet('franSp_04.png', 142, 227);
            // Returns 2 frames long animation, starting from frame 2
                var anim04 = spritesheet04.anim(2, 0);
                anim04.animationSpeed = 0.05;
                anim04.play();
                anim04.addTo(this.stage);
            // Define animation frames with array
                var anim05 = spritesheet04.anim([0, 1]);
                anim04.x = 121;
                anim04.y = 81;
            
                var bubble_04 = new game.Sprite('forgot.png')
                this.stage.addChild(bubble_04);
                bubble_04.x = 250;
                bubble_04.y = 50;
            },

        //Setting to new scene
            click: function () {
                game.system.setScene('Scene6');
            }

        });
    
    /***************/
    /* Sixth Scene */
    /***************/
        game.createScene('Scene6', {
            init: function () {
            //Sound
              game.audio.playSound("boop", false);
                
            //Adding the background to the game
                var bg_01 = new game.Sprite('bg_01.png');
                this.stage.addChild(bg_01);
            
            //Continue hint
                var cont = new game.Sprite('continue.png');
                this.stage.addChild(cont);
                cont.x = 5;
                cont.y = 365;
            
            // Creates spritesheet with frame size 142x227
                var spritesheet04 = new game.SpriteSheet('franSp_02.png', 173, 227);
            // Returns 2 frames long animation, starting from frame 2
                var anim04 = spritesheet04.anim(2, 0);
                anim04.animationSpeed = 0.05;
                anim04.play();
                anim04.addTo(this.stage);
            // Define animation frames with array
                var anim05 = spritesheet04.anim([0, 1]);
                anim04.x = 90;
                anim04.y = 81;
            
                var bubble_04 = new game.Sprite('fix.png')
                this.stage.addChild(bubble_04);
                bubble_04.x = 215;
                bubble_04.y = 50;
            },

        //Setting to new scene
            click: function () {
               game.system.setScene('Scene7');
            }

        });
    
    /*******************/
    /** Seventh Scene **/
    /*******************/
        game.createScene('Scene7', {
            init: function () {
            //Sound
              game.audio.playSound("boop", false);
                
            //Adding the background to the game
                var bg_01 = new game.Sprite('bg_01.png');
                this.stage.addChild(bg_01);
            
            //Adding Fran
                var fran = new game.Sprite('fran_01.png');
                this.stage.addChild(fran);
                fran.scale.set(0.5,0.5);
                fran.x = 10;
                fran.y = 5;
            
            //Bubble            
                var bubble_04 = new game.Sprite('open.png');
                this.stage.addChild(bubble_04);
                bubble_04.x = 85;
                bubble_04.y = 5;
                
            //Present
                var presento = new game.Sprite('A_present.png');
                this.stage.addChild(presento);
                presento.x = 121;
                presento.y = 121;
            
                presento.interactive = true;
                var test = 0;
                presento.click = function(){
                    game.audio.playSound("ching", false); 
                    
                    test ++;
                    
                    switch (test){
                        case 0:
                        case 2:
                            presento.rotation = 0.3;
                            break;
                        case 1:
                        case 3:
                            presento.rotation = -0.3;
                            break;
                        default:
                            presento.rotation = 0;
                    };
                    
                    if (test == 4){
                        //Replacing Bubble sprite
                        bubble_04.remove(this.stage);
                        var bubble_05 = new game.Sprite("click++.png");
                        this.stage.addChild(bubble_05);
                        bubble_05.x = 85;
                        bubble_05.y = 5;
                        //Replacing Fran sprite
                        fran.remove(this.stage);
                        var fran_02 = new game.Sprite('fran_02.png');
                        this.stage.addChild(fran_02);
                        fran_02.scale.set(0.5,0.5);
                        fran_02.x = 10;
                        fran_02.y = 5;
                    };
                    
                    if (test == 5){
                        game.system.setScene('Scene8');
                    };   
                    
                }
                
            },

        });    
    
    /***************/
    /* Eigth Scene */
    /***************/
        game.createScene('Scene8', {
            init: function () {          
                
            //Adding the background to the game
                var bg_01 = new game.Sprite('bg_01.png');
                this.stage.addChild(bg_01);
                
            //Present
                var present = new game.Sprite('A_present.png')
                this.stage.addChild(present);
                present.x = 121;
                present.y = 121;
                
            //Adding Fran
                var fran = new game.Sprite('fran_01.png');
                this.stage.addChild(fran);
                fran.scale.set(0.5,0.5);
                fran.x = 10;
                fran.y = 5;
                
                //Moving Present
                var pmove = new game.Tween(present.position);
                pmove.to({x:121, y:221}, 1000);
                pmove.start();
                pmove.onComplete(function(){
                    present.remove(this.scene);
                                        
                    game.system.setScene('Scene9');
                })
                
                
            },
        });
    
    /***************/
    /* Ninth Scene */
    /***************/
        game.createScene('Scene9', {
            init: function () {
            
            //add music
            game.audio.playMusic("hbd", true);  
            
            //Adding the background to the game
                var bg_01 = new game.Sprite('bg_01.png');
                this.stage.addChild(bg_01);
            
            //Adding text to game
                var title_01 = new game.Sprite('text_01.png');
                this.stage.addChild(title_01);
                title_01.x = 32;
                title_01.y = -384;
                
                // Creates spritesheet with frame size 142x227
                    var cakesp = new game.SpriteSheet('cakeSP.png', 200, 166);
                    // Returns 2 frames long animation, starting from frame 2
                    var cakean = cakesp.anim(2, 0);
                    cakean.animationSpeed = 0.05;
                    cakean.play();
                    cakean.addTo(this.stage);
                    // Define animation frames with array
                    var cakean1 = cakesp.anim([0, 1]);
                    cakean.x = 96;
                    cakean.y = -384;
            
            //Moving the cake into the center of the screen
                var tween1 = new game.Tween(cakean.position);
	            tween1.to({x: 96, y : 96}, 3000);
                tween1.easing(game.Tween.Easing.Bounce.Out);
                
                
                
                
            
            //Moving text to center
                var tween2 = new game.Tween(title_01.position);
                tween2.to({x: 32, y: 32}, 2000);
                tween2.easing(game.Tween.Easing.Sinusoidal.InOut);
                tween2.start();
            
                tween2.chain(tween1);
            },
        });   
    
    });