import React from 'react';

import {
  Link,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Container from '../shared/Container';
import Row from '../shared/Row';
import Col from '../shared/Col';

export default function Topbar() {
  return (
    <>
      <div className="relative inset-x-0 text-xs text-white bg-primary">
        <Container className="max-w-screen-xl px-5 py-3">
          <Row className="flex-col items-center gap-2 md:flex-row">
            <Col className="self-end md:hidden">
              <p className="font-semibold uppercase cursor-pointer">
                Menu&nbsp;
                <FontAwesomeIcon icon={faBars} />
              </p>
            </Col>
            <Col>
              <Row className="flex-col items-center justify-between gap-3 md:flex-row">
                <p className="cursor-pointer hover:text-yellow-400">
                  Click here for&nbsp;
                  <span className="font-bold uppercase">Global Education News</span>
                </p>
                <ul className="gap-2.5 uppercase list-none flex">
                  {
                    ['home', 'about', 'testimonials', 'contact', 'social'].map((item) => (
                      <li className="hover:text-yellow-400" key={item}>
                        <Link to={`/${item}`}>{item}</Link>
                      </li>
                    ))
                  }
                </ul>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <header className="relative inset-x-0">
        <div className="w-1/2">Hello there</div>
      </header>
    </>
  );
}
