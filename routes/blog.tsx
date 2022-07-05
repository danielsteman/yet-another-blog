/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Base from "../components/Base.tsx"

export default function Blog() {
  return (
    <Base>
      <div class={tw`grid grid-cols-5 gap-4`}>
        <div class={tw`px-4`}>
          left menu
          <div>
            <input 
              class={tw`bg-green-300 rounded-lg p-1 hover:bg-green-400`} 
              placeholder="Search..."
            />
          </div>
        </div>
        <div class={tw`col-span-3`}>
          <h1 class={tw`p-4 text-4xl text-center font-bold`}>Latest blog posts</h1>
          <div class={tw`p-4 bg-red-300 rounded-2xl flex hover:bg-red-400`}>
            <div class={tw`float-left`}>
              img placeholder
            </div>
            <div class={tw`float-right`}>
              <h1 class={tw`text-2xl`}>Blog</h1>
              <div class={tw`mt-4`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat perferendis asperiores veniam perspiciatis nisi, ipsam explicabo. Maxime laboriosam, culpa tempora, quos eos accusamus consectetur magni nobis fugit dolore fuga!
              </div>
            </div>
          </div>
        </div>
        <div>right menu</div>
      </div>
    </Base>
  );
}
