function flipCard(event) {
    const cardInner = event.target.closest('.card-inner');
    cardInner.classList.toggle('flipped');
  }

  document.querySelectorAll('.vermas').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.card');
        card.classList.toggle('flipped');
    });
});