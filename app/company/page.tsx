'use client'
import { useEffect } from 'react';
import Header from '../../components/header';

// Declare global variables if they come from external scripts
declare global {
  interface Window {
    paypal: any;
  }
}

function New() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AeedQxQqXelOXotEWHxzizF9WSiY5mpwZQWMcXDuM6Yje8oIrGEMhF41GQ8KWH4QhakqjQ-W6h_Ranbf&vault=true&intent=subscription";
    script.onload = () => {
      window.paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'blue',
          layout: 'vertical',
          label: 'paypal'
        },
        createSubscription: function (data: any, actions: any) {
          return actions.subscription.create({
            'plan_id': 'P-98S16859NA3719153MZ7O6JI'
          });
        },
        onApprove: function (data: any, actions: any) {
          alert(data.subscriptionID);
        }
      }).render('#paypal-button-container-P-98S16859NA3719153MZ7O6JI');
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='flex justify-center mt-12'>
        <div className="max-w-sm flex flex-col rounded-3xl bg-white dark:bg-gray-950 shadow-xl ring-1 ring-black/10">
          <div className="p-8 sm:p-10">
            <h3 id="tier-basic" className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Enterprise Pro</h3>
            <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              <span>$250</span>
              <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">/mo</span>
            </div>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-200">
              Perfect starting point for Enterprise users. Join now to get a taste of all the features &amp; benefits.
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
                    Unlimited AI Assistance
                  </p>
                </li>
                <li className="flex items-start">
                  <p className="ml-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    Fine-Tuned Story Models
                  </p>
                </li>
              </ul>
              <div className="mt-8" id="paypal-button-container-P-98S16859NA3719153MZ7O6JI"></div>
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 font-light flex justify-center font-md mb-4'>
connect anuranjan@fine-tune-ai.com for any issues
      </p>
    </>
  );
}

export default New;
