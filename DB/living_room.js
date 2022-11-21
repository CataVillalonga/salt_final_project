const data = [
  {
    category: "Living Room",
    img: "",
    subcategories:[
      {
        name: 'Sofas',
        products:[
          {
            id: 1,
            name: "Havana Divan",
            description: "Your living room is your playground, so you make the rules. Introducing the Havana Divan, a modular collection for those who like to be in control; From two seats to ten, left or right corner, with or without an ottoman, it’s your sofa so you choose how you want it. Just sit back and relax, it's time you built a sofa to fit your home and lifestyle.",
            price: "17 499:-",
            quantity: 4,
            img: 'https://images.chilli.se/m%C3%B6bler-soffor-u-soffa/u-soffa-havanna-divan-v%C3%A4nster-inkl-kuvertkuddar-brunbeige-1814982.jpg?w=3048&h=2032&hash=eyJ2IjozLCJ0IjoicHJvZHVjdCIsIm4iOiI5MTc4MjUoMikuanBnIiwib190eXBlIjoiQ0hJTExJX1dFQl9TRTpwcm9kdWN0cyIsIm9faWQiOiI0MTc4MjUiLCJpIjoxODE0OTgyfQ%3D%3D'
          },
          {
            id: 2,
            name: "Martano",
            description: "The Martano 4 seater suite is the perfect combination of size and softness. It's a family-sized sofa ready to make you feel as light as a feather and transport you to a cloud-like state.",
            price: "15 999:-",
            quantity: 9,
            img: 'https://images.trademax.se/m%C3%B6bler-soffor-soffgrupp/martano-soffgrupp-3-sits-soffa-f%C3%A5t%C3%B6lj-brunnatur-3168016.jpg?w=752&h=501&hash=eyJ2IjoyLCJ0IjoicHJvZHVjdCIsIm4iOiIxODA2MjYwKDEyKS5qcGciLCJvX3R5cGUiOiJXRUJfU0U6cHJvZHVjdHMiLCJvX2lkIjoiMTMwNjI2MCIsImkiOjMxNjgwMTZ9'
          },
          {
            id: 3,
            name: "Maddison",
            description: "A smooth and roomy design combined with curvy edges and soft padded cushions make the Orka ideal for any family home. Comes with foam-filled seat cushions for a beautiful look that bounces back - with no need to plump.",
            price: "11 246:-",
            quantity: 16,
            img: 'https://holloways.co.uk/img/c/7397.jpg'
          },
          {
            id: 4,
            name: "Ontario",
            description: "A spacious chaise end and sumptuous cushions make the Plush a luxuriously comfortable place to relax with the whole family. Available in Light and Dark feet at no extra cost.",
            price: "10 000:-",
            quantity: 17,
            img: 'https://i.pinimg.com/736x/82/a4/04/82a404ecb8ce8471d9b4c98e8c287898.jpg'
          },
          {
            id: 5,
            name: "Stockbridge",
            description: "Stockbridge's graceful lines, irresistible comfort and soft-hued palette will work beautifully in a chic contemporary home. Scatter cushions are optional extras and available (in the colour of your choice) at extra cost.",
            price: "7 749:-",
            quantity: 21,
            img: 'https://zoom.sofasandstuff.com/assets/images/sck/Hero%20Images/3se/2-Stockbridge-3-Seater-Sofa-in-Askrigg%20Smoke.jpg'
          }
        ]
      },
      {
        name: 'Coffee Tables',
        products:[
          {
            id: 1,
            name: "Indio Nest Coffee Table",
            description: "Not only does this set provide you with a coffee table, but you will also get 2 side tables! When you need extra surface space or a convenient table, you can easily remove the side tables from beneath the coffee table.",
            price: "2 049:-",
            quantity: 4,
            img: 'https://images.dunelm.com/30810729.jpg?$v8srpgrid$&img404=noimagedefault'
          },
          {
            id: 2,
            name: "Affinity Real Curved Wood Coffee Table",
            description: "Add a safe place for your guests to put their drinks down while you have a lovely catch up. A lower shelf provides you with an extra storage solution to store your essentials. The Affinity coffee table has been crafted from real oak wood veneer and has a sleek curved design. The table top and shelf has been crafted from black tempered safety glass.",
            price: "1 899:-",
            quantity: 10,
            img: 'https://images.dunelm.com/30812462.jpg?$v8srpgrid$&img404=noimagedefault'
          },
          {
            id: 3,
            name: "Carys Grey Coffee Table",
            description: "Complete the look of your living room with the Carys Grey Coffee Table. Featuring an intricately carved out design on the drawer front, this coffee table comes with an ample amount of storage space perfect for magazines, remotes, perfectly in reach but out of sight.",
            price: "1 659:-",
            quantity: 16,
            img: 'https://images.dunelm.com/30747839.jpg?$v8srpgrid$&img404=noimagedefault'
          },
          {
            id: 4,
            name: "Ouray Display Coffee Table",
            description: "Make your front room stand out to your guests by decorating this coffee table with a variety of home decor items. With this coffee table having a lower shelf, it has a lot of surface space to place your belongings onto.",
            price: "1 495:-",
            quantity: 21,
            img: 'https://images.dunelm.com/30810731.jpg?$standardplayerdefault$&img404=noimagedefault'
          },
          {
            id: 5,
            name: "Bromley Coffee Table Grey",
            description: "Make a stylish statement with this lovely coffee table that combines a chic grey painted finish with an oak effect top and handy shelf to keep clutter out of sight. The Bromley coffee table is sure to be your new best friend in the living room and will happily hold onto your drinks and keep your feet up after a long day!",
            price: "1 049:-",
            quantity: 4,
            img: 'https://images.dunelm.com/30781302.jpg?$v8srpgrid$&img404=noimagedefault'
          },
        ]
      },
      {
        name: 'Cabinets',
        products:[
          {
            id: 1,
            name: "Globe Wide Sideboard",
            description: "Contemporary industrial style shows its elegant side in the Globe collection of occasional, storage and dining furniture. Pieces feature beautiful solid oak tops, welded metal bases in fashionable gunmetal grey, and the collection’s signature handcrafted marquetry patterned oak veneers, distressed for an authentic rustic finish.",
            price: "9 599:-",
            quantity: 3,
            img: 'https://i1.adis.ws/i/fv/PRODGLBESIDE---001_globe_wide-sideboard__lifestyle?$product$&w=632&fmt=webp&fmt=webp'
          },
          {
            id: 2,
            name: "Fire 2.0 Sideboard",
            description: "Choose simple, modern industrial style with the Fire 2.0 range, beautifully handcrafted from raw acacia wood and weathered black iron. Matt lacquer brings out the unique grain of the wood, while gun metal black frames add that authentic urban edge.",
            price: "5 599:-",
            quantity: 9,
            img: 'https://i1.adis.ws/i/fv/PRODFIRESB----001_fire-20_sideboard__lifestyle?$large$&$medium_roundel$&badge=5274_ONLINE%20Autumn%20Sale_eyebrow_Christmas_delivery_182x39&w=680&fmt=webp'
          },
          {
            id: 3,
            name: "Calligaris Gate Sideboard",
            description: "The essence of Italian cool, the contemporary Calligaris Gate collection features strong lines, gorgeous finishes and useful functionality. The range centres on a stunning Italian-made dining table that extends to seat ten with a high-precision rotating mechanism.",
            price: "4 599:-",
            quantity: 12,
            img: 'https://i1.adis.ws/i/fv/PRODZFRSP000000000046366_gate_sideboard__lifestyle?$large$&w=680&fmt=webp'
          },
          {
            id: 4,
            name: "Habufa Detroit Sideboard",
            description: "Detroit makes it easy to bring home the very current industrial trend. Perfectly imperfect oak surfaces with deliberately dark knots team with strong metal accents – metal-trimmed legs, borders on the ends of pieces, and drawer handles – in an aesthetic that’s confident and stylish.",
            price: "4 299:-",
            quantity: 17,
            img: 'https://i1.adis.ws/i/fv/PRODDTRISB18--001_habufa_detroit-2-door-2-drawer-small-sideboard__lifestyle?$large$&w=680&fmt=webp'
          },
          {
            id: 5,
            name: "Annecy Wide Sideboard",
            description: "The Annecy dining collection is beautifully elegant in the dining room, and quietly relaxed in the kitchen. Soft grey or antique white painted-finish bases are complemented by grey washed oak or pale oak tops, finished with exquisite marquetry pattern veneers.",
            price: "3 599:-",
            quantity: 20,
            img: 'https://i1.adis.ws/i/fv/PRODZFRSP000000000016712_annecy_wide-sideboard__lifestyle?$product$&w=632&fmt=webp&fmt=webp'
          },
        ]
      },
      {
        name: 'TV Stands',
        products:[
          {
            id: 1,
            name: "Large Light Oak TV Unit",
            description: "Light oak finish is perfect for a neutral living space. Plenty of storage space for all media devices. Suitable for TV's up to 77 inches",
            price: "5 599:-",
            quantity: 4,
            img: 'https://furniture123.co.uk/Images/JAR004_1_Classic.jpg?v=34'
          },
          {
            id: 2,
            name: "Adeline Corner TV Unit",
            description: "Beautifully crafted white and oak corner TV unit. Sleek round chrome handles for a modern twist. Features one cupboard with one shelf for storage.",
            price: "4 599:-",
            quantity: 9,
            img: 'https://furniture123.co.uk/Images/ADE019_1_Supersize.jpg?width=650&height=650&v=5'
          },
          {
            id: 3,
            name: "FTG 4 Drawer TV Unit",
            description: "Elevate your entertaining space with a stand or cabinet in an industrial style. Bringing together wood and metal elements in a chic, stripped-back design, this unique piece is sure to make an impression in any lounge area.",
            price: "3 599:-",
            quantity: 12,
            img: 'https://media.4rgos.it/i/Argos/3320-m053-plpcontent-8569660_C1-tv-unit?qlt=75&fmt=webp'
          },
          {
            id: 4,
            name: "FTG Madrid 3 Drawer TV Unit",
            description: "Made from solid wood and MDF with a painted finish. A contemporary tv-unit including 3 drawers for all your storage needs in an elegant design complete with a simple metal handle.",
            price: "3 099:-",
            quantity: 19,
            img: 'https://media.4rgos.it/i/Argos/1128620_R_Z001C?w=268&h=268&qlt=50&fmt=webp'
          },
          {
            id: 5,
            name: "Habitat Kent Corner TV Unit",
            description: "The Habitat Kent collection comes fully assembled, so you can put your feet up and watch the television as soon as it arrives. Its chunky look with rounded edges make this a sturdy unit, ideal for a busy household.",
            price: "2 599:-",
            quantity: 4,
            img: 'https://media.4rgos.it/i/Argos/0420-m0014-m007-m050-asym-m008-m022-tv-unit-ideas-4012496?maxW=1200&qlt=75&fmt=webp'
          },
        ]
      },
      {
        name: 'Bookcases',
        products:[
          {
            id: 1,
            name: "Modular Fulton 6 Shelf Shelving Unit",
            description: "Stylish and timeless, the modern black and pine colourway along with the style of the frame will give your home an industrial look. Crafted from metal and pine, the Modular Fulton 6 Shelf Modular Shelving Unit can be customised and dressed however you choose, to suit your home décor beautifully.",
            price: "3 049:-",
            quantity: 4,
            img: 'https://images.dunelm.com/60192217.jpg?$v8srpgrid$&img404=noimagedefault'
          },
          {
            id: 2,
            name: "Modular White & Black 5 Shelf Wide Shelving Unit",
            description: "Customised from a metal frame and pine wood shelving, this 5 tier shelving unit combines trendy materials and finishes to bring in additional storage to your space that's both stylish and practical. A stylish display space for all your favourite household items, this shelf adds a dash of elegance to its surroundings and works well as a bookcase or space divider in open plan homes.",
            price: "2 249:-",
            quantity: 7,
            img: 'https://images.dunelm.com/60203171.jpg?$standardplayerdefault$&img404=noimagedefault'
          },
          {
            id: 3,
            name: "Tall Slim Black Book Case Shelving Unit",
            description: "Tall and slim, this stylish shelving unit with a modern black colourway is the perfect way to store all of your bits and bobs, whether in the home office, bedroom or living areas. The powder coated finish makes this both practical and attractive.",
            price: "1 049:-",
            quantity: 11,
            img: 'https://images.dunelm.com/30737075.jpg?$v8srpgrid$&img404=noimagedefault'
          },
          {
            id: 4,
            name: "Bromley Bookcase",
            description: "Display your favourite books, journals, or textbooks in this classically designed large bookcase. This large Bromley Bookcase is designed to work hard and fit in beautifully in any room of your home and features a timeless painted finish and oak top.",
            price: "549:-",
            quantity: 14,
            img: 'https://images.dunelm.com/30771877.jpg?$v8srpgrid$&img404=noimagedefault'
          },
          {
            id: 5,
            name: "Aidan Bookcase",
            description: "Sometimes the simplest designs can be the best - they always stand the test of time after all with ever changing trends. This no-nonsense bookcase is perfect for housing your personal library of books or your favourite trinkets and a few potted plants!",
            price: "349:-",
            quantity: 20,
            img: 'https://images.dunelm.com/30782297.jpg?$v8srpgrid$&img404=noimagedefault'
          },
        ]
      }
    ]
  }
]