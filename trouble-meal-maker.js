const menu = {
    _courses: {
       appetizers: [], 
       mains: [],
       desserts: []
   },
   get courses () {
     return this._courses;
   },
  //  should allow you to add appetizer, main or dessert
  //  should strengthen this by adding a set of conditions to meet inordrer to qualify as a valid selection 
     addDishToCourse(courseName,dishName,dishPrice) {
       let dish = {
         courseName: courseName,
         name: dishName,
         price: dishPrice,
         }
        this.courses[courseName].push(dish);      
     }
}
console.log(menu.courses.appetizers);
menu.addDishToCourse('appetizers','tacos',6);
console.log(menu.courses.appetizers); // updated the appetizers section using the get method
console.log(menu._courses.appetizers) // updated directly using the untouched _appetizers itself

    





/*getRandomDishFromCourse (courseName) {
       const dishes = this._courses[courseName];
       const randomIndex = Math.floor(Math.random()* dishes.length);
       return dishes[randomIndex];
     },   
     generateRandomMeal() {
       const appetizer = this.getRandomDishFromCourse('appetizers');
       const main = this.getRandomDishFromCourse('mains');
       const dessert = this.getRandomDishFromCourse('desserts');
       const totalPrice = appetizer.price + main.price + dessert.price;
       return `Your random meal is:
        ${appetizer.name}, ${main.name}, ${dessert.name}. The total price is ${totalPrice}`  
     }
   }

   console.log(menu.addDishToCourse())
 
 
 // testing project outcome 
 
   menu.addDishToCourse('appetizers','salad',4.00)
   menu.addDishToCourse('appetizers','fries',5.00)
   menu.addDishToCourse('appetizers','wings',3.00)
 
 
   menu.addDishToCourse('mains','steak',12.00)
   menu.addDishToCourse('mains','chicken',11.50)
   menu.addDishToCourse('mains','tofu',9.50)
 
   menu.addDishToCourse('desserts','coffee',3.0)
   menu.addDishToCourse('desserts','cake',4.25)
   menu.addDishToCourse('desserts','ice-cream',2.5)
 
   const mealChosen = menu.generateRandomMeal();
   console.log(mealChosen);
   */
 