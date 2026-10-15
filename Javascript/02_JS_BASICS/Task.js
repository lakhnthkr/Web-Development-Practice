// Task
// calculate the subtotal using ticket pricing * quantity
// if the quantity is 5 or more,apply a 15% discount
// otherwise,if the quantity is 3 or more,,apply a 10% discount
// otherwise,no quantity-based discount is applied
// if the coupon code is ValidityState,apply an additional 5% discount to the amount remaining after the quantity discount
// round the final amount using Math.rount()

// print the subtotal,discounts,and final payable amount
// example: if the tickets price is 250 and the quantityis 3 the subtotal is 750
// the quantity discount is 75 and the coupon discount is 33.75
// the final payable amount is 641 after rounding




function calculateTicketAmount(ticketPrice, quantity, couponCode) {
    let subtotal = ticketPrice * quantity;
    let quantityDiscount = 0;

    if (quantity >= 5) {
        quantityDiscount = subtotal * 0.15;
    } else if (quantity >= 3) {
        quantityDiscount = subtotal * 0.10;
    }

    let amount = subtotal - quantityDiscount;
    let couponDiscount = 0;

    if (couponCode === "ValidityState") {
        couponDiscount = amount * 0.05;
    }

    let finalAmount = Math.round(amount - couponDiscount);

    console.log("Subtotal:", subtotal);
    console.log("Quantity Discount:", quantityDiscount);
    console.log("Coupon Discount:", couponDiscount);
    console.log("Final Payable Amount:", finalAmount);
}

calculateTicketAmount(250, 3, "ValidityState");
