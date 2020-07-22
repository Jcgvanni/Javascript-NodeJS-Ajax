

const studentItems = document.querySelector('.student-list').children;
const stdPerPage = 10;

function loadJSON() {
  var xobj = new XMLHttpRequest();     
  xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        xobj.responseText;
      }
};
xobj.open('GET', 'students.json', true);
xobj.send();  
}
function init() {
loadJSON("students.json", function(response) {
 // Parse JSON string into object
   var actual_JSON = JSON.parse(response);
   console.log(actual_JSON[0].name);
});
}

init();



function showPage(list, page)  {
  let startIndex = (page * stdPerPage) - stdPerPage;
  let endIndex = page * stdPerPage;

  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
  }
}

showPage(studentItems, 1);

function appendPageLinks(list)  {
  let numOfPages = list.length / stdPerPage;
  let div = document.createElement('div');
  let pageLinks = `<ul>`;
  let page = document.querySelector('.page'); 

  // loop through the pages and adds the link 
  for (let i = 0; i < numOfPages; i++) {
    if (i === 0) {
      pageLinks += `
    <li>
      <a class="active" href="#">${i + 1}</a>
    </li>`
    } else {
      pageLinks += `
    <li>
      <a href="#">${i + 1}</a>
    </li>`
    }
  }
  pageLinks += `
  </ul>`;
  // adds links to the div and appends it to the page
  div.innerHTML = pageLinks;
  div.className = 'pagination';
  page.appendChild(div);

  //event listner
  let buttons = div.querySelectorAll('a');
  for (let i = 0; i < buttons.length; i++) {
    (function () {
      buttons[i].addEventListener('click', (e) => {
        for (let j = 0; j < buttons.length; j++) {
          buttons[j].className = '';
        }
        e.target.className = 'active';
        showPage(studentItems, e.target.textContent);
      },false)
    })();
  }
}
appendPageLinks(studentItems);

