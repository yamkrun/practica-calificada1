export default function Card({ images, nombre, texto }) {
  return (
    <div className="flex mx-[10px]">
      <div className="flex flex-col w-[90%]">
        <img src={images} alt="" className="w-max" />
        <div className="flex">
          <h3 className="font-bold text-l lg:text-2xl w-full">{nombre}</h3>
        </div>
      </div>
      <div className="w-[10%]">
        <p className="text-[9px] rotate-90 whitespace-nowrap lg:pt-3 lg:text-sm">
          {texto}
        </p>
      </div>
    </div>
  );
}
