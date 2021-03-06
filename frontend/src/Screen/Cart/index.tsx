import * as React from 'react';
import { dataProducts } from '../../common/data';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import { CartWrapper } from './styles';

import images from '../../assets/Images';
import { Paper } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../redux/store";
import { addToCart, decreaseCart, removeFromCart } from '../../features/cartSlice';

const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleRemoveFromCart = (item: dataProducts) => {
    dispatch(removeFromCart(item))
  };

  const handleIncrease = (item: dataProducts) => {
    dispatch(addToCart(item))
  }

  const handleDecrease = (item: dataProducts) => {
    dispatch(decreaseCart(item))
  }

  const cart = useSelector((state: RootState) => state.cart);

  function TotalPrice(promotion: any, cartQuantity: any){
    return Number(promotion * cartQuantity).toLocaleString('en-US');
  }

  const TotalCart = cart.cartItems?.reduce((acc: any, ele: any) => acc + Number(ele.promotion * ele.cartQuantity), 0);

  return (
    <CartWrapper>
      <Paper style={{height: 380, overflow: 'auto', backgroundColor: '#F7F6F4',marginBottom: 30}}>
        {cart.cartItems?.map((item: dataProducts) => (
          <div className='cart-wrapper'>
            <div className='cart-left'>
              <div className='product-img'>
                <img src={item.img} alt='img-pro'/>
              </div>
              <div className='product-info'>
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
                <p className="product-promotion">Rp {item.promotion}</p>
                <p className="product-collection">{item.collection}</p>
                <p className="product-message">{item.message}</p>
              </div>
            </div>
            <div className='cart-right'>
              <div className='select-packing'>
                <p>Select Packaging</p>
                <FormControl fullWidth sx={{width: '90%'}}>
                  <Select
                    id="demo-simple-select"
                    value={age}
                    label="Package"
                    onChange={handleChange}
                    sx={{width: '100%', height: 42,}}
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='Btn'>
                <div className='Btn-quantity'>
                  <button className='Btn-Minus' onClick={() => handleDecrease(item)}>
                    <img src={images.Icon_Minus} alt="btn" />
                  </button>
                  <p className='quantity-txt'>{item.cartQuantity}</p>
                  <button className='Btn-Plus' onClick={() => handleIncrease(item)}>
                    <img src={images.Icon_Plus} alt="btn" />
                  </button>
                </div>
                <div className='Btn-total'>
                  <p>Rp {TotalPrice(item.promotion, item.cartQuantity)}</p>
                  <button className='Btn-Trash' onClick={() => handleRemoveFromCart(item)}>
                    <img src={images.Icon_Trash} alt="btn" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Paper>
      <div className='modal-bottom'>
        <div className='total'>
          <div className='kode-promo'>
            <p className='name'>Kode Promo</p>
            <label>
              <input type="text" name="name" value={'INDONESIA'}/>
            </label>
            <p className='discount'>35% OFF</p>
          </div>
          <div className='subtotal'>
            <p className='subtotal-txt'>Subtotal</p>
            <div className='sub-total'>
              <p className="product-price">3.312.000</p>
              <p className="product-promotion">Rp {TotalCart}</p>
            </div>
          </div>
        </div>
        <button className='check-out'>
          <Link className='check-out-link' to='/checkout'>
            <p>Checkout</p>
          </Link>
        </button>
      </div>
    </CartWrapper>
  );
};

export default Cart;