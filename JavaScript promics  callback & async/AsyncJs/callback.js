const posts = [
    {title: 'PostOne', body: 'This is post one'},
    {title: 'PostTwo', body: 'This is post two'}
];

/* getting post  */
function getPosts(){
    setTimeout(() =>{
   let output = '';
    posts.forEach((post, index) =>{
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
    },1000);
}

/* creating Post using callback */
function createPost(post, callback){
    setTimeout(() =>{
      posts.push(post);
      callback();
    },2000);
}

//getPosts();

createPost({title: 'PostTheree', body: 'This is post theree'},getPosts);



