export default function Home() {
  return (
    <>
      <header className="w-full flex items-center justify-center fixed top-0 text-black bg-white z-10">
        <div className="w-full md:w-4/5 flex items-center justify-between px-4 py-2 md:px-0 md:py-3">
          <h2 className="text-2xl md:text-4xl font-bold">MIYUKI</h2>

          <ul className="flex items-center gap-8">
            <li className="text-xs md:text-base font-bold">Home</li>
            <li className="text-xs md:text-base">Gallery</li>
            <li className="text-xs md:text-base">About</li>
          </ul>
        </div>
      </header>

      <main className="h-screen w-full p-4 mt-[12%]">
        <section className="flex flex-col gap-8 relative">
          <div className="flex flex-col gap-3">
            <div className="grid gap-1">
              <span className="text-[10px] font-bold text-[#CD5FF8]">Fotos Excepcionais Sempre</span>
              <h1 className="text-5xl font-bold">Capture os Momentos Preciosos Para Você</h1>
            </div>
            <span className="font-bold text-xs text-[#BDBDBD]">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \
                scrambled it to make a type specimen book"
              }
            </span>
          </div>

          <div className="w-full flex items-center justify-start relative">
            <button className="border border-black text-black font-bold px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors">
              Ver Imagens
            </button>

            <img src="/assignature.png" alt="assignature" className="w-28 h-full absolute bottom-0 right-0" />
          </div>

          <section className="w-full flex items-center justify-between gap-5 flex-wrap">
            <div className="w-48 h-56 p-5 border border-[#F2F2F2] shadow-lg">
              <img src="/gallery1.jpeg" alt="" className="w-full h-full" />
            </div>

            <div className="w-48 h-56 p-5 border border-[#F2F2F2] shadow-lg">
              <img src="/gallery2.jpg" alt="" className="w-full h-full" />
            </div>

            <div className="w-48 h-56 p-5 border border-[#F2F2F2] shadow-lg mx-auto">
              <img src="/gallery3.jpeg" alt="" className="w-full h-full" />
            </div>
          </section>

          <div className="w-full h-auto flex items-center justify-between text-black">
            <div className="w-[33%] h-auto flex flex-col items-start gap-1">
              <h2 className="text-lg md:text-2xl font-bold">100+</h2>
              <h2 className="text-sm font-semibold">Fotos Armazenadas</h2>
            </div>

            <div className="w-[33%] h-auto flex flex-col items-start gap-1">
              <h2 className="text-lg md:text-2xl font-bold">1000+</h2>
              <h2 className="text-sm font-semibold">Downloads de Imagens</h2>
            </div>

            <div className="w-[33%] h-auto flex flex-col items-start gap-1">
              <h2 className="text-lg md:text-2xl font-bold">50+</h2>
              <h2 className="text-sm font-semibold">Compartilhamentos</h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
