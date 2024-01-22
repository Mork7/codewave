export default function CardLayout() {
  const paragraphStyles =
    "mb-4 p-2 w-80 border-gray-500 text-center hover:shadow-2xl";

  return (
    <div id="card-layout" className="flex flex-col items-center text-xl">
      <div className="flex flex-col p-4 lg:flex-row">
        <p className={`${paragraphStyles} + lg:border-none border-b-2`}>
          We are committed to excellence in full-stack web application
          development, providing advanced and reliable solutions for businesses
          seeking digital superiority.
        </p>
        <p
          className={`${paragraphStyles} + lg:border-x-2 lg:rounded-none lg:border-y-0 border-b-2` }
        >
          Our mission is to harness cutting-edge technology to engineer
          high-performance web applications that drive operational efficiency
          and profitability.
        </p>
        <p className={`${paragraphStyles} + lg:border-none`}>
          We are dedicated to surpassing industry benchmarks and propelling
          businesses towards their strategic objectives in a competitive digital
          marketplace.
        </p>
      </div>
    </div>
  );
}
