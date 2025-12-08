const YEAR = 2023;
const SCALE = 1000;

const map = new maplibregl.Map({
  container: "map",
  style: { version: 8, sources: {}, layers: [] },
  center: [0, 0],
  zoom: 1.5,
  pitch: 0,
  bearing: 0,
  antialias: true,
  attributionControl: false,
});

map.on("style.load", () => {
  map.setProjection({ type: "globe" });

  // Add custom raster tile source
  map.addSource("alpha-earth", {
    type: "raster",
    tiles: [`tiles/${YEAR}_${SCALE}/{z}/{x}/{y}.png`],
    tileSize: 256,
    maxzoom: 8,
  });

  map.addLayer({
    id: "alpha-earth-layer",
    type: "raster",
    source: "alpha-earth",
    paint: { "raster-fade-duration": 150 },
  });

  // Hide any symbol layers
  map.getStyle().layers.forEach((layer) => {
    if (layer.type === "symbol")
      map.setLayoutProperty(layer.id, "visibility", "none");
  });
});

// ----------------- Slide / Overlay Logic -----------------

const slides = [
  {
    center: [0, 0],
    zoom: 2,
    pitch: 0,
    bearing: 10,
    overlay: null,
  },
  // title slide
  {
    center: [0, 0],
    zoom: 2,
    pitch: 0,
    bearing: 10,
    overlay:
      '<div class="fullscreen invert-text"><div class="title">embedding earth</div><div class="title2">a critical atlas of planetary computation</div></div>',
  },

  // --------------------------------- RSFM ---------------------------------
  // remote sensing foundation models
  {
    center: [60, 40],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">remote sensing foundation models</div></div>',
  },
  {
    center: [60, 40],
    zoom: 6,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/rsfm.png" width="1000"/></div>',
  },
  // --------------------------------- RSFM ---------------------------------

  // --------------------------------- EMBEDDING ---------------------------------
  // on embedding
  {
    center: [-40, 20],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">on embedding</div></div>',
  },
  // alphaearth embedding diagram
  {
    center: [-40, 20],
    zoom: 4,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/embedding.png" width="800"/></div>',
  },
  // single vector embedding
  {
    center: [-90, 40],
    zoom: 9,
    pitch: 0,
    bearing: -20,
    overlay:
      '<div class="overlay"><img src="img/nyc_embedding.svg" class="nyc-emb" width="1000"/></div>',
  },
  //   "nyc": [-73.990422, 40.729914],
  // "amazon": [-62.566111, -3.135833],
  // "greenland": [-58.489229, 75.864043],
  // "sahara": [25.665556, 23.409444],
  // {
  //   center: [-73.990422, 40.729914],
  //   zoom: 4,
  //   pitch: 0,
  //   bearing: 0,
  //   overlay: null,
  // },
  {
    center: [-73.990422, 40.729914],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay: '<div class="overlay"><img src="img/nyc.png" width="400"/></div>',
  },
  // {
  //   center: [-73.990422, 40.729914],
  //   zoom: 2,
  //   pitch: 0,
  //   bearing: 0,
  //   overlay: null,
  // },
  {
    center: [-62.566111, -3.135833],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/amazon.png" width="400"/></div>',
  },
  // {
  //   center: [-62.566111, -3.135833],
  //   zoom: 2,
  //   pitch: 0,
  //   bearing: 0,
  //   overlay: null,
  // },
  {
    center: [-58.489229, 75.864043],
    zoom: 4,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/greenland.png" width="400"/></div>',
  },
  // {
  //   center: [-58.489229, 75.864043],
  //   zoom: 2,
  //   pitch: 0,
  //   bearing: 0,
  //   overlay: null,
  // },
  {
    center: [25.665556, 23.409444],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/sahara.png" width="400"/></div>',
  },

  // all 4 together
  {
    center: [25.665556, 23.409444],
    zoom: 9,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay:
      '<div class="overlay"><img src="img/all_white.svg" class="all-emb" width="1400"/></div>',
  },

  // --------------------------------- !EMBEDDING ---------------------------------

  // --------------------------------- DISTANCE ---------------------------------
  // on distance
  {
    center: [-60, -10],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">on distance</div></div>',
  },
  // first law of geography
  {
    center: [-60, -10],
    zoom: 4.5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay invert-text quote"><div class="main-quote">"Everything is related to everything else, but near things are more related than distant things."</div><div class="subquote">— Tobler`s First Law of Geography, 1970</div></div>',
  },

  // vector graph
  {
    center: [-60, -10],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay:
      '<div class="overlay"><img src="img/vectorgraph.svg" width="800"/></div>',
  },
  // cosine fav camping spot globally
  {
    center: [-60, -10],
    zoom: 6,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay:
      '<div class="overlay"><img src="img/reddit.png" width="600"/></div>',
  },
  // two point projection
  {
    center: [20, 80],
    zoom: -0.5,
    pitch: 0,
    bearing: 100,
    duration: 2000,
    overlay: null,
  },
  {
    center: [20, 80],
    zoom: -0.5,
    pitch: 0,
    bearing: 100,
    duration: 2000,
    overlay:
      '<div class="overlay"><img src="img/two-point-projection.svg" width="1000"/></div>',
  },

  // gaza 31.501145118891273, 34.46384034412607
  {
    center: [34.4638, 31.5011],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay: null,
  },
  {
    center: [34.4638, 31.5011],
    zoom: 7.5,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay: '<div class="overlay"><img src="img/gaza.png" width="500"/></div>',
  },
  {
    center: [34.4638, 31.5011],
    zoom: 3,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay: null,
  },
  // petermann 80.66854584650483, -60.43951416710328
  {
    center: [-60.43951, 80.6685],
    zoom: 3.5,
    pitch: 0,
    bearing: 0,
    duration: 2000,
    overlay: null,
  },
  {
    center: [-60.43951, 80.6685],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay:
      '<div class="overlay"><img src="img/petermann.png" width="500"/></div>',
  },
  // eqip 69.80352592011315, -50.125022426971775
  {
    center: [-50.125, 69.803],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay: null,
  },
  {
    center: [-50.125, 69.803],
    zoom: 7,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay: '<div class="overlay"><img src="img/eqip.png" width="500"/></div>',
  },

  // --------------------------------- !DISTANCE ---------------------------------

  // --------------------------------- TEMPORALITY ---------------------------------

  // rsfm papers
  {
    center: [-50, 30],
    zoom: 4.5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/remote_sensing_papers.svg" width="1000"/></div>',
  },
  // time gif
  {
    center: [-50, 30],
    zoom: 7,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay:
      '<div class="overlay"><img src="img/temporality.gif" width="500"/></div>',
  },
  // --------------------------------- !TEMPORALITY ---------------------------------

  // --------------------------------- ARCHIVE ---------------------------------
  {
    center: [120, -30],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">data as archive</div></div>',
  },
  // Our brains are dulled by the incurable mania that consists in reducing the unknown to what is known, to what can be filed.
  {
    center: [120, -30],
    zoom: 4.5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay invert-text quote"><div class="main-quote">"Our brains are dulled by the incurable mania that consists in reducing the unknown to what is known, to what can be filed."</div><div class="subquote">— André Breton, Manifesto of Surrealism, 1924</div></div>',
  },

  // vscode video
  {
    center: [120, -30],
    zoom: 4.5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><video src="img/bigdata.mov" width="1000" autoplay muted loop playsinline></video></div>',
  },

  // who knows the river better
  {
    center: [120, -30],
    zoom: 4.5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay invert-text quote"><div class="main-quote">"Who knows the river better, the hydrologist or the swimmer?"</div><div class="subquote">—  Clifford Geertz, 2000</div></div>',
  },

  // --------------------------------- !ARCHIVE ---------------------------------

  // --------------------------------- SPACE ---------------------------------

  {
    center: [-60, -10],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">on spatiality</div></div>',
  },
  // Kurgan GPS quote
  {
    center: [-60, -10],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay invert-text quote"><div class="main-quote">"The GPS information refers to, but does not simply represent, the space it maps: it exceeds, transforms, and reorganizes that space into another space."</div></div>',
  },
  {
    center: [-60, -10],
    zoom: 6,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay:
      '<div class="overlay invert-text quote"><div class="main-quote">"Not a representation of a space, but a space itself."</div><div class="subquote">— Laura Kurgan, Close Up At A Distance, 2013</div></div>',
  },

  // imagine a sphere but 64d
  {
    center: [-115, 0],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/3dsphere.png" width="1000"/></div>',
  },

  // wisconsin 44.46512387800765, -90.32378987278722
  {
    center: [-90, 44],
    zoom: 3,
    pitch: 0,
    bearing: 0,
    overlay: null,
  },
  // false color
  {
    center: [-90, 44],
    zoom: 3,
    pitch: 0,
    bearing: 0,
    overlay: '<div class="overlay invert-text subtitle">false color</div>',
  },
  {
    center: [-90, 44],
    zoom: 9,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/wisconsin.gif" width="600"/></div>',
  },

  // dimensionality reduction
  {
    center: [-90, 44],
    zoom: 3,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay invert-text subtitle">dimension reduction</div>',
  },

  // point cloud iframe
  {
    center: [-90, 44],
    zoom: 3,
    pitch: 0,
    bearing: 0,
    overlay:
      '<iframe src="https://elliemadsen.github.io/satellite-embeddings/dimension-reduction/point_cloud.html" class="fullscreen" tabindex="-1"></iframe>',
  },

  // --------------------------------- !SPACE ---------------------------------
];

let currentSlide = 0;
const overlayContainer = document.getElementById("overlay-container");

function showSlide(index) {
  const slide = slides[index];

  overlayContainer.innerHTML = ""; // clear immediately

  // --- Wait for animation to reach the final camera state ---
  function waitForFinalFrame() {
    const c = map.getCenter();
    const z = map.getZoom();
    const p = map.getPitch();
    const b = map.getBearing();

    const close = (a, b) => Math.abs(a - b) < 0.01;

    if (
      close(c.lng, slide.center[0]) &&
      close(c.lat, slide.center[1]) &&
      close(z, slide.zoom) &&
      close(p, slide.pitch || 0) &&
      close(b, slide.bearing || 0)
    ) {
      map.off("move", waitForFinalFrame);

      // Now safely add overlay
      if (slide.overlay) {
        overlayContainer.innerHTML = slide.overlay;
        updateOverlayPosition(slide.center);
      }
    }
  }

  map.on("move", waitForFinalFrame);

  // --- Animate camera ---
  map.easeTo({
    center: slide.center,
    zoom: slide.zoom,
    pitch: slide.pitch || 0,
    bearing: slide.bearing || 0,
    duration: slide.duration || 2000,
    easing: (t) => t,
  });
}

function updateOverlayPosition(lonLat) {
  const overlay = overlayContainer.firstChild;
  if (!overlay) return;

  const pixel = map.project(lonLat);
  overlay.style.left = `${pixel.x}px`;
  overlay.style.top = `${pixel.y}px`;
}

// Update overlay position on map move
map.on("move", () => {
  const slide = slides[currentSlide];
  if (slide && slide.overlay) {
    updateOverlayPosition(slide.center);
  }
});

// Spacebar navigation
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  if (e.code === "Backspace") {
    e.preventDefault();
    currentSlide = (currentSlide - 1) % slides.length;
    showSlide(currentSlide);
  }
});

// Show first slide
showSlide(currentSlide);
