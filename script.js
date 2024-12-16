document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("submission-form");
  const entriesContainer = document.getElementById("entries");

  // Przechowywanie projektów w tablicy
  let projects = [];

  // Funkcja do renderowania projektów na stronie
  function renderProjects() {
    entriesContainer.innerHTML = ""; // Wyczyść poprzednie wpisy
    projects.forEach((project, index) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project");
      projectElement.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">Link do projektu</a>
        <br />
        <img src="${project.image}" alt="Obraz projektu" style="max-width: 200px; margin-top: 10px;" />
      `;
      entriesContainer.appendChild(projectElement);
    });
  }

  // Obsługa formularza – dodawanie nowego projektu
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    const url = document.getElementById("url").value.trim();
    const image = document.getElementById("image").value.trim();

    if (name && description && url && image) {
      const newProject = { name, description, url, image };
      projects.push(newProject); // Dodaj projekt do tablicy
      renderProjects(); // Zaktualizuj widok
      form.reset(); // Wyczyść formularz
    } else {
      alert("Wypełnij wszystkie pola!");
    }
  });

  // Inicjalne renderowanie (jeśli są zapisane projekty)
  renderProjects();
});

