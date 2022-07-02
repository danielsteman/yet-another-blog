/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Base from "../components/Base.tsx"

export default function Blog() {
  return (
    <Base>
      <ul class={tw`flex`}>
        <li class={tw`mr-6`}>
          <div>Blog post</div>
        </li>
        <li class={tw`mr-6`}>
          <div>Blog post</div>
        </li>
        <li class={tw`mr-6`}>
          <div>Blog post</div>
        </li>
      </ul>
    </Base>
  );
}
