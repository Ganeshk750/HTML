const posts = [
    {title: 'PostOne', body: 'This is post one'},
    {title: 'PostTwo', body: 'This is post two'}
];

function getPost(){
    setTimeout(() =>{
     let output = '';
     posts.forEach((post, index) =>{
         output += `<li>${post.title}</li>`
     });
     document.body.innerHTML = output;
    },1000);
}
//getPost();

function creatPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went worng');
            } 
          },2000);
    });
   
}

/* Async /Await */
/* async function init(post){
    await creatPost({title: PostTeree, body:'This is post theree'});
    getPost();
}

init(); */

/* creatPost({title: 'PostThree', body: 'This is post three'})
.then(getPost)
.catch(err => console.log(err)); */

/* Promise.all */
/* const promise1 = Promise.resolve('Hello World');
const promise2 = 25;
const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000,'GoodDay')
}); */

/* Promise with fecth */

/* const promise4 =  fetch('https://jsonplaceholder.typicode.com/users')
.then(result => result.json() )
.catch(err => console.log('err: something went worng')); */

/* Promise.all([promise1, promise2,promise3,promise4]).then(values => console.log(values))
 */


 /* Async/Await/fetch */
 async function fetchUsers(){
     const result = await fetch('https://jsonplaceholder.typicode.com/users');
     const data = await result.json();
     console.log(data);
     var newData = '';
     data.forEach((res, index) =>{
         newData += `<ul>${res.name}-->${res.username}</ul>`
     });
     document.body.innerHTML = newData
 }
 fetchUsers();

