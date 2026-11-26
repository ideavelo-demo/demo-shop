import { createServer } from "node:http";
import { formatPrice } from "./prices.js";

const products = [
  { id: 1, name: "Coffee mug", price: 49.9 },
  { id: 2, name: "Notebook", price: 29.5 },
];

createServer((req, res) => {
  if (req.url === "/products") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(products.map(p => ({ ...p, label: formatPrice(p.price) }))));
    return;
  }
  res.writeHead(404);
  res.end();
}).listen(3000);
