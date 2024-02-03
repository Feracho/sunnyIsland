const recipes = [
  {
    id: 1,
    title: "Callaloo, Macaroni Pie, & Stew Chicken",
    description: "A traditional Trinidad and Tobago dish with stew chicken, fresh Dasheen leaves and spices blended to make callaloo, and a blend of nice cheese to make a macaroni pie.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe1.png",
    link: "https://www.youtube.com/watch?v=V_FZJXGijBs"
  },
  {
    id: 2,
    title: "Indian Butter Chicken",
    description: "A creamy tomato-based curry made with chicken and a blend of warm spices.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe2.png",
    link: "https://www.indianhealthyrecipes.com/butter-chicken/"
  },
  {
    id: 3,
    title: "Trinidad Chicken Pelau",
    description: "A flavorful stewed chicken recipe, a staple of Trinidadian cuisine, rice and stewed pigeon peas",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe3.png",
    link: "https://www.youtube.com/watch?v=VmdAmyUMZwo"
  },
  {
    id: 4,
    title: "Mexican Chicken Fajitas",
    description: "A dish made with grilled chicken, onions, and bell peppers, served with tortillas.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe4.png",
    link: "https://www.simplyrecipes.com/recipes/chicken_fajitas/"
  },
  {
    id: 5,
    title: "Okra & Rice with Saltfish",
    description: "A classic Caribbean dish consisting of rice, okra, and various herbs and spices mixed together with saltfish",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe5.png",
    link: "https://cleoscooking.com/recipe-items/okra-rice/"
  },
  {
    id: 6,
    title: "Jamaican Jerk Chicken",
    description: "Chicken marinated in a spicy jerk seasoning and grilled to perfection.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe6.png",
    link: "https://www.jamaicanmedium.com/recipes/recipe/jamaican-jerk-chicken-recipe/"
  },
  {
    id: 7,
    title: "Curry Chicken with Trinidad Style Roti",
    description: "Rich spices in a curry sauce, served with soft, flat Trinidadian roti bread.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe7.png",
    link: "https://www.africanbites.com/curry-chicken/"
  },
  {
    id: 8,
    title: "Mexican Arroz con Pollo",
    description: "A hearty dish featuring rice, chicken, vegetables, and a flavorful blend of spices.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe8.png",
    link: "https://www.simplyrecipes.com/recipes/arroz_con_pollo/"
  },
  {
    id: 9,
    title: "Trinidad Doubles",
    description: "A popular street food consisting of two baras (flat fried bread) filled with curry channa (chickpeas).",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe9.png",
    link: "https://www.simplytrinicooking.com/trinidad-doubles/"
  },
  {
    id: 10,
    title: "King Fish Meal",
    description: "A flavorful fish dish, often grilled or fried, popular in Caribbean cuisine.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe10.png",
    link: "https://www.youtube.com/watch?v=P2T_MneXmvM"
  },
  {
    id: 11,
    title: "Chinese Special Fried Rice",
    description: "A flavorful fried rice dish with shrimp, pork, chicken, eggs, and mixed vegetables, seasoned with soy sauce.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe11.png",
    link: "https://www.example.com/chinese-special-fried-rice"
  },
  {
    id: 12,
    title: "Japanese Hibachi Steak and Shrimp",
    description: "Grilled steak and shrimp cooked on a traditional Japanese hibachi grill, served with fried rice and vegetables.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe12.png",
    link: "https://www.example.com/japanese-hibachi-steak-shrimp"
  },
  {
    id: 13,
    title: "Korean BBQ Beef Bulgogi",
    description: "A popular Korean BBQ dish featuring thinly sliced marinated beef, grilled and served with a side of steamed rice.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe13.png",
    link: "https://www.example.com/korean-bbq-beef-bulgogi"
  },
  {
    id: 14,
    title: "Nigerian Jollof Rice",
    description: "A West African favorite, this spicy one-pot rice dish is made with tomatoes, onions, and bell peppers.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe14.png",
    link: "https://www.example.com/nigerian-jollof-rice"
  },
  {
    id: 15,
    title: "Ethiopian Doro Wat",
    description: "A spicy chicken stew served with hard-boiled eggs and injera, an Ethiopian sourdough flatbread.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe15.png",
    link: "https://www.example.com/ethiopian-doro-wat"
  },
  {
    id: 16,
    title: "Jamaican Oxtail Stew",
    description: "A rich and flavorful stew made with oxtail, butter beans, and a blend of Jamaican spices.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe16.png",
    link: "https://www.example.com/jamaican-oxtail-stew"
  },
  {
    id: 17,
    title: "Guyanese Pepperpot",
    description: "A traditional Guyanese dish made with beef, cinnamon, cassareep (a special Guyanese sauce), and hot peppers.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe17.png",
    link: "https://www.example.com/guyanese-pepperpot"
  },
  {
    id: 18,
    title: "Chinese Lemon Chicken",
    description: "Crispy fried chicken pieces coated in a sweet and tangy lemon sauce.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe18.png",
    link: "https://www.example.com/chinese-lemon-chicken"
  },
  {
    id: 19,
    title: "Japanese Sushi Platter",
    description: "An assortment of fresh sushi and sashimi, including nigiri, maki, and California rolls.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe19.png",
    link: "https://www.example.com/japanese-sushi-platter"
  },
  {
    id: 20,
    title: "Korean Kimchi Jjigae",
    description: "A spicy and hearty Korean stew made with kimchi, pork, tofu, and various vegetables.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe20.png",
    link: "https://www.example.com/korean-kimchi-jjigae"
  },
  {
    id: 21,
    title: "Nigerian Egusi Soup",
    description: "A rich and savory West African soup made with ground melon seeds, spinach, and assorted meats.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe21.png",
    link: "https://www.example.com/nigerian-egusi-soup"
  },
  {
    id: 22,
    title: "Ethiopian Kitfo",
    description: "A traditional Ethiopian dish of minced raw beef, marinated in mitmita (a spicy chili powder) and niter kibbeh (clarified butter).",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe22.png",
    link: "https://www.example.com/ethiopian-kitfo"
  },
  {
    id: 23,
    title: "Jamaican Curry Goat",
    description: "A popular Jamaican dish featuring goat meat slow-cooked in a fragrant curry sauce.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe23.png",
    link: "https://www.example.com/jamaican-curry-goat"
  },
  {
    id: 24,
    title: "Guyanese Chow Mein",
    description: "A flavorful noodle dish with a mix of chicken, vegetables, and Guyanese spices.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe24.png",
    link: "https://www.example.com/guyanese-chow-mein"
  },
  {
    id: 25,
    title: "Chinese Peking Duck",
    description: "A famous Chinese dish of roasted duck known for its crispy skin, served with pancakes and hoisin sauce.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe25.png",
    link: "https://www.example.com/chinese-peking-duck"
  },

  {
    id: 26,
    title: "Trinidad Shark and Bake",
    description: "A popular street food featuring fried shark stuffed in a fried dough ('bake') with various condiments and vegetables.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe26.png",
    link: "https://www.example.com/trinidad-shark-and-bake"
  },
  {
    id: 27,
    title: "Trinidad Stewed Red Beans",
    description: "A hearty dish of red beans slow-cooked with herbs, spices, and coconut milk, often served with rice.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe27.png",
    link: "https://www.example.com/trinidad-stewed-red-beans"
  },
  {
    id: 28,
    title: "Trinidadian Corn Soup",
    description: "A rich and flavorful soup made with corn, coconut milk, and a medley of vegetables and spices, often sold by street vendors.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe28.png",
    link: "https://www.example.com/trinidadian-corn-soup"
  },
  {
    id: 29,
    title: "Trinidad Pelau with Beef",
    description: "A one-pot dish with caramelized beef, rice, pigeon peas, and coconut milk, infused with Caribbean flavors.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe29.png",
    link: "https://www.example.com/trinidad-pelau-with-beef"
  },
  {
    id: 30,
    title: "Trinidad Stewed Pigeon Peas",
    description: "A hearty and savory side dish made with pigeon peas stewed with garlic, onions, coconut milk, and Caribbean herbs, often served with rice or roti.",
    imageUrl: "https://sunnyisland.s3.us-east-2.amazonaws.com/media/images/recipes/recipe30.png",
    link: "https://www.example.com/trinidad-stewed-pigeon-peas"
  }

];

export default recipes;
