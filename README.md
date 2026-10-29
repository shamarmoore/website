# Moore Data

Personal site of Shamar Moore, data analyst in Kingston, Jamaica. One static page: `index.html`, `assets/css/site.css` and `assets/js/site.js`, with no build step and no dependencies beyond Google Fonts.

The map behind the name and the "Move the ring" explorer use real data from [jamaica-hurricane-analysis](https://github.com/shamarmoore/jamaica-hurricane-analysis): NOAA HURDAT2 storm tracks and Natural Earth coastlines. The storm counts for each radius were computed with that project's own distance code and match its README at 50 nm (64 storms, 33 hurricanes, 12 major).

To preview locally:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
