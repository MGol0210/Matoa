import * as React from 'react';
import { dataProducts } from '../../common/data';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import { CartWrapper } from './styles';

import images from '../../assets/Images';
import { Paper } from '@mui/material';

export const listProduct: dataProducts[] = [
  {
    id: 0,
    img: images.Product_1,
    name: "Way Kambas Mini Ebony",
    discount: 20,
    price: 1500000,
    promotion: 1264000,
    series: "maple",
    collection: "Custom Engrave",
    message: `"Happy | Birthday | from"`,
    package: "Wooden Packaging (Rp 50.000)",
    tag: "",
  },
  {
    id: 1,
    img: images.Product_18,
    name: "Sikka (Ebony & Maple)",
    discount: 20,
    promotion: 1264000,
    series: "maple",
    package: "Default Packaging (Free)",
    tag: "New",
  },
  {
    id: 2,
    img: images.Product_18,
    name: "Sikka (Ebony & Maple)",
    discount: 20,
    promotion: 1264000,
    series: "maple",
    package: "Default Packaging (Free)",
    tag: "New",
  },
];

const Cart: React.FC = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <CartWrapper>
      <Paper style={{maxHeight: 380, overflow: 'auto', backgroundColor: '#F7F6F4',marginBottom: 30}}>
        {listProduct.map((item) => (
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
                  <button className='Btn-Minus'>
                    <img src={images.Icon_Minus} alt="btn" />
                  </button>
                  <p className='quantity-txt'>2</p>
                  <button className='Btn-Plus'>
                    <img src={images.Icon_Plus} alt="btn" />
                  </button>
                </div>
                <div className='Btn-total'>
                  <p>Rp {item.promotion}</p>
                  <button className='Btn-Trash'>
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
              <p className="product-promotion">Rp 2.152.000</p>
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