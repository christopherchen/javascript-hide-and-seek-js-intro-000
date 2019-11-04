function getFirstSelector(selector) {
  const first = document.querySelector(selector);
  return first;
}

function nestedTarget() {
  const nested = document.querySelector('#nested div.target');
  return nested;
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt()
  }
}

function deepestChild() {
  
}