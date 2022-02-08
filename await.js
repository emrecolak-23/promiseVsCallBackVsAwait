async function fetchUser() {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    let data =  await users.json()
    console.log(data);
  } 
  fetchUser()