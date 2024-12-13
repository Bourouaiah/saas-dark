import XSocial from '../assets/icons/x-social.svg'
import TikTokSocial from '../assets/icons/tiktok.svg'
import YoutubeSocial from '../assets/icons/youtube.svg'

function Footer() {
  return (
    <footer className='bg-black py-5 text-white/60 border-t border-white/20'>
      <div className='container'>
        <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className='text-center'>@ 2024 Your Company, Inc. All rights reserved</div>
          <ul className='flex justify-center gap-2.5'>
            <li><XSocial /></li>
            <li><TikTokSocial /></li>
            <li><YoutubeSocial /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer