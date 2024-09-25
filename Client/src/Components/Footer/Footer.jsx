import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css"
function Footer() {
  return (
    <section className='footer_container'>
        <div className='footer_icons'>
        <FacebookIcon />
        <XIcon />
        <InstagramIcon />
        <YouTubeIcon />
        </div>
        <div className='coyright'>

        <p>Copyright &copy; 2024. All Rights Reserved</p>
        </div>
    </section>
  )
}

export default Footer
