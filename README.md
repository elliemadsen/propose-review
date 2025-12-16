# Embedding Earth: A Critical Atlas of Planetary Computation
Ellie Madsen <br>
Columbia University Graduate School of Architecture, Preservation, and Planning <br>
Computational Design Practices <br>

## Hypothesis

Collective understanding of embedded data in Earth Observation lags behind the rapid production of remote sensing foundation models. Data visualization, critical cartography, media studies, and theories of the archive offer vital conceptual frameworks to situate this novel technology in the context of the broader trajectory of digital ecology and to provide human-comprehensible form and meaning to high-dimensional latent space.

## Project Description

I am proposing a research project that explores the novel application of foundation models to remote sensing. My methods include experimental data analysis, theoretical and technical writing, critical cartography, media studies, topology, and speculation. I will conduct a range of experiments using these methods to explore the properties of Earth embedding data. The resulting content will be presented in an atlas in both physical and digital forms.

Over the last few years, there has been a steady release of new remote sensing foundation models in Earth Observation. RSFMs are large-scale machine learning models trained primarily on satellite imagery, but also on aerial, radar, thermal, and climate data. They learn—or predict—generalized spatial–temporal representations of Earth’s surface. These general-purpose models are intended to perform a range of downstream tasks, including clustering, crop type mapping, classification, and object detection via similarity search.

Remote sensing foundation models compress huge amounts of Earth observation data into a unified digital representation, or *embedding*. The data is embedded as high-dimensional vectors, which together construct latent space: a raster image painted by the brushstrokes of a billion embeddings. In Google’s AlphaEarth satellite embedding dataset, released in July 2025, each pixel represents 10 m, and each 10 m region is embedded into a 64-dimensional vector.

I am less interested in what geospatial embedding data can tell us about the world than in what this methodology tells us about ourselves. Repurposing the notion of the archive allows us to think of big data as a regime of knowledge, power, and control. What if, instead of taking these data at face value and using embeddings as a method to understand the Earth, the subject of study is the embeddings themselves—as a form of matter in their own right?

Earth geodata is inherently spatial, but when it is embedded, remote sensing data constructs a new space: latent space. Imagine a 3D sphere, but make it 64 dimensions. Considering the spatial limits of human perception, how might we make sense of high-dimensional data?

I conceive of this embedding space as a different, not-for-human world: a world without clouds, where no one lives, locality is universal, distance is semantic, and places are queried like the web. Yet this world has its own topology and texture. My research exists in the irony between calling for a human understanding of Earth embeddings and acknowledging that attempting to see like machines is a losing game. What is created and lost when we embed, interpolate, predict, simulate, and represent?

I will explore the high-dimensional turn of planetary mediation across themes of sparsity, dimensionality, scale, distance, and temporality.

## Computational Methods

I will apply computational methods in machine learning, GIS, and exploratory data analysis to uncover and illustrate the properties, limits, edge cases, and formal characteristics of Earth embedding data.

My technical approach will include cartography, data visualization, classification, change detection, dimensionality reduction, projection, false-color composites, and web design.

The specific tools I have used thus far include Python, JavaScript, Google Earth Engine, UMAP, t-SNE, QGIS, MapLibre, GDAL, GeoJSON, SciPy, Adobe Illustrator, HTML/CSS, d3.js, and three.js.

## Design Methods

* **Analytical**: I will use exploratory data analysis methods to understand and explain the form of embedded remote sensing datasets.
* **Critical**: I will question the implications of a universal environmental “digital twin” and the motivations and power dynamics tied to the institutions contributing to embedding the Earth.
* **Experimental**: I will iteratively experiment with cross-disciplinary methods without a preconceived idea of what insights may arise.
* **Speculative**: I will question how humans can sense and reason about an immaterial space.
* **Narrative**: I will tell the story of Earth embeddings in a coherent sequence, designed to be understood by non-expert audiences.
* **Visual**: Representation is a core pillar of my research. I do not take mainstream approaches to visualizing the digital planet for granted; representational choices will be made with intention.

## Precedents

* [Critical Atlas of the Internet](https://louisedrulhe.fr/internet-atlas/)
* [Land Lines](https://lines.chromeexperiments.com/)
* [Understanding UMAP](https://pair-code.github.io/understanding-umap/)
* [Satellite Collections](https://www.jennyodell.com/satellite.html)
* [Models All the Way Down](https://knowingmachines.org/models-all-the-way)

## Proof of Concept

* [Final Review Presentation Site](https://elliemadsen.github.io/propose-review/)
  * Press space bar to go forward, backspace to go back
* [Embedding Point Cloud Topology Visualization](https://elliemadsen.github.io/satellite-embeddings/dimension-reduction/point_cloud.html)
* [GitHub Repository](https://github.com/elliemadsen/satellite-embeddings)
* [Semester Progress Slides](https://docs.google.com/presentation/d/1x22f_bUQgkyU92aXDlKD0BP-LorLhNJDF5-Wbt-Tcyo/edit?slide=id.p#slide=id.p)
* [Ongoing Research Document](https://docs.google.com/document/d/1h1lgSFnJuy3mRNQcAamoCFNCaaXGwrHmg_JWAc5ObIg/edit?usp=sharing)
* [Google Earth Engine App](https://gsapp-map.projects.earthengine.app/view/sat-embeddings)
* [Web Map Globe Site](https://elliemadsen.github.io/satellite-embeddings/web-maps/globe.html)

## Audience

Current adoption of remote sensing foundation models for real-world applications remains low. Environmental and geospatial researchers are often not experts in machine learning, while machine learning researchers who produce these models may lack a comprehensive understanding of user needs and focus primarily on model development rather than communication. This project aims to bridge that gap by introducing a shared written and visual language.

The target audience includes:

1. Environmental researchers and GIS specialists with experience working with Earth data but limited familiarity with machine learning foundation models.
2. Technically proficient computer science audiences with basic machine learning knowledge but limited exposure to Earth observation applications.
3. A general audience, supported by sufficient written context and external resources to understand the project’s broader framework and key concepts.

Importantly, this project is not a how-to guide for working with RSFMs. Instead, it proposes conceptual frameworks to guide a situated understanding of Earth embeddings at both a technical level and within a broader societal context.

## Data

* **AlphaEarth Satellite Embedding V1** (Google DeepMind)
  [Dataset link](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_SATELLITE_EMBEDDING_V1_ANNUAL)
* **Prithvi-EO-2.0** (IBM & NASA)
  [Model link](https://huggingface.co/ibm-nasa-geospatial/Prithvi-EO-2.0-600M)
* **TESSERA** (University of Cambridge)
  [Repository link](https://github.com/ucam-eo/tessera?tab=readme-ov-file)

Thus far, I have been working with Google DeepMind’s AlphaEarth Satellite Embedding dataset, released in July 2025 and accessible through Google Earth Engine. This model encodes global spatial–temporal conditions into 64-dimensional embeddings at a resolution of 10 m per pixel, with annual temporal resolution from 2017–2024.

The fact that the global embedding data is precomputed and hosted within Google Earth Engine makes it far more accessible than alternatives such as TESSERA, which would require substantial compute resources to download and host independently. Offline analysis with AlphaEarth can be conducted using Python scripts. However, Google Earth Engine’s API does not allow the embedding data to be queried directly in a live web application, and the dataset’s petabyte scale prevents meaningful local downloads. Additionally, raw data redistribution is restricted for proprietary reasons.

To work within these constraints, I converted raw embedding data into false-color GeoTIFFs and generated low-resolution PNG tiles, enabling the creation of a web-based globe hosted independently of Google Earth Engine.

In the Spring, I will explore the use of NASA’s open-source Prithvi 2.0 model through my research with Columbia’s Center for Climate Systems Research, in collaboration with NASA’s Goddard Institute for Space Studies. This work focuses on modeling climate impacts on the New York watershed and will grant access to NASA compute resources and datasets.

While the final output will be an atlas of Earth embedding technologies broadly, rather than a single proprietary model, technical constraints make it likely that AlphaEarth will remain the primary dataset for analysis and visualization.
