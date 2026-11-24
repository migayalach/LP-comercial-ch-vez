const brands = [
  "Paceña",
  "Huari",
  "Potosina",
  "Taquiña",
  "Cordillera",
  "Havana Club",
  "Absolut",
  "Johnnie Walker",
  "Singani Casa Real",
  "Rujero",
  "Kohlberg",
  "Coca-Cola",
  "Pepsi",
  "Simba",
  "Sprite",
  "Fanta",
  "Vital",
  "Marlboro",
  "Camel",
  "Lucky Strike",
];

function BrandsModal() {
  return (
    <section className="overflow-hidden bg-primary py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-7 text-center">
          <h2 className="text-2xl font-black text-white md:text-3xl">
            Marcas que encontrarás
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {[...brands, ...brands].map((brand, index) => (
              <span
                key={`${brand}-${index}`}
                className="whitespace-nowrap text-base font-bold text-white md:text-lg"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandsModal;