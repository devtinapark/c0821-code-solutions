fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(res => res.json())
  .then(data => {
    const array = [];
    for (let i = 0; i < data.length; i++) {
      array.push(data[i]);
    }
    console.log(data);
  });

fetch('https://pokeapi.co/api/v2/pokemon/1', {
  method: 'GET'
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
