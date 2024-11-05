// src/App.jsx
import React from 'react';
import CardList from './Card-list';

const data = [{
  image:
    "https://img.freepik.com/free-photo/animal-lizard-nature-multi-colored-close-up-generative-ai_188544-9072.jpg",
  title: "Card 1",
  description: "This is description of card-1",
},

{
  image:
    "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
  title: "Card 2",
  description: "This is description of card-2",
},

{
  image:
    "https://cdn.pixabay.com/photo/2024/05/08/17/45/animal-8748794_640.jpg",
  title: "Card 3",
  description: "This is description of card-3",
},

{
  image:
    "https://static.vecteezy.com/system/resources/thumbnails/031/425/606/small_2x/portrait-of-white-tiger-hiding-or-lurking-in-the-forest-hunting-for-preys-animals-wildlife-concept-animal-in-the-jungle-dangerous-time-photo.jpeg",
  title: "Card 4",
  description: "This is description of card-4",
},

{
  image:
    "https://cdn.britannica.com/80/170680-131-DA86771C/Bahai-House-of-Worship-Lotus-Temple-Delhi-India.jpg",
  title: "Card 5",
  description: "This is description of card-5",
},

{
  image:
    "https://cdn.pixabay.com/photo/2022/05/22/17/22/building-7214070_1280.jpg",
  title: "Card 6",
  description: "This is description of card-6",
},

{
  image:
    "https://www.goconstruct.org/media/ktblgpd5/petronas.jpg?anchor=center&mode=crop&width=940&height=610&rnd=132743881541200000",
  title: "Card 7",
  description: "This is description of card-7",
},

{
  image:
    "https://www.ubm-development.com/magazin/wp-content/uploads/2020/03/kl-main-building-d-Kopie.jpg",
  title: "Card 8",
  description: "This is description of card-8",
},

{
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtg6SNRxoTBGTHMxnV59khl2t1dAS0oynUMg&s",
  title: "Card 9",
  description: "This is description of card-9",
},

{
  image:
    "https://img.freepik.com/premium-photo/amazing-scene-with-mountains-sunrise-from-top-mountain-beautiful-landscape-mountains-sunrise_372999-8363.jpg",
  title: "Card 10",
  description: "This is description of card-10",
},

{
  image:
    "https://www.shutterstock.com/image-illustration/old-ship-sunset-sea-illustration-260nw-2418423199.jpg",
  title: "Card 11",
  description: "This is description of card-11",
},

{
  image:
    "https://wallpapers.com/images/hd/goku-cool-anime-6kbwj9794wpnsfr1.jpg",
  title: "Card 12",
  description: "This is description of card-12",
},
];

const App = () => {
  return (
    <div className="app">
      <h2>All the cards are here</h2>
      <CardList items={data} />
    </div>
  );
};

export default App;
