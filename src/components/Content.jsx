function Content() {
  return (
    <section className="text-gray-600 body-font bg-stone-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Perry, the place &quot;where Georgia comes together&quot;
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/images/PHSClassOf1889.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Educate
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Our volunteers can provide guided tours of the museum and
              scheduled school field trips. The museum is open to the public on
              Tuesday, Wednesday and Thursday from 10 AM - noon and 2 PM - 4 PM.
              We are also open on Saturday from 9AM - noon. Admission is free.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/images/courtneyhodges.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Research
            </h2>
            <p className="text-base leading-relaxed mt-2">
              The Perry Area Historical Society&apos;s Museum offers a
              collection of artifacts and memorabilia from Perry&apos;s earliest
              days. Of particular interest to researchers is the Museum&apos;s
              Resource Room which contains many family histories and photos.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/images/PerryEvergreenTour2.jpg"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Events
            </h2>
            <p className="text-base leading-relaxed mt-2">
              The City of Perry, in partnership with the Perry Area Historical
              Society, is proud to offer free, historical tours throughout
              October, November, and December to celebrate Perry’s 200th
              birthday in 2024.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
