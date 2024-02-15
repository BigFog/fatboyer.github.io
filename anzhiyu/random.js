var posts=["2021/03/06/PWN学习—[XMAN] level2 (x32)/","2024/02/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };