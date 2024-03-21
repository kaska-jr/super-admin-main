import { FC, Fragment,ReactNode } from 'react';
import { Popover, Transition } from '@headlessui/react';

interface Notification {
  title: string;
  text: string;
}

interface NotificationPopoverProps {
  buttonContent: ReactNode;
  notifications: Notification[];
}

const NotificationPopover: FC<NotificationPopoverProps> = ({ buttonContent, notifications }) => {
  return (
    <Popover className="relative">
      <div className='cursor-pointer sm:flex md:flex items-center space-x-3 lg:border md:border border-gray-300 dark:gray-600 rounded-full  p-2'>
        <Popover.Button>
          {buttonContent}
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform scale-95"
          enterTo="transform scale-100"
          leave="transition ease-in duration=75"
          leaveFrom="transform scale-100"
          leaveTo="transform scale-95"
        >
          <Popover.Panel className="absolute top-10 -right-20  z-50 mt-2 bg-white border-gray-400 dark:text-gray-300 dark:border-gray-500 dark:bg-gray-900 shadow-lg rounded-2xl max-w-xs sm:max-w-sm w-screen">
            <div className="relative p-3">
              <div className="flex justify between items-center w-full">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Notifications </p>
                <a className="text-sm border border-green-500 hover:bg-green-500 hover:text-gray-200 rounded-full dark:text-gray-300 p-1 px-8 text-gray-400" href="#">
                  &ensp;Mark all as read
                </a>
              </div>
              <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                {notifications.map((notification, index) => (
                  <div key={index} className="flex">
                    <div className="rounded-full shrink-0 bg-green-500 h-8 w-8 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {notification.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {notification.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
};

export default NotificationPopover;
