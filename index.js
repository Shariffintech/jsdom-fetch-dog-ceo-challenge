
// on page load
// fetch the images using the url above ⬆️
// parse the response as JSON
// add image elements to the DOM for each🤔 image in the array

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4"'
function fetchImage(){
fetch(imgUrl)
    .then(response => response.json())
    .then(json => addImage(json))

}

// add image elements to the DOM for each image in the array

function addImage(json){
    const images = json.message.split('"')
    images.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        document.body.appendChild(img)
    })
}

  document.addEventListener('DOMContentLoaded', function(){
    fetchImage()
  })