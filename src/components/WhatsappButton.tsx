import { siteConfig } from "@/data/site";

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:+923349990515"
        aria-label="Call us now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1e85da] shadow-lg transition-transform hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.8-.4 1.2-.2 1.3.4 2.7.7 4.1.7.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1-9.4 0-17-7.6-17-17 0-.6.5-1.1 1.1-1.1H5c.6 0 1.1.5 1.1 1.1 0 1.4.2 2.8.7 4.1.1.4 0 .9-.2 1.2L6.6 10.8Z" />
        </svg>
      </a>

      <a
        href={siteConfig.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#10bc4f] shadow-lg transition-transform hover:scale-105"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.387.713 4.61 1.937 6.473L4.5 29l7.706-1.4A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.6c-1.92 0-3.71-.55-5.226-1.5l-.374-.226-4.575.83.86-4.46-.245-.39A9.55 9.55 0 0 1 5.4 15c0-5.85 4.76-10.6 10.604-10.6S26.6 9.15 26.6 15 21.85 24.6 16.004 24.6Zm5.78-7.94c-.317-.158-1.873-.924-2.163-1.03-.29-.106-.502-.158-.713.158-.21.317-.818 1.03-1.003 1.24-.184.21-.37.238-.687.08-.317-.158-1.336-.492-2.546-1.57-.94-.838-1.575-1.873-1.76-2.19-.184-.317-.02-.488.138-.645.142-.142.317-.37.475-.555.158-.184.21-.317.317-.528.105-.21.052-.396-.026-.555-.08-.158-.713-1.715-.977-2.35-.257-.617-.518-.534-.713-.544l-.607-.01c-.21 0-.554.08-.844.396-.29.317-1.107 1.082-1.107 2.64s1.134 3.064 1.292 3.276c.158.21 2.232 3.41 5.41 4.78.756.327 1.346.522 1.806.668.759.242 1.45.207 1.996.126.609-.091 1.873-.766 2.137-1.505.264-.74.264-1.373.184-1.505-.078-.132-.29-.21-.607-.37Z" />
        </svg>
      </a>
    </div>
  );
}
