export const addToCart = (userId, shopCartItems) => {
  const ItemsJson = JSON.stringify(shopCartItems);
  localStorage.setItem(userId, ItemsJson);
};

export const getCart = userId => {
  const GettedItems = localStorage.getItem(userId);
  
  return JSON.parse(GettedItems);
};






// format price to 00.00
export const toDecimal2 = x => {
  let f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  f = Math.round(x * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf(".");
  if (rs < 0) {
    rs = s.length;
    s += ".";
  }
  while (s.length <= rs + 2) {
    s += "0";
  }
  return s;
}