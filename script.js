const tagsEl = document.getElementById("tags");

const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);

    if(e.key === "Enter") {
        e.target.value = "";

        randomSelect();
    }
});

function createTags(input) {
    const tags = input.split(",").filter(tag => tag.trim() !== "").map(tag => tag.trim());

    tagsEl.innerHTML = "";

    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() => {
            removeHighlight(randomTag);
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            highlightTag(pickRandomTag());
        }, 100)
    }, times * 100)
}

function highlightTag(tag) {
    tag.classList.add("highlight");
}

function removeHighlight(tag) {
    tag.classList.remove("highlight");
}
 
//Selects and Returns a Random Tag element;
function pickRandomTag() {
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
} 