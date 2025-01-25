"use client";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Secure a venue to stage the production",
  "Craft immersive music and sound design",
  "Design a captivating set",
  "Create costumes",
  "Support talented actors",
  "Develop multimedia content",
];

const footerNavigation = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/STEPSTheatre",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@stepstheater1997",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <main className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-y-visible blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
            className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>

        <div className="px-6 pt-8 lg:px-8">
          <div className="mx-auto max-w-3xl pt-12 text-center sm:pt-10">
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              STEPS Theatre
            </h1>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-500 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  <b>For over two decades</b>, STEPS Theatre has united actors,
                  directors, and playwrights from around the globe to create{" "}
                  <i>groundbreaking multilingual performances</i>.
                </p>
                <p className="mt-8">
                  By merging{" "}
                  <i>
                    classic literature, contemporary works, and diverse artistic
                    traditions
                  </i>
                  , we aim to <b>inspire and engage audiences worldwide</b>.
                </p>
              </div>
              <div>
                <p>
                  Multicultural theater is not unusual in New York, but{" "}
                  <b>STEPS immediately and confidently</b> took its unique place
                  as a trailblazer in the rich cultural space of the city.
                </p>
                <p className="mt-8">
                  <b>STEPS Theatre credo</b> is the{" "}
                  <i>ineluctability of coexistence</i>, where theatre becomes a{" "}
                  <b>universal language</b>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pt-4 lg:px-8">
          <div className="mx-auto max-w-3xl pt-12 text-center sm:pt-10">
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Looking ahead to 2025, we are excited to announce two upcoming
              productions:
            </p>
            <h4 className="mt-8 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              “Flawed Choir”
            </h4>
            <p className="mt-0 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              The English version of{" "}
              <b>
                <i>Slava Stepnov&lsquo;s</i>
              </b>{" "}
              original play.
            </p>
            <h4 className="mt-8 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              “The Mutt”
            </h4>
            <p className="mt-0 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              A reimagining of{" "}
              <b>
                <i>Fyodor Dostoevsky&lsquo;s</i>
              </b>{" "}
              Brothers Karamazov, adapted for the modern stage by{" "}
              <b>
                <i>Anna Nesterova</i>
              </b>
              .
            </p>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              In addition, we are launching a brand-new website to keep you
              updated on all our latest news, events, and productions. Stay
              tuned!
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="/images/FlawedChoirPoster25_1.jpg"
            className="aspect-16/9 w-full object-cover xl:rounded-3xl shadow-2xl"
          />
        </div>

        <div className="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="/images/ZhuchkaPoster25_1.jpg"
            className="aspect-16/9 w-full object-cover xl:rounded-3xl shadow-2xl"
          />
        </div>

        <div className="relative isolate -z-10 mt-16 sm:mt-20">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-gray-900/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <div className="h-80 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-80 lg:max-w-sm">
                <div className="justify-center items-center">
                  <form
                    action="https://www.paypal.com/donate"
                    method="post"
                    target="_blank"
                    className="bg-white shadow-md rounded-lg p-6 w-full h-80"
                  >
                    <input type="hidden" name="cmd" value="_donations" />
                    <input
                      type="hidden"
                      name="business"
                      value="payments@stepstheatre.com"
                    />
                    <input
                      type="hidden"
                      name="item_name"
                      value="Support STEPS Theatre"
                    />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input
                      type="hidden"
                      name="return"
                      value="https://stepstheatre.com/"
                    />

                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                      Support STEPS Theatre
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for your donation!
                    </p>

                    <div className="mb-4 mt-6">
                      <label
                        htmlFor="amount"
                        className="block text-gray-700 font-medium"
                      >
                        Donation Amount
                      </label>
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        step="1"
                        min="1"
                        className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter amount in USD"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-2 px-4 mt-6 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Donate with PayPal
                    </button>
                  </form>
                </div>
              </div>

              <div className="w-full flex-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-800 sm:text-5xl">
                  Why We Need Your Help
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-gray-800">
                  Creating a production of high artistic scope requires more
                  than passion—it demands resources. Your donation will allow us
                  to:
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-800 sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-7 w-5 flex-none"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-20 right-0 left-1/3 -z-10 -ml-24 transform-gpu overflow-y-visible blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-4 pb-8 lg:px-8 lg:pt-4">
          <div className="mt-16 border-t border-gray-900/50 pt-6 sm:mt-6 lg:mt-24">
            <div className="mx-auto max-w-7xl md:flex md:items-center md:justify-between">
              <div className="flex justify-center gap-x-6 md:order-2">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
                &copy; 2025 STEPS Theatre. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
