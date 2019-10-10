const dataLayers = [
  {
    title: 'CMEMS global analysis forecast',
    active: true,
    texticonlegend: [
      {
        texticon: '-',
        style: 'color: red; font-size: xx-large; line-height: 20px;',
        name: '-20m NAP'
      }
    ],
    info: 'WMS from CMEMS thredds server.',
    type: 'datalayers',
    data: [
      {
        id: 'global-analysis-forecast-phy-001-024-monthly',
        type: 'raster',
        source: {
          type: 'raster',
          tiles: [
            'https://nrt.cmems-du.eu/thredds/wms/dataset-duacs-nrt-global-merged-allsat-phy-l4?FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=boxfill%2Frainbow&LAYERS=adt&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:3857&WIDTH=256&HEIGHT=256&bbox={bbox-epsg-3857}'
          ],
          tilesize: 256
        }
      }
    ]
  },
  {
    title: 'CMEMS data 2',
    active: true,
    texticonlegend: [
      {
        texticon: '-',
        style: 'color: red; font-size: xx-large; line-height: 20px;',
        name: '-20m NAP'
      }
    ],
    info: 'WMS from CMEMS thredds server.',
    type: 'datalayers',
    data: [
      {
        id: 'global-analysis-forecast-phy-001-024-monthly-2',
        type: 'raster',
        source: {
          type: 'raster',
          tiles: [
            'https://nrt.cmems-du.eu/thredds/wms/dataset-duacs-nrt-global-merged-allsat-phy-l4?FORMAT=image%2Fpng&TRANSPARENT=TRUE&STYLES=boxfill%2Frainbow&LAYERS=adt&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&SRS=EPSG:3857&WIDTH=256&HEIGHT=256&bbox={bbox-epsg-3857}'
          ],
          tilesize: 256
        }
      }
    ]
  }
]

export { dataLayers }
