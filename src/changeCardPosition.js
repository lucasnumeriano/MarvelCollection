window.onload = function() {
    let container = document.getElementById('container');
    let cards = container.querySelectorAll('.card');
    
    let indexes = Array.from(Array(cards.length).keys());
    
    indexes.sort(function() {
        return 0.5 - Math.random();
    });
    indexes.forEach(function(index, i) {
        container.appendChild(cards[index]);
    });
};