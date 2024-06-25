// OneProduct.js
import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../redux/Reducer/products';
import { addToCart } from '../../redux/Reducer/cartSlice';
import './oneProduct.scss';

const OneProduct = () => {
    let location = useLocation();
    let id = location.pathname.split('/').at(-1);
    const dispatch = useDispatch();
    const { currentProduct } = useSelector((state) => state.products);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const Product = currentProduct;
    const toTitle = useRef(null);

    useEffect(() => {
        const getOneProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/products/${id}`);
                dispatch(setCurrentProduct(response.data));
            } catch (error) {
                console.error('Ошибка при загрузке продукта:', error);
            }
        };
        getOneProduct();
    }, [dispatch, id]);

    useEffect(() => {
        if (toTitle.current) {
            toTitle.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    if (!Product) {
        return <p className='one__product'>Загрузка...</p>;
    }

    const AddToCart = () => {
        const productInCart = cartItems.find(item => item.id === currentProduct.id);
        if (!productInCart) {
            dispatch(addToCart(currentProduct));
        }
    };

    return (
        <section>
            <div className="container" ref={toTitle}>
                <div className='one__card-box' >
                    <img src={Product.image} alt="product img" className='product__img' />
                    <div className="one__card-description-box">
                        <h1 className="one__card-title">{Product.name}</h1>
                        <p className="one__card-description">{Product.description}</p>
                        <p className="one__card-article">Артикул: {Product.article}</p>
                        <button className="one__card-btn" onClick={AddToCart}>
                            Добавить к оформлению
                        </button>
                    </div>
                </div>
                <Link to='/Cart'><button className="one__card-goto-btn">Перейти к оформлению</button></Link>
            </div>
        </section>
    );
};

export default OneProduct;
