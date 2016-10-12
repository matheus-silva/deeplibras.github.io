var galleryPage = 0;
var ulGallery;

var eventsPage = 0;
var ulEvent;

function loadPage(pages, page) {
	pages.toggle();
	pages.eq(page).show();
}

// Gallery pagination
function galleryNextPage() {
	if(galleryPage + 1 < ulGallery.length) {
		galleryPage++;
		loadPage(ulGallery, galleryPage);
	}

	verifyGalleryButton();
}

function galleryPreviousPage() {
	if(galleryPage > 0) {
		galleryPage--;
		loadPage(ulGallery, galleryPage);
	}

	verifyGalleryButton();
}

function verifyGalleryButton() {
	if(ulGallery.length == 0) {
		$('.galleryNext').prop('disabled', true);
		$('.galleryPrevious').prop('disabled', true);
	} else {
		if(galleryPage == ulGallery.length - 1) {
			$('.galleryNext').prop('disabled', true);
		} else {
			$('.galleryNext').prop('disabled', false);
		}

		if(galleryPage == 0) {
			$('.galleryPrevious').prop('disabled', true);
		} else {
			$('.galleryPrevious').prop('disabled', false);
		}
	}
}

// Events pagination
function eventsNextPage() {
	if(eventsPage + 1 < ulEvent.length) {
		eventsPage++;
		loadPage(ulEvent, eventsPage);
	}

	verifyEventsButton();
}

function eventsPreviousPage() {
	if(eventsPage > 0) {
		eventsPage--;
		loadPage(ulEvent, eventsPage);
	}

	verifyEventsButton();
}

function verifyEventsButton() {
	if(ulEvent.length == 0) {
		$('.eventsNext').prop('disabled', true);
		$('.eventsPrevious').prop('disabled', true);
	} else {
		if(eventsPage == ulEvent.length - 1) {
			$('.eventsNext').prop('disabled', true);
		} else {
			$('.eventsNext').prop('disabled', false);
		}

		if(eventsPage == 0) {
			$('.eventsPrevious').prop('disabled', true);
		} else {
			$('.eventsPrevious').prop('disabled', false);
		}
	}
}