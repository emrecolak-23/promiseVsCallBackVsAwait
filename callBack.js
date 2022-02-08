/*** Call Back Fonksiyon Kullanmadan ***/

// const posts = [
//   { title: "Post One", body: "This is post one"},
//   { title: "Post Two", body: "This is post two"}
// ];

// const getPost = () => {
//   setTimeout(()=>{
//     posts.map((index,item)=>{
//       console.log(index,item);
//     })
//   },1000)
// }

// const createPost = (post) => {
//   setTimeout(()=>{
//     posts.push(post);
//   },3000)
// }

// createPost({title:"Post Three",body:"This is post three"});
// getPost();

/**** Callback Fonksiyon Kullanarak  ****/

const posts = [
  { title: "Post One", body: "This is post one"},
  { title: "Post Two", body: "This is post two"}
];

const getPost = () => {
  setTimeout(()=>{
    posts.map((index,item)=>{
      console.log(index,item);
    })
  },1000);
}


const createPost = (post,callback) => {
  setTimeout(()=>{
    posts.push(post);
    callback();
  })
}

createPost({title:"Post Three",body:"This is post three"},getPost);

