export default function(bundler) {
  bundler.addAssetType('svg', require.resolve('./svg-asset.js'))
}
