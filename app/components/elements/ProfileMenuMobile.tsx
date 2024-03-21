import React, { Fragment, ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';

interface ProfileMenuProps {
  // Other props if needed
  children: ReactNode;
}

const ProfileMenuMobile: React.FC<ProfileMenuProps> = ({ children }) => {
    return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button className="cursor-pointer focus:outline-none flex items-center space-x-3 p-1  py-1 ml-1 mr-4 border border-gray-400 dark:border-gray-500 rounded-full">
            <span className='rounded-full border border-gray-300 dark:border-gray-500'>
            {children}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z" fill="#0D062D" className='fill-gray-500 dark:fill-gray-400'/>
            </svg>
          </Menu.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items static className="absolute right-0 w-56 z-50 mt-2 px-2 origin-top-right bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg shadow-xl">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-green-500 text-gray-200" : "text-gray-500 dark:text-gray-300"
                      } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                    >
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-green-500 text-gray-200" : "text-gray-500 dark:text-gray-300"
                      } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                    >
                      Report Bug
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`${
                        active ? "bg-green-500 text-gray-200" : "text-gray-500 dark:text-gray-300"
                      } group flex rounded-md items-center w-full px-4 py-2 text-sm`}
                    >
                      Refer and earn
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default ProfileMenuMobile;
