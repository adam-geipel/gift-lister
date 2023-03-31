'use client'

import Link from 'next/link';
import Image from 'next/image';
import navbarStyles from './navbar.module.scss';
import { useSession, signOut } from 'next-auth/react';
import { Menu } from '@headlessui/react';
import ChevronDown from '../../../public/ChevronDown.svg'

const Navbar = () => {

    const { data, status } = useSession({
      required: true,
      onUnauthenticated() {
        return 
      }
    });

    const loggedIn = (status === 'authenticated');

    return (
        <div className={navbarStyles.navbar}>
          <div className={navbarStyles.brand}>
              <h1>Gift Lister</h1>
              <h3>A little gift list aggregator</h3>
          </div>
          <div className={navbarStyles.links}>
              <ul>
                {loggedIn ? (
                  <>
                    <li>
                      <Link href="/users">Find Friends</Link>
                    </li>
                  </>
                  ) : (
                  <>
                    <li>
                      <div>
                        <Link href="/login">Log in</Link>
                      </div>
                    </li>
                  </>
                )}
              </ul>
          </div>
        { loggedIn && 
          <div className={navbarStyles.userSettings}>
            <div className={navbarStyles.userCard}>
              <Image alt="Your profile picture" src={data?.user?.image} width='50' height='50'/>
              <div>
                <p className='pl-5'>{data?.user?.name}</p>
                <Menu>
                  <Menu.Button as="div">
                    Account Settings&nbsp;<ChevronDown style={{height:'10px',width:'10px'}}/>
                  </Menu.Button>
                  <Menu.Items>
                    <Menu.Item>
                        {({ active }) => (
                            <a href="/profile" className={`${active && 'bg-blue-500'}`}>My Profile</a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <div className={`${active && 'bg-blue-500'}`} onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}>
                                <a href="/login">Sign Out</a>
                            </div>
                        )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>
        }
        </div>
    )
}

export default Navbar;