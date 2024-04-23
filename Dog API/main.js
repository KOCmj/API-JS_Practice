document.addEventListener('DOMContentLoaded', () => {
    const dogFigure = document.querySelector('.dog');
    const fetchDogBtn = document.getElementById('fetchDogBtn');

    const displayDog = (imageUrl) => {
        dogFigure.innerHTML = `<img src="${imageUrl}" alt="Random Dog Image">`;
    };

    const fetchRandomDogImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.message; 
                displayDog(imageUrl);
            })
            .catch(error => console.error('Error fetching random dog image:', error));
    };

    fetchDogBtn.addEventListener('click', fetchRandomDogImage);
});
