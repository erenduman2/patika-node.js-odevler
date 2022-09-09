const Koa = require('koa');
const app = new Koa();

const port = 3000;

app.use(ctx => {
  if(ctx.url === "/"){
    ctx.body = "<h1>Index sayfasi.</h1>";
    ctx.status = 200;
  }
  else if(ctx.url === "/hakkimda"){
    ctx.body = "<h1>Hakkimda sayfasi.</h1>";
    ctx.status = 200;
  }
  else if(ctx.url === "/iletisim"){
    ctx.body = "<h1>Iletisim sayfasi.</h1>";
    ctx.status = 200;
  }
  else{
    ctx.body = "<h1>404 sayfa bulunamadi.</h1>";
    ctx.status = 404;
  }
});



app.listen(port);