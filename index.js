function test() 
{
  document.getElementsByTagName("section")[0].scrollTo
  ({
    top: document.getElementById("intro").offsetHeight,
    left: 0,
    behavior: "smooth",
  });
}



// IntersectionObserver

const options = 
{
  root: document.getElementsByTagName("section")[0], 
  rootMargin: "0px", 
  threshold: 1.0
}

const callback = (entries, observer) => 
{
  entries.forEach((entry) => 
  {
    // Each entry describes an intersection change for one observed target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //	 entry.target
    //   entry.time
    
	if (entry.isIntersecting) 
      document.getElementById("btn_down").style.display = "none";
  });
};

const observer = new IntersectionObserver (callback, options);

observer.observe (document.getElementById("p5_section"));