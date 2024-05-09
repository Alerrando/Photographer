export default function Home() {
  return (
    <>
      <main className="h-screen md:h-[90vh] w-full p-4 md:p-12 mt-[12%] md:mt-[5%]">
        <section className="md:h-full md:w-1/2 flex flex-col gap-8 relative">
          <div className="flex flex-col gap-3">
            <div className="grid gap-1">
              <span className="text-[10px] md:text-xs font-bold text-[#CD5FF8]">Fotos Excepcionais Sempre</span>
              <h1 className="text-5xl  md:text-6xl font-bold">Capture os Momentos Preciosos Para Você</h1>
            </div>
            <span className="font-bold text-xs text-[#BDBDBD]">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and \
                scrambled it to make a type specimen book"
              }
            </span>
          </div>

          <div className="w-full flex items-center justify-start relative md:static">
            <button className="border border-black text-black font-bold px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors">
              Ver Imagens
            </button>

            <img
              src="/assignature.png"
              alt="assignature"
              className="w-28 h-full md:w-48 md:h-24 absolute bottom-0 right-0 md:-right-[10%] md:bottom-[35%] -rotate-[17deg]"
            />
          </div>

          <section className="w-full md:h-full flex items-center justify-between gap-5 flex-wrap md:absolute md:inset-0">
            <div className="w-48 h-56 md:w-[280px] md:h-[370px] p-5 border border-[#F2F2F2] shadow-lg md:absolute md:-z-10 md:rotate-[29deg] md:left-[50%] md:top-4">
              <img src="/gallery1.jpeg" alt="" className="w-full h-full" />
            </div>

            <div className="w-48 h-56 md:w-[280px] md:h-[370px] p-5 border border-[#F2F2F2] shadow-lg md:absolute md:-z-10 md:rotate-90 md:-right-full md:top-[48%]">
              <img src="/gallery2.jpg" alt="" className="w-full h-full" />
            </div>

            <div className="w-48 h-56 md:w-[280px] md:h-[370px] p-5 border border-[#F2F2F2] shadow-lg md:absolute md:-z-10 mx-auto md:rotate-[68deg] md:-right-2/3 md:-top-10">
              <img src="/gallery3.jpeg" alt="" className="w-full h-full" />
            </div>
          </section>

          <div className="w-full h-auto flex items-center justify-between text-black md:mt-auto">
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
