import React from 'react';

interface Product {
  name: string;
  amount: string;
  percentage: number;
}

const ProductProgress: React.FC<Product> = ({ name, amount, percentage }) => {

    const getProgressBarColor = () => {
        if (percentage >= 50) {
            return 'progress-purple';
        } else if (percentage >= 40) {
            return 'progress-blue';
        }
        else if (percentage >= 30) {
            return 'progress-orange';
        }
        else {
            return 'bg-progress';
        }
        };
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-md text-gray-800 dark:text-gray-300">
          {name}
        </span>
      </div>
      <div className="w-full bg-gray-200 my-2 lg:my-3 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className={`rounded-full h-2.5 ${getProgressBarColor()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-sm font-sm text-gray-500 dark:text-gray-400">
          {amount}
        </span>
        <span className="text-sm font-sm text-gray-500 dark:text-gray-400">
          +{percentage}%
        </span>
      </div>
    </div>
  );
};

const TopPlatform: React.FC = () => {
  const platforms: Product[] = [
    { name: 'Book Bazaar', amount: '$2,500,000', percentage: 60 },
    { name: 'Artisan Aisle', amount: '$1,800,000', percentage: 40 },
    { name: 'Toy Troop', amount: '$1,200,000', percentage: 30 },
    { name: 'XStore', amount: '$1,800,000', percentage: 20 },
  ];

  return (
    <div className="bg-white text-gray-800 dark:bg-slate-900 dark:text-gray-200 p-4 m-2 ml-0 rounded-lg cards dark:border-0">
    <div className="flex justify-between mx-auto items-center mb-4">
        <p className="text-lg font-medium dark:text-gray-200">
            Top Plartform
        </p>
        <p className="text-lg text-green-500 sm:block">
            See all
        </p>
    </div>
      <div className="max-w-screen-xl mx-auto">
        {platforms.map((platform, index) => (
          <ProductProgress key={index} {...platform} />
        ))}
      </div>
    </div>
  );
};

export default TopPlatform;
