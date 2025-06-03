var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_indomaret_2 = new ol.format.GeoJSON();
var features_indomaret_2 = format_indomaret_2.readFeatures(json_indomaret_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indomaret_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indomaret_2.addFeatures(features_indomaret_2);
var lyr_indomaret_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_indomaret_2, 
                style: style_indomaret_2,
                popuplayertitle: 'indomaret',
                interactive: true,
                title: '<img src="styles/legend/indomaret_2.png" /> indomaret'
            });
var format_Indomaret_3 = new ol.format.GeoJSON();
var features_Indomaret_3 = format_Indomaret_3.readFeatures(json_Indomaret_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indomaret_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indomaret_3.addFeatures(features_Indomaret_3);
var lyr_Indomaret_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indomaret_3, 
                style: style_Indomaret_3,
                popuplayertitle: 'Indomaret',
                interactive: true,
                title: '<img src="styles/legend/Indomaret_3.png" /> Indomaret'
            });
var format_Isochrones_Layer_20250603_214049_4 = new ol.format.GeoJSON();
var features_Isochrones_Layer_20250603_214049_4 = format_Isochrones_Layer_20250603_214049_4.readFeatures(json_Isochrones_Layer_20250603_214049_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones_Layer_20250603_214049_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones_Layer_20250603_214049_4.addFeatures(features_Isochrones_Layer_20250603_214049_4);
var lyr_Isochrones_Layer_20250603_214049_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrones_Layer_20250603_214049_4, 
                style: style_Isochrones_Layer_20250603_214049_4,
                popuplayertitle: 'Isochrones_Layer_2025-06-03_21:40:49',
                interactive: true,
    title: 'Isochrones_Layer_2025-06-03_21:40:49<br />\
    <img src="styles/legend/Isochrones_Layer_20250603_214049_4_0.png" /> 5 min<br />\
    <img src="styles/legend/Isochrones_Layer_20250603_214049_4_1.png" /> 10 min<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_indomaret_2.setVisible(true);lyr_Indomaret_3.setVisible(true);lyr_Isochrones_Layer_20250603_214049_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_indomaret_2,lyr_Indomaret_3,lyr_Isochrones_Layer_20250603_214049_4];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'roof:colour': 'roof:colour', 'pump:unit': 'pump:unit', 'elevation': 'elevation', 'man_made': 'man_made', 'layer': 'layer', 'capacity:pump': 'capacity:pump', 'substation': 'substation', 'power': 'power', 'rooms': 'rooms', 'operator': 'operator', 'phone': 'phone', 'internet_access:fee': 'internet_access:fee', 'internet_access': 'internet_access', 'email': 'email', 'denomination': 'denomination', 'payment:cash': 'payment:cash', 'opening_hours': 'opening_hours', 'healthcare': 'healthcare', 'brand:wikidata': 'brand:wikidata', 'brand': 'brand', 'shop': 'shop', 'house': 'house', 'addr:unit': 'addr:unit', 'addr:subdistrict': 'addr:subdistrict', 'addr:province': 'addr:province', 'addr:district': 'addr:district', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'smoking': 'smoking', 'tourism': 'tourism', 'office': 'office', 'admin_level': 'admin_level', 'school:type_idn': 'school:type_idn', 'cuisine': 'cuisine', 'sport': 'sport', 'leisure': 'leisure', 'religion': 'religion', 'amenity': 'amenity', 'wheelchair': 'wheelchair', 'nohousenumber': 'nohousenumber', 'height': 'height', 'description': 'description', 'addr:street': 'addr:street', 'operator:type': 'operator:type', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', });
lyr_indomaret_2.set('fieldAliases', {'id': 'id', });
lyr_Indomaret_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'deskripsi': 'deskripsi', 'nomor_telepon': 'nomor_telepon', 'Koordinat': 'Koordinat', 'Jam_Buka': 'Jam_Buka', 'Situs': 'Situs', 'gx_media_links': 'gx_media_links', });
lyr_Isochrones_Layer_20250603_214049_4.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'roof:colour': '', 'pump:unit': '', 'elevation': '', 'man_made': '', 'layer': '', 'capacity:pump': '', 'substation': '', 'power': '', 'rooms': '', 'operator': '', 'phone': '', 'internet_access:fee': '', 'internet_access': '', 'email': '', 'denomination': '', 'payment:cash': '', 'opening_hours': '', 'healthcare': '', 'brand:wikidata': '', 'brand': '', 'shop': '', 'house': '', 'addr:unit': '', 'addr:subdistrict': '', 'addr:province': '', 'addr:district': '', 'addr:postcode': '', 'addr:housenumber': '', 'smoking': '', 'tourism': '', 'office': '', 'admin_level': '', 'school:type_idn': '', 'cuisine': '', 'sport': '', 'leisure': '', 'religion': '', 'amenity': '', 'wheelchair': '', 'nohousenumber': '', 'height': '', 'description': '', 'addr:street': '', 'operator:type': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', });
lyr_indomaret_2.set('fieldImages', {'id': '', });
lyr_Indomaret_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'deskripsi': 'TextEdit', 'nomor_telepon': 'TextEdit', 'Koordinat': 'TextEdit', 'Jam_Buka': 'TextEdit', 'Situs': 'TextEdit', 'gx_media_links': 'TextEdit', });
lyr_Isochrones_Layer_20250603_214049_4.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'roof:colour': 'no label', 'pump:unit': 'no label', 'elevation': 'no label', 'man_made': 'no label', 'layer': 'no label', 'capacity:pump': 'no label', 'substation': 'no label', 'power': 'no label', 'rooms': 'no label', 'operator': 'no label', 'phone': 'no label', 'internet_access:fee': 'no label', 'internet_access': 'no label', 'email': 'no label', 'denomination': 'no label', 'payment:cash': 'no label', 'opening_hours': 'no label', 'healthcare': 'no label', 'brand:wikidata': 'no label', 'brand': 'no label', 'shop': 'no label', 'house': 'no label', 'addr:unit': 'no label', 'addr:subdistrict': 'no label', 'addr:province': 'no label', 'addr:district': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'smoking': 'no label', 'tourism': 'no label', 'office': 'no label', 'admin_level': 'no label', 'school:type_idn': 'no label', 'cuisine': 'no label', 'sport': 'no label', 'leisure': 'no label', 'religion': 'no label', 'amenity': 'no label', 'wheelchair': 'no label', 'nohousenumber': 'no label', 'height': 'no label', 'description': 'no label', 'addr:street': 'no label', 'operator:type': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_indomaret_2.set('fieldLabels', {'id': 'no label', });
lyr_Indomaret_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'deskripsi': 'no label', 'nomor_telepon': 'no label', 'Koordinat': 'no label', 'Jam_Buka': 'no label', 'Situs': 'no label', 'gx_media_links': 'no label', });
lyr_Isochrones_Layer_20250603_214049_4.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Isochrones_Layer_20250603_214049_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});