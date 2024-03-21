import React from 'react'

const LastOrders = () => {

    const Orders = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Marcus Bergson",
            date: 'Nov 13, 2003',
            amount: 80000,
            status: 'Paid',
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Jaydon Vaccaro",
            date: 'Nov 14, 2003',
            amount: 90000,
            status: 'Refund',
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Cooper Press",
            date: 'Nov 13, 2003',
            amount: 80000,
            status: 'Paid',
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Corey Schleifer",
            date: 'Nov 14, 2003',
            amount: 90000,
            status: 'Refund',
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Phillip Lubin",
            date: 'Nov 13, 2003',
            amount: 80000,
            status: 'Paid',
        },
    ]
  return (
    <div className='bg-white text-gray-800 dark:bg-slate-900 dark:text-gray-200 p-4 m-2 ml-0 rounded-lg cards dark:border-0'>
      <div className="flex justify-between mx-auto items-center mb-4">
                <p className="text-lg font-medium dark:text-gray-300">
                    Last Orders
                </p>
                <p className="text-lg text-green-500 sm:block">
                    See all
                </p>
            </div>
        <div className="max-w-screen-xl  mx-auto ">
            <div className="mt-4 border-0  overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="border-b dark:border-gray-600">
                        <tr className='font-small text-gray-400'>
                            <td className="py-3 pr-4 lg:pr-2">Name</td>
                            <td className='py-3 pl-4'>Date</td>
                            <td className='py-3 pl-4'>Amount</td>
                            <td className='py-3 pl-4'>Status</td>
                            <td className='py-3 pl-4'>Invoice</td>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y dark:divide-gray-600">
                        {
                            Orders.map((item, idx) => (
                                <tr key={idx} className=''>
                                    <td className="flex items-center gap-x-3 py-3 pr-8 lg:pr-2 ">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                        <div className='pr-2'>
                                            <span className="block text-gray-700 dark:text-gray-300 pr-2 text-sm font-medium">{item.name}</span>
                                        </div>
                                    </td>
                                    <td className=" py-4 whitespace-nowrap text-gray-400 pl-4">{item.date}</td>
                                    <td className='py-4 whitespace-nowrap text-gray-800 pl-4 dark:text-gray-300'>
                                        {new Intl.NumberFormat('en-US', {
                                            style: 'currency',
                                            currency: 'USD',
                                        }).format(item.amount)}
                                    </td>
                                    <td className={`py-4 whitespace-nowrap pl-4 ${item.status === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.status}
                                    </td>
                                    <td className='py-2 whitespace-nowrap  pl-4 items-center'>
                                        <a href='#' className='text-gray-800 dark:text-gray-300 flex items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16" fill="none">
                                                <path d="M6 11.8334C5.93333 11.8334 5.87333 11.82 5.80667 11.7934C5.62 11.72 5.5 11.5334 5.5 11.3334V7.33337C5.5 7.06004 5.72667 6.83337 6 6.83337C6.27333 6.83337 6.5 7.06004 6.5 7.33337V10.1267L6.98 9.64671C7.17333 9.45337 7.49333 9.45337 7.68667 9.64671C7.88 9.84004 7.88 10.16 7.68667 10.3534L6.35333 11.6867C6.26 11.78 6.12667 11.8334 6 11.8334Z" fill="#292D32"className='fill-gray-800 dark:fill-gray-200'/>
                                                <path d="M5.99964 11.8334C5.87297 11.8334 5.7463 11.7867 5.6463 11.6867L4.31297 10.3534C4.11964 10.16 4.11964 9.84004 4.31297 9.64671C4.5063 9.45338 4.8263 9.45338 5.01964 9.64671L6.35297 10.98C6.5463 11.1734 6.5463 11.4934 6.35297 11.6867C6.25297 11.7867 6.1263 11.8334 5.99964 11.8334Z" fill="#292D32"className='fill-gray-800 dark:fill-gray-200'/>
                                                <path d="M9.99967 15.1667H5.99967C2.37967 15.1667 0.833008 13.62 0.833008 10V6.00004C0.833008 2.38004 2.37967 0.833374 5.99967 0.833374H9.33301C9.60634 0.833374 9.83301 1.06004 9.83301 1.33337C9.83301 1.60671 9.60634 1.83337 9.33301 1.83337H5.99967C2.92634 1.83337 1.83301 2.92671 1.83301 6.00004V10C1.83301 13.0734 2.92634 14.1667 5.99967 14.1667H9.99967C13.073 14.1667 14.1663 13.0734 14.1663 10V6.66671C14.1663 6.39337 14.393 6.16671 14.6663 6.16671C14.9397 6.16671 15.1663 6.39337 15.1663 6.66671V10C15.1663 13.62 13.6197 15.1667 9.99967 15.1667Z" fill="#292D32"className='fill-gray-800 dark:fill-gray-200'/>
                                                <path d="M14.6663 7.1667H11.9997C9.71967 7.1667 8.83301 6.28003 8.83301 4.00003V1.33337C8.83301 1.13337 8.95301 0.9467 9.13967 0.873366C9.32634 0.793366 9.53967 0.840033 9.68634 0.980033L15.0197 6.31337C15.1597 6.45337 15.2063 6.67337 15.1263 6.86003C15.0463 7.0467 14.8663 7.1667 14.6663 7.1667ZM9.83301 2.54003V4.00003C9.83301 5.72003 10.2797 6.1667 11.9997 6.1667H13.4597L9.83301 2.54003Z" fill="#292D32"className='fill-gray-800 dark:fill-gray-200'/>
                                            </svg>
                                            <span className="ml-1">view</span>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default LastOrders