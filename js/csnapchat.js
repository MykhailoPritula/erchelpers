(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
  {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
  a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
  r.src=n;var u=t.getElementsByTagName(s)[0];
  u.parentNode.insertBefore(r,u);})(window,document,
  'https://sc-static.net/scevent.min.js');
  setTimeout(() => {
    snaptr('init', 'dbf21719-ebb7-43a4-a152-0b3ec1f7e0c1', {
      'user_email': '__INSERT_USER_EMAIL__'
      });
    snaptr('track', 'view_content');
  }, 1000)