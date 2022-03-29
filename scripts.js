const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const maximizeButton = document.querySelector('.maximize-modal');
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-modal");

for (let card of cards) {
	card.addEventListener("click",function(){
		const siteId = card.getAttribute("id")
		modalOverlay.classList.add('active')
		modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${siteId}`;
	})
}

closeButton.addEventListener("click", function(){
	modalOverlay.classList.remove("active")
	modalOverlay.querySelector("iframe").src = ""
	modal.classList.remove("maximized")
})

maximizeButton.addEventListener("click", function(){
	modal.classList.toggle("maximized")
})
