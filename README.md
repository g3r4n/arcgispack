# ArcGISPack

Bundle the ArcGIS API for you

## Examples

- React: https://codesandbox.io/s/k30nlqkr37?module=%2Fsrc%2FReactSceneView.js
- Vue: https://codesandbox.io/s/jp5vojwmov?module=%2Fsrc%2Fcomponents%2FMapView.vue
- create-react-app : [https://github.com/g3r4n/arcgispack-cra-example](https://github.com/g3r4n/arcgispack-cra-example)

## Usage

### First, Add the arcgispack bundle to your application

You can use either the full build from the CDN or create a custom bundle.

```js
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/g3r4n/arcgispack@0.0.25/esri-bundle/bundle.js"></script>
<!-- uncomment the line below for local bundle -->
<!-- <script type="text/javascript" src="esri-bundle/bundle.js"></script> -->
```

#### How to create your own bundle

1. add the package
    Add `arcgispack` as a dev dependency

    ```bash
    npm i -D arcgispack
    ```

    or

    ```bash
    yarn add -D arcgispack
    ```

1. create the [arcgis.config.js](https://github.com/g3r4n/arcgispack-cra-example/blob/master/arcgis.config.js) file in the root folder
1. update the configuration to match your needs

    - `outputPath` : folder where the API build will generate
    - `dojoModules` : Array of API dojo modules to build and to access through the lib entry

1. generate a build (or update your package.json to create a [task](https://github.com/g3r4n/arcgispack-cra-example/blob/master/package.json#L14) )

    ```bash
    npx arcgispack
    ```

1. Build your amazing app as you wish without tradeoff

### Second, Add your arcgispack bundle to your application

Use [arcgis-wrapper](https://www.npmjs.com/package/arcgis-wrapper) to get modules from the ArcGIS JS API.

```js
import { Map, SceneView, SceneLayer } from "arcgis-wrapper";
```

## Why

The current [arcgis/webpack-plugin](https://github.com/Esri/arcgis-webpack-plugin) has the following tradeoffs

- you can't use creaste-react-app or other tools/template without changing the underlining configuration
- you can't use another bundling tool other than webpack
- you have to deal and understand webpack configuration

Using this tool to bundle the esri js API allows you to build the application as you want without tradeoff.

### TODO

- Have the babel configuration in the tool to avoid saving the existing babel et reatoring the babel configuration
- Change the `DEFAULT_LOADER_URL` in the esriconfig
- Change `DEFAULT_WORKER_URL` in the esriconfig
- restore copy of babel config in case of error
- make it completely configurable
- create a verbose and normal mode to limit the output list
