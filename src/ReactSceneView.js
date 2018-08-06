import { Map, SceneView, SceneLayer } from "arcgis-wrapper";
import React, { Component } from "react";

export default class ReactSceneView extends Component {
  constructor() {
    super();
    this.map = new Map({
      basemap: "dark-gray",
      ground: "world-elevation"
    });
  }
  componentDidMount() {
    var view = new SceneView({
      container: this.mapViewDiv,
      map: this.map,
      zoom: 4,
      camera: {
        position: [-74.0338, 40.6913, 707],
        tilt: 80,
        heading: 50
      },
      ui: {
        components: []
      }
    });
    view.watch("center", this._onCenterChange.bind(this));
    // Create SceneLayer and add to the map
    var sceneLayer = new SceneLayer({
      portalItem: {
        id: "2e0761b9a4274b8db52c4bf34356911e"
      },
      popupEnabled: false,
      renderer: {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: {
          type: "mesh-3d",
          symbolLayers: [
            {
              type: "fill",
              material: {
                color: "#ffffff",
                colorMixMode: "replace"
              }
              // edges: {
              //   type: 'solid',
              //   color: [0, 0, 0, 0.6],
              //   size: 1
              // }
            }
          ]
        }
      }
    });
    this.map.add(sceneLayer);
  }
  _onCenterChange(center) {
    if (typeof this.props.onCenterChange === "function") {
      this.props.onCenterChange(center.toJSON());
    }
  }
  render() {
    return (
      <div
        style={{ height: "100%", width: "100%" }}
        ref={mapViewDiv => {
          this.mapViewDiv = mapViewDiv;
        }}
      />
    );
  }
}
