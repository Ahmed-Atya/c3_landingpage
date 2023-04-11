// Accordion functionality
function toggleSign(e) {
  $(e.target)
    .prev('.panel-heading')
    .find('i')
    .toggleClass('fa fa-minus fa fa-plus');
}

function toggleBg() {
  $('.panel-title').toggleClass('open closed');
}
$('#accordion').on('hidden.bs.collapse', toggleSign);
$('#accordion').on('shown.bs.collapse', toggleSign);
$('#accordion').on('hidden.bs.collapse', toggleBg);
$('#accordion').on('shown.bs.collapse', toggleBg);


// tabs interaction sections
const headings = ["Process Numer One", "Process Numer Two", "Process Numer Three","Process Numer Four"];
const images = ["creativity.png", "creativity-2.png", "creativity-3.png","creativity-4.png"];
const shapes = document.querySelectorAll(".shape");
const processImg = document.querySelector(".process-info img");
const processInfo =document.querySelector(".process-info h4");
processInfo.textContent = headings[0];
function process() {
  shapes.forEach((shape ,index) => {
    shape.addEventListener("click", function () {
      processInfo.textContent = headings[index];
      processImg.src = `images/${images[index]}`;
      shapes.forEach((shape)=>{
        shape.classList.remove('active');
        this.classList.add("active");
      })
    });
  });

}
process();