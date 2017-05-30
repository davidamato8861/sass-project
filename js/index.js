var $progressBar = $('.progress-bar');

setInterval(function() {
    var newPercentage = Math.round(Math.random() * 100);
    $progressBar 
        .removeClass(findProgressPercentageClasses)
        .addClass('p-' + newPercentage);
}, 1000)

function findProgressPercentageClasses(index, css) {
    return (css.match(/p-.*/) || []).join(' ');
}