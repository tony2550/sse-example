const express = require("express");
const app = express();

const port = 8070;

app.get("/alarm", (req, res) => {
  console.log("클라이언트 연결 성공");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const intervalId = setInterval(() => {
    const date = new Date().toLocaleString();
    res.write(`data: ${date}\n\n`);
  }, 1000);

  res.on("close", () => {
    console.log("클라이언트 연결 끊김");
    clearInterval(intervalId);
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Server running on PORT : ${port}`);
});
