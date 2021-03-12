import { products } from './data';

export async function seedData(ks: any) {
  // Keystone API changed, so we need to check for both versions to get keystone
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;
  const { mongoose } = adapter;
  
  await deleteCurrentData(mongoose);
  insertSeedData(mongoose);
}

export async function deleteCurrentData(mongoose) {
  const DO_NOT_DELETE = 'User';
  const models = mongoose.connection.models;
  
  console.log(`💀  Deleting existing data...`);
  await Object.keys(models).forEach(async key => { 
    if (key !== DO_NOT_DELETE) {
      const result = await models[key].deleteMany({}).exec();
  
      console.log(`${key}: deleted ${result.deletedCount} items`); 
    }
  });
  console.log(`💀  Deletion complete`);
}

export async function insertSeedData(mongoose) {
  console.log(`🌱  Inserting Seed Data: ${products.length} Products`);

  for (const product of products) {
    console.log(`  🛍️  Adding Product: ${product.name}`);
    const { _id } = await mongoose
                            .model('ProductImage')
                            .create({ image: product.photo, altText: product.description });
    product.photo = _id;
    await mongoose.model('Product').create(product);
  }

  console.log(`✅  Seed Data Inserted: ${products.length} Products`);
  console.log(`👋  Please start the process with \`yarn dev\` or \`npm run dev\``);
  process.exit();
}
