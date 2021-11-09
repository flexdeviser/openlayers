import React, { useState } from "react";
import Map from "./Map";
import { Layers, TileLayer, VectorTileLayer } from "./Layers";
import { osm, vic, metersVector, hvVector } from "./Source";
import { fromLonLat, get } from "ol/proj";
import { Controls, FullScreenControl } from "./Controls";
import FeatureStyles from "./Features/Styles";

import mapConfig from "./config.json";
import "./App.css";


const App = () => {
  const [center, setCenter] = useState(mapConfig.center);
  const [zoom, setZoom] = useState(18);

  return (
    <div>
      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
          <TileLayer source={vic()} zIndex={1} />
          {/* <TileLayer source={hv()} zIndex={2} /> */}
          {/* <VectorTileLayer
              source={metersVector()}
              style={FeatureStyles.Point}
              zIndex={3}
          /> */}
          <VectorTileLayer
              source={hvVector()}
              style={FeatureStyles.Polygon}
              zIndex={4}
          />
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
};

export default App;
