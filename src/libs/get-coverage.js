export const getCoverage = ({url, layer, bbox, time })=>
`${url}?$&SERVICE=WCS&VERSION=1.0.0&REQUEST=GetCoverage&coverage=${layer}&CRS=EPSG:4326&&BBOX
=${bbox[0]},${bbox[1]},${bbox[2]},${bbox[3]}&time=${time}&width=768&height=384&format=image/geotiff`

