import * as olSource from 'ol/source';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import {get as getProjection} from 'ol/proj';
import {getTopLeft, getWidth} from 'ol/extent';

function hv() {
	const projection = getProjection('EPSG:4326');
	const projectionExtent = projection.getExtent();
	const size = getWidth(projectionExtent) / 256;
	const resolutions = new Array(19);
	const matrixIds = new Array(19);
	for (let z = 0; z < 19; ++z) {
		// generate resolutions and matrixIds arrays for this WMTS
		resolutions[z] = size / Math.pow(2, z);
		matrixIds[z] = z;
	}

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyANCiAgICJpc3MiOiAiaHR0cHM6Ly9lbnRlcnByaXNlYXBpLnBvcnRhbC5wb3dlcmNvci5jb20uYXUiLCANCiAgICJqdGkiOiAiMDAwMDAxN2FkMmQwZGQ0My01OWNjZDUxIiwNCiAgICJpYXQiOiAiMTYzNTM3MzkxNSIsDQogICAiZXhwIjogIjE2MzU4MDU5MTUiLA0KICAgImF1ZCI6ICJodHRwczovL21hcGluc2lnaHRzLnBvcnRhbC5wb3dlcmNvci5jb20uYXUiLA0KICAgInJlYWxtIjogImludGVybmFsIiwNCiAgICJhdXRoIjogIm5vdGVzOiosbG9hZDoqLHBsYW5uZWRPdXRhZ2U6KixvdXRhZ2VzOiosZmVlZEluOiosd29yazoqLG9wZXJhdGlvbnM6KixpbWFnZXM6KixhdHRhY2htZW50czoqLGRyYXdpbmdzOiosY3JvOiosdHJhbnNmb3JtZXJDdXN0b21lcnM6Kixld2I6KixoYW5hOiosbWV0ZXJSZXBvcnQ6KixzcGF0aWFsQXR0YWNobWVudHM6Kixyb3N0ZXJzOioiLA0KICAgImZpcnN0bmFtZSI6ICJFcmljIiwNCiAgICJsYXN0bmFtZSI6ICJXYW5nIiwNCiAgICJlbWFpbCI6ICJFUml3YW5nQHBvd2VyY29yLmNvbS5hdSIsDQogICAibG9naW4iOiAiRVJpd2FuZyIsIA0KICAgImRhdGUiOiAiMjgxMDIwMjEiDQp9.ljZNFovWPka6r_ac9kg-mjUGMiW2gDgym-pUxnK2v1w';

	return new olSource.WMTS({
		attributions: 'Tiles © <a href="https://tiles.mapinsights.portal.powercor.com.au"' + ' target="_blank">VPNGS</a>',
		url: 'https://tiles.mapinsights.portal.powercor.com.au/gwc/service/wmts?token='+ token,
		layer: 'map-insights:HV_LINE_UE',
		matrixSet: 'EPSG:900913',
		format: 'image/png',
		projection: projection,
        serverType: 'geoserver',
		tileGrid: new WMTSTileGrid({
			origin: getTopLeft(projectionExtent),
			resolutions: resolutions,
			matrixIds: matrixIds,
		}),
		style: '',
		wrapX: true,
	});
}

export default hv;
