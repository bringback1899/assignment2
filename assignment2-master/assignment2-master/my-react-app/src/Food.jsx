import React from 'react';
import './Food.css'; // Ensure this CSS file exists

function Food() {
  const foods = [
    {
      name: "Siam Road Char Koay Teow",
      image: "/image/charkueyteow.jpg",
      description: (
        <>
          Enjoy yourself a bowl of Penang famous Cendol is a must after some mouthwatering dishes.
          Upon reaching Penang Road, you will spot an enthusiastic crowd queuing patiently to taste the legendary Teochew Cendol.
          A bowl of Cendol comes with green rice flour jelly, coconut milk, and palm sugar syrup.
          You can also opt for Ais Kacang here. Nothing like enjoying a bowl of cooling Teochew on a sunny day. Yum.
          <br /><br />
          <strong>Address:</strong> Lebuh Keng Kwee, George Town, 10100 George Town, Pulau Pinang
          <br />
          <strong>Operating Hours:</strong> 10.30 AM – 7PM (Monday-Friday) | 10AM-7.30PM (Saturday & Sunday)
        </>
      )
    },
    {
      name: "Penang Road Famous Laksa",
      image: "/image/laksa.jpg",
      description: (
        <>
          This famous laksa shop serves lai fun noodles in a sardine broth with exceptional depth and flavours alongside an array of condiments.
          For those with bigger appetites, order char koay teow with duck egg to go with the laksa.
          <br /><br />
          <strong>Address:</strong> 5-7, Lebuh Keng Kwee, George Town, 10100 George Town, Pulau Pinang
          <br />
          <strong>Operating Hours:</strong> 9AM - 5:30PM (Monday-Sunday) | Closed on Wednesday
        </>
      )
    },
    {
      name: "Nasi Kandar Sulaiman",
      image: "/image/nasikandar.jpg",
      description: (
        <>
          One is definitely no stranger to Nasi Kandar Sulaiman! As a viral hit among Penangites of all ages.
          This mamak serves up some delightfully surr nasi kandar.
          Packed to the brim with authentic lauk pauk such as squid, ayam bawang, okra, prawns, fish and flooded with your choice of curry gravy.
          You’ll definitely feel like you’ve won the lottery here. Memang sedap!
          <br /><br />
          <strong>Address:</strong> 739, Jalan Air Itam, George Town, 10460 George Town, Pulau Pinang
          <br />
          <strong>Operating Hours:</strong> Monday to Sunday (6.30AM – 2.30 PM)
        </>
      )
    },
    {
      name: "Chulia Street Curry Mee",
      image: "/image/currymee.webp",
      description: (
        <>
          One of the best places to fill up your tummy with the best of Penang’s street food is none other than at the hawkers along Chulia Street.
          While it’s commonly known for its Wan Tan Mee, the Curry Mee is a hit here too.
          A bowl of Curry Mee here packs a punch with its aromatic coconut milk broth.
          In fact, the seemingly ordinary bowl of noodles is brought to another level after mixing with the chilli paste.
          <br /><br />
          <strong>Address:</strong> Lebuh Chulia, 10200, Georgetown, Penang
          <br />
          <strong>Operating Hours:</strong> 6 PM-12 AM | Closed on Monday
        </>
      )
    },
    {
      name: "Granny's Hokkien Mee",
      image: "/image/hokkienmee.jpg",
      description: (
        <>
          Just like its name suggested, this restaurant specializes in cooking old-style Hokkien Mee just like the one Granny would make.
          The restaurant has been in operation since 2014 and is known for its flavorful and authentic prawn noodles.
          Just like the rest of the restaurants, their soup is thick and concentrated with prawn flavours.
          Also, order their Lor Bak (marinated meat rolls) and Chicken Feet for the ideal pair to your spicy bowl of Hokkien Mee.
          <br /><br />
          <strong>Address:</strong> Lengkok Nipah, Taman Lip Sin, 11900 Bayan Lepas, Pulau Pinang
          <br />
          <strong>Operating Hours:</strong> 7:15AM–2:15PM | Closed on Mondays
        </>
      )
    },
    {
      name: "Hock Seng Rojak",
      image: "/image/rojak.jpg",
      description: (
        <>
          Hock Seng Rojak King is a small family business stall that pairs rojak with their own gooey Malt Sugar Paste.
          They’ve been around in the neighbourhood for over 40 years.
          The stall will usually have 20 customers lined up even before they open the stall.
          In fact, customers are willing to wait in line for an hour just to get a bowl of this Rojak.
          You can choose from 3 different sizes of rojak with 3 different price points.
          Upon ordering, you will get a mixed bowl of fruits, fritters, and cuttlefish generously topped with thick maltose like prawn sauce and sprinkled with fragrant grilled small shrimp.
          <br /><br />
          <strong>Address:</strong> Gat Lebuh Cecil, 10300 George Town, Pulau Pinang
          <br />
          <strong>Operating Hours:</strong> 3.00 PM – 8.30 PM (Wed – Sun) | Closed on Monday and Tuesday
        </>
      )
    },
    {
      name: "Restoran Bee Hooi Fried Oyster",
      image: "/image/oyster.jpg",
      description: (
        <>
          Located in the heart of Burmah Road, Bee Hooi Restaurant is a popular spot flocked with locals to satisfy oyster omelette cravings.
          With the right combination of starch and egg batter, the omelette is fried to perfection.
          A dip of its fresh, plump oysters into the slightly sour yet spicy chilli sauce is a heavenly combination.
          Needless to say, it has all the flavours of what a good ‘oh chien’ in Penang.
          <br /><br />
          <strong>Address:</strong> 415, Jalan Burma, Pulau Tikus, 10350 George Town, Pulau Pinang
          <br />
          <strong>Operating Hours:</strong> 06:00 PM – 12:00 AM | Close on Tuesday
        </>
      )
    },
    {
      name: "Aki Pancake Apam Balik",
      image: "/image/apambalik.jpeg",
      description: (
        <>
          Selling pancakes, Chinese style (ban chang kueh, or apom pancake, or even dai kau min) the difference between Aki and the countless other stalls selling the pancakes lies in the ingredients sandwiched between the hot, chewy dough.
          The spicy chicken Mcdeulxe might have shrunken in size but not the filling here.
          Aki Pancake is all about the filling it up lifestyle so brace yourself for an explosion mess you’ll want to have more than once!
          Tip: Queues can be avoided if you’re the 1st person to arrive.
          <br /><br />
          <strong>Address:</strong> Bayan Lepas, 47, Jalan Nipah, Bayan Lepas, 11900 Bayan Lepas, Penang
          <br />
          <strong>Operating Hours:</strong> 6 PM to 9 PM | Closed on Wednesday.
        </>
      )
    },
    {
      name: "Penang Famous Road Teochew Chendul",
      image: "/image/cendol.webp",
      description: (
        <>
          We don’t even need to elaborate further when it comes to Penang Road Famous Teochew Chendul.
          Literally everyone flocks this stall when it comes to first-time having cendol.
          Having a history of over 80 years, they’ve come a long way.
          From a small pushcart to having multiple outlets even in Klang.
          Still, you could find the original one tucked in Penang Road.
          You get your bowl of cendol in no time upon ordering.
          The flavors, the combination is there, though we thought portion is relatively small.
          It’s almost impossible to get a seat during peak hours or holidays.
          Standing by the roadside with a little sunbath while enjoying that bowl of cendol is part of the experience.
          <br /><br />
          <strong>Address:</strong> Jalan Penang, George Town, 10450 George Town, Pulau Pinang.
          <br />
          <strong>Operating Hours:</strong> (Mon-Fri) 10:30 a.m.-7 p.m. (Sat&Sun) 10:30 a.m.-7:30 p.m.
        </>
      )
    },
    {
      name: "OO White Coffee",
      image: "/image/whitecoffee.jpg",
      description: (
        <>
          Experience the bustling air of the Malaysian traditional kopitiam at this notable coffee shop.
          Situated at the starting point of Carnavon Street, OO White Coffee has succeeded in impressing both locals and tourists with their wide array of local delights,
          and their crowd-pulling business has led them to open more outlets throughout the state.
          First-time visitors should order their signature Steamed Bun with Kaya, paired best with their smoky White Coffee.
          (Psst… another tip: order their Beef Koay Teow Soup)
          <br /><br />
          <strong>Address:</strong> Carnavon Street, George Town, Pulau Pinang
          <br />
          <strong>Operating Hours:</strong> 8:00 AM – 6:00 PM (Daily)
        </>
      )
    }
  ];

  return (
    <div className="food-container">
      <header>
        <h1>Food and Beverages</h1>
      </header>
      <ul>
        {foods.map((food, index) => (
          <li key={index} className="food-item">
            <h2>{food.name}</h2>
            <img src={food.image} alt={food.name} className="food-image" />
            <p>{food.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Food;