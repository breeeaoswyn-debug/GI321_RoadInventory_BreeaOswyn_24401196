var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GI321_WebReady_StudentIDinundation_zones_1 = new ol.format.GeoJSON();
var features_GI321_WebReady_StudentIDinundation_zones_1 = format_GI321_WebReady_StudentIDinundation_zones_1.readFeatures(json_GI321_WebReady_StudentIDinundation_zones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GI321_WebReady_StudentIDinundation_zones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GI321_WebReady_StudentIDinundation_zones_1.addFeatures(features_GI321_WebReady_StudentIDinundation_zones_1);
var lyr_GI321_WebReady_StudentIDinundation_zones_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GI321_WebReady_StudentIDinundation_zones_1, 
                style: style_GI321_WebReady_StudentIDinundation_zones_1,
                popuplayertitle: 'GI321_WebReady_StudentID — inundation_zones',
                interactive: true,
                title: '<img src="styles/legend/GI321_WebReady_StudentIDinundation_zones_1.png" /> GI321_WebReady_StudentID — inundation_zones'
            });
var format_GI321_WebReady_StudentIDstream_outlets_2 = new ol.format.GeoJSON();
var features_GI321_WebReady_StudentIDstream_outlets_2 = format_GI321_WebReady_StudentIDstream_outlets_2.readFeatures(json_GI321_WebReady_StudentIDstream_outlets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GI321_WebReady_StudentIDstream_outlets_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GI321_WebReady_StudentIDstream_outlets_2.addFeatures(features_GI321_WebReady_StudentIDstream_outlets_2);
var lyr_GI321_WebReady_StudentIDstream_outlets_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GI321_WebReady_StudentIDstream_outlets_2, 
                style: style_GI321_WebReady_StudentIDstream_outlets_2,
                popuplayertitle: 'GI321_WebReady_StudentID — stream_outlets',
                interactive: true,
                title: '<img src="styles/legend/GI321_WebReady_StudentIDstream_outlets_2.png" /> GI321_WebReady_StudentID — stream_outlets'
            });
var format_GI321_WebReady_StudentIDrivers_creeks_3 = new ol.format.GeoJSON();
var features_GI321_WebReady_StudentIDrivers_creeks_3 = format_GI321_WebReady_StudentIDrivers_creeks_3.readFeatures(json_GI321_WebReady_StudentIDrivers_creeks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GI321_WebReady_StudentIDrivers_creeks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GI321_WebReady_StudentIDrivers_creeks_3.addFeatures(features_GI321_WebReady_StudentIDrivers_creeks_3);
var lyr_GI321_WebReady_StudentIDrivers_creeks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GI321_WebReady_StudentIDrivers_creeks_3, 
                style: style_GI321_WebReady_StudentIDrivers_creeks_3,
                popuplayertitle: 'GI321_WebReady_StudentID — rivers_creeks',
                interactive: true,
                title: '<img src="styles/legend/GI321_WebReady_StudentIDrivers_creeks_3.png" /> GI321_WebReady_StudentID — rivers_creeks'
            });
var format_GI321_WebReady_StudentIDculverts_4 = new ol.format.GeoJSON();
var features_GI321_WebReady_StudentIDculverts_4 = format_GI321_WebReady_StudentIDculverts_4.readFeatures(json_GI321_WebReady_StudentIDculverts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GI321_WebReady_StudentIDculverts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GI321_WebReady_StudentIDculverts_4.addFeatures(features_GI321_WebReady_StudentIDculverts_4);
var lyr_GI321_WebReady_StudentIDculverts_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GI321_WebReady_StudentIDculverts_4, 
                style: style_GI321_WebReady_StudentIDculverts_4,
                popuplayertitle: 'GI321_WebReady_StudentID — culverts',
                interactive: true,
                title: '<img src="styles/legend/GI321_WebReady_StudentIDculverts_4.png" /> GI321_WebReady_StudentID — culverts'
            });
var format_GI321_WebReady_StudentIDchainage_points_5 = new ol.format.GeoJSON();
var features_GI321_WebReady_StudentIDchainage_points_5 = format_GI321_WebReady_StudentIDchainage_points_5.readFeatures(json_GI321_WebReady_StudentIDchainage_points_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GI321_WebReady_StudentIDchainage_points_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GI321_WebReady_StudentIDchainage_points_5.addFeatures(features_GI321_WebReady_StudentIDchainage_points_5);
var lyr_GI321_WebReady_StudentIDchainage_points_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GI321_WebReady_StudentIDchainage_points_5, 
                style: style_GI321_WebReady_StudentIDchainage_points_5,
                popuplayertitle: 'GI321_WebReady_StudentID — chainage_points',
                interactive: true,
                title: '<img src="styles/legend/GI321_WebReady_StudentIDchainage_points_5.png" /> GI321_WebReady_StudentID — chainage_points'
            });
var format_GI321_WebReady_StudentIDgradient_slope_6 = new ol.format.GeoJSON();
var features_GI321_WebReady_StudentIDgradient_slope_6 = format_GI321_WebReady_StudentIDgradient_slope_6.readFeatures(json_GI321_WebReady_StudentIDgradient_slope_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GI321_WebReady_StudentIDgradient_slope_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GI321_WebReady_StudentIDgradient_slope_6.addFeatures(features_GI321_WebReady_StudentIDgradient_slope_6);
var lyr_GI321_WebReady_StudentIDgradient_slope_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GI321_WebReady_StudentIDgradient_slope_6, 
                style: style_GI321_WebReady_StudentIDgradient_slope_6,
                popuplayertitle: 'GI321_WebReady_StudentID — gradient_slope',
                interactive: true,
                title: '<img src="styles/legend/GI321_WebReady_StudentIDgradient_slope_6.png" /> GI321_WebReady_StudentID — gradient_slope'
            });
var format_GI321_WebReady_StudentIDroad_centerline_7 = new ol.format.GeoJSON();
var features_GI321_WebReady_StudentIDroad_centerline_7 = format_GI321_WebReady_StudentIDroad_centerline_7.readFeatures(json_GI321_WebReady_StudentIDroad_centerline_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GI321_WebReady_StudentIDroad_centerline_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GI321_WebReady_StudentIDroad_centerline_7.addFeatures(features_GI321_WebReady_StudentIDroad_centerline_7);
var lyr_GI321_WebReady_StudentIDroad_centerline_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GI321_WebReady_StudentIDroad_centerline_7, 
                style: style_GI321_WebReady_StudentIDroad_centerline_7,
                popuplayertitle: 'GI321_WebReady_StudentID — road_centerline',
                interactive: true,
                title: '<img src="styles/legend/GI321_WebReady_StudentIDroad_centerline_7.png" /> GI321_WebReady_StudentID — road_centerline'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GI321_WebReady_StudentIDinundation_zones_1.setVisible(false);lyr_GI321_WebReady_StudentIDstream_outlets_2.setVisible(true);lyr_GI321_WebReady_StudentIDrivers_creeks_3.setVisible(false);lyr_GI321_WebReady_StudentIDculverts_4.setVisible(true);lyr_GI321_WebReady_StudentIDchainage_points_5.setVisible(false);lyr_GI321_WebReady_StudentIDgradient_slope_6.setVisible(true);lyr_GI321_WebReady_StudentIDroad_centerline_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GI321_WebReady_StudentIDinundation_zones_1,lyr_GI321_WebReady_StudentIDstream_outlets_2,lyr_GI321_WebReady_StudentIDrivers_creeks_3,lyr_GI321_WebReady_StudentIDculverts_4,lyr_GI321_WebReady_StudentIDchainage_points_5,lyr_GI321_WebReady_StudentIDgradient_slope_6,lyr_GI321_WebReady_StudentIDroad_centerline_7];
lyr_GI321_WebReady_StudentIDinundation_zones_1.set('fieldAliases', {'fid': 'fid', 'risk_zone_id': 'risk_zone_id', 'risk_level': 'risk_level', 'risk_rank': 'risk_rank', 'source_description': 'source_description', });
lyr_GI321_WebReady_StudentIDstream_outlets_2.set('fieldAliases', {'fid': 'fid', 'outlet_id': 'outlet_id', 'waterway_name': 'waterway_name', 'flow_status': 'flow_status', });
lyr_GI321_WebReady_StudentIDrivers_creeks_3.set('fieldAliases', {'fid': 'fid', 'waterway_id': 'waterway_id', 'waterway_type': 'waterway_type', });
lyr_GI321_WebReady_StudentIDculverts_4.set('fieldAliases', {'fid': 'fid', 'culvert_id': 'culvert_id', 'structure': 'structure', 'length_m': 'length_m', 'diameter_m': 'diameter_m', 'condition': 'condition', 'function': 'function', 'recommendation': 'recommendation', 'source_condition': 'source_condition', 'data_note': 'data_note', });
lyr_GI321_WebReady_StudentIDchainage_points_5.set('fieldAliases', {'fid': 'fid', 'chainage_id': 'chainage_id', 'chainage': 'chainage', 'elevation_m': 'elevation_m', 'easting': 'easting', 'northing': 'northing', });
lyr_GI321_WebReady_StudentIDgradient_slope_6.set('fieldAliases', {'fid': 'fid', 'segment_id': 'segment_id', 'gradient_pct': 'gradient_pct', 'terrain_class': 'terrain_class', 'chainage': 'chainage', 'segment_length_m': 'segment_length_m', 'source_gradient': 'source_gradient', 'source_category': 'source_category', });
lyr_GI321_WebReady_StudentIDroad_centerline_7.set('fieldAliases', {'fid': 'fid', 'road_id': 'road_id', 'feature_type': 'feature_type', 'length_m': 'length_m', });
lyr_GI321_WebReady_StudentIDinundation_zones_1.set('fieldImages', {'fid': '', 'risk_zone_id': '', 'risk_level': '', 'risk_rank': '', 'source_description': '', });
lyr_GI321_WebReady_StudentIDstream_outlets_2.set('fieldImages', {'fid': '', 'outlet_id': '', 'waterway_name': '', 'flow_status': '', });
lyr_GI321_WebReady_StudentIDrivers_creeks_3.set('fieldImages', {'fid': '', 'waterway_id': '', 'waterway_type': '', });
lyr_GI321_WebReady_StudentIDculverts_4.set('fieldImages', {'fid': '', 'culvert_id': '', 'structure': '', 'length_m': '', 'diameter_m': '', 'condition': '', 'function': '', 'recommendation': '', 'source_condition': '', 'data_note': '', });
lyr_GI321_WebReady_StudentIDchainage_points_5.set('fieldImages', {'fid': 'TextEdit', 'chainage_id': 'TextEdit', 'chainage': 'TextEdit', 'elevation_m': 'TextEdit', 'easting': 'TextEdit', 'northing': 'TextEdit', });
lyr_GI321_WebReady_StudentIDgradient_slope_6.set('fieldImages', {'fid': '', 'segment_id': '', 'gradient_pct': '', 'terrain_class': '', 'chainage': '', 'segment_length_m': '', 'source_gradient': '', 'source_category': '', });
lyr_GI321_WebReady_StudentIDroad_centerline_7.set('fieldImages', {'fid': '', 'road_id': '', 'feature_type': '', 'length_m': '', });
lyr_GI321_WebReady_StudentIDinundation_zones_1.set('fieldLabels', {'fid': 'hidden field', 'risk_zone_id': 'inline label - always visible', 'risk_level': 'inline label - always visible', 'risk_rank': 'inline label - always visible', 'source_description': 'hidden field', });
lyr_GI321_WebReady_StudentIDstream_outlets_2.set('fieldLabels', {'fid': 'hidden field', 'outlet_id': 'inline label - always visible', 'waterway_name': 'inline label - always visible', 'flow_status': 'inline label - always visible', });
lyr_GI321_WebReady_StudentIDrivers_creeks_3.set('fieldLabels', {'fid': 'hidden field', 'waterway_id': 'inline label - always visible', 'waterway_type': 'inline label - always visible', });
lyr_GI321_WebReady_StudentIDculverts_4.set('fieldLabels', {'fid': 'hidden field', 'culvert_id': 'inline label - always visible', 'structure': 'inline label - always visible', 'length_m': 'inline label - always visible', 'diameter_m': 'inline label - always visible', 'condition': 'inline label - always visible', 'function': 'inline label - always visible', 'recommendation': 'inline label - visible with data', 'source_condition': 'hidden field', 'data_note': 'inline label - visible with data', });
lyr_GI321_WebReady_StudentIDchainage_points_5.set('fieldLabels', {'fid': 'hidden field', 'chainage_id': 'inline label - always visible', 'chainage': 'inline label - always visible', 'elevation_m': 'inline label - always visible', 'easting': 'hidden field', 'northing': 'hidden field', });
lyr_GI321_WebReady_StudentIDgradient_slope_6.set('fieldLabels', {'fid': 'hidden field', 'segment_id': 'inline label - always visible', 'gradient_pct': 'inline label - always visible', 'terrain_class': 'inline label - always visible', 'chainage': 'inline label - always visible', 'segment_length_m': 'inline label - always visible', 'source_gradient': 'hidden field', 'source_category': 'hidden field', });
lyr_GI321_WebReady_StudentIDroad_centerline_7.set('fieldLabels', {'fid': 'hidden field', 'road_id': 'inline label - always visible', 'feature_type': 'inline label - always visible', 'length_m': 'inline label - always visible', });
lyr_GI321_WebReady_StudentIDroad_centerline_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});