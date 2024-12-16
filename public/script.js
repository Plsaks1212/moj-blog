document.addEventListener("DOMContentLoaded", () => {
  fetch("../data/submissions.json")
    .then((response) => response.json())
    .then((data) => {
      const entriesDiv = document.getElementById("entries");
      data.forEach((entry) => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");
        entryDiv.innerHTML = `
          <img src="${entry.image || 'https://via.placeholder.com/150'}" alt="${entry.name}" />
          <h3>${entry.name}</h3>
          <p>${entry.description}</p>
          <a href="${entry.url}" target="_blank">Odwiedź stronę</a>
        `;
        entriesDiv.appendChild(entryDiv);
      });
    });

  document.getElementById("submit-btn").addEventListener("click", () => {
    alert("Aby dodać projekt, edytuj ręcznie plik submissions.json na GitHub!");
  });
});
