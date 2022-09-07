const posts = [
  { content: "content1", title: "title1" },
  { content: "content2", title: "title2" },
  { content: "content3", title: "title3" },
];

const orderPosts = () => {
  return new Promise((resolve, reject) => {
    if (posts.length > 0) {
      posts.map((post) => {
        console.log(post);
      });
      resolve("Başarılı şekilde sıralandı.");
    }
    else {
      reject("Sıralamada hata olustu.");
    }
  });
};

const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (newPost) {
      posts.push(newPost);
      resolve("Basarili sekilde eklendi.");
    }
    else{
      reject("Ekelemede hata olustu.")
    }
  })
  
};

const showPosts = async () => {
  try {
    let x = await orderPosts();
    x = await addPost({content: "newContent", title: "newTitle"});
    x = await orderPosts();
  } catch (error) {
    console.log(error);
  }
}

showPosts();