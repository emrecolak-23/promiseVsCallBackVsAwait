// const posts2 = [
//   { title: "Post One", body: "This is post one"},
//   { title: "Post Two", body: "This is post two"}
// ];

// const getPosts2 = () => {
//   setTimeout(()=>{
//     posts.map((index,item)=>{
//       console.log(posts2);
//     });
//   },1000);
// }

// const createPost2 = (post) => {
//   setTimeout(()=>{
//     return new Promise( (resolve,reject) =>{
//       posts2.push(post);
//       const error = false;

//       if (!error) {
//         resolve();
//       } else{
//         reject("Error message: Something went wrong");
//       }
//     })
//   },2000)
// }

// createPost2({title: "Post Three",body:"This is post three"})
// .then(getPosts2)
// .catch(err=> console.log(err));

//--------- Bütün promiselerı aynı anda döndürüyor ---------//
// const promise1 = Promise.resolve("Hello Promise");
// const promise2 = 10;
// const promise3 = "Example";
// const promise4 = new Promise((resolve,reject) => setTimeout(resolve,3000,"Goodbye"));
// const promise5 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4,promise5])
// .then(values => console.log(values));

// var users = ["Emre","Eymen","Elif"];

// const getUser = () => {
//     users.forEach(x=>{
//       console.log(x);
//     })
// }

// const createUser = (user) => {
//   return new Promise((resolve,reject) =>{
//     users.push(user);
//     let isUser = true
//     if (isUser) {
//       resolve()
//     }else {
//       reject("Eklenemedi.")
//     }
//   })
// }

// createUser("Zehra")
// .then(getUser)
// .catch(err => console.log(err));

//*********     **********/

// const values = [0,1,2,3,4,5,6,7,8,9];
// const isValue = false
// const getValues = () => {
//   return new Promise((resolve,reject) =>{
//       if (isValue) {
//         resolve(values);
//       } else {
//         reject("Veriler getirilemedi");
//       }
//   });
// }

// getValues().then(x =>{
//   console.log(x);
// }).catch(err => {
//   console.log(err)
// }).finally(fin=>{
//   console.log("veriler talep edildi.")
// })







