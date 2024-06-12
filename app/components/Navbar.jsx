import Link from 'next/link';
import { title } from 'process'
import React from 'react'
import { BiMoon } from 'react-icons/bi'
import { FaGithub, FaTwitter } from 'react-icons/fa';
import Theme from './Theme';
import AuthLinks from './AuthLinks';

const Navbar = () => {

    const links =[
        {
            id:1,
            title:"Home",
            href:"/"

        },
       
      {
        id:2,
        title:"About",
        href:"/"

    },
    {
      id:3,
      title:"Contact",
      href:"/"

  }
    ];
    const SocialIcons=[
      {
        id:1,
        icon:<FaTwitter/>,
       
      

      },
      {
        id:1,
        icon:<FaGithub/>,
        
      },
      {
        id:1,
        icon:<FaTwitter/>,
        
      }
    ]
  return (
    <div className='flex p-4  items-center'>
      <div className='flex-1 flex gap-3 items-center cursor-pointer'>
        {SocialIcons.map((icons)=>(
          <div key={icons.id}>
            {icons.icon} 
          </div>
        ))}
      </div>

        <div className='flex-1 text-center font-bold text-3xl'><Link href='/'>Blogs</Link></div>
        <div className='flex-1 flex gap-3 items-center justify-evenly font-semibold'>
        <Theme/>
          {links.map((link)=>(
            <Link href={link.href} key={link.id} >{link.title}</Link>
          ))}
          <AuthLinks/>
        </div>
    </div>
  )
}

export default Navbar