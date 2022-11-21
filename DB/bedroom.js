const data = [
  {
    category: "Bedroom",
    img:"",
    subcategories:[
      {
        name: 'Beds',
        products:[
          {
            id: 1,
            name: "Continental bed",
            description: "For piece continental bed with memory foam mattress",
            price: "18 000:-",
            quantity: 20 ,
            img: 'https://quickbutik.imgix.net/15778a/products/5e860e87558ae.jpeg'
          },
          {
            id: 2,
            name: "Paris Hardwood Queen Size Bed Frame",
            description: "Featuring diamond tufting through the centre of the bedhead, exuding timeless elegance. Finished in a beautifully warm, organic rustic walnut stain",
            price: "28 000:-",
            quantity: 3 ,
            img: 'https://b2cfurniture.com.au/pub/media/catalog/product/cache/3fb871f48f7af5e44260f2d9fd3932a9/p/a/paris-modern-hardwood-queen-size-bed-rustic-walnut_2_.jpg'
          },
          {
            id: 3,
            name: "White King Single Bedroom Suite",
            description: "This king single trundle bed comes with a bedhead with built in bookshelf storage.  It is aesthetically pleasing while remaining highly functional.  The bed also comes with metal bed brackets and is easy to assemble.",
            price: "15 000:-",
            quantity: 3 ,
            img: 'https://b2cfurniture.com.au/pub/media/catalog/product/cache/3fb871f48f7af5e44260f2d9fd3932a9/b/2/b2c_140921_0788_-_crop.jpg'
          },
          {
            id: 4,
            name: "Myer King Single Bunk Bed with Storage",
            description: "Constructed from a solid Hardwood Timber Frame and designed with safety and strength at the forefront, the frame fits together by metal mounting brackets and guard rails along the top bunk",
            price: "18 000:-",
            quantity: 3 ,
            img: 'https://b2cfurniture.com.au/pub/media/catalog/product/cache/3fb871f48f7af5e44260f2d9fd3932a9/m/y/myer-kids-king-single-hardwood-bunk-bed-with-storage-white-natural_6_.jpg'
          },
          {
            id: 5,
            name: "Noddy King Single Size Mattress",
            description: "Our Noddy is a composition of independent pocket springs, which provide wholesome support and durability with layers of foam to create the ideal balance of comfort",
            price: "10 000:-",
            quantity: 3 ,
            img: 'https://b2cfurniture.com.au/pub/media/catalog/product/cache/3fb871f48f7af5e44260f2d9fd3932a9/n/o/noddy-king-single-mattress1.jpg'
          },
        ]
      },
      {
        name:'Nightstands',
        products: [
          {
            id: 1,
            name: "Rome Hardwood Bedside Table",
            description: "Inspired by mid-century style, form follows function with the inclusion of shelf and drawer storage",
            price: "1 000:-",
            quantity: 3 ,
            img: 'https://b2cfurniture.com.au/pub/media/catalog/product/cache/e2559c6fc8a1422d580661548d502f20/r/o/rome-bedside-table-modern-hardwood-night-stand-walnut-02.jpg'
          },
          {
            id: 2,
            name: "Rome Bedside Table",
            description: "xpertly crafted with kiln-dried wood, this stunning piece accentuates the raw natural beauty of the timber, highlighting its own distinctive and unique grain patterns",
            price: "800:-",
            quantity: 3 ,
            img: 'https://b2cfurniture.com.au/pub/media/catalog/product/cache/e2559c6fc8a1422d580661548d502f20/r/o/rome-hardwood-bedside-table-natural_1.jpg'
          },
          {
            id: 3,
            name: "Paris Hardwood Bedside Table",
            description: "Expertly crafted to accentuate the timber’s natural features, with each piece having its own distinctive and unique grain patterns",
            price: "1 200:-",
            quantity: 3 ,
            img: 'https://b2cfurniture.com.au/pub/media/catalog/product/cache/e2559c6fc8a1422d580661548d502f20/p/a/paris-hardwood-bedside-table-hardwood-walnut.jpg'
          },
          {
            id: 4,
            name: "Paris Black Hardwood Bedside Table",
            description: "Durable hardwood construction, made from sustainably sourced timber in a compact and contemporary style",
            price: "850:-",
            quantity: 3 ,
            img: 'https://b2cfurniture.com.au/pub/media/catalog/product/cache/e2559c6fc8a1422d580661548d502f20/p/a/paris-modern-sustainable-black-hardwood-bedside-table-nightstand_2__1.jpg'
          },
          {
            id: 5,
            name: "tokio Bedside Table",
            description: "Compact and convenient bedside storage solution. Drawer fitted with metal ball-bearing runners for quietly, smooth sliding motion",
            price: "1 300:-",
            quantity: 3 ,
            img: 'https://b2cfurniture.com.au/pub/media/b2cfurniture/category-top-banners/bedroom-furniture/bedside-tables/bedside-table-desktop-category-image.jpg'
          },
        ]
      },
      {
        name:'Wardrobes',
        products: [
          {
            id: 1,
            name: "Jesper Wardrobe",
            description: "This matte-finished wardrobe design looks great in any room. The loft sections offer a good amount of storage with a mirrored shutter giving a multifunctional look. The straight wardrobe design with swing shutters maximises storage in this design.",
            price:"10 000:-",
            quantity: 9 ,
            img: 'https://cdn.mos.cms.futurecdn.net/JjRouxcNJxWCb7A3uRFfJ5.jpg'
          },
          {
            id: 2,
            name: "Habitat Flicka Open Shelf Wardrobe",
            description: "Storage star! Our smart, open shelf wardrobe gives you 4 generous sections shelves to stack T-shirts, sweaters, jeans and jumpers. You can reach what you need with ease. Made from light, pine this wardrobe has a light and airy look. Perfect for the modern bedroom.",
            price: "6 000:-",
            quantity: 12 ,
            img: 'https://www.kuche7.com/Content/images/kitchens/Wardrobes/slider1.jpg'
          },
          {
            id: 3,
            name: "Cotswold Wardrobe",
            description: "Simple, stylish and spacious, the Atlantic 3 door 2 drawer wardrobe offers plenty of versatile storage and yet is still neat enough to fit into most bedrooms. It’s fantastic value too.",
            price: ":-",
            quantity: 5 ,
            img: 'http://cdn.shopify.com/s/files/1/0471/2926/4293/collections/wardrobes_1200x630.jpg?v=1613989440'
          },
          {
            id: 4,
            name: "Kempton Wardrobe",
            description: "This thoughtfully designed wardrobe balances functional storage with clean contemporary style. Tall and sleek, it has the appearance of expensive fitted furniture. Outstanding quality and value.",
            price: ":-",
            quantity: 9 ,
            img: 'https://lirp.cdn-website.com/c19fedba/dms3rep/multi/opt/Maxine+bedroom+reveal+4-640w.jpg'
          },
          {
            id: 5,
            name: "Oxford Wardrobe with Mirror",
            description: "Treat your clothes to a thoroughly stylish storage solution with the London Bedrooms Fenchurch 6 Door Wardrobe. With its clean lines and elegant, panelled doors, this wardrobe looks contemporary and high-end ",
            price: ":-",
            quantity: 30 ,
            img: 'https://cdn2.trendrum.se/img/7d/bd/cf/ea/400x400/7dbdcfea4faaf1eaf149b43929cb506fae.jpg'
          },
        ]
      },
      {
        name:'Bedding',
        products: [
          {
            id: 1,
            name: "Luxury Partner Bundle",
            description: "The natural thermoregulating and moisture-wicking properties of linen guarantee the feeling of comfort all year round. Fitted sheets have been pre-washed for maximum softness and durability..Includes 2 duvet covers, 1 fitted sheet and 2 pillowcases.",
            price: "900:-",
            quantity: 20 ,
            img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/linen-bedding-1623679846.jpeg"
          },
          {
            id: 2,
            name: "Teddy Duvet Set",
            description: "Available in a range of colours and sizes, this duvet cover and pillowcase set from out Teddy Bear range is perfect for adding a cosy and warmth to your bedroom. Perfect for the colder Winter months this bedding is snugly and soft.",
            price: "1 200:-",
            quantity: 30 ,
            img:"https://cdn.shopify.com/s/files/1/0019/2253/1377/files/iStock-1296335230-min_499ba480-3300-4601-bf68-ff81fd45e5b0_x800.jpg?v=1658758738"
          },
          {
            id: 3,
            name: "",
            description: "",
            price: "950:-",
            quantity: 13 ,
            img:"https://www.bedeckhome.com/media/catalog/product/cache/08ac7ba689bf8789caf8c39ec5ee4138/m/o/morris_seasons_by_may_main_bed_hr.jpg"
          },
          {
            id: 4,
            name: "Fogarty Set",
            description: "Designed in India and available in a choice of sizes, this Fogarty duvet cover set comes with matching pillowcases included and has been made using microfibre for a luxuriously soft finish.",
            price: "1 500:-",
            quantity: 3 ,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxvOePhH8EGf1fGnpVkk-HCj1pWHW589fjQ&usqp=CAU"
          },
          {
            id: 5,
            name: "Linen Set",
            description: "Freshen up your room with this hotel quality like duvet cover and pillowcase set, designed with super soft brushed cotton for a cosy night sleep. Designed with plain dye to suit any bedroom or style.",
            price: "1 300:-",
            quantity: 10 ,
            img:"https://pyxis.nymag.com/v1/imgs/980/ed8/b439be75282eaaa618fb5782aa6bff6324-duvet.rsquare.w1200.jpg"
          }
        ]
      },
      {
        name:'Bedroom Benches',
        products: [
          {
            id: 1,
            name: "Upholstered Storage Bench",
            description: "This bench delivers extra seating, versatile storage, and refined style to your living space. We love its classic rolled arms and tufted seat",
            price: "1 500:-",
            quantity: 10 ,
            img:"https://secure.img1-cg.wfcdn.com/im/48190440/compr-r85/2097/209773484/default.jpg"
          },
          {
            id: 2,
            name: "Aghvarth Bench",
            description: "Add glam and classic to your home with our Aghvarth Upholstered Bench elevated on golden legs. Your entryway, boudoir, or cloakroom is ready to get a second life.",
            price: "1 600:-",
            quantity: 10 ,
            img:"https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202228/0081/bodhi-bench-c.jpg"
          },
          {
            id: 3,
            name: "Etai Wood Bench",
            description: "Natural oak as raw material, strong and durable. Simple style, linen woven decoration, more beautiful and convenient for home matching and extra storage.",
            price: "1 300:-",
            quantity: 10 ,
            img:"https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202234/0577/farmhouse-storage-bench-c.jpg"
          },
          {
            id: 4,
            name: "Faux Leather Bench",
            description: "This tufted faux leather bench adds a modern and simple look to the end of bed or in your entryway. The rectangular seat is upholstered in faux leather in your choice of color, and it's filled with foam padding, giving you lots of support while you sit",
            price: "1 900:-",
            quantity: 10 ,
            img:"https://m.media-amazon.com/images/I/81O0eilziIL._AC_SL1500_.jpg"
          },
          {
            id: 5,
            name: "Throggs Storage Bench",
            description: "The ideal accent for the end of your bed, this storage bench mixes fashion with function. Upholstered with linen and foam in a plush tufted pattern that looks at home in both traditional and modern aesthetics.",
            price: "1 200:-",
            quantity: 10 ,
            img:"https://ak1.ostkcdn.com/images/products/is/images/direct/5c35f2eea939e0fdeedf1fa679e099d63dd73185/Polyester-Rolled-Arm-Storage-Bench-Contemporary-Bed-Bench.jpg"
          },
        ]
      },
    ]
  },
]
