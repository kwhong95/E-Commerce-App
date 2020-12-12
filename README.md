# Create E-Commerce App 
> React + Ant-Design + Commerce.js 

## STEP1. Mock Product
1. Products.jsx(container)
- Grid(Row + Col) 
- justify: center 
- Responsive-Design
  
2. Product.jsx(product-Card)
- Ant-Design( `Card` Component )
- product(Image, Name, Price, Description, AddCartButton)

## STEP2. Navbar
- Ant-Desgin( `PageHeader` Component )
- Header( MainTitle, MainLogo, ShoppingCartBadge )

## STEP3. Commerce Products
> Translates to Commerce.js
  
1. Create API(commerce.js) - SetUp/Developer - `Public Key`
2. Set `.env` - `REACT_APP_CHEC_KEY`
3. libs/commerce.js - Create new Commerce Instance
4. commerce <=> App
- `fetchProduct` - **async/await** `product.list()`
- useEffect - componentDidMount >> `fetchProduct`

## STEP4. Add To Cart
1. Set State Cart = {object}
2. fetchCart = **anync func** => **await** `commerce.cart.retrieve`
3. console.log(cart) => line_items: Add To Cart items
4. handleAddToCart = **async func** = (productId, quantity) => **await** `commerce.cart.add()` => setCart(item.cart)
> prop: products => product => CartIconButton
>> onClick = CallbackFunc: AddToCart(productId, 1)
5. TotalItems(cart.total_items): Navbar => CartBadge => Count={TotalItems}