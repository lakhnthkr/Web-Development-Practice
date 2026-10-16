const person1={
    userName:"user_123",
    email:"user@gmail.com",
    age:20,
    subscriptions:{
        netflix: "Gold",
        amazonPrime:"Basic"
    },
    show: function showDetails(){
        console.log("this is user:"+ this.userName + "age is :" + this.age)
    }
    
}
console.log(person1.show())
const userInfo=person2.show()
console.log("this is person2 info:",userInfo)
person1.address="Agra"
console.log(person1["email"])
delete person1.userName
    console.log(person1)

    // create  a object which has these points:

// - customerName , movieName, ticketPrice, and quantity 
// - a nested customer object with the email and city
// - a seats array containing at least three seat numbers
// - a method calculateTotalAmount()

// Execute these;

//1. Print the movieName using dot notation
//2. read the customer's city using nested property access.
//3. change the ticket price and add a bookingStatus property
//4. Print all object keys using Object.keys()
//5. Destructure movieName and Quantity
//6. Calculate and print the total booking amount 

    
const booking = {
    customerName: "Lakhan",
    movieName: "Avengers",
    ticketPrice: 250,
    quantity: 3,

    customer: {
        email: "lakhan@gmail.com",
        city: "Mathura"
    },

    seats: ["A1", "A2", "A3"],

    calculateTotalAmount: function () {
        return this.ticketPrice * this.quantity;
    }
};

console.log(booking.movieName);

console.log(booking.customer.city);

booking.ticketPrice = 300;
booking.bookingStatus = "Confirmed";

console.log(Object.keys(booking));

const { movieName, quantity } = booking;

console.log(movieName);
console.log(quantity);

console.log("Total Booking Amount:", booking.calculateTotalAmount());
