import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItems = document.querySelector(".gallery");
function createGalleryItems(item) {
	const galleryItem = document.createElement("li");
	galleryItem.classList.add("gallery-item");

	const galleryLink = document.createElement("a");
	galleryLink.classList.add("gallery-link");
	galleryLink.href = item.original;

	const galleryImage = document.createElement("img");
	galleryImage.classList.add("gallery-image");
	galleryImage.src = item.preview;
	galleryImage.alt = item.description;
	galleryImage.setAttribute("data-source", item.original);

	galleryLink.appendChild(galleryImage);
	galleryItem.appendChild(galleryLink);

	return galleryItem;
}
galleryItems.forEach((item) => {
	const galleryItem = createGalleryItem(item);
	galleryList.appendChild(galleryItem);
});
galleryList.addEventListener("click", (event) => {
	event.preventDefault();
	if (event.target.nodeName === "img") {
		const imageUrl = event.target.dataset.source;
		instance = basicLightbox.create(
			`<img src="${imageUrl}" width="800" height="600">`
		);

		instance.show();
	}
});
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && instance) {
		instance.close();
	}
});
console.log(galleryItems);
