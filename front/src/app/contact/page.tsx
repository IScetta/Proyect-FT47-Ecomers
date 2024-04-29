import Image from 'next/image';
import React from 'react';

const Contacts = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-secundary text-white p-5 m-[20px]'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <p className='text-lg text-primary mb-4'>If you have any questions or concerns, please dont hesitate to contact us using the information below:</p>
      <div className='flex flex-col text-left'>
        <p className='text-lg text-primary mb-2'>
          Email: contact@example.com
        </p>
        <p className='text-lg text-primary mb-2'>
          Phone: +1234567890
        </p>
        <p className='text-lg text-primary'>
          Address: 123 Main Street, City, Country
        </p>
        <Image className='w-[500px] h-auto m-3' src="https://img.freepik.com/fotos-premium/manos-escribiendo-teclado-computadora-escritorio-oficina_220873-19330.jpg?w=826" alt="contact" width={500} height={200}/>
      </div>
    </div>
  );
};

export default Contacts;
