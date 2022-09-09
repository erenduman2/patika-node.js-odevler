import http from "node:http"

const port = 5000;

const server = http.createServer((req, res) => {
  const url = req.url;

  if(url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Index sayfasina hosgeldiniz.");
  }
  else if(url === '/hakkimda'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hakkimda sayfasina hosgeldiniz.");
  }
  else if(url === '/iletisim'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Iletisim sayfasina hosgeldiniz.");
  }
  else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.write("404 Sayfa bulunamadi.");
  }

});

server.listen(port, () => {
  console.log(`${port} numarali porta baglandi`);
});