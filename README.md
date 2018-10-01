# ArcGISPack

Bundle the ArcGIS API for you

# examples:
- React: https://codesandbox.io/s/k30nlqkr37?module=%2Fsrc%2FReactSceneView.js
- Vue: https://codesandbox.io/s/jp5vojwmov?module=%2Fsrc%2Fcomponents%2FMapView.vue
- create-react-app : [https://github.com/g3r4n/arcgispack-cra-example](https://github.com/g3r4n/arcgispack-cra-example)
# How to use it ?

## 1- Add your arcgispack bundle to your application

You can use either a custon build or the ful build from the CDN.

```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/g3r4n/arcgispack@0.0.24/esri-bundle/bundle.js"></script>
<!-- uncomment the line below for local build -->
<!-- <script type="text/javascript" src="esri-bundle/bundle.js"></script> -->
```

### Create your own bundle :

1.  add the package

Add `arcgispack` as a dev dependency:

```bash
npm i -D arcgispack
or
yarn add -D arcgispack
```

2.  create the arcgis.config.js in the root folder

https://github.com/g3r4n/arcgispack-cra-example/blob/master/arcgis.config.js

3.  update the configuration to match your needs

- `outputPath` : folder where the API build will generate
- `dojoModules` : Array of API dojo modules to build and to access through the lib entry

4.  generate a build (or update your package.json to create a task see [here](https://github.com/g3r4n/arcgispack-cra-example/blob/master/package.json#L14) )

```bash
npx arcgispack
```

5.  Build your amazing app as you wish without tradeoff

## 2- Add your arcgispack bundle to your application

Use [arcgis-wrapper](https://www.npmjs.com/package/arcgis-wrapper) to get modules from the ArcGIS JS API 

```
import { Map, SceneView, SceneLayer } from "arcgis-wrapper";
```

# Why ?

@arcgis/webpack-plugin got the following tradeoff :

- you can't use creaste-react-app or other tools/template without changing the underlining configuration
- you can't use another bundle tool other than webpack
- you have to deal and understand webpack config

Using this tool to bundle the API let you build the application as you want without tradeoff.

# TODO

- Have the babel configuration in the tool to avoid saving the existing babel et reatoring the babel configuration
- Change the DEFAULT_LOADER_URL in the esriconfig
- Change DEFAULT_WORKER_URL in the esriconfig
- restore copy of babel config in case of error
- make it completely configurable
- create a verbose and normal mode to limit the output list
