# ArcGISPack

Bundle the ArcGIS API for you

# How to use it ?

## the easy way: use one of this examples

- create-react-app : [https://github.com/g3r4n/arcgispack-cra-example](https://github.com/g3r4n/arcgispack-cra-example)

`Note` : you need to build the API before starting to develop

## Manually :

1.  add the package

Add `arcgispack` as a dev dependency:

```bash
npm i -D arcgispack
or
npm add -D arcgispack
```

2.  create the arcgis.config.js in the root folder

https://github.com/g3r4n/arcgispack-cra-example/blob/master/arcgis.config.js

3.  update the configuration to match your need

- `outputPath` : folder where the API build will generate
- `libEntry` : entry folder from where you will import the API component
- `dojoModules` : Array of dojo modules to build in the API and to access through the lib entry

4.  generate a build (or update your package.json to crete a task see [here](https://github.com/g3r4n/arcgispack-cra-example/blob/master/package.json#L13) )

```bash
npx arcgispack
```

5.  Build your amazing app as you wish without tradeoff

# Why ?

@arcgis/webpack-plugin got the following tradeoff :

- you can't use creaste-react-app or other tool without changing the underling configuration
- you can't use another bundler tool other than webpack
- you have to deal and understand webpack config
- No hot-reloading using Webpack

Using this tool to bundle the API let you build the application as you want without tradeoff.
s

# TODO

- Have the babel configuration in the tool to avoid saving the existing babel et reatoring the babel configuration
- Change the DEFAULT_LOADER_URL in the esriconfig
- Change DEFAULT_WORKER_URL in the esriconfig
- restore copy of babel config in case of error
- make it completely configurable
- create a verbose and normal mode to limit the output list
