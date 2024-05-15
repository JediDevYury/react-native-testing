import {getCartSum} from "@/utils/cart";

describe("Cart", () => {
    it("getCartSum", () => {
        const cart = [
            {id: 1, price: 200, quantity: 2},
            {id: 2, price: 150, quantity: 3},
        ];

        expect(getCartSum(cart)).toBe(350);
    });
});
