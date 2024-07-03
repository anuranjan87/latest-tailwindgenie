'use client'
import React from 'react';

export default function Home() {
    const linkedin = () => {
        window.open('https://www.linkedin.com/in/sirisha-lanka/', '_blank');
    };
    const resume = () => {
        window.open('https://www.linkedin.com/in/sirisha-lanka/overlay/1635511637170/single-media-viewer/?profileId=ACoAAC2OxEEBFOQZXXeNmki0LisF1f4A2m5DVIk', '_blank');
    };

  return (
    <>
<nav className="bg-black text-white p-3 item-center justify-center flex font-black">
    
  <a href='/'> 
<svg width="143" height="18" viewBox="0 0 143 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.376 17H4.056V6.32H0.192V3.32H12.24V6.32H8.376V17ZM19.2553 17L18.8713 15.488C18.1353 16.688 17.1113 17.288 15.7993 17.288C14.7273 17.288 13.8473 16.992 13.1593 16.4C12.4873 15.792 12.1513 14.944 12.1513 13.856C12.1513 13.184 12.3433 12.6 12.7273 12.104C13.1273 11.592 13.6713 11.232 14.3593 11.024C15.2553 10.768 16.6393 10.624 18.5113 10.592C18.5113 9.536 18.4633 8.976 18.3673 8.912C18.2873 8.848 18.0313 8.816 17.5993 8.816C17.3273 8.816 16.9513 8.832 16.4713 8.864C15.7033 8.896 14.6633 8.984 13.3513 9.128C13.2233 8.264 13.1273 7.336 13.0633 6.344C13.9113 6.168 14.7993 6.024 15.7273 5.912C16.6553 5.784 17.4873 5.72 18.2233 5.72C19.5033 5.72 20.4633 5.936 21.1033 6.368C21.7433 6.784 22.1593 7.336 22.3513 8.024C22.5433 8.712 22.6313 9.584 22.6153 10.64L22.5913 14.168L22.6633 17H19.2553ZM17.1913 14.6C17.6073 14.6 18.0473 14.52 18.5113 14.36V12.584H18.3193C17.1353 12.584 16.4793 12.648 16.3513 12.776C16.2713 12.856 16.2073 12.976 16.1593 13.136C16.1273 13.296 16.1113 13.448 16.1113 13.592C16.1113 13.976 16.1993 14.24 16.3753 14.384C16.5513 14.528 16.8233 14.6 17.1913 14.6ZM26.6044 4.592C26.0604 4.592 25.5884 4.408 25.1884 4.04C24.8044 3.672 24.6124 3.232 24.6124 2.72C24.6124 2.208 24.8044 1.768 25.1884 1.4C25.5884 1.032 26.0604 0.847999 26.6044 0.847999C27.1484 0.847999 27.6124 1.032 27.9964 1.4C28.3804 1.768 28.5724 2.208 28.5724 2.72C28.5724 3.232 28.3804 3.672 27.9964 4.04C27.6124 4.408 27.1484 4.592 26.6044 4.592ZM24.5404 5.96H28.6444V17H24.5404V5.96ZM30.7513 2.6L34.8553 2.432V17H30.7513V2.6ZM43.6823 17H38.4983L36.0503 5.96H40.2503L41.3303 14.168H41.4023L42.6263 5.96H47.0663L48.3623 14.144H48.4583L49.4662 5.96H53.6903L51.2423 17H46.0343L44.8823 10.328H44.8103L43.6823 17ZM56.9559 4.592C56.4119 4.592 55.9399 4.408 55.5399 4.04C55.1559 3.672 54.9639 3.232 54.9639 2.72C54.9639 2.208 55.1559 1.768 55.5399 1.4C55.9399 1.032 56.4119 0.847999 56.9559 0.847999C57.4999 0.847999 57.9639 1.032 58.3479 1.4C58.7319 1.768 58.9239 2.208 58.9239 2.72C58.9239 3.232 58.7319 3.672 58.3479 4.04C57.9639 4.408 57.4999 4.592 56.9559 4.592ZM54.8919 5.96H58.9959V17H54.8919V5.96ZM71.7109 6.656C71.8549 6.832 71.9589 7.272 72.0229 7.976C72.1029 8.68 72.1429 9.752 72.1429 11.192V17H68.0389V11.24V10.256C68.0389 9.744 67.9989 9.424 67.9189 9.296C67.7909 9.136 67.4949 9.056 67.0309 9.056C66.8069 9.056 66.6389 9.064 66.5269 9.08C66.0789 9.096 65.6149 9.2 65.1349 9.392V17H61.0309V5.96H64.3669L64.8229 7.808C65.9749 6.416 67.3509 5.72 68.9509 5.72C69.5269 5.72 70.0629 5.8 70.5589 5.96C71.0709 6.12 71.4549 6.352 71.7109 6.656ZM85.0307 2.432V17H81.6467L81.3107 15.152C80.9907 15.776 80.5187 16.272 79.8947 16.64C79.2707 17.008 78.5667 17.192 77.7827 17.192C76.5347 17.192 75.5347 16.744 74.7827 15.848C74.0467 14.952 73.6787 13.608 73.6787 11.816C73.6787 10.456 73.8387 9.336 74.1587 8.456C74.4787 7.576 74.8547 6.944 75.2867 6.56C75.5587 6.32 76.1107 6.12 76.9427 5.96C77.7907 5.8 78.5427 5.72 79.1987 5.72C79.7747 5.72 80.3667 5.776 80.9747 5.888C80.9267 5.12 80.9027 4.696 80.9027 4.616V2.6L85.0307 2.432ZM79.5827 13.976C80.0147 13.976 80.4627 13.904 80.9267 13.76V8.552C80.4627 8.488 79.9507 8.456 79.3907 8.456C78.9107 8.456 78.6067 8.496 78.4787 8.576C78.3027 8.704 78.1587 9.072 78.0467 9.68C77.9507 10.272 77.9027 10.896 77.9027 11.552C77.9027 12.528 78.0467 13.176 78.3347 13.496C78.6387 13.816 79.0547 13.976 79.5827 13.976ZM99.1676 9.416V16.256C98.0956 16.608 97.0796 16.864 96.1196 17.024C95.1596 17.184 94.3516 17.264 93.6956 17.264C91.5196 17.264 89.8156 16.696 88.5836 15.56C87.3516 14.424 86.7356 12.68 86.7356 10.328C86.7356 7.928 87.3836 6.136 88.6796 4.952C89.9756 3.752 91.7996 3.152 94.1516 3.152C95.3836 3.152 96.8636 3.336 98.5916 3.704C98.5916 4.024 98.5596 4.504 98.4956 5.144C98.4316 5.768 98.3676 6.208 98.3036 6.464L97.4396 6.44C96.3836 6.408 95.5596 6.392 94.9676 6.392C93.1916 6.392 92.2236 6.496 92.0636 6.704C91.8076 7.008 91.6236 7.48 91.5116 8.12C91.4156 8.76 91.3676 9.376 91.3676 9.968C91.3676 11.04 91.4876 11.872 91.7276 12.464C91.9676 13.056 92.3356 13.472 92.8316 13.712C93.3276 13.952 93.9996 14.072 94.8476 14.072H94.9436V9.416H99.1676ZM107.688 14.12C108.088 14.12 108.832 14.08 109.92 14C110.064 14 110.328 13.984 110.712 13.952L111.072 16.424C109.84 17 108.24 17.288 106.272 17.288C104.432 17.288 103.016 16.824 102.024 15.896C101.048 14.968 100.56 13.568 100.56 11.696C100.56 10.736 100.68 9.808 100.92 8.912C101.176 8.016 101.464 7.392 101.784 7.04C102.12 6.688 102.744 6.384 103.656 6.128C104.568 5.872 105.472 5.744 106.368 5.744C107.808 5.744 108.888 6 109.608 6.512C110.328 7.024 110.8 7.736 111.024 8.648C111.248 9.544 111.36 10.752 111.36 12.272C110.272 12.336 109.208 12.368 108.168 12.368H104.76C104.76 12.88 104.864 13.264 105.072 13.52C105.296 13.776 105.608 13.944 106.008 14.024C106.408 14.088 106.968 14.12 107.688 14.12ZM105 8.6C104.904 8.648 104.832 8.856 104.784 9.224C104.736 9.592 104.704 10.008 104.688 10.472H105.936C106.688 10.472 107.232 10.464 107.568 10.448C107.568 9.68 107.456 9.136 107.232 8.816C107.024 8.496 106.656 8.336 106.128 8.336C105.696 8.336 105.32 8.424 105 8.6ZM123.484 6.656C123.628 6.832 123.732 7.272 123.796 7.976C123.876 8.68 123.916 9.752 123.916 11.192V17H119.812V11.24V10.256C119.812 9.744 119.772 9.424 119.692 9.296C119.564 9.136 119.268 9.056 118.804 9.056C118.58 9.056 118.412 9.064 118.3 9.08C117.852 9.096 117.388 9.2 116.908 9.392V17H112.804V5.96H116.14L116.596 7.808C117.748 6.416 119.124 5.72 120.724 5.72C121.3 5.72 121.836 5.8 122.332 5.96C122.844 6.12 123.228 6.352 123.484 6.656ZM127.948 4.592C127.404 4.592 126.932 4.408 126.532 4.04C126.148 3.672 125.956 3.232 125.956 2.72C125.956 2.208 126.148 1.768 126.532 1.4C126.932 1.032 127.404 0.847999 127.948 0.847999C128.492 0.847999 128.956 1.032 129.34 1.4C129.724 1.768 129.916 2.208 129.916 2.72C129.916 3.232 129.724 3.672 129.34 4.04C128.956 4.408 128.492 4.592 127.948 4.592ZM125.884 5.96H129.988V17H125.884V5.96ZM138.719 14.12C139.119 14.12 139.863 14.08 140.951 14C141.095 14 141.359 13.984 141.743 13.952L142.103 16.424C140.871 17 139.271 17.288 137.303 17.288C135.463 17.288 134.047 16.824 133.055 15.896C132.079 14.968 131.591 13.568 131.591 11.696C131.591 10.736 131.711 9.808 131.951 8.912C132.207 8.016 132.495 7.392 132.815 7.04C133.151 6.688 133.775 6.384 134.687 6.128C135.599 5.872 136.503 5.744 137.399 5.744C138.839 5.744 139.919 6 140.639 6.512C141.359 7.024 141.831 7.736 142.055 8.648C142.279 9.544 142.391 10.752 142.391 12.272C141.303 12.336 140.239 12.368 139.199 12.368H135.791C135.791 12.88 135.895 13.264 136.103 13.52C136.327 13.776 136.639 13.944 137.039 14.024C137.439 14.088 137.999 14.12 138.719 14.12ZM136.031 8.6C135.935 8.648 135.863 8.856 135.815 9.224C135.767 9.592 135.735 10.008 135.719 10.472H136.967C137.719 10.472 138.263 10.464 138.599 10.448C138.599 9.68 138.487 9.136 138.263 8.816C138.055 8.496 137.687 8.336 137.159 8.336C136.727 8.336 136.351 8.424 136.031 8.6Z" fill="#FFFDFD"/>
</svg></a>

        
  
</nav>

      <section className='bg-[#dadedf]'>
        <div className="relative  items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="hidden lg:block max-w-5xl text-3xl font-black leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Backend Developers become <br className="block" />
                Full-Stack Pros with <p className='text-[#2eb8b8]'>Tailwind Genie.    </p>            </h1>


                <h1 className="lg:hidden max-w-5xl font-black leading-none tracking-tighter text-neutral-600 text-5xl">
                <span className='text-6xl '>Developers</span> <br/>become <br/>
                Full-Stack Pros<br/> with <p className='text-[#2eb8b8]'>Tailwind Genie.    </p>            </h1>
               
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  
                  <div className="my-6 rounded-lg sm:mt-0 sm:ml-3">
                  <a href="/"><button className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-10 py-2 lg:text-xl text-sm rounded font-bold focus:ring ring-black ring-opacity-10 gradient element-to-rotate">Try Free</button></a>
                  </div>
                </div>
                
              </div>

              

            </div>
          </div>
        </div>
      </section>


      <section className="flex flex-col md:flex-row justify-between items-center h-screen bg-white">
      <div className="relative inline-flex items-center mx-auto align-middle">

  <div className="max-w-lg lg:p-6 p-0">
    <h1 className="mt-6 lg:text-6xl  text-5xl font-black leading-none tracking-tighter text-neutral-600 text-center lg:text-left">Instant <p className='text-[#2eb8b8]'>Magic!</p></h1>
    <p className='text-center lg:text-left'>Generate UI using prompt</p>
  </div></div>

  <div className="hidden lg:block lg:max-w-xl max-w-xs mx-auto justify-between items-center">
      <video className="w-full h-auto rounded-lg shadow-lg mt-2" autoPlay loop muted>
        <source src="/nww.mp4" type="video/mp4" />
      </video>
    </div>

    <div className=" lg:hidden  my-auto justify-between items-center">
      <video className=" rounded-2xl shadow-lg" autoPlay loop muted>
        <source src="/demo.mp4" type="video/mp4" />
      </video>
    </div>
</section>



<section className='bg-[#dadedf]'>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-5xl text-4xl font-black leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Attact screenshot               </h1>
                <p className="max-w-xl mx-auto mt-8  text-gray-500">
                Attach screenshots directly through application, which can then be used for generating UI.               </p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
</svg>

                  </div>
                </div>
              </div>

              

            </div>
          </div>
        </div>
      </section>

      
<div className="min-h-screen bg-white flex-row items-center justify-center">
<h1 className="max-w-5xl text-center mt-4 py-12 text-4xl font-black leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
<span className='text-[#2eb8b8]'>Why</span> choose us?              </h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 ">
    <div className="bg-white p-6 rounded-m border-dashed border-2 shadow-md hover:shadow-lg">
      <h1 className="lg:text-2xl text-xl font-bold text-gray-800 mb-4">Design Consistency</h1>
      <p className="text-base lg:text-md text-sm text-gray-600 ">Our platform offers consistent UI components that are easy to integrate, reducing development time by up to 50%. You can refine outputs quickly by using prompts for customization.</p>
    </div>
    <div className="bg-white p-6 rounded-m border-dashed border-2  shadow-md hover:shadow-lg">
      <h1 className="lg:text-2xl text-xl font-bold text-gray-800 mb-4">Iteration Speed</h1>
      <p className="text-base lg:text-md text-sm text-gray-600 ">Our platform makes creating and iterating on prototypes 80% faster. For simple queries, we respond in about 2 seconds, compared to ChatGPT 10 seconds. Additionally, you can see a live preview of the code, saving even more time.</p>
    </div>
    <div className="bg-white p-6 rounded-m border-dashed border-2  shadow-md hover:shadow-lg">
      <h1 className="lg:text-2xl text-xl font-bold text-gray-800 mb-4">Handling Different Screen Sizes</h1>
      <p className="text-base lg:text-md text-sm text-gray-600 ">Our tool creates responsive designs which adapt to various screen sizes and orientations. Included multiple preview modes that simulate how the design will look on different devices.</p>
    </div>
  </div>
</div>




<div>
  <div className="flex h-screen items-center justify-center bg-gray-900 p-7">
    <div className="grid md:grid-cols-2 grid-cols-1 items-center  md:px-10">
      <div className='order-last md:order-first'>
        <h1 className="mb-2 text-3xl text-center md:text-left font-bold text-white"><span className="text-green-500">Hi,</span> I&#39;m Full Stack Developer...</h1>
        <p className="mb-6 text-white p-4 lg:p-0">As a software engineer at Apple, I use this tool almost every day. Honestly, I can&apos;t imagine going back to our old workflow without this tool. It&apos;s just awesome!</p>
        <div className="flex justify-center space-x-5">
          <button onClick={linkedin} className=" flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
            Follow
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          <button onClick={resume} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/mSHSf3j/New-Project-7.png" alt="" className="md:size-96 size-72 rounded-full mx-auto mt-12" />
      </div>
    </div>
  </div>
</div>



     
<div className="min-h-screen bg-white flex-row items-center justify-center">
<h1 className="max-w-5xl text-center mt-4 py-12 text-4xl font-black leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
<span className='text-[#2eb8b8]'>How</span> it works?              </h1>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 ">
    <div className="bg-white p-6 rounded-m border-dashed border-2 mx-auto my-auto shadow-md hover:shadow-lg">
    
      <p className=" text-gray-600 font-bold text-center">Enrich user prompt before processing.</p>
      <p className=" text-gray-600 text-sm italic text-center mt-2">After user enters the prompt we add additional information to yeild better results</p>

    </div>
    <div className="bg-white p-6 rounded-m border-dashed border-2 mx-auto my-auto  shadow-md hover:shadow-lg">
      <h1 className="text-md font-bold text-gray-800 text-center">Use AI model</h1>
      <p className=" text-gray-600 text-sm italic text-center mt-2">We use  GPT-3.5 custom fine-tune model for generating responses, <a href='https://fine-tune-ai.com/' className="text-blue-700">fine-tune-ai.com</a></p>
    </div>
    <div className="bg-white p-6 rounded-m border-dashed border-2 mx-auto my-auto  shadow-md hover:shadow-lg">
      <h1 className="text-md font-bold text-gray-800 text-center">Stream response</h1>
      <p className=" text-gray-600 text-sm italic text-center mt-2">We ensure that the UI performs well without lag or slowdowns is critical for user satisfaction</p>
    </div>
</div>
<div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <a href="/"><button className="bg-gradient-to-r from-blue-500 to-red-500 text-white px-10 py-2 lg:text-xl text-sm rounded font-bold focus:ring ring-black ring-opacity-10 gradient element-to-rotate">Try Free</button></a>
                  </div>
                </div>

<div className="min-h-screen">
                <h1 className="max-w-5xl text-center mt-10 py-14 text-4xl font-black leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                -The<span className='text-[#2eb8b8]'>end-</span>              </h1>
</div></div>
    </>
  );
}
