export interface Product {
  id: number;
  name: string;
  category: string;
  presentation: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Paceña",
    category: "cervezas",
    presentation: "Botella retornable 620 ml",
    price: 12,
    image: "https://res.cloudinary.com/dqgcyonb9/image/upload/v1795482335/Chavez/beer/qu4ilbpirlmpez5o9gdk.jpg",
  },
  {
    id: 2,
    name: "Huari",
    category: "cervezas",
    presentation: "Botella retornable 620 ml",
    price: 14,
    image: "https://res.cloudinary.com/dqgcyonb9/image/upload/v1795482336/Chavez/beer/iararb0nvqxbsuoctalz.jpg",
  },
  {
    id: 3,
    name: "Paceña Lata",
    category: "cervezas",
    presentation: "Lata 354 ml",
    price: 9,
    image: "https://res.cloudinary.com/dqgcyonb9/image/upload/v1795482335/Chavez/beer/y7gpxmwr11uft8z1zmq2.jpg",
  },
  {
    id: 4,
    name: "Potosina",
    category: "cervezas",
    presentation: "Botella retornable 620 ml",
    price: 12,
    image: "https://res.cloudinary.com/dqgcyonb9/image/upload/v1795482335/Chavez/beer/naoil0ittel19xq0rwan.jpg",
  },
  {
    id: 5,
    name: "Taquiña",
    category: "cervezas",
    presentation: "Botella retornable 620 ml",
    price: 12,
    image: "https://res.cloudinary.com/dqgcyonb9/image/upload/v1795482335/Chavez/beer/avkwxqaeffeiuyov7bkf.jpg",
  },
  {
    id: 6,
    name: "Paceña Black",
    category: "cervezas",
    presentation: "Botella retornable 620 ml",
    price: 14,
    image: "https://res.cloudinary.com/dqgcyonb9/image/upload/v1795482335/Chavez/beer/hliryvxfcivyhaon3clz.jpg",
  },
];
