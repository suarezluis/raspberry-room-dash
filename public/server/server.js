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

  const browser = await puppeteer.launch({
    executablePath: "chromium-browser"
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.google.com/maps/dir/8900+N+Interstate+Hwy+35+%231021,+Austin,+TX+78753,+USA/Colina+West,+8834+N+Capital+of+Texas+Hwy,+Austin,+TX+78759,+USA/@30.364868,-97.7617588,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x8644c97ec942a887:0x55d787b03b593eb6!2m2!1d-97.6923857!2d30.3535688!1m5!1m1!1s0x8644cb60294d3401:0x4c4e1b6a8331cb3d!2m2!1d-97.7609822!2d30.388997"
  );

  const result = await page.evaluate(() => {
    let time = document.querySelector("body");
    // .innerText;
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
