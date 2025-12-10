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
    center: [0, 30],
    zoom: 2,
    pitch: 0,
    bearing: 10,
    overlay: null,
  },
  // title slide
  {
    center: [0, 30],
    zoom: 2,
    pitch: 0,
    bearing: 10,
    overlay:
      '<div class="fullscreen invert-text"><div class="title">embedding earth</div><div class="title2">a critical atlas of planetary computation</div></div>',
  },

  // --------------------------------- RSFM ---------------------------------

  // remote sensing foundation models
  {
    center: [65, 20],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    slide: "rsfm",
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">remote sensing foundation models</div></div>',
  },
  // rsfm papers
  {
    center: [65, 20],
    zoom: -1,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/remote_sensing_papers.svg" width="1000"/></div>',
  },
  {
    center: [65, 20],
    zoom: -1,
    pitch: 0,
    bearing: 0,
    transition: 1000,
    overlay:
      '<div class="overlay"><img src="img/rsfm.png" width="1000"/></div>',
  },
  // --------------------------------- RSFM ---------------------------------

  // --------------------------------- EMBEDDING ---------------------------------
  // on embedding
  {
    center: [-10, 25],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    slide: "embedding",
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">on embedding</div></div>',
  },
  // alphaearth embedding diagram
  {
    center: [-10, 25],
    zoom: 1,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/embedding.png" width="800"/></div>',
  },
  // single vector embedding
  {
    center: [-80, 40],
    zoom: 9,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/nyc_embedding.svg" class="nyc-emb" width="1000"/></div>',
  },
  // "nyc": [-73.990422, 40.729914],
  // "amazon": [-62.566111, -3.135833],
  // "greenland": [-58.489229, 75.864043],
  // "sahara": [25.665556, 23.409444],
  {
    center: [-73.990422, 40.729914],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay: '<div class="overlay"><img src="img/nyc.png" width="400"/></div>',
  },
  {
    center: [-62.566111, -3.135833],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/amazon.png" width="400"/></div>',
  },

  {
    center: [-45, 75],
    zoom: 4,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/greenland.png" width="400"/></div>',
  },
  {
    center: [25.665556, 15],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/sahara.png" width="400"/></div>',
  },

  // all 4 together
  {
    center: [25, 0],
    zoom: 9,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/all_white.svg" class="all-emb"/></div>',
  },

  // --------------------------------- !EMBEDDING ---------------------------------

  // --------------------------------- DISTANCE ---------------------------------
  // on distance
  {
    center: [-20, -10],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    slide: "distance",
    duration: 4000,
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">on distance</div></div>',
  },
  // first law of geography
  {
    center: [-30, 20],
    zoom: 1.6,
    pitch: 0,
    bearing: 0,
    duration: 1000,

    overlay:
      '<div class="overlay invert-text quote"><div class="main-quote">"Everything is related to everything else, but near things are more related than distant things."</div><div class="subquote">— Tobler`s First Law of Geography, 1970</div></div>',
  },
  // vector graph
  {
    center: [-40, 30],
    zoom: 4,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/vectorgraph.svg" width="800"/></div>',
  },
  // cosine fav camping spot globally
  {
    center: [-40, 25],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/reddit.png" width="600"/></div>',
  },
  // dist exp grid small
  {
    center: [-40, 20],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/small-dist-grid.png" width="600"/></div>',
  },
  // dist exp grid big
  {
    center: [-40, 15],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/big-dist-grid.png" width="600"/></div>',
  },
  // two point projection
  {
    center: [20, 80],
    zoom: -0.5,
    pitch: 0,
    bearing: 100,
    duration: 3000,
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
    duration: 2000,
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
  // petermann 80.66854584650483, -60.43951416710328
  {
    center: [-40, 75],
    zoom: 3,
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
  // {
  //   center: [-50.125, 69.803],
  //   zoom: 5,
  //   pitch: 0,
  //   bearing: 0,
  //   duration: 1000,
  //   overlay: null,
  // },
  {
    center: [-50.125, 69.803],
    zoom: 7,
    pitch: 0,
    bearing: 0,
    overlay: '<div class="overlay"><img src="img/eqip.png" width="500"/></div>',
  },

  // --------------------------------- !DISTANCE ---------------------------------

  // --------------------------------- ARCHIVE ---------------------------------
  {
    center: [-80, 60],
    zoom: 1,
    pitch: 0,
    bearing: 0,
    slide: "archive",
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">data as archive</div></div>',
  },
  // Our brains are dulled by the incurable mania that consists in reducing the unknown to what is known, to what can be filed.
  {
    center: [-80, 60],
    zoom: 0,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay invert-text quote"><div class="main-quote">"Our brains are dulled by the incurable mania that consists in reducing the unknown to what is known, to what can be filed."</div><div class="subquote">— André Breton, Manifesto of Surrealism, 1924</div></div>',
  },

  // vscode video
  {
    center: [-80, 64],
    zoom: 0,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><video src="img/bigdata.mov" width="1000" autoplay muted loop playsinline></video></div>',
  },

  // who knows the river better
  {
    center: [-80, 60],
    zoom: 0,
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
    slide: "space",
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">on spatiality</div></div>',
  },
  // Kurgan GPS quote
  {
    center: [-60, -10],
    zoom: 1,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay invert-text quote"><div class="main-quote">"The GPS information refers to, but does not simply represent, the space it maps: it exceeds, transforms, and reorganizes that space into another space."</div></div>',
  },
  {
    center: [-60, -10],
    zoom: 1,
    pitch: 0,
    bearing: 0,
    duration: 1000,
    overlay:
      '<div class="overlay invert-text quote"><div class="main-quote">"Not a representation of a space, but a space itself."</div><div class="subquote">— Laura Kurgan, Close Up At A Distance, 2013</div></div>',
  },

  // imagine a sphere but 64d
  {
    center: [-50, 30],
    zoom: 4.5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/3dsphere.png" width="800"/></div>',
  },

  // wisconsin 44.46512387800765, -90.32378987278722
  // {
  //   center: [-80, 0],
  //   zoom: 3,
  //   pitch: 0,
  //   bearing: 0,
  //   overlay: null,
  // },
  // false color
  {
    center: [-80, 30],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay: '<div class="overlay invert-text subtitle">false color</div>',
  },
  {
    center: [-90, 44],
    zoom: 5,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay"><img src="img/wisconsin.gif" width="600"/></div>',
  },

  // dimensionality reduction
  {
    center: [-90, 44],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="overlay invert-text subtitle">dimension reduction</div>',
  },

  // point cloud iframe
  {
    center: [-90, 44],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    slide: "pointcloud",
    overlay:
      '<iframe src="https://elliemadsen.github.io/satellite-embeddings/dimension-reduction/point_cloud.html" class="iframe-slide"></iframe>',
  },

  // --------------------------------- !SPACE ---------------------------------

  // --------------------------------- END ---------------------------------

  {
    center: [-10, 40],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    slide: "end",
    overlay:
      '<div class="fullscreen invert-text"><div class="subtitle">proposal<div class="subquote">embedding earth</div><div class="right subquote">a critical atlas of planetary computation</div></div></div>',
  },
  {
    center: [-10, 40],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="fullscreen invert-text"><div class="list right">visualization<br>experimental data analysis<br>writing<br>critical cartography<br>speculation<br>topology<br>projection</div></div>',
  },
  {
    center: [-10, 40],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="fullscreen invert-text"><div class="list">On dimensionality<br>On scale<br>On distance<br>On temporality<br>On form<br>On sparsity<br>Data as archive<br>Elemental media<br>Earth as search engine<br>Planetary computation</div></div>',
  },
  {
    center: [-10, 40],
    zoom: 2,
    pitch: 0,
    bearing: 0,
    overlay:
      '<div class="fullscreen invert-text"><div class="citations">Alphaearth foundations: An embedding field model for accurate and efficient global mapping from sparse label data<br>Prithvi-EO-2.0: A Versatile Multi-Temporal Foundation Model for Earth Observation Applications<br>Operational Images: From the Visual to the Invisual<br>Close Up At A Distance<br>Low-dimensional embeddings of high-dimensional data<br>The Case for a Centralized Earth Observation Vector Embeddings Catalog<br>Uncertain Archives: Approaching the Unknowns, Errors, and Vulnerabilities of Big Data through Cultural Theories of the Archive<br>All Data Are Local: Thinking Critically in a Data-Driven Society<br>For a Planetary Thinking<br>The Perception Machine: Our Photographic Future between the Eye and AI<br>UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction<br>Becoming Planetary<br>Nature Represents Itself: Bibliophilia in a Changing Climate<br>ChatGPT Is a Blurry JPEG of the Web<br>Playing Nature: Ecology in Video Games<br>Imperatives to Re-Imagine the Planet<br>Critical Atlas of Internet<br>Satellite Collections<br>Days Without Clouds: Realism, Images, and Target Classifiers at Google Earth Engine<br>People manipulate objects (but cultivate fields): Beyond the raster-vector debate in GIS<br>Zoom: Google Earth and Global Intimacy</div></div>',
  },

  // --------------------------------- !END ---------------------------------
];

const overlayContainer = document.getElementById("overlay-container");

function getSlideFromHash() {
  const hash = window.location.hash.slice(1); // remove #
  console.log("hash:", hash);
  const index = slides.findIndex((s) => s.slide === hash);
  console.log("index:", index);
  return index !== -1 ? index : 0; // default to first slide if not found
}

function showSlide(index) {
  const slide = slides[index];

  // update URL hash
  if (slide.slide) {
    history.replaceState(null, "", `#${slide.slide}`);
  }

  overlayContainer.innerHTML = ""; // clear prev slide

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
    console.log("space pressed");
    e.preventDefault();
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  if (e.code === "Backspace") {
    e.preventDefault();
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
  }
});

// Initialize current slide from hash (only slides with a `slide` property, else 0)
let currentSlide = getSlideFromHash();
console.log("currentSlide: ", currentSlide);
showSlide(currentSlide);
