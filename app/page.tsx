import React from 'react';
import SalesTrend from './components/cards/SalesTrend';
import TotalCards from './components/cards/TotalCards';
import LastOrders from './components/cards/LastOrders';
import TopPlartform from './components/cards/TopPlartform';
import SideBar from './components/SideBar'
import Navbar from './components/NavBar'

export default function Home() {

	return (
		<>	
			  <div className="fixed top-0 w-full z-50">
              <Navbar />
            </div>
            <div className="fixed top-0 h-screen">
              <SideBar />
            </div>
            <div className="pl-20 lg:pl-20 pt-20 lg:pt-28 w-full h-screen overflow-hidden overflow-y-auto no-scrollbar children">

				
			<div className="lg:flex mb-4">

<div className="lg:w-2/3">
	<SalesTrend/>
</div>
<div className="lg:w-2/5 lg:pl-2 mt-4 lg:mt-0">
	<TotalCards/>
</div>

</div>

<div className="lg:flex">
<div className="lg:w-2/3">
	<LastOrders />
</div>

<div className="lg:w-2/5 lg:pl-2 mt-4 lg:mt-0">
	<TopPlartform />
</div>
</div>
			</div>
			

		</>
	);
}
