# YT-Thumb

---

Get the animated thumbnail URL of a Youtube video through the video ID.

## Usage

### Module

```js
const fetchThumbnail = require("yt-thumb");
(async () => {
  const result = await fetchThumbnail("iPIo9uez40I");
  console.log(result);
  // https://i.ytimg.com/an_webp/iPIo9uez40I/mqdefault_6s.webp?du=3000&sqp=CKio-oUG&rs=AOn4CLARrnH1ljt0DsN5llb66oRJ56NbgA
})();
```

### CLI

```bash
$ yt-thumb -v iPIo9uez40I

   ╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
   │                                                                                                                                     │
   │   Thumbnail found:                                                                                                                  │
   │   https://i.ytimg.com/an_webp/iPIo9uez40I/mqdefault_6s.webp?du=3000&sqp=CKio-oUG&rs=AOn4CLARrnH1ljt0DsN5llb66oRJ56NbgA   │
   │                                                                                                                                     │
   ╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```
