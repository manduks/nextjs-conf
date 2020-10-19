import carouselData from './data';

export default function Mobile() {
  return (
    <section className="flex flex-row overflow-auto hide-scrollbars mt-8">
      {carouselData().map(d => (
        <div className="block" key={d.id}>
          <section className="flex-shrink margin-2" style={{ width: '100vh' }}>
            <img className="w-full-width" src={d.image} />
          </section>
        </div>
      ))}
    </section>
  );
}
