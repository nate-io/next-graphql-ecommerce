function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [[
  {
    "name": "Yeti Hondo",
    "description": "soo nice",
    "status": "AVAILABLE",
    "price": 3423,
    "photo": {
      "id": "604a86901e1cfe3cc22d1781",
      "filename": "5dfbed262849d7961377c2c0.jpg",
      "originalFilename": "5dfbed262849d7961377c2c0.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "101a7d15efb8b22398de7b1097947783",
        "public_id": "sickfits/604a897bdc7f843dda32bf0b",
        "version": 1615497595,
        "version_id": "dd9dd884f8fadf09b9f079f75f1641b0",
        "signature": "69baf497ed4152ce25c8d8ca013e3e1533796a6e",
        "width": 120,
        "height": 73,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:19:55Z",
        "tags": [],
        "bytes": 1513,
        "type": "upload",
        "etag": "a8a6ee238d4bc24a31b590173591b35e",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615497595/sickfits/604a897bdc7f843dda32bf0b.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615497595/sickfits/604a897bdc7f843dda32bf0b.jpg",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Airmax 270",
    "description": "Great shoes!",
    "status": "AVAILABLE",
    "price": 5234,
    "photo": {
      "id": "604a86901e1cfe3cc22d1783",
      "filename": "airmax.jpg",
      "originalFilename": "airmax.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "ab22179f3582cea0ab0635feae202cfa",
        "public_id": "sickfits/604a89c3dc7f843dda32bf0c",
        "version": 1615497667,
        "version_id": "9b9edc9cd885e3b19b81f94b8bf659d0",
        "signature": "a85b588b25aa850fddb25c6156f10d311a50c3a5",
        "width": 120,
        "height": 80,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:21:07Z",
        "tags": [],
        "bytes": 1856,
        "type": "upload",
        "etag": "712bd3bc7660052991b52ba2ad4c4598",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615497667/sickfits/604a89c3dc7f843dda32bf0c.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615497667/sickfits/604a89c3dc7f843dda32bf0c.jpg",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "KITH Hoodie",
    "description": "Love this hoodie",
    "status": "AVAILABLE",
    "price": 23562,
    "photo": {
      "id": "604a86901e1cfe3cc22d1785",
      "filename": "kith-hoodie.jpg",
      "originalFilename": "kith-hoodie.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "e7db9fa3babd1a801b9887f17cd20f3c",
        "public_id": "sickfits/604a89f1dc7f843dda32bf0d",
        "version": 1615497714,
        "version_id": "0c9aed80807b7bc050a5357d9a8f4c59",
        "signature": "cfa34cac347f17f4cc50f20e348b5070676cfd6c",
        "width": 120,
        "height": 120,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:21:54Z",
        "tags": [],
        "bytes": 2362,
        "type": "upload",
        "etag": "6066447cff9609fa6f9252aec46ff0c9",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615497714/sickfits/604a89f1dc7f843dda32bf0d.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615497714/sickfits/604a89f1dc7f843dda32bf0d.jpg",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Fanorak",
    "description": "Super hip. Comes in a number of colours",
    "status": "AVAILABLE",
    "price": 252342,
    "photo": {
      "id": "604a86901e1cfe3cc22d1787",
      "filename": "fanorak.png",
      "originalFilename": "fanorak.png",
      "mimetype": "image/png",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "f76da36b6370959860c493ac9a69bbd4",
        "public_id": "sickfits/604a8a2cdc7f843dda32bf0e",
        "version": 1615497773,
        "version_id": "e56bd572453b4be6872113aa96824e78",
        "signature": "37d77c071eff04c6b472aedc77e0d22ef6660e46",
        "width": 120,
        "height": 140,
        "format": "png",
        "resource_type": "image",
        "created_at": "2021-03-11T21:22:53Z",
        "tags": [],
        "bytes": 26695,
        "type": "upload",
        "etag": "9387c8092a38f3661be58a5975629d19",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615497773/sickfits/604a8a2cdc7f843dda32bf0e.png",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615497773/sickfits/604a8a2cdc7f843dda32bf0e.png",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Nike Vapormax",
    "description": "Kind of squeaky on some floors",
    "status": "AVAILABLE",
    "price": 83456,
    "photo": {
      "id": "604a86901e1cfe3cc22d1789",
      "filename": "vapormax.jpg",
      "originalFilename": "vapormax.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "294f0c9473ded8f418fb5772c52280ae",
        "public_id": "sickfits/604a8ea8dc7f843dda32bf0f",
        "version": 1615498920,
        "version_id": "fcbdbb4fc970ca4c5d58d741ec15edc5",
        "signature": "db4aac7092db5114ba75f5a6ae7c6ab08b5916be",
        "width": 120,
        "height": 80,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:42:00Z",
        "tags": [],
        "bytes": 3392,
        "type": "upload",
        "etag": "6f71d3c6e417aa6ae41144ce7b9f4a97",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615498920/sickfits/604a8ea8dc7f843dda32bf0f.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615498920/sickfits/604a8ea8dc7f843dda32bf0f.jpg",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Yeti Cooler",
    "description": "Who spends this much on a cooler?!",
    "status": "AVAILABLE",
    "price": 75654,
    "photo": {
      "id": "604a86901e1cfe3cc22d178b",
      "filename": "cooler.jpg",
      "originalFilename": "cooler.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "4e1aba63ed8222f2ccece458fb2645d8",
        "public_id": "sickfits/604a8ec3dc7f843dda32bf10",
        "version": 1615498948,
        "version_id": "0e3479dc61df4497114f008add630f0a",
        "signature": "bbcab500a08b2f4f195702aa2040bd1bc16b9d32",
        "width": 120,
        "height": 106,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:42:28Z",
        "tags": [],
        "bytes": 3993,
        "type": "upload",
        "etag": "084d868ea8061a3a89ee5bdaccd79e5c",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615498948/sickfits/604a8ec3dc7f843dda32bf10.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615498948/sickfits/604a8ec3dc7f843dda32bf10.jpg",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Naked and Famous Denim",
    "description": "Japanese Denim, made in Canada",
    "status": "AVAILABLE",
    "price": 10924,
    "photo": {
      "id": "604a86901e1cfe3cc22d178d",
      "filename": "denim.jpg",
      "originalFilename": "denim.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "13c4c545ae6c9ae64352a76c8798d28c",
        "public_id": "sickfits/604a8ee2dc7f843dda32bf11",
        "version": 1615498978,
        "version_id": "67629aa0142fd3bde83818f1a25cb9fe",
        "signature": "7b4be6032c4aa5e553e6d1bb58444214b55e8e3d",
        "width": 120,
        "height": 80,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:42:58Z",
        "tags": [],
        "bytes": 3234,
        "type": "upload",
        "etag": "5d84f3db94a2cd10392f950402d5aa7e",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615498978/sickfits/604a8ee2dc7f843dda32bf11.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615498978/sickfits/604a8ee2dc7f843dda32bf11.jpg",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Rimowa Luggage",
    "description": "S T E A L T H",
    "status": "AVAILABLE",
    "price": 47734,
    "photo": {
      "id": "604a86901e1cfe3cc22d178f",
      "filename": "luggage.png",
      "originalFilename": "luggage.png",
      "mimetype": "image/png",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "6ecb0a387e6e29f90c6f875be70ffd67",
        "public_id": "sickfits/604a8efddc7f843dda32bf12",
        "version": 1615499006,
        "version_id": "c3e84f61f4b3b441afa6645d67d2ce07",
        "signature": "50b331e0158e5dacf151fef905f4003761dba8fb",
        "width": 120,
        "height": 151,
        "format": "png",
        "resource_type": "image",
        "created_at": "2021-03-11T21:43:26Z",
        "tags": [],
        "bytes": 21286,
        "type": "upload",
        "etag": "5564ae43332bbb24c334e6bdf37b7864",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615499006/sickfits/604a8efddc7f843dda32bf12.png",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615499006/sickfits/604a8efddc7f843dda32bf12.png",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Black Hole ",
    "description": "Outdoorsy ",
    "status": "AVAILABLE",
    "price": 4534,
    "photo": {
      "id": "604a86911e1cfe3cc22d1791",
      "filename": "blackhole.jpg",
      "originalFilename": "blackhole.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "befca09fa0eddd478c3347e83d7c16cf",
        "public_id": "sickfits/604a8f32dc7f843dda32bf13",
        "version": 1615499058,
        "version_id": "8db7e06bbcfd9474203755a7de627eed",
        "signature": "1f5df3fa01d4eb4867b89cd2ce413d8516596f13",
        "width": 120,
        "height": 120,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:44:18Z",
        "tags": [],
        "bytes": 2851,
        "type": "upload",
        "etag": "f2136dd67adeef5c304df2e589ea4a3a",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615499058/sickfits/604a8f32dc7f843dda32bf13.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615499058/sickfits/604a8f32dc7f843dda32bf13.jpg",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Nudie Belt",
    "description": "Sick design",
    "status": "AVAILABLE",
    "price": 5234,
    "photo": {
      "id": "604a86911e1cfe3cc22d1793",
      "filename": "belt.jpg",
      "originalFilename": "belt.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "525cd2a7c8a09c4c8521f30d3a5f7cb0",
        "public_id": "sickfits/604a8f51dc7f843dda32bf14",
        "version": 1615499089,
        "version_id": "37d7c85da7dd1e69af378fe31f8b1276",
        "signature": "1a34c2ad86b806d5020d6aff18784df5e1466b7f",
        "width": 120,
        "height": 120,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:44:49Z",
        "tags": [],
        "bytes": 7224,
        "type": "upload",
        "etag": "730d5e94ae0bd6a829ea8d13ed33820f",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615499089/sickfits/604a8f51dc7f843dda32bf14.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615499089/sickfits/604a8f51dc7f843dda32bf14.jpg",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Goose",
    "description": "Keep warm.",
    "status": "AVAILABLE",
    "price": 74544,
    "photo": {
      "id": "604a86911e1cfe3cc22d1795",
      "filename": "jacket.jpg",
      "originalFilename": "jacket.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "c10e8406e52cf2bbd454c33d73d49819",
        "public_id": "sickfits/604a8f80dc7f843dda32bf15",
        "version": 1615499136,
        "version_id": "6ae4dca11e3fb7ba1800584596afb52a",
        "signature": "27f4b67a3d94fd85329c8be93164bb19cd3c078e",
        "width": 120,
        "height": 120,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:45:36Z",
        "tags": [],
        "bytes": 1941,
        "type": "upload",
        "etag": "2580ad862db9138310853e30e9f24d3f",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615499136/sickfits/604a8f80dc7f843dda32bf15.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615499136/sickfits/604a8f80dc7f843dda32bf15.jpg",
        "original_filename": "file"
      }
    }
  },
  {
    "name": "Ultraboost",
    "description": "blacked out",
    "status": "AVAILABLE",
    "price": 6344,
    "photo": {
      "id": "604a86911e1cfe3cc22d1797",
      "filename": "ultraboost.jpg",
      "originalFilename": "ultraboost.jpg",
      "mimetype": "image/jpeg",
      "encoding": "7bit",
      "_meta": {
        "asset_id": "147e5ad6c9c57675b2e7d706e05ae213",
        "public_id": "sickfits/604a8f9edc7f843dda32bf16",
        "version": 1615499166,
        "version_id": "832f22025d3d166b139b8383ce454906",
        "signature": "de46dc411a65a0f3e6fafff90e0071209b5734af",
        "width": 120,
        "height": 79,
        "format": "jpg",
        "resource_type": "image",
        "created_at": "2021-03-11T21:46:06Z",
        "tags": [],
        "bytes": 6370,
        "type": "upload",
        "etag": "04c9797fb7adf99a093664563665a694",
        "placeholder": false,
        "url": "http://res.cloudinary.com/duznnvvbm/image/upload/v1615499166/sickfits/604a8f9edc7f843dda32bf16.jpg",
        "secure_url": "https://res.cloudinary.com/duznnvvbm/image/upload/v1615499166/sickfits/604a8f9edc7f843dda32bf16.jpg",
        "original_filename": "file"
      }
    }
  }
]];