import fs from 'fs';
import { resolve } from 'path';
import productImagesDb from './productImages.json';
import { products } from './data.js';

const OUTPUT_FILE = '../backend/seed-data/data.ts';

const processedImages = productImagesDb.map(product => {
  const {
    _id: {
      $oid: id
    },
    image
  } = product;

  console.log(id)

  return {
    id,
    filename: image.filename,
    originalFilename: image.originalFilename,
    mimetype: image.mimetype,
    encoding: image.encoding,
    _meta: image._meta
  }
});

// ts file output
const file = fs.createWriteStream(OUTPUT_FILE);

// write existing function & object
file.write(`function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}`);
file.write('\n\n');
file.write(`export const products = `);

// re-map the product images
const finalizedData = products.map((product, index) => {
  return {
    ...product,
    photo: processedImages[index]
  };
});

file.write(JSON.stringify(finalizedData, null, 2));

// complete data structure and close file stream
file.write(`;`)
file.end();


console.log(`\n\nFile processing complete ******************`);