const dataLayers = [
  {
    title: 'Model grid',
    active: true,
    // texticonlegend: [
    //   {
    //     texticon: '-',
    //     style: 'color: red; font-size: xx-large; line-height: 20px;',
    //     name: '-20m NAP'
    //   }
    // ],
    info: 'Model grid',
    type: 'datalayers',
    legend: {
      colors: [
        '#bdeeff',
        '#ff817e',
        '#eefad4',
        '#debdde',
        '#73bf73',
        '#d97a36'
      ],
      labels: [
        'water',
        'bebouwd of verhard',
        'gras en akker',
        'riet en ruigte',
        'bos',
        'struweel'
      ]
    },
    data: [
      {
        id: 'grid',
        type: 'line',
        source: {
          type: 'vector',
          url: 'mapbox://coastserv.8cc2ngp3'
        },
        'source-layer': 'Topology_data_of_2D_network-b4wqd0',
        paint: {
          'line-color': '#008080'
        }
      }
    ]
  },
  {
    title: 'Chlfa downscaled North Sea',
    id: 'downscaled_ns',
    active: true,
    // texticonlegend: [
    //   {
    //     texticon: '-',
    //     style: 'color: red; font-size: xx-large; line-height: 20px;',
    //     name: '-20m NAP'
    //   }
    // ],
    info:
      'Using a PLS regression method, the Global Reanalysis Biology Hindcast model for surface chlorophyll-a concentrations (GLOBAL_REANALYSIS_BIO_001_029-TDS) was downscaled from ~25km to 4km resolution.',
    timelayers: [
      {
        time: '01-04-2010',
        url: 'mapbox://coastserv.9k558mo8',
        source: 'downscaled_NorthSea_20100401-ahz90g'
      },
      {
        time: '02-04-2010',
        url: 'mapbox://coastserv.30qh3x8v',
        source: 'downscaled_NorthSea_20100402-14i8m0'
      },
      {
        time: '03-04-2010',
        url: 'mapbox://coastserv.4tchlw6l',
        source: 'downscaled_NorthSea_20100403-7a4az2'
      },
      {
        time: '04-04-2010',
        url: 'mapbox://coastserv.3hl69ldy',
        source: 'downscaled_NorthSea_20100404-53da5j'
      },
      {
        time: '05-04-2010',
        url: 'mapbox://coastserv.2gb13uwq',
        source: 'downscaled_NorthSea_20100405-6no49f'
      },
      {
        time: '06-04-2010',
        url: 'mapbox://coastserv.944vowtw',
        source: 'downscaled_NorthSea_20100406-68d3lx'
      },
      {
        time: '07-04-2010',
        url: 'mapbox://coastserv.5ob3we31',
        source: 'downscaled_NorthSea_20100407-2h96xg'
      },
      {
        time: '08-04-2010',
        url: 'mapbox://coastserv.dtuyzcgd',
        source: 'downscale_NorthSea_20100408-9lnf2i'
      },
      {
        time: '09-04-2010',
        url: 'mapbox://coastserv.dwbgkrkl',
        source: 'downscaled_NorthSea_20100409-7boxfs'
      },
      {
        time: '10-04-2010',
        url: 'mapbox://coastserv.4k67d9rm',
        source: 'downscale_NorthSea_20100410-42df95'
      }
    ],
    data: [
      {
        id: '02-04-2010',
        type: 'raster',
        source: {
          type: 'raster',
          url: ''
        },
        layout: {
          visibility: 'none'
        },
        'source-layer': ''
      }
    ]
  },
  {
    title: 'Chlfa downscaled Ethikwini',
    id: 'downscaled',
    active: true,
    // texticonlegend: [
    //   {
    //     texticon: '-',
    //     style: 'color: red; font-size: xx-large; line-height: 20px;',
    //     name: '-20m NAP'
    //   }
    // ],
    info:
      'Using a PLS regression method, the Global Reanalysis Biology Hindcast model for surface chlorophyll-a concentrations (GLOBAL_REANALYSIS_BIO_001_029-TDS) was downscaled from ~25km to 4km resolution.',
    timelayers: [
      {
        time: '01-04-2010',
        url: 'mapbox://coastserv.2nodl93d',
        source: 'Downscale_Ethekwini_20100401-3swgll'
      },
      {
        time: '02-04-2010',
        url: 'mapbox://coastserv.6m4ifmce',
        source: 'Downscale_Ethekwini_20100402-784l86'
      },
      {
        time: '03-04-2010',
        url: 'mapbox://coastserv.bmds0ia9',
        source: 'Downscale_Ethekwini_20100403-4m1m2t'
      },
      {
        time: '04-04-2010',
        url: 'mapbox://coastserv.7rt0byvq',
        source: 'Downscale_Ethekwini_20100404-bsthpy'
      },
      {
        time: '05-04-2010',
        url: 'mapbox://coastserv.19q54fkq',
        source: 'Downscale_Ethekwini_20100405-cbsn9b'
      },
      {
        time: '06-04-2010',
        url: 'mapbox://coastserv.9c6joh54',
        source: 'Downscale_Ethekwini_20100406-2gxm43'
      },
      {
        time: '07-04-2010',
        url: 'mapbox://coastserv.3esdgbls',
        source: 'Downscale_Ethekwini_20100407-18zp60'
      },
      {
        time: '08-04-2010',
        url: 'mapbox://coastserv.3xxqdks7',
        source: 'downscale_Ethekwini_20100408-9829fz'
      },
      {
        time: '09-04-2010',
        url: 'mapbox://coastserv.50d1gxgd',
        source: 'downscale_Ethekwini_20100409-bnfn9u'
      }
    ],
    data: [
      {
        id: '02-04-2010',
        type: 'raster',
        source: {
          type: 'raster',
          url: ''
        },
        layout: {
          visibility: 'none'
        },
        'source-layer': ''
      }
    ]
  },
  {
    title: 'Model results Chlfa',
    active: true,
    id: 'model',
    // texticonlegend: [
    //   {
    //     texticon: '-',
    //     style: 'color: red; font-size: xx-large; line-height: 20px;',
    //     name: '-20m NAP'
    //   }
    // ],
    info: 'Model results Chlorophyl A concentration, DFM model output.',
    timelayers: [
      {
        time: '01-04-2010',
        url: 'mapbox://coastserv.01uz50ro',
        source: 'shp_20100401-6na0f4'
      },
      {
        time: '02-04-2010',
        url: 'mapbox://coastserv.dvsjquqa',
        source: 'shp_20100402-60fspx'
      },
      {
        time: '03-04-2010',
        url: 'mapbox://coastserv.7e6kuocf',
        source: 'shp_20100403-5hjfbw'
      },
      {
        time: '04-04-2010',
        url: 'mapbox://coastserv.drliqexg',
        source: 'shp_20100404-axzz5q'
      },
      {
        time: '05-04-2010',
        url: 'mapbox://coastserv.68a90z68',
        source: 'shp_20100405-3328ow'
      },
      {
        time: '06-04-2010',
        url: 'mapbox://coastserv.5yidu63f',
        source: 'shp_20100406-dtmff6'
      },
      {
        time: '07-04-2010',
        url: 'mapbox://coastserv.069jmmxi',
        source: 'shp_20100407-azkkc7'
      },
      {
        time: '08-04-2010',
        url: 'mapbox://coastserv.4h67ro9o',
        source: 'shp_20100408-98cz9x'
      },
      {
        time: '09-04-2010',
        url: 'mapbox://coastserv.50d1gxgd',
        source: 'shp_20100409-a74xz7'
      },
      {
        time: '10-04-2010',
        url: 'mapbox://coastserv.8ekfjl5c',
        source: 'shp_20100410-237993'
      },
      {
        time: '11-04-2010',
        url: 'mapbox://coastserv.4oq74c1k',
        source: 'shp_20100411-bmgn0s'
      },
      {
        time: '12-04-2010',
        url: 'mapbox://coastserv.483zw96o',
        source: 'shp_20100412-50pkcb'
      }
    ],
    data: [
      {
        id: '02-04-2010',
        type: 'fill',
        source: {
          type: 'vector',
          url: ''
        },
        layout: {
          visibility: 'none'
        },
        'source-layer': '',
        paint: {
          'fill-color': [
            'interpolate',
            ['linear'],
            ['get', 'Chlfa'],
            0,
            'hsl(97, 92%, 47%)',
            10,
            'hsl(0, 97%, 59%)'
          ]
        }
      }
    ]
  }
]

export { dataLayers }
