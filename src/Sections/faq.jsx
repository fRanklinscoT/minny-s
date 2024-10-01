const Faq = () => {
  return (
    <div className="space-y-4 dark:bg-neutral-900 bg-neutral-300 p-6 min-h-screen">
      <h1 className="text-neutral-100 gupter-bold justify-start font-extrabold text-lg mb-4">Frequently Asked Questions/FAQ's</h1>
      <details className="group border-s-4 border-purple-300 dark:bg-neutral-800 bg-neutral-300 p-6 [&_summary::-webkit-details-marker]:hidden" open>
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium dark:text-neutral-200">Do you take EFT payments?</h2>
          <span className="shrink-0 rounded-full dark:bg-neutral-800 p-1.5 dark:text-neutral-200 sm:p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </span>
        </summary>
        <p className="mt-4 leading-relaxed dark:text-neutral-300">All EFT orders are done via WhatsApp orders on my WhatsApp number, which can be found at the end of the page.</p>
      </details>

      <details className="group border-s-4 border-yellow-500 dark:bg-neutral-800 p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium dark:text-neutral-300">How long should I anticipate waiting for an online order?</h2>
          <span className="shrink-0 rounded-full dark:bg-neutral-800 p-1.5 dark:text-neutral-200 sm:p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </span>
        </summary>
        <p className="mt-4 leading-relaxed dark:text-neutral-300">
          Within 4 days, all orders will leave our workshop and be packaged and ready for delivery with courier services, providing a tracking number. Expect delivery within 3-5 business days once in the hands of the courier.
        </p>
      </details>

      <details className="group border-s-4 border-teal-300 dark:bg-neutral-800 p-6 [&_summary::-webkit-details-marker]:hidden" open>
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium dark:text-neutral-200">Do you do custom prints on T-shirts?</h2>
          <span className="shrink-0 rounded-full dark:bg-neutral-800 p-1.5 dark:text-neutral-200 sm:p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </span>
        </summary>
        <p className="mt-4 leading-relaxed dark:text-neutral-300">Yes</p>
      </details>

      <details className="group border-s-4 border-orange-400 dark:bg-neutral-800 p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5">
          <h2 className="text-lg font-medium dark:text-neutral-300">What if my order is taking longer than expected?</h2>
          <span className="shrink-0 rounded-full dark:bg-neutral-800 p-1.5 dark:text-neutral-200 sm:p-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </span>
        </summary>
        <p className="mt-4 leading-relaxed dark:text-neutral-300">
          Feel free to contact us by sending an inquiry on our website or via our WhatsApp line.
        </p>
      </details>
    </div>
  );
};

export default Faq;
