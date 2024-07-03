import { useState } from 'react';






export default function Header()  {
  

  return (
    <header
    className="fixed inset-x-0 top-0 z-30 mx-auto   border border-gray-100 bg-white/80 py-2 shadow backdrop-blur-lg  md:rounded-3xl ">
    <div className="px-7">
        <div className="flex items-center justify-between">
            <div className="flex shrink-0">
                <a aria-current="page" className="flex items-center" href="/home">
                    <img className="h-5 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt=""></img>
                    <p className="sr-only">Website Title</p>
                </a>
            </div>
            <div className="hidden md:flex md:items-end md:justify-end md:gap-5">
               
            </div>
            <div className="flex items-center justify-end gap-3">
            <a aria-current="page"
                    className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/documentation">How it works</a>
                <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                    href="/company">Upgrade</a>
            </div>
        </div>
    </div>
</header>

  )
}