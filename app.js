var countPhoto = 0;
setInterval(
    function() {
        var heart = document.querySelector('button.wpO6b');
        var arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
        if (heart) {
            heart.click();
            countPhoto++;
            console.log('you have liked ' +countPhoto+ ' photos');
        }
        arrow.click();
    }, 300000);