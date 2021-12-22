import React from 'react';

import {
  Link,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Topbar() {
  return (
    <>
      <div className="relative inset-x-0 flex flex-col items-center gap-2 px-5 py-3 text-sm text-white md:flex-row bg-primary">
        <div className="flex flex-col self-end md:hidden">
          <p className="font-semibold uppercase cursor-pointer">
            Menu&nbsp;
            <FontAwesomeIcon icon={faBars} />
          </p>
        </div>
        <p className="cursor-pointer hover:text-yellow-400">
          Click here for&nbsp;
          <span className="font-bold uppercase">Global Education News</span>
        </p>
        <div className="flex-grow" />
        <ul className="gap-2.5 uppercase list-none flex text-xs md:text-sm">
          {
            ['home', 'about', 'testimonials', 'contact', 'social'].map((item) => (
              <li className="hover:text-yellow-400" key={item}>
                <Link to={`/${item}`}>{item}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <header className="relative inset-x-0">
        <div className="w-1/2">Hello there</div>
      </header>
    </>
  );
}
