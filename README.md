# pastebin-archive-scrape
Scrapes the pastebin archive page https://pastebin.com/archive

## Usage
```js
const pasteScrape = require('pastebin-archive-scrape');

pasteScrape.getPastebinArchives()
  .then(pastebins => {
    console.log(pastebins[0]);
  })
```

## Documentation

### getPastebinArchives(): Promise\<Pastebin>

### object: Pastebin
Example:
```json
{
  "name": "mypastebin",
  "created": "2 days ago",
  "lang": "CSS",
  "id": "RyCdRdYJ"
}
