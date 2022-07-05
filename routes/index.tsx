/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Base from "../components/Base.tsx"

export default function Home() {
  return (
    <Base>
      <div class={tw`grid grid-cols-5`}>
        <div class={tw`bg-green-300`}>left menu</div>
        <div class={tw`col-span-3`}>center</div>
        <div>right menu</div>
      </div>
    </Base>
  );
}
