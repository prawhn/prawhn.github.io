document.querySelectorAll('.service-card').forEach(card => {
	const inner = card.querySelector('.card-inner');
	if (!inner) return;

	card.addEventListener('mouseenter', () => inner.classList.add('is-flipped'));
	card.addEventListener('mouseleave', () => inner.classList.remove('is-flipped'));
});
