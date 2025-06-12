/*=============== EXPANDED LIST ===============*/
const navExpand = document.getElementById('nav-expand'),
	navExpandList = document.getElementById('nav-expand-list'),
	navExpandIcon = document.getElementById('nav-expand-icon');

navExpand.addEventListener('click', () => {
	navExpandList.classList.toggle('show-list');

	navExpandIcon.classList.toggle('rotate-icon');
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__list a[href="#' + sectionId + '"]');

		if (sectionsClass) {
			if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
				sectionsClass.classList.add('active-link');
			} else {
				sectionsClass.classList.remove('active-link');
			}
		}
	});
};
window.addEventListener('scroll', scrollActive);

/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
	tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach(tc => {
			tc.classList.remove('filters__active');
		});
		target.classList.add('filters__active');

		tabs.forEach(t => {
			t.classList.remove('filter-tab-active');
		});
		tab.classList.add('filter-tab-active');
	});
});

/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector('.accordion__header');

	accordionHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.accordion-open');

		toggleItem(item);

		if (openItem && openItem !== item) {
			toggleItem(openItem);
		}
	});
});

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.accordion__content');

	if (item.classList.contains('accordion-open')) {
		accordionContent.removeAttribute('style');
		item.classList.remove('accordion-open');
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + 'px';
		item.classList.add('accordion-open');
	}
};
