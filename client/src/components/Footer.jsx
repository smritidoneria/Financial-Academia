import React from 'react';
import googlePlay from '../assets/google-play.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {

  return (
   <footer className="w-full text-white py-8 flex justify-center bg-[#33006F] sticky bottom-0 left-0">

      <div className='container mx-auto w-full flex flex-col items-center justify-center gap-4'>
        <div className='w-full flex-1 flex flex-col md:flex-row items-center md:items-start justify-around gap-4 md:gap-2'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-lg font-bold tracking-wide'>
              Social Links
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='flex items-center gap-4'>
                <a
                href='https://www.instagram.com/smritidoneria/'  
                target='_blank'
                className='flex items-center gap-1 font-semibold opacity-70 hover:opacity-100 cursor-pointer'>
                  <InstagramIcon sx={{
                    fontSize: 20
                  }} /> Instagram
                </a>
                <a
                href='https://www.linkedin.com/in/smriti-doneria-083327267/'  
                target='_blank' 
                className='flex items-center gap-1 font-semibold opacity-70 hover:opacity-100 cursor-pointer'>
                  <LinkedInIcon sx={{
                    fontSize: 20
                  }} /> LinkedIn
                </a>
              </div>
              <div className='flex items-center gap-4'>
           
                <a
                href='https://www.youtube.com/@smritidoneria'  
                target='_blank' 
                className='flex items-center gap-1 font-semibold opacity-70 hover:opacity-100 cursor-pointer'>
                  <YouTubeIcon sx={{
                    fontSize: 20
                  }} /> YouTube
                </a>
              </div>
            </div>
          </div>
          {/* <div className='flex flex-col items-center justify-center gap-2'>
            <div className='text-lg font-bold tracking-wide'>
              Mobile App
            </div>
            <button>
              <img
                src={googlePlay}
                alt="Play Store"
                width={150}
              />
            </button>
          </div> */}
          
        </div>
        <hr
          className='w-[90%] opacity-20' 
        />
        <div className='mb-[-10px]'>
          <div className='opacity-60'>
          Copyright © Financial Academia 2024. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
