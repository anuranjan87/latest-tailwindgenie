'use client'
import Header from '../../components/header'
import Image from "next/image";

function New() {
  return (
    <>
      <Header />
      <div className="lg:w-9/12 antialiased mx-auto mt-12 lg:mx-auto">
        <div className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <section>
            <h1 className="lg:text-6xl text-5xl font-bold sm:font-black text-center text-blue-700 mt-20 mb-7 hover:text-blue-700 transition duration-300">
              Celebrating UI Design!
            </h1>
            <section className="bg-white text-gray-900 px-5 sm:px-10 lg:px-20">
              <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-3xl md:text-5xl font-black">
                  Every pixel, every color, every interaction crafted with passion!
                </h1>
              </div>
              <div className='flex mt-1 justify-center'>
                <Image
                  src="/mat.gif"
                  alt="Shakespeare"
                  width={336}
                  height={336}
                  className="md:w-6/12 sm:w-8/12"
                />
              </div>
            </section>
            <div className='w-9/12 mx-auto'>
              <h1 className="mb-4 text-3xl font-bold tracking-tighter">
                What is Tailwind-Genie
              </h1>
              <p className="mb-2 text-lg">
                Tailwind-Genie is a generative user interface system by <a href='https://fine-tune-ai.com/' className='text-blue-700' target="_blank">fine-tune-ai</a> powered by AI. It generates copy-and-paste friendly UI code based on Tailwind CSS that people can use in their projects.
              </p>
              <div className="my-14"></div>
              <h1 className="mb-4 text-3xl font-bold tracking-tighter">
                How does Tailwind-Genie work?
              </h1>
              <ul>
                <li className='mb-4 text-lg'>
                  Tailwind-Genie uses AI models to generate code based on simple text prompts.
                </li>
                <li className='mb-4 text-lg'>
                  After you submit your prompt, we give you AI generate codes as well rendered user interface. You can choose one and copy paste its code, or refine it further.
                </li>
                <li className='mb-4 text-lg'>
                  Tailwind Genie not only provides the generated code but also renders a live preview of the user interface component. This allows users to see how the component will look and behave directly within the Tailwind Genie interface.
                </li>
              </ul>
              <h1 className="mb-4 mt-14 text-3xl font-bold tracking-tighter">
                How much does it cost?
              </h1>
              <p className="mb-2 text-lg">
                It is free for individual users. Enterprise can check our <a href='/company' className='text-blue-700' target="_blank">pricing plans</a>.
              </p>
              <h1 className="mb-4 mt-14 text-3xl font-bold tracking-tighter">
                What data was Tailwind-Genie trained on?
              </h1>
              <p className="mb-4 text-lg">
                <a href='https://fine-tune-ai.com/' className='text-blue-700' target="_blank">Fine-tune-ai</a> products are trained on custom code our team has written mixed with open-source and synthetic datasets. We may use user-generated prompts and/or content as inputs to models and learning systems from third-party providers to improve our products. Using this data gives <a href='https://fine-tune-ai.com/' className='text-blue-700' target="_blank">fine-tune-ai</a> the ability to provide more accurate and relevant recommendations to our users.
              </p>
              <p className="mb-21 text-lg">
                No customer data or code was/is or will be used to train, improve, or fine tune the models used by Tailwind-Genie.
              </p>
              <h1 className="mb-4 mt-14 text-3xl font-bold tracking-tighter">
                Can I use output for commercial uses?
              </h1>
              <p className="mb-21 text-lg">
                You own the output you create and are responsible for complying with our Terms related to commercial use.
              </p>
              <div className='flex mt-9 justify-center'>
                <Image
                  src="/end.png"
                  alt="Shakespeare"
                  width={336}
                  height={336}
                  className="md:w-6/12 sm:w-8/12"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default New;
