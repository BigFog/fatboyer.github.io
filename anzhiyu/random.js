var posts=["2024/02/15/IOT/小白固件提取的踩坑之旅/","2024/03/02/WEB/小白学WEB安全01—信息收集/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };