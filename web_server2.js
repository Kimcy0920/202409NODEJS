const http = require('http');
const fs = require('fs').promises;

// promises - async, await

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('index.html'); // 해당 파일 읽기, 파일처리
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); 
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(err.message);
    }
})
    .listen(8081, () => {
        console.log('8081포트에서 서버 대기 중입니다!');
    });