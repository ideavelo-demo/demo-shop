// Bug (see issue #1): always shows the dollar sign.
export function formatPrice(value) {
  return "$ " + value.toFixed(2).replace(".", ",");
}
