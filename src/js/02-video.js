import Player from '@vimeo/player';
var throttle = require('lodash.throttle');



const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player)
const VIDEO_KEY_TIME = "videoplayer-current-time";
console.log(iframe)

const onPlay = function(evt) {
    localStorage.setItem(VIDEO_KEY_TIME, evt.seconds)
    
};



player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(VIDEO_KEY_TIME))
.then(function(seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            
            break;
    }
});