import Image from "next/image";
import FutureImage from "next/future/image";

import pandaJpg from "../public/panda.jpg";

export default function Home() {
  return (
    <>
      <h1>🐼 Please disable JavaScript from your dev tools!</h1>

      <h2><code>next/future/image</code></h2>
      <p>Two images will be produced here by a single <code>next/future/image</code> component. When running in <code>next dev</code>, the image on the left is blurred. In production, there are simply two duplicate images.</p>

      <FutureImage src={pandaJpg} placeholder="blur" />

      <h2><code>next/image</code></h2>
      <p>Only one image appears here as expected, whether or not JS is enabled.</p>

      <Image src={pandaJpg} placeholder="blur" />
    </>
  );
}
