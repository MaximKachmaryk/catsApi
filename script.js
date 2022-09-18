const button = document.querySelector('.btn');
const img = document.querySelector('.img');
const url = "http://aws.random.cat/meow";
let like = document.querySelector('.like');
let dislike = document.querySelector('.dislike');
let likes = 0, dislikes = 0;
let count = 0
async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        img.src = data.file;
    } catch (eror) {
        console.log(eror)
    }

}
button.addEventListener('click', () => {
    let load = img.complete;
    if (load) {
        fetchHandler();
    }
    count++;
})

like.addEventListener('click', () => {
    if (count >= likes) {
        likes++;
        like.innerHTML = "likes " + likes;
    }

})

dislike.addEventListener('click', () => {
    if (count >= dislikes) {
        dislikes++;
        dislike.innerHTML = "dislikes " + dislikes;
    }
})