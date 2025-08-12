import Card from "./components/card";
function App() {
  return (
    <>
      <div className="bg-[#111827] text-[#c6cad1]">
        <header className="flex flex-col md:flex-row md:justify-between md:mx-[100px] m-12">
          <h1 className="text-3xl font-bold mb-6 lg:text-4xl">
            The creative crew
          </h1>
          <div className="flex flex-col pl-6 md:w-[300px] lg:w-[350px] ">
            <h2 className="font-bold pt-2 lg:text-2xl">Who we are</h2>
            <p className="lg:text-xl">
              We are a team of creatively diverse, driven, innovative
              individuals working in various location from the word.
            </p>
          </div>
        </header>
        <main className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:mx-[100px]">
          <div>
            <Card
              images={"/images/photo1.png"}
              nombre={"Bill Maholey"}
              texto={"PRODUCT OWNER"}
            />
          </div>
          <div className="pt-16 lg:mt-16">
            <Card
              images={"/images/photo2.png"}
              nombre={"Saba Cabrera"}
              texto={"ART DIRECTOR"}
            />
          </div>
          <Card
            images={"/images/photo3.png"}
            nombre={"Shae Le"}
            texto={"TEACH LEAD"}
          />
          <div className="pt-16 md:pt-0">
            <Card
              images={"/images/photo4.png"}
              nombre={"Skylah Lu"}
              texto={"UX DESIGNER"}
            />
          </div>
          <div className="md:pt-16 lg:mt-16">
            <Card
              images={"/images/photo5.png"}
              nombre={"Griff Richards"}
              texto={"DEVELOPER"}
            />
          </div>

          <div className="pt-16 md:pt-0">
            <Card
              images={"/images/photo6.png"}
              nombre={"Stan John"}
              texto={"DEVELOPER"}
            />
          </div>
        </main>
        <foter className="flex justify-center items-center mt-16 mb-4">
          <p>
            created by <strong> yamirengifo</strong>
          </p>
        </foter>
      </div>
    </>
  );
}

export default App;
