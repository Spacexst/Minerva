const PRODUCTS = [
    {
        id:"1",
        name:"Classics",
        tag:"Cl-101",
        price: 54,
        image: require("../assets/book2.jpg"),
         description:"Title: A Tale of Two Cities by Charles Dickens,A Story of the French Revolution,[Most recently updated: December 20, 2020]",
        
    },  
    {
        id: 2,
        name: "Science-fiction",
        tag:"SF-102",
        price: 39,
        image: require("../assets/book3.jpg"),
        description:"Title:Stranger In A Strange Land by Robert A. Heinlein, Epic, ambitious and entertaining is an international best seller,first published in 1961" ,
            
    },
    {
    id: 3,
    name: "Children's Literature",
    tag:"CH-103",
    price: 25,
    image: require("../assets/Charlie.jpg"),
    description: "Title:Charlie And The Chocolat Factory by Roald Dahl,story a boy who is honest and kind, brave and true, and good, first published in 1964",
    },
    {
    id: 4,
    name: "Used Books",
    tag:"UB-104",
    price: 11.49,
    image: require("../assets/PrideandPrejudice.jpg"),
    description: "Pride and Prejudice by Jane Austen, a remarkably witty,romantic novel revolving around protagonist Elizabeth, was first published in 1813."
    },
]

export function getProducts(){
    return PRODUCTS;
}

export function getProduct(id){
    return PRODUCTS.find((product) => product.id == id);
}