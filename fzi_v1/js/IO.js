/* const First = document.querySelector("something");

options ={root:;};

const observer = new IntersectionObserver(function(entries, observer){
	entries.forEach(entry => {
		console.log(entry);
	});
}, options);

observer.observe("First"); */

var faders = document.querySelectorAll(".fade-in");

var Appear_options = {
	threshold: 1,
	rootMargin: "0px 0px 30px 0px"
};

var Appear = new IntersectionObserver(function(entries, Appear){
	entries.forEach(entry => {
		if(!entry.isIntersecting){
			return;
		} else {
			entry.target.classList.add("appear");
			/*Appear.unobserve(entry.target);*/
		}
}, Appear_options);
});

faders.forEach(fader => {
	Appear.observe(fader);
});
