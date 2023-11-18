import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-neutral-900
    rounded-lg
    h-full 
    w-full
    overflow-hidden
    overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-medium">
            Welcome back,
          </h1>
        </div>
        <div className="
          grid
          grid-col-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid
        "></div>
      </Header>
    </div>
  )
}
 