fetch('./php/controller.php')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })