/*const response = fetch('https://dog.ceo/api/breeds/image/random')//make request and return a promice
        .then((res) => res.json())//then waites untill promice gonna be resolved and after that executes arrow function
        .then((json) => console.log(json))// waites untill res.json gonna be resolved and after that return property
        .catch((error) => alert('Failed'));
*/

Promise.all([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://dog.ceo/api/breeds/image/random'),
]).then(async responses => {
    try{
   // const jsonDataArray = [];
    const imageContainer = document.getElementById('image-container');

    for (const response of responses){
        const jsonData = await response.json();
      //  jsonDataArray.push(jsonData);

        const imgElement = document.createElement('img');
        imgElement.src = jsonData.message;
        imageContainer.appendChild(imgElement);
    }
   // console.log(jsonDataArray);
}
catch(error){
    console.error('Error', error);
}
});
        