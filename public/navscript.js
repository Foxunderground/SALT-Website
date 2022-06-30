// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = () => {
    if (document.documentElement.scrollTop < 300) {
        document.getElementById("nav").style = "";
        document.getElementById("logo").style = "";
    } else {
        document.getElementById("nav").style = "background-color: rgb(2, 127, 181, 0.86);";
        document.getElementById("logo").style = "height: 7vh;";
    }


};

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}