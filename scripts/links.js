console.log("Hello from links.js");
const baseURL = "https://killerk1998.github.io/wdd230/";
const linksURL = "https://killerk1998.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Data:", data); 

        
        if (data.lessons && Array.isArray(data.lessons)) {
            displayLinks(data.lessons);
        } else {
            console.error("Fetched data does not contain lessons array:", data);
        }
    } catch (error) {
        console.error(`Failed to fetch links: ${error}`);
    }
}

function displayLinks(lessons) {
    const linksContainer = document.getElementById('links-container');
    linksContainer.innerHTML = ''; 

    lessons.forEach(lesson => {
        const lessonDiv = document.createElement('div');
        const lessonTitle = document.createElement('h3');
        lessonTitle.textContent = `Lesson ${lesson.lesson}`;
        lessonDiv.appendChild(lessonTitle);

        const linksList = document.createElement('ul');

        lesson.links.forEach(link => {
            const linkItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            linkItem.appendChild(anchor);
            linksList.appendChild(linkItem);
        });

        lessonDiv.appendChild(linksList);
        linksContainer.appendChild(lessonDiv);
    });
}


getLinks();
