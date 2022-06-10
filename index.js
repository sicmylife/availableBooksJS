// write solution here


// function Book(title,author,ISBN,numCopies){
//     this.title = title;
//     this.author =  author;
//     this.ISBN = ISBN;
//     this.numCopies =numCopies;
// }

// Book.prototype.getAvailability = function(){
//     if (this.numCopies===0){
//         return 'Out of stock';
//     } else if (this.numCopies<10){
//         return 'Low stock';
//     } 
//     return 'In stock';
// }

// Book.prototype.sell = function(numCopiesSold=1){
// this.numCopies-= numCopiesSold;
// }

// Book.prototype.restock = function(numCopiesSold=5){
// this.numCopies+= numCopiesSold;
// }


class Book {
    constructor (title , author, ISBN, numCopies){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    get availability(){
        return this.getAvailability();
    }

    getAvailability(){
        if(this.numCopies===0){
            return 'Out of stock';
        } else if (this.numCopies<10){

            return 'Low stock'
        }
        return 'In stock'
            }
            
 
    
    sell(numCopiesSold=1){
        this.numCopies -=numCopiesSold;
    }
    restock(numCopiesRestock=5){
        this.numCopies+=numCopiesRestock;
    }

}

const HungerGames = new Book("Hunger Games","Juanito Alimaa","23425",5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17)
console.log(HungerGames.getAvailability());

