import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png'
import InstagramSvg from './SVG/Instagram';


export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl  mx-auto py-10 md:py-0 font-sans">
      <div className="flex md:flex-row justify-between items-center">
        {/* Logo / Home / Text */}

        <div className="flex flex-col">
          <Link href="/">
            <a>
              <Image src={logo} alt={'Logo-MDA'} width={200} height={200} />
            </a>
          </Link>
        </div>

        <div className="space-x-8 hidden md:block">
          <Link href="/about">
            <a
              className={`text-base ${
                router.asPath === '/about'
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}
            >
              Acerca de Nosotros{' '}
              {router.asPath === '/about'}
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`text-base  ${
                router.asPath === '/projects'
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}
            >
              Proyectos
              {router.asPath === '/projects'}
            </a>
          </Link>
          <Link href="/experience">
            <a
              className={`text-base  ${
                router.asPath === '/experience'
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}
            >
              Experiencias{' '}
              {router.asPath === '/experience'}
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={`text-base  ${
                router.asPath === '/contact'
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}
            >
              Contacto
              {router.asPath === '/contact'}
            </a>
          </Link>
        </div>

        <div className="space-x-4 flex flex-row items-center">
          <a
            href={'https://www.instagram.com/mardealegria.detalles/'}
            className="text-base font-normal text-gray-600 dark:text-gray-300"
            target='_blank'
            rel='noreferrer'
          >
            <InstagramSvg/>
          </a>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
