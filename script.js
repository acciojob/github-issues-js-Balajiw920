//your code here
const apiUrl = 'https://api.github.com/repositories/1296269/issues?page=';

let currentPage = 1;

function loadIssues(pageNumber) {
  fetch(apiUrl + pageNumber + '&per_page=5')
    .then(response => response.json())
    .then(data => {
      // update the page number heading
      document.querySelector('h1').textContent = `Page number ${pageNumber}`;

      // update the issue list
      const issuesList = document.querySelector('#issues_list');
      issuesList.innerHTML = '';
      data.forEach(issue => {
        const issueItem = document.createElement('li');
        issueItem.textContent = issue.title;
        issuesList.appendChild(issueItem);
      });

      // update the current page number
      currentPage = pageNumber;
    })
    .catch(error => console.error(error));
}

loadIssues(currentPage);

document.querySelector('#load_prev').addEventListener('click', () => {
  if (currentPage > 1) {
    loadIssues(currentPage - 1);
  }
});

document.querySelector('#load_next').addEventListener('click', () => {
  loadIssues(currentPage + 1);
});
