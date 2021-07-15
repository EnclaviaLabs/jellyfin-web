export function init () {
    
    const streamer = new StreamerRoot();
}
//declare module 'animejs/lib/anime';
// import * as anime from 'animejs/lib/anime';
import anime, { AnimeTimelineInstance } from 'animejs';

export class StreamerRoot {

    public static self:StreamerRoot; 

    mainButton:HTMLDivElement;
    progressBar:HTMLDivElement;
    shapes:HTMLOrSVGElement;

    starterTimeline:AnimeTimelineInstance;

    constructor()
    {
        StreamerRoot.self = this;
        this.mainButton = document.getElementById('mainButton') as HTMLDivElement;
        this.mainButton.style.background = "#2B2D2F";
        this.mainButton.style.textAlign = "center";
        this.mainButton.style.position = "absolute";
        this.mainButton.addEventListener('click', this.mainClicked)

       
        this.starterTimeline = anime.timeline({
            duration: function() {
                return anime.random(0, 1000);
            },
            update: function(anim) {
                console.log('progress : ' + Math.round(anim.progress) + '%');
                console.log('began : ' + anim.began);
                console.log('completed : ' + anim.completed);
              },
              begin: function(anim) {
                console.log('began : ' + anim.began);
              },
              complete: function(anim) {
                console.log('completed : ' + anim.completed);
                StreamerRoot.self.introDone();
              },
            targets: '#mainButton',
            direction: 'alternate',
            easing: 'easeOutQuad',
            autoplay: true,
            loop: false,
        });
        this.starterTimeline.add({
            
            scale:[1.1, 1.3 , 1.8]
        });
        this.starterTimeline.add({
            
            color: ['#150485', '#590995', '#c62a88', '#03c4a1', '#000000'],
            scale: [1.9, 1.5, 2],
            
        });
    }

    mainClicked()
    {
        console.log('mainClicked'); 
        //this.isLooping = false;
        //this.starterTimeline.
    }

    initializa()
    {
        anime({
            targets: '#mainButtonIn',
            bottom: 0,
            right: 0,
            delay: 2000,
            height: 70,
            radius: 30,
            scale: 1,
            easing: 'easeOutCirc',
            duration: 1000,
            update: function(anim) {
                console.log('progress : ' + Math.round(anim.progress) + '%');
              },
              complete: function(anim) {
                console.log('completed : ' + anim.completed);
                StreamerRoot.self.mainButton.children[0].innerHTML = 'Ahoy!'
              },
        })
    }

    introDone()
    {
        console.log('introDone'); 
        this.mainButton.children[0].innerHTML = '...'
        
        anime({
            targets: '#mainButton',
            bottom: 10,
            right: 10,
            delay: 2000,
            width: 70,
            height: 70,
            scale: 1,
            easing: 'easeOutCirc',
            duration: 1000,
            loop: false,
            update: function(anim) {
                console.log('progress : ' + Math.round(anim.progress) + '%');
                console.log('began : ' + anim.began);
                console.log('completed : ' + anim.completed);
                if(Math.random()>0.9)
                {
                    if(Math.random()>0.7)
                    {
                        StreamerRoot.self.mainButton.children[0].innerHTML = '...'
                    }
                    else if(Math.random()<0.3)
                    {
                        StreamerRoot.self.mainButton.children[0].innerHTML = '..'
                    }
                    else
                    {
                        StreamerRoot.self.mainButton.children[0].innerHTML = '.'
                    }
                    
                }
              },
              begin: function(anim) {
                console.log('began : ' + anim.began);
              },
              complete: function(anim) {
                console.log('completed : ' + anim.completed);
                StreamerRoot.self.mainButton.children[0].innerHTML = 'OK';
                StreamerRoot.self.mainButton.style.height = '70px';
                StreamerRoot.self.initializa();
              }
        })
        
    }
}

