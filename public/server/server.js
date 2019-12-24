const puppeteer = require("puppeteer");
const request = require("request");
const cheerio = require("cheerio");
const express = require("express");
var cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

app.get("/", async (req, res) => {
  const puppeteer = require("puppeteer");

  const browser = await puppeteer.launch({executablePath: 'chromium-browser'});
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto(
    "https://www.google.com/maps/dir/8900+N+Interstate+Hwy+35+%231021,+Austin,+TX+78753,+USA/Colina+West,+8$
  );

  const result = await page.evaluate(() => {
    let time = document.querySelector(".section-directions-trip-duration")
      .innerText;
    console.log(time);
    return {
      time
    };
  });

  console.log(result);

  browser.close();

  res.send(result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));