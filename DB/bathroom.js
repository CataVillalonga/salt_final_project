const data = [
  {
    category: "Bathroom",
    img: "",
    subcategories:[
      {
        name: 'Baths',
        products:[
          {
            id: 1,
            name: "HAFA Sun Square",
            description: "A rectangular straight bath from HAFA has a simple, straight style suited to most bathroom layouts. The bath comes with two tap mounting holes and holds 156L litres of water.",
            price: "14 496:-",
            quantity: 4,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/263/714/DV_8_5940145_01_4c_SE_20171101092928.jpg'
          },
          {
            id: 2,
            name: "HAFA Original",
            description: "This oval freestanding bath from HAFS has a indulgent design which can create a stunning focal point in your bathroom. This style gives you greater flexibility with where it's placed, and is ideal for larger bathrooms. It's designed so you can choose where to place your bath taps and holds 230L litres of water.",
            price: "11 776:-",
            quantity: 10,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/263/706/DV_8_5940146_01_4c_SE_20171101092730.jpg'
          },
          {
            id: 3,
            name: "HAFA Queen",
            description: "A rectangular straight bath from HAFA has a simple, straight style suited to most bathroom layouts. The bath comes with two tap mounting holes and holds 200L litres of water.",
            price: "11 560:-",
            quantity: 15,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/270/519/DV_8_5494633_01_4c_SE_20171115120239.jpg'
          },
          {
            id: 4,
            name: "HAFA Hampton",
            description: "A straight bath from HAFA has a simple, straight style suited to most bathroom layouts. The bath comes with two tap mounting holes and holds 200L litres of water. Compatible with plug and chain or pop up waste.",
            price: "11 232:-",
            quantity: 21,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/497/352/3/DV_8_8374813_01_4c_SE_20171027160939.jpg'
          },
          {
            id: 5,
            name: "Noro",
            description: "This modern bath from Noro is designed to save room in your bathroom with its ergonomic design and narrow width",
            price: "9 692:-",
            quantity: 34,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/492/397/667/DV_8_10582269_01_4c_DE_20220721165042.jpg'
          }
        ]
      },
      {
        name: 'Showers',
        products:[
          {
            id: 1,
            name: "Mora",
            description: "Featuring Quiet Mark approved, quiet pump technology for a relaxing shower experience, the Mora silent running power shower is a great choice for low pressure systems.",
            price: "1 749:-",
            quantity: 8,
            img: 'https://www.hornbach.se/cms/media/_se_media/sortiment_2/badrum___sanitaer/duschar___duschsystem/duschset/filtertsr_duschset_1_Pic_237.jpg'
          },
          {
            id: 2,
            name: "Grohe",
            description: "The Grohe mixer power shower is the quick and easy way to install a pumped shower if you have a gravity system. The mixer power shower comes with a unique bimetallic thermostatic technology and offers a superb power shower performance",
            price: "1 069:-",
            quantity: 6,
            img: 'https://www.hornbach.se/cms/media/_se_media/sortiment_2/badrum___sanitaer/duschar___duschsystem/duschset/filtertsr_duschset_2-3_Pic_237.jpg'
          },
          {
            id: 3,
            name: "Duravit",
            description: "The Duravit is quick and easy to install, with subtle chrome elements to compliment any contemporary bathroom. Dial temperature controls are easy to use to set your preferred showering temperature",
            price: "749:-",
            quantity: 12,
            img: 'https://www.duravit.se/photomanager-duravit/file/8a8a818d61bf18410161cc5fba6c00d9/cat_faucets_shower-heads.jpg'
          },
          {
            id: 4,
            name: "Parisi",
            description: "Featuring Quiet Mark approved, quiet pump technology for a relaxing shower experience, the Parisi silent running power shower is a great choice for low pressure systems.",
            price: "649:-",
            quantity: 18,
            img: 'https://www.hornbach.se/cms/media/_se_media/sortiment_2/badrum___sanitaer/duschar___duschsystem/duschset/filtertsr_duschset_4-5_Pic_237.jpg'
          },
          {
            id: 5,
            name: "Lillrevet",
            description: "The Lillrevet mixer power shower is the quick and easy way to install a pumped shower if you have a gravity system. The mixer power shower comes with a unique bimetallic thermostatic technology and offers a superb power shower performance",
            price: "549:-",
            quantity: 22,
            img: 'https://www.ikea.com/ext/ingkadam/m/7d02f51c36ff0343/original/PH169533-crop001.jpg?f=s'
          }
        ]
      },
      {
        name: 'Basins',
        products:[
          {
            id: 1,
            name: "HAFA Life",
            description: "This ceramic single bowl countertop basin from HAFA Lana range has a single tap hole ready for you to pick the mixer tap that suits you.",
            price: "7 472:-",
            quantity: 5,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/411/323/DV_8_5940237_01_4c_SE_20180809164700.jpg'
          },
          {
            id: 2,
            name: "HAFA Life",
            description: "This HAFA wash basin & drawer set has a sleek but simple design makes it a seamless addition to your existing bathroom fixtures.",
            price: "6 656:-",
            quantity: 7,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/411/324/DV_8_5940239_01_4c_SE_20180809171653.jpg'
          },
          {
            id: 3,
            name: "HAFA Go",
            description: "This simple white ceramic basin will work with a whole host of décor styles and is the perfect finishing touch to smaller spaces - whether you are just upgrading sinks or completing your new bathroom project.",
            price: "2 032:-",
            quantity: 10,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/371/340/DV_8_6250199_01_4c_SE_20180530164641.jpg'
          },
          {
            id: 4,
            name: "HAFA Go",
            description: "This elegant countertop basin is ideal for bringing a contemporary and spa-like luxe to your home. Countertop basins take up less room than traditional pedestal basins, leaving you plenty of space for your pampering essentials.",
            price: "1 649:-",
            quantity: 15,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/371/336/DV_8_6250198_01_4c_SE_20180530164527.jpg'
          },
          {
            id: 5,
            name: "Milobad",
            description: "This GoodHome Cavally wash basin & pedestal set has a sleek but simple design makes it a seamless addition to your existing bathroom fixtures.",
            price: "899:-",
            quantity: 32,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/954/640/DV_8_10347387_01_4c_SE_20210108164757.jpg'
          }
        ]
      },
      {
        name: 'Toilets',
        products:[
          {
            id: 1,
            name: "Duravit 1930 with bidet",
            description: "Toilet with bidet Wash function, heated seat and dryer, the Duravit 1930 Toilet is a luxurious and hygienic choice",
            price: "8 049:-",
            quantity: 3,
            img: 'https://img.bygghemma.se/pimages/toalettstol-duravit-1930-p-las__65dba905-aa7e-4889-9649-1d2fff1af77b.jpg?auto=format,compress&w=673&h=673&dpr=2&q=30'
          },
          {
            id: 2,
            name: "Duravit",
            description: "This Duravit rimless close-coupled toilet pan will help to make any bathroom a more hygienic space.",
            price: "7 809:-",
            quantity: 7,
            img: 'https://img.bygghemma.se/pimages/toalettstol-duravit-d-code-golvstaende__2644d68b-9f4a-49e2-8a1a-8378184d5c7b.jpg?auto=format,compress&w=673&h=673&dpr=2&q=30'
          },
          {
            id: 3,
            name: "Duravit",
            description: "This open back close-coupled toilet from the Duravit range comes with a standard close lid and white seat. It also includes dual flush.",
            price: "7 284:-",
            quantity: 15,
            img: 'https://img.bygghemma.se/pimages/toalettstol-duravit-durastyle-golvstaende__bf24fad5-e316-4301-8df7-b57eeff00bed.jpg?auto=format,compress&w=673&h=673&dpr=2&q=30'
          },
          {
            id: 4,
            name: "Gustavsberg",
            description: "Our toilets help make day to day life that little bit easier. This product is a compact space saving toilet and quick release toilet seat makes it so much easier to clean.",
            price: "2 610:-",
            quantity: 21, 
            img: 'https://img.bygghemma.se/pimages/toalettstol-duravit-durastyle-010801-komplett__31289dcb-bfb4-4fc9-b234-178968af7d90.jpg?auto=format,compress&w=673&h=673&dpr=2&q=30'
          },
          {
            id: 5,
            name: "Jungborn",
            description: "The Jungborn is our contemporary take on iconic deco style. Strong angular details make this low-level toilet a showpiece bringing a modern hint of period drama to any bathroom. Finish your suite with one of our complementing Jungborn ranged basins.",
            price: "2 099:-",
            quantity: 33,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/359/331/DV_8_6237199_02_4c_DE_20200824151651.jpg'
          }
        ]
      },
      {
        name: 'Toilets',
        products:[
          {
            id: 1,
            name: "Smedbo Radiator",
            description: "A great towel warmer not only heats your towels and bathroom, but will help to make your bathroom a warm and comfortable place in which to relax. Our range includes a number of stunning warmers that suit both contemporary and more traditional bathroom interiors.",
            price: "2 232:-",
            quantity: 5,
            img: 'https://www.hornbach.se/cms/media/_se_media/sortiment_2/badrum___sanitaer/handdukstork/Handdukstork_el_Pic_237.jpg'
          },
          {
            id: 2,
            name: "Focco Mirror",
            description: "This is a beautiful practical round mirror. A simple yet classically designed mirror, perfect for quick check-ups before you leave the house. Featuring a sleek and slender metallic frame, its minimalist style is ideal for hanging up in your modern style bathroom and hallway. Inject some style and function in your living space.",
            price: "2 099:-",
            quantity: 9,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/492/165/797/DV_8_10475640_05_4c_DE_20211004114656.jpg'
          },
          {
            id: 3,
            name: "HAFA Cabinet",
            description: "The HAFA range comes in matt white or matt grey finish and offers modern bathroom cabinets, sink cabinets and drawer units to cater for all your bathroom storage needs. Perfect for any bathroom to add a touch of charm while maintaining a simple look.",
            price: "1 895:-",
            quantity: 12,
            img: 'https://cdn.hornbach.se/data/shop/D04/001/780/491/580/597/DV_8_10026159_01_4c_SE_20190511211654.jpg'
          },
          {
            id: 4,
            name: "Noble House Bathroom Mat",
            description: "Maximise comfort and style throughout your bathroom with our anti-bacterial bath mat, featuring a layer of memory foam for extra cushioning. The mat is finished with an ant-bacterial treatment to help hinder the growth of mould and bacteria for up to 20 washes. 70x120cm",
            price: "379:-",
            img: 'https://www.hornbach.se/cms/media/_se_media/sortiment_2/badrum___sanitaer/badrumstillbehoer/badrumsaccessoarer/korstsr_badrumsmatta_1_Pic_175.jpg'
          },
          {
            id: 5,
            name: "Corner Shelf",
            description: "Our premium bathroom wall shelf adds a modern touch as well as expands the storage space to your bathroom. The stainless steel construction creates a clean look and ensures its durability.",
            price: "259:-",
            quantity: 19,
            img: 'https://www.hornbach.se/cms/media/_se_media/sortiment_2/badrum___sanitaer/badrumstillbehoer/badrumsaccessoarer/sort_tsr_badrumsaccessoarer_duschkorgar_Pic_175.jpg'
          }
        ]
      }
    ]
  },
]