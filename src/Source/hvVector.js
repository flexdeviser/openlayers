import * as olSource from 'ol/source';
import MVT from 'ol/format/MVT';
import * as TileGrid from 'ol/tilegrid'
import VectorTileSource from 'ol/source/VectorTile';
function hvVector() {
	const token =
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyANCiAgICJpc3MiOiAiaHR0cHM6Ly9lbnRlcnByaXNlYXBpLnBvcnRhbC5wb3dlcmNvci5jb20uYXUiLCANCiAgICJqdGkiOiAiMDAwMDAxN2FkMmQwZGQ0My01OWNjZDUxIiwNCiAgICJpYXQiOiAiMTYzNTM3MzkxNSIsDQogICAiZXhwIjogIjE2MzU4MDU5MTUiLA0KICAgImF1ZCI6ICJodHRwczovL21hcGluc2lnaHRzLnBvcnRhbC5wb3dlcmNvci5jb20uYXUiLA0KICAgInJlYWxtIjogImludGVybmFsIiwNCiAgICJhdXRoIjogIm5vdGVzOiosbG9hZDoqLHBsYW5uZWRPdXRhZ2U6KixvdXRhZ2VzOiosZmVlZEluOiosd29yazoqLG9wZXJhdGlvbnM6KixpbWFnZXM6KixhdHRhY2htZW50czoqLGRyYXdpbmdzOiosY3JvOiosdHJhbnNmb3JtZXJDdXN0b21lcnM6Kixld2I6KixoYW5hOiosbWV0ZXJSZXBvcnQ6KixzcGF0aWFsQXR0YWNobWVudHM6Kixyb3N0ZXJzOioiLA0KICAgImZpcnN0bmFtZSI6ICJFcmljIiwNCiAgICJsYXN0bmFtZSI6ICJXYW5nIiwNCiAgICJlbWFpbCI6ICJFUml3YW5nQHBvd2VyY29yLmNvbS5hdSIsDQogICAibG9naW4iOiAiRVJpd2FuZyIsIA0KICAgImRhdGUiOiAiMjgxMDIwMjEiDQp9.ljZNFovWPka6r_ac9kg-mjUGMiW2gDgym-pUxnK2v1w';

	return new VectorTileSource({
		projection: 'EPSG:900913',
		attributions:
			'© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> ' +
			'© <a href="https://www.openstreetmap.org/copyright">' +
			'OpenStreetMap contributors</a>',
		format: new MVT(),
		tileGrid: TileGrid.createXYZ({ maxZoom: 22 }),
		url: 'https://tiles.mapinsights.portal.powercor.com.au/gwc/service/wmts?format=application/x-protobuf%3Btype=mapbox-vector&layer=map-insights:HV_LINES&request=GetTile&service=WMTS&style=&tilecol={x}&tilematrix=EPSG:900913:{z}&tilematrixset=EPSG:900913&tilerow={y}&version=1.0.0&token=' +
			token,
	});
}

export default hvVector;
