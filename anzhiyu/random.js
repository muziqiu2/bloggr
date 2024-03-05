var posts=["posts/125/","posts/3145788926/","posts/926119936/","posts/1751468545/","posts/1985886148/","posts/1475875489/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };