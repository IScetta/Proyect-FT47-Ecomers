import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-secundary text-white p-5 m-[20px]'>
      <h1 className='text-3xl font-bold mb-4'>About Us</h1>
      <div className='md:flex  p-[20px]'>
      <Image className=' rounded-xl' src="https://img.freepik.com/vector-gratis/banner-entrega-linea-laptop-realista-paquetes-nubes-e-iconos-sociales-estilo-realista_548887-53.jpg?t=st=1713928753~exp=1713932353~hmac=31707cbace6031b89702cf29042afd092fe603bacda4aa742ef099787f912bcc&w=996" alt="about" width={500} height={400}/>
      <p className='text-lg text-primary m-4 p-2 border-l-2 border-terciary'>
        We are an online store committed to offering high-quality products and an excellent shopping experience for our customers.
      </p>
      <p className='text-lg text-primary m-4 p-2 border-l-2 border-terciary'>At our store, you all find a curated selection of products that meet our rigorous standards for craftsmanship, durability, and style. Whether you are searching for the perfect gift, upgrading your home essentials, or treating yourself to something special, we have something for everyone.</p>
      </div>
      <div className='md:flex p-[20px]'>
      <p className='text-lg text-primary m-4 p-2 border-r-2 border-terciary'>
        In our store, you will find a wide selection of products, from electronics to fashion and home accessories. Our team is dedicated to providing you with the best possible service, and we are here to assist you every step of the way.
      </p>
      <p className='text-lg text-primary m-4 p-2 border-r-2 border-terciary'>
        If you have any questions or comments, feel free to contact us. We hope you enjoy your shopping experience at our online store! As a customer-centric company, your satisfaction is our top priority. That is why we offer hassle-free returns and exchanges, fast shipping options, and transparent pricing. We want you to shop with confidence, knowing that you  are getting the best value for your money.
      </p>
      <Image className=' rounded-xl' src="https://img.freepik.com/vector-gratis/fondo-elementos-compra-seguridad-estilo-isometrica_23-2147626146.jpg?t=st=1713929523~exp=1713933123~hmac=9047166e5840250ccc792f4af1cc3ef37449d57d378ef1bf69218b7735b10596&w=740" alt="about" width={500} height={400}/>
      </div>
    </div>
  );
};

export default AboutPage;
