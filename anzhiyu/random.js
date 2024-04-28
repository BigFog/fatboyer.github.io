var posts=["2024/04/28/WEB/小白学WEB安全01—信息收集/","2024/02/15/IOT/小白固件提取的踩坑之旅/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };