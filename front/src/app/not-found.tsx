// pages/404.tsx

import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen m-4">
      <h1 className="text-4xl font-bold mb-4 text-secundary">404 - Page not found</h1>
      <p className="text-lg mb-4 text-secundary">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <h3 className="hover:underline text-terciary">Back to the home page</h3>
      </Link>
    </div>
  );
};

export default NotFoundPage;
