import * as olSource from "ol/source";

function vic(){

    return new olSource.TileWMS({
        url: 'https://base.maps.vic.gov.au/wms',
        params: {'LAYERS': 'CARTO_OVERLAY_WM', 'TILED': true, 'VERSION': '1.1.1', 'SRS': 'EPSG:3857'}, //AERIAL_WM
        serverType: 'geoserver'
    });
}

export default vic;