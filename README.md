# ArcGISPack

Bundle the ArcGIS API for you

# examples

- create-react-app : [https://github.com/g3r4n/arcgispack-cra-example](https://github.com/g3r4n/arcgispack-cra-example)

# Why ?

@arcgis/webpack-plugin got the following tradeoff :

- you can't use creaste-react-app or other tool without changing the underling configuration
- you can't use another bundler tool other than webpack
- you have to deal and understand webpack config
- No hot-reloading using Webpack

Using this tool to bundle the API let you build the application as you want without tradeoff.
s

# TODO

- configurable arcgis.config.js file with a flag through the cli
- Have the babel configuration in the tool to avoid saving the existing babel et reatoring the babel configuration
- Change the DEFAULT_LOADER_URL in the esriconfig
- Change DEFAULT_WORKER_URL in the esriconfig
- restore copy of babel config in case of error
- make it completely configurable
- create a verbose and normal mode to limit the output list
- host a full build on a CDN (eg. unpck)
