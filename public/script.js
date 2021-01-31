const arrows = document.querySelectorAll(".question__arrow");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("arrow--active");

    const ques = arrow.previousElementSibling;
    ques.classList.toggle("question-font--bold");

    const ans = arrow.parentElement.nextElementSibling;
    ans.classList.toggle("answer--open");
  });
});
