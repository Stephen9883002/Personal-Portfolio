const menuLinks = document.querySelectorAll('.nav-links a');

const menuToggle = document.getElementById('menu-toggle');

menuLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menuToggle.checked = false;
	});
});
