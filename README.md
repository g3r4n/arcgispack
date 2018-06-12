# ArcGISPack

Bundle the ArcGIS API for you

# Why ?

Using the @arcgis/webpack-plugin is for very advance GIS developper. You need to do the following tradeoff :

- No hot-reloading using Webpack
- you can't use another bundler tool expect webpack
- you have to deal and understand webpack config
- you can't use creaste-react-app or other tool without changing the underling configuration

Using this tool to bundle the API let you build the application as you want without tradeoff.

# TODO

- configurable arcgis.config.js file with a flag through the cli
- Have the babel configuration in the tool to avoid saving the existing babel et reatoring the babel configuration
- Change the DEFAULT_LOADER_URL in the esriconfig
- Change DEFAULT_WORKER_URL in the esriconfig
- restore copy of babel config in case of error
- make it completely configurable
- create a verbose and normal mode to limit the ouput list
