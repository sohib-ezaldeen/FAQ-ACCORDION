let questions = document.querySelectorAll(".question");
questions.forEach((ele, index) => {
  ele.addEventListener("click", function () {
    questions.forEach((q) => {
      q.parentElement.classList.remove("active");
    })
    this.parentElement.classList.toggle("active");
  });
});
