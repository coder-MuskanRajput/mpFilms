import React from 'react';
import './Happy.css';

const clients = [
  { id: 1, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5h9nG0SIzyPlhfci8zWvfvIJ9vz0xSVnLng&s' },
  { id: 2, icon: 'https://uploads-ssl.webflow.com/644a874d7676bf2e6f02e3ad/644a87e85644b64a91c62a68_logo.png' },
  { id: 3, icon: 'https://media.licdn.com/dms/image/C4E12AQHU3nsjz6Efsw/article-cover_image-shrink_720_1280/0/1650368428684?e=2147483647&v=beta&t=gNEGWtyYST07mbdkYNYrlJS_iMfnDEBGHreRa4jTCLY' },
  { id: 4, icon: 'https://cdn.worldvectorlogo.com/logos/discovery-channel-4.svg' },
  { id: 5, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzNanyaDlPK-mxtzKZMo42sfSeriy6LsEqNg&s' },
  { id: 6, icon: 'https://clockworkevents.co.in/images/logo.png' },
  { id: 7, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpjdopKy6BT3GkTuFmY9TR3UcaKd0JtHFyQ&s' },
  { id: 8, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Colors_TV_logo.svg/1200px-Colors_TV_logo.svg.png' },
  { id: 9, icon: 'https://cdn6.aptoide.com/imgs/5/b/a/5ba33aea32d9e3009a9fc730849e6e7e_fgraphic.png' },
  { id: 10, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGMRI8kF-lL-0MRVUSUNU6X7aHBeA9e3rEA&s' },
  { id: 11, icon: 'https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg' },
  { id: 12, icon: 'https://i.gadgets360cdn.com/large/voot-select-logo_1579595846623.jpg' },
  { id: 13, icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg' },
  { id: 14, icon: 'https://logos-world.net/wp-content/uploads/2021/02/Amazon-Prime-Video-Symbol.png' },
  { id: 15, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBCEgN7fA-PvFoiDCYljLrgs8BJM1Slhnng&s' },
  { id: 16, icon: 'https://media.licdn.com/dms/image/C510BAQEDOJQhBZLwyg/company-logo_200_200/0/1630635360472/beyond_dreams_entertainment_private_limited_logo?e=2147483647&v=beta&t=NQneVMSYNcpMjyAHcq2mR7C3gAeCaTXBOQCSObUWpho' },
  { id: 17, icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Zee_TV-2018.png' },
  { id: 18, icon: 'https://images.livemint.com/img/2023/02/15/1600x900/Balaji-Telefilms--Ebitda-zoomed-167--to-Rs-35-cror_1676439169397.png' },
  { id: 19, icon: 'https://media.licdn.com/dms/image/C510BAQHx-2qd0ZMAQw/company-logo_200_200/0/1630569637818/optimystix_entertainment_india_pvt_ltd__logo?e=2147483647&v=beta&t=xOLzOhJwGxQeFX5Ig7fISIGbtMQ09zbglc9GcHxeyE0' },
  { id: 20, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5rh-0sGmwS4zsySQmLkAHHzwMExJ18FeFKw&s' },
  { id: 21, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAF3QyGa0afYCA3_yuj5uWDPPeD700MPB3Lw&s' },
  { id: 22, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFShNEUy8gStTcsmGX0hLw11YvSnkr18sLQ&s' },
];

const Happy = () => {
  return (
    <div className="container ">
      <h1 className='text-5xl mb-10 text-[#ED1C24]'>Happy Clients</h1>
      <p className='text-3xl'>We value our clients and their satisfaction is our priority.</p>
      <div className="carousel">
        <div className="carousel-inner">
          {clients.map(client => (
            <div key={client.id} className="carousel-item">
              <img className="client-icon" src={client.icon} />
              {/* <span className="client-name">{client.name}</span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Happy;
