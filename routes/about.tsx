// routes/about.tsx

/** @jsx h */
import { h } from "preact";
import Base from "../components/Base.tsx"

export default function AboutPage() {
  return (
    <Base>
      <h1>About</h1>
      <p>This is the about page.</p>
    </Base>
  );
}