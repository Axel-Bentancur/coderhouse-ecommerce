
import Plates from '../assets/plates.jpg';
import Jar from '../assets/jar.jpg';
import D_cup from '../assets/double_cup.jpg';
import Pot from '../assets/pot.jpg';
import A_plate from '../assets/apple_plate.jpg';

export const Data = [
  {
    image: Plates,
    title: 'Serving pottery bowls',
    description: 'This handmade pottery bowl boasts a smooth, round shape that tapers slightly towards the rim. Expertly crafted, it features a rustic, textured exterior that showcases the natural variations in the clay. Perfect for serving a hearty soup or salad, this unique piece is both functional and beautiful, making it a must-have for any home.',
    price: 58,
    quantity: 7,
  },{
    image: D_cup,
    title: 'Model ceramic plates',
    description: 'The ceramic plate is a beautiful piece of handcrafted art. It has a silky texture and features intricate floral designs in soft hues of blue and green. The plate is slightly curved, creating an elegant shape that adds dimension to any table setting. It is sturdy and durable, perfect for serving meals or displaying decorative items. The ceramic material allows for easy cleaning and makes it dishwasher and microwave safe. This plate is not only functional but also a stunning addition to any kitchen or dining room.',
    price: 45,
    quantity: 3,
  },{
    image: Jar,
    title: 'Stoneware set',
    description: "The stoneware plate is a durable and versatile ceramic piece that is perfect for everyday use. Made from natural clay and fired at a high temperature, it is dense, strong, and chip-resistant, making it ideal for serving hot or cold food. Its earthy texture and subtle variations in tone give it a rustic yet elegant look that complements any table setting. The plate's glazed finish not only adds a protective layer but also enhances its natural beauty, making it a practical and stylish addition to your dinnerware collection.",
    price: 48,
    quantity: 15,
  },{
    image: Pot,
    title: 'Candy dish',
    description: "The candy dish is a beautiful glass bowl with a wide opening. It sits on a sturdy pedestal giving it a graceful look. The dish is filled with an array of brightly colored candies, ranging from gummies to hard candies. The sweet smell of the candies wafts from the dish, tempting anyone nearby to take a sample. It's perfect for welcoming guests into your home or adding a touch of whimsy to any room.",
    price: 40,
    quantity: 36,
  },{
    image: A_plate,
    title: 'Wedding Ring Holder',
    description: "The candy dish is a beautiful glass bowl with a wide opening. It sits on a sturdy pedestal giving it a graceful look. The dish is filled with an array of brightly colored candies, ranging from gummies to hard candies. The sweet smell of the candies wafts from the dish, tempting anyone nearby to take a sample. It's perfect for welcoming guests into your home or adding a touch of whimsy to any room.",
    price: 72,
    quantity: 13,
  },
]

export const navLinks = [
  {
    title: 'Shop online',
    path: '/shop',
    show: true
  },
  {
    title: 'About',
    path: '/about',
    show: true
  },
  {
    title: 'Contacts',
    path: '/contact',
    show: true
  },
  {
    title: 'Cart',
    path: '/cart',
    show: false
  },
]

export const tabsData = [
  {
    label: 'DESCRIPTION',
    content:
      'Our exquisite serving pottery bowls, designed to elevate your dining experience. Crafted with precision and care, these bowls are made from high-quality, durable ceramic that ensures long-lasting beauty. Their elegant and timeless design seamlessly blends with any table setting, adding a touch of sophistication. With a perfect size for serving soups, salads, or snacks, these bowls are versatile and functional. To maintain their pristine condition, handwash them gently and avoid exposing them to extreme temperature changes. Indulge in the artistry of our serving pottery bowls and enhance your culinary presentation.',
  },
  {
    label: 'CARE INSTRUCTIONS',
    content:
      'To care for your ceramic plates, wash them by hand using warm water and mild soap. Avoid sudden temperature changes and do not place them directly from the oven into cold water. Gently dry them with a soft cloth and avoid using abrasive brushes or cleaners. With these simple care instructions, your ceramic plates will maintain their beauty and durability over time.',
  },
  {
    label: 'SHIPPING & RETURNS',
    content:
      'For shipping, we offer standard and express delivery. We will process your order within 24 hours and provide you with a tracking number. In the event of a return, please contact us within 14 days of receiving the product. We will provide detailed instructions for returning it in its original packaging. Once received, we will inspect the product and issue a refund within 7 business days. We strive to provide you with efficient shipping service and a hassle-free return process.',
  },
];