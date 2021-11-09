import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLVectorTileLayer from 'ol/layer/VectorTile';

const VectorTileLayer = ({ source, style, zIndex = 0 }) => {
	const { map } = useContext(MapContext);

	useEffect(() => {
		if (!map) return;
		let vectorLayer = new OLVectorTileLayer({
			source,
			style
		});

		map.addLayer(vectorLayer);
		vectorLayer.setZIndex(zIndex);

		return () => {
			if (map) {
				map.removeLayer(vectorLayer);
			}
		};
	}, [map]);

	return null;
};

export default VectorTileLayer;