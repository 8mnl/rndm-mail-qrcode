const makeid = () => {
    const length = 3
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    let result = '';
    let number;
    while (counter < length) {
        randomPosition = Math.floor(Math.random() * characters.length);

        result += characters.charAt(randomPosition);

        counter += 1;
        characters = characters.slice(0, randomPosition) + characters.slice(randomPosition + 1);
    }
    result += '@mail.com'
    document.write('<span>' + result + '</span>');
    return result;
};

(function() {
    var qr = new QRious({
    element: document.getElementById('qr'),
    value: makeid(),
    size: 294,
    level: 'L',
    background: '#FF6B9A',
    foreground: '#c8e087'
    });
})();