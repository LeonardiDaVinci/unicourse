import Carts from "../models/CartModel.js"
import Enroll from "../models/EnrollModel.js";

export const addToCart = async (req, res) => {
    const { courseId, name, price } = req.body;
  
    try {
      const totalPrice = price * 1; 
  
      const newCartItem = await Carts.create({
        courseId: courseId,
        name: name,
        price: price,
        totalPrice: totalPrice
      });
  
      res.status(201).json(newCartItem);
    } catch (error) {
      console.error('Failed to add to cart:', error);
      res.status(500).json({ message: 'Failed to add item to cart', error: error });
    }
  };
  
  export const viewCart = async (req, res) => {
    try {
      const cartItems = await Carts.findAll();
      res.status(200).json(cartItems);
    } catch (error) {
      console.error('Error retrieving cart items:', error);
      res.status(500).json({ message: 'Failed to retrieve cart items', error: error });
    }
  };

  export const checkoutCart = async (req, res) => {
    const userId = req.body.userId; 
    console.log("Checkout initiated for user:", userId);

    try {
        const cartItems = await Carts.findAll({ where: { userId: userId } });
        console.log("Cart items:", cartItems);

        const enrollments = cartItems.map(item => ({
            userId: userId,
            courseId: item.courseId
        }));

        console.log("Enrollments prepared:", enrollments);
        await Enroll.bulkCreate(enrollments);
        await Carts.destroy({ where: { userId: userId } });

        res.status(200).json({ message: 'Checkout successful and cart cleared' });
    } catch (error) {
        console.error('Checkout failed:', error);
        res.status(500).json({ message: 'Checkout failed', error: error });
    }
};
