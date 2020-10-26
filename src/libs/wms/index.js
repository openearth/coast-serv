export default function({ id, layer, tiles=[], tileSize=512, visibility, paint={}, ...rest }) {
  return {
    id,
    layer,
    type: 'raster',
    source: {
      type: 'raster',
      tiles,
      tileSize,
    },
    layout: {
      visibility: visibility
    },
    paint,
    ...rest
  };
}
/*  */