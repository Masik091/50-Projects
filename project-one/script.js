const allPictures = document.querySelectorAll('.picture');
for (let index = 0; index < allPictures.length; index++) {
    allPictures[index].addEventListener('click', (event) => {
        for (let index2 = 0; index2 < allPictures.length; index2++) {
             allPictures[index2].classList.remove('active');
        }
        allPictures[index].classList.add('active');
    })
}
