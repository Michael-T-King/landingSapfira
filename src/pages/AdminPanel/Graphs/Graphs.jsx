import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import './Graphs.scss'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


//----------------базовые стили для графика --------------------------------
const defaultOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      suggestedMin: 0, 
      ticks: {
        stepSize: 1, 
        precision: 0, 
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom'
    },
    title: {
      display: true,
      text: '',
    },
  },
};

function Chart() {
  const [orders, setOrders] = useState([]);
  const [ clicks, setClicks] = useState([]);

  useEffect(() => {
    fetchOrders();
    fetchClicks();
  }, [orders]);

  //--------------------------- получение кликов --------------------------------
  const fetchClicks = async() => {
    try {
      const response = await axios.get('http://localhost:8080/clicks');
      setClicks(response.data);
      // console.log( `'это для графика'${clicks.logo1}`)
    } catch(error) {
      console.error('Error fetching clicks:', error);
    }
  }


  //---------------------------- получаем массив заказов --------------------------------
  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8080/forGraps');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

    //--------------------------- получаем текущую дату -----------------------------------

    const date = new Date();
    const Year = date.getUTCFullYear();
    const Month = date.getUTCMonth() + 1;
    const [selectedDate, setSelectedDate] =  useState(new Date());;

    const handleDateChange = (date) => {
      setSelectedDate(date);
    }
//-----------------------фильтры по дате ----------------------------------------------------------------
    const currentWithProductPerMonth = orders.filter((order) => { return (order.products && order.products.length > 0) && Year === order.year}) // фильтр для отображения заявок с продуктами по месяцам
const currentPerMonth = orders.filter((order) => { return order  && Month === order.month})
const currentPerMonthWithProducts = orders.filter((order) => { return (order.products && order.products.length > 0)  && Month === order.month})
    const currentByDate = orders.filter(order => {
      if (!selectedDate) return false;
    
      const formattedDay = order.day < 10 ? `0${order.day}` : `${order.day}`;
      const formattedMonth = order.month < 10 ? `0${order.month}` : `${order.month}`;
      const formattedDate = `${formattedDay}.${formattedMonth}.${order.year}`;    
      const selectedDay = selectedDate.getDate() < 10 ? `0${selectedDate.getDate()}` : selectedDate.getDate();
      const selectedMonth = selectedDate.getMonth() + 1 < 10 ? `0${selectedDate.getMonth() + 1}` : selectedDate.getMonth() + 1;
      const selectedYear = selectedDate.getFullYear();
      const selectedFormattedDate = `${selectedDay}.${selectedMonth}.${selectedYear}`;   
      return formattedDate === selectedFormattedDate;
    });

    const currentByDateWithProduct = orders.filter(order => {
      if (!selectedDate) return false;    
      const formattedDay = order.day < 10 ? `0${order.day}` : `${order.day}`;
      const formattedMonth = order.month < 10 ? `0${order.month}` : `${order.month}`;
      const formattedDate = `${formattedDay}.${formattedMonth}.${order.year}`;    
      const selectedDay = selectedDate.getDate() < 10 ? `0${selectedDate.getDate()}` : selectedDate.getDate();
      const selectedMonth = selectedDate.getMonth() + 1 < 10 ? `0${selectedDate.getMonth() + 1}` : selectedDate.getMonth() + 1;
      const selectedYear = selectedDate.getFullYear();
      const selectedFormattedDate = `${selectedDay}.${selectedMonth}.${selectedYear}`;   
      return formattedDate === selectedFormattedDate && order.products && order.products.length > 0;
    });

//--------------------------- получаем количество заявок в месяц ----------------------------
  const countOrdersByMonth = () => {
    const counts = Array.from({ length: 12 }, () => 0); 
        orders.forEach(order => {
      const month = order.month; 
      if (month >= 1 && month <= 12) {
        counts[month -1] ++; 
      }
    });
    return counts;
  };

  //-------------------------------- получаем все заявки за месяц -------------------------------------
  const countOrdersPerMonth = () => {
    const counts = Array.from({ length: 31 }, () => 0); 

    currentPerMonth.forEach(order => {
      const day = order.day; 
      if (day >= 1 && day <= 12) {
        counts[day -1] ++; 
      }
    });
    return counts;
  };

  //-------------------------------- получаем все заявки с товарами за месяц ----------------------------
  const countOrdersPerMonthWithProducts = () => {
    const counts = Array.from({ length: 31 }, () => 0); 

    currentPerMonthWithProducts.forEach(order => {
      const day = order.day; 
      if (day >= 1 && day <= 12) {
        counts[day -1] ++; 
      }
    });
    return counts;
  };


  //----------------------- получаем заявки с товарами за месяц -----------------------------------
  const countOrdersWithProductsByMonth = () =>{
    const counts = Array.from({ length: 12 }, () => 0); 
    currentWithProductPerMonth.forEach(order => {
      const month = order.month; 
      if (month >= 1 && month <= 12) {
        counts[month -1] ++; 
      }
    });
    return counts;
  };

//------------------------------- получаем колличество заявок за 1 день -----------------------------

  const countOrdersByDay = () => {
    const counts = Array.from({ length: 31 }, () => 0); 
    currentByDate.forEach(order => {
      const day = order.day; 
      if (day >= 1 && day <= 31) {
        counts[day - 1]++; 
      }
    });
    return counts;
  };

  //----------------------------- получаем колличество заявок с товарами за 1 день --------------------
const countOrdersWithProductsByDay = () =>{
  const counts = Array.from({ length: 31 }, () => 0);
  currentByDateWithProduct.forEach(order => {
    const day = order.day; 
    if (day >= 1 && day <= 31) {
      counts[day - 1]++; 
    }
  });
  return counts;
};

const priceByDay = () => {
  if (!selectedDate) return 0;

  return currentByDateWithProduct.reduce((acc, order) => {
    const orderTotal = order.products.reduce((acc, el) => acc + Number(el.price), 0);
    return acc + orderTotal;
  }, 0);
}

console.log(priceByDay())

  //-------------------------- рисуем график месяцев -------------------------------------
  const dataMonth = {
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [ 
      {
        label: 'Заявки',
        data: countOrdersByMonth(),
        backgroundColor: [  'rgba(255, 99, 132, 0.2)'],
                            
        borderColor: [  'rgba(255, 99, 132, 1)'],
        borderWidth: 0.5,
      },

        {
          label: 'Заявки c товарами',
          data: countOrdersWithProductsByMonth(),
          backgroundColor: [  'rgba(54, 162, 235, 0.2)',],
                              
          borderColor: ['rgba(54, 162, 235, 1)'],
          borderWidth: 0.5,
        },
    ],
  };

  

  //---------------------------- рисуем график дней --------------------------------------

  const dataDays = {
    
    labels: Array.from({ length: 31 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Заявки',
        data: countOrdersPerMonth(),
        backgroundColor: [  'rgba(255, 99, 5, 0.2)'],
                            
        borderColor: [  'rgba(255, 99, 5, 1)'],
        borderWidth: 0.5,
      },  
      {
        label: 'Заявки c товарами',
        data: countOrdersPerMonthWithProducts(),
        backgroundColor: [  'rgba(159,91,221, 0.2)',],
                            
        borderColor: ['rgba(159,91,221, 1)'],
        borderWidth: 0.5,
      },   
    ],
  };


  const doughnutData = {
    labels: [`логотип в шапке- ${clicks.logo1} раз`, `главная в шапке- ${clicks.main} раз`, `контакты шапка- ${clicks.contacts} раз`, `доставка в шапке- ${clicks.delivery} раз`, `заявка в шапке- ${clicks.cart} раз`, `логин- ${clicks.login} раз`, `по картинке на главной- ${clicks.mainPick} раз`, `блок приветствия- ${clicks.firstBlock} раз`, `оставить заявку на главной- ${clicks.homeOrder} раз`,`блок о нас- ${clicks.secondBlock} раз`, `логотип в футтере ${clicks.footerLogo} раз`, `главная в футтере ${clicks.footerMain} раз`, `контакты в футтере ${clicks.footerContacts} раз`, `доставка в футтере ${clicks.footerDelivery} раз`, `оставить заявку в футтере ${clicks.footerCart} раз`, `вконтакте ${clicks.vk} раз`, `WhatsApp ${clicks.whatsapp} раз`, `Telegram ${clicks.telegram} раз`, `кнопка наверх ${clicks.btnUp} раз` ],
    datasets: [
      {
        data: [clicks.logo1, clicks.main, clicks.contacts, clicks.delivery, clicks.cart, clicks.login, clicks.mainPick, clicks.firstBlock, clicks.homeOrder, clicks.secondBlock, clicks.footerLogo, clicks.footerMain, clicks.footerContacts, clicks.footerDelivery, clicks.footerCart, clicks.vk, clicks.whatsapp, clicks.telegram, clicks.btnUp],
backgroundColor: [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 235, 162, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(229,229,16, 0.6)',
    'rgba(83, 102, 255, 0.6)',
    'rgba(255, 99, 255, 0.6)',
    'rgba(99, 255, 132, 0.6)',
    'rgba(235, 162, 54, 0.6)',
    'rgba(6, 86, 155, 0.6)',
    'rgba(192, 75, 192, 0.6)',
    'rgba(102, 153, 255, 0.6)',
    'rgba(159, 255, 64, 0.6)',
    'rgba(199, 83, 199, 0.6)',
    'rgba(102, 255, 83, 0.6)',
    'rgba(99, 132, 255, 0.6)',
    'rgba(235, 54, 162, 0.6)'
],
borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 235, 162, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(229,229,16, 1)',
    'rgba(83, 102, 255, 1)',
    'rgba(255, 99, 255, 1)',
    'rgba(99, 255, 132, 1)',
    'rgba(235, 162, 54, 1)',
    'rgba(6, 86, 155, 1)',
    'rgba(192, 75, 192, 1)',
    'rgba(102, 153, 255, 1)',
    'rgba(159, 255, 64, 1)',
    'rgba(199, 83, 199, 1)',
    'rgba(102, 255, 83, 1)',
    'rgba(99, 132, 255, 1)',
    'rgba(235, 54, 162, 1)'
],

        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      title: {
        display: true,
        text: 'График кликов по элементам главной страницы',
      },
    },
  };

  return (
    <section  className='graphs'>

    <div className="count__box">
    <p className="calendar__title">Выберите дату</p>
    <div className='calendar'>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Выберите дату"/>
         {selectedDate? <p>Данные за: {selectedDate.toLocaleDateString()}</p>: <p>Выберите дату для отображения данных</p>}
    </div>

    <div className="graphs__card-box">

      <div className="garaphs__card color__total">
      <h2 className="card__title">Общее колличество заявок</h2>
      <h2 className="card__value">{countOrdersByDay().reduce((acc, el) => acc + el, 0)}</h2>
      </div>

      <div className="garaphs__card color__product">
      <h2 className="card__title">заявки с товарами</h2>
      <h2 className="card__value">{countOrdersWithProductsByDay().reduce((acc, el)=> acc + el, 0)}</h2>
      </div>
      <div className="garaphs__card color__price"><h2 className="card__title">общая цена за товары</h2>
      <h2 className="card__value">{priceByDay()} р</h2>
      </div>
    </div>
    </div>
    
<div className='graphs__container'>
       <div style={{ width: '700px', 
       height: '580px', 
       marginLeft:'1rem', 
       marginBottom:'3rem', 
       border: '1px solid #888',
       position:'relative',
       }} 
  
      className='graphs__box' >
       <Bar data={dataDays} options={{ ...defaultOptions, plugins: { ...defaultOptions.plugins, title: { ...defaultOptions.plugins.title, text: 'График заявок по дням за месяц' } } }} style={{padding:'1rem', marginBottom:'3rem'}} />

      <div className="card__graphs-box">
        <div className="graph__cards graph__color-order">
          <p className="graphs__cards-title">общее колличество заявок</p>
          <h3 className="graphs__cards-value">{countOrdersPerMonth().reduce((acc, el)=> acc + el, 0)}</h3>
        </div>

        <div className="graph__cards graph__color-product">
          <p className="graphs__cards-title ">заявки с товарами</p>
          <h3 className="graphs__cards-value">{countOrdersPerMonthWithProducts().reduce((acc, el)=> acc + el, 0)}</h3>
        </div>

        <div className="graph__cards graph__color-price">
          <p className="graphs__cards-title">общая цена за товары</p>
          <h3 className="graphs__cards-value">{currentPerMonthWithProducts.reduce((acc, order) => {
    const orderTotal = order.products.reduce((acc, el) => acc + Number(el.price), 0);
    return acc + orderTotal;
  }, 0)}р</h3>
        </div>
      </div>

       </div>
       
        <div style={{ maxWidth: '700px', height: '580px', marginLeft:'1rem', marginBottom:'3rem'}} className='graphs__box'>
          <Bar data={dataMonth} options={{ ...defaultOptions, plugins: { ...defaultOptions.plugins, title: { ...defaultOptions.plugins.title, text: 'График заявок за год' } } }} style={{ padding:'1rem', width:'550px'}}/>

          <div className="card__graphs-box card__box-gap">
        <div className="graph__cards graph__color-order">
          <p className="graphs__cards-title">общее колличество заявок</p>
          <h3 className="graphs__cards-value">{countOrdersByMonth().reduce((acc, el) => acc + el, 0)}</h3>
        </div>

        <div className="graph__cards graph__color-product">
          <p className="graphs__cards-title ">заявки с товарами</p>
          <h3 className="graphs__cards-value">{countOrdersWithProductsByMonth().reduce((acc, el) => acc + el, 0)}</h3>
        </div>

        <div className="graph__cards graph__color-price">
          <p className="graphs__cards-title">общая цена за товары</p>
          <h3 className="graphs__cards-value">{currentWithProductPerMonth.reduce((acc, order) => {
    const orderTotal = order.products.reduce((acc, el) => acc + Number(el.price), 0);
    return acc + orderTotal;
  }, 0)}р</h3>
        </div>
      </div>
          </div>
</div>
    
<div className='doughnut__box'>
      <Doughnut
    data={doughnutData}
    options={doughnutOptions}/>
</div>


    </section>
  );
}

export default Chart;
