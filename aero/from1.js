let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "file:///C:/Users/k%20vishnu/Pictures/Screenshot_2022-10-31-19-39-54-74_680d03679600f7af0b4c700c6b270fe7.jpg",
      },
        {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image:"file:///C:/Users/k%20vishnu/Pictures/Screenshot_2022-10-31-23-14-44-59_680d03679600f7af0b4c700c6b270fe7.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "file:///C:/Users/k%20vishnu/Pictures/Screenshot_2022-10-31-20-29-25-83_680d03679600f7af0b4c700c6b270fe7.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "file:///C:/Users/k%20vishnu/Pictures/Screenshot_2022-10-31-23-15-30-03_680d03679600f7af0b4c700c6b270fe7.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "file:///C:/Users/k%20vishnu/Pictures/Screenshot_2022-10-31-20-33-54-52_680d03679600f7af0b4c700c6b270fe7.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "file:///C:/Users/k%20vishnu/Pictures/Screenshot_2022-10-31-20-32-47-30_680d03679600f7af0b4c700c6b270fe7.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "file:///C:/Users/k%20vishnu/Pictures/Screenshot_2022-10-31-20-36-02-55_680d03679600f7af0b4c700c6b270fe7.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "file:///C:/Users/k%20vishnu/Pictures/Screenshot_2022-10-31-20-27-02-28_680d03679600f7af0b4c700c6b270fe7.jpg",
      },
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };