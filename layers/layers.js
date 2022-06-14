var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_vashlovani_1 = new ol.format.GeoJSON();
var features_vashlovani_1 = format_vashlovani_1.readFeatures(json_vashlovani_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vashlovani_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vashlovani_1.addFeatures(features_vashlovani_1);
var lyr_vashlovani_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_vashlovani_1, 
                style: style_vashlovani_1,
                interactive: true,
    title: 'vashlovani<br />\
    <img src="styles/legend/vashlovani_1_0.png" /> 1<br />\
    <img src="styles/legend/vashlovani_1_1.png" /> 2<br />\
    <img src="styles/legend/vashlovani_1_2.png" /> 3<br />\
    <img src="styles/legend/vashlovani_1_3.png" /> <br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_vashlovani_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_vashlovani_1];
lyr_vashlovani_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_vashlovani_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_vashlovani_1.set('fieldLabels', {'Name': 'inline label', 'description': 'inline label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vashlovani_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});