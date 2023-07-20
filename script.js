
/**
 * [Images Preload Function]
 * @type {[type]}
 */

var images = document.images;

for (var i = 0; i < images.length; i++) {
  	var image = images[i];
  	var bigImage = document.createElement("img");

  	bigImage.onload = createOnLoadHandler(image, bigImage);

  	var dynamicImageUrl = image.src;

  	setTimeout(createTimeoutHandler(bigImage, dynamicImageUrl), 1000);
}

function createOnLoadHandler(image, bigImage) {
  	return function() {
    	image.src = this.src;
    	image.className = "noblur";
    	image.parentElement.classList.add('imgLoaded');
  	};
}

function createTimeoutHandler(bigImage, src) {
  	return function() {
    	bigImage.src = src;
  	};
}