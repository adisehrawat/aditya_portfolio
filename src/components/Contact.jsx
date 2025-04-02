import FadeInSection from "./FadeInSection";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex items-center justify-center min-h-screen mx-auto pt-[100px] px-5 sm:px-6 "
    >
      <FadeInSection>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-left">
        <div className="section-header mb-6">
          <span className="section-title text-red-500 xl:text-3xl md:text-2.5xl sm:text-3xl text-2xl">
            / contact
          </span>
        </div>
          <h3 className="text-white xl:text-3xl md:text-3xl sm:text-2xl text-2xl font-semibold">
            Don't be shy! Hit me up! 👇
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-16 mt-16">
          <div className="flex items-center gap-6 flex-col md:flex-row">
            <div className="bg-white w-18 h-18 flex items-center justify-center shadow-lg rounded-full text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-map-search"
              >
                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                <path d="M9 4v13"></path>
                <path d="M15 7v5"></path>
                <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M20.2 20.2l1.8 1.8"></path>
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl text-white font-semibold">Location</h3>
              <p className="text-gray-300 text-lg">Haryana, India</p>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-col md:flex-row">
            <div className="bg-white w-18 h-18 flex items-center justify-center shadow-lg rounded-full text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-mail"
              >
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl text-white font-semibold">Mail</h3>
              <a
                href="mailto:sehrawataditya22@gmail.com"
                className="text-lg text-gray-300 hover:text-red-500 transition-all"
              >
                sehrawataditya22@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;
