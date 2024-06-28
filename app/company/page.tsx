'use client'
import Header from '../../components/header'

function New() {
  return (
    <>
    <Header />
    <div className='flex justify-center mt-12'>
    <div className="max-w-sm flex flex-col rounded-3xl bg-white dark:bg-gray-950 shadow-xl ring-1 ring-black/10">
  <div className="p-8 sm:p-10">
    <h3 id="tier-basic" className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Enterprise</h3>
    <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
      <span>$250</span>
      <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">/mo</span>
    </div>
    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-200">
      Perfect starting point for Enterprise users.
      Join now to get a taste of all the features &amp; benefits that Subtxt has to offer.
    </p>
  </div>
  <div className="flex flex-1 flex-col p-2">
    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 dark:bg-gray-900 p-6 sm:p-8">
      <ul role="list" className="space-y-3">
        <li className="flex items-start">
          <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
            550+ Unique Story Structures
          </p>
        </li>
        <li className="flex items-start">
          <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
            100 AI Tokens/Month
          </p>
        </li>
        <li className="flex items-start">
          <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
            Unlimited AI Assistance
          </p>
        </li>
        <li className="flex items-start">
          <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
            Fine-Tuned Story Models
          </p>
        </li>
      </ul>
      <div className="mt-8">
        <a href="#" aria-describedby="tier-basic"
          className="inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-indigo-700">
          Get started today
        </a>
      </div>
    </div>
  </div>
</div></div>

    </>
  );
}

export default New;