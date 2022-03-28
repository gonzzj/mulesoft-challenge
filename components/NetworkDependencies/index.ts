import dynamic from "next/dynamic";

const NetworkDependencies = dynamic(() => import("./NetworkDependencies"), {
  ssr: false
})

export default NetworkDependencies;