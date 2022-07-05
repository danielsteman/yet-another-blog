/** @jsx h */
import { h, ComponentChildren } from "preact";
import { useState, useEffect } from "preact/hooks";
import { tw } from "@twind";

type ChildrenProps = {
  children: ComponentChildren;
}

type Item = {
  displayName: string;
  ref: string;
}

export default function Base({ children }: ChildrenProps){
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
    console.log(darkMode)
  }, [darkMode])

  const items: Array<Item> = [
    {
      "displayName": "Home",
      "ref": "/"
    },
    {
      "displayName": "About",
      "ref": "/about"
    },
    {
      "displayName": "Blog",
      "ref": "/blog"
    }
  ];
  return (
    <div>
      <ul class={tw`flex justify-end mx-10 my-6`}>
        {items.map(item => (
          <li class={tw`mr-12`}>
            <a class={
              tw`
                text-l
                tracking-tight
                text-blue-500
                hover:text-blue-800
                font-bold
              `
            } href={item.ref}>{item.displayName}</a>
          </li>
        )
        )}
        <li class={tw`h-10`}>
          <button class={tw`w-10`} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ?
              <svg
                id="theme-toggle-dark-icon"
                class="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                ></path>
              </svg>
            : <svg
                id="theme-toggle-light-icon"
                class="w-5 h-5 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            }
          </button>
        </li>
        <li class={tw`w-6`} />
      </ul>
      <div>
        {children}
      </div>
    </div>
  );
}
