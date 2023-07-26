const smoothScrollTo = (id) => {
    // console.log(`Scroll to ${id}`);
    let element = document.getElementById(id);
    window.scrollTo({behavior: "smooth", top: element.offsetTop-element.style.padding-5});
}

const img = (img) => window.open(img.getAttribute("src"));