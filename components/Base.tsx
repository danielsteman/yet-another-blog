/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";

type ChildrenProps = {
  children: ComponentChildren;
}

export default function Base({ children }: ChildrenProps){
  const items: Array<string> = ["Home", "About", "Blog"];
  return (
    <div class={tw`m-6`}>
      <ul class={tw`flex justify-end;`}>
        {items.map(item => (
          <li class={tw`mr-12`}>
            <a class={
              tw`
                text-xl
                tracking-tight
                text-blue-500
                hover:text-blue-800
                font-bold
              `
            } href="/">{item}</a>
          </li>
        )
        )}
      </ul>
      {children}
    </div>
  );
}
