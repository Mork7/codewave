export default function HomeScreen() {
  const paragraphStyles = "mb-4 p-2 w-80 border-2 border-gray-500 rounded-xl";

  return (
    <div id="homescreen-container" className="flex flex-col justify-center">
      <div id="card-layout" className="flex flex-col items-center">
        <h1 className="text-2xl">
          <strong>
            <span style={{ color: "#254b67" }}>INFINERTY</span> &lt;Web
            Solutions/&gt;
          </strong>
        </h1>
        <div className="flex flex-col p-4 lg:flex-row">
          <p className={`${paragraphStyles} + lg:border-none`}>
            We&apos;re committed to excellence in full-stack web application
            development, providing advanced and reliable solutions for
            businesses seeking digital superiority.
          </p>
          <p
            className={`${paragraphStyles} + lg:border-x-2 lg:rounded-none lg:border-y-0`}
          >
            Our mission is to harness cutting-edge technology to engineer
            high-performance web applications that drive operational efficiency
            and profitability.
          </p>
          <p className={`${paragraphStyles} + lg:border-none`}>
            We are dedicated to surpassing industry benchmarks and propelling
            businesses towards their strategic objectives in a competitive
            digital marketplace.
          </p>
        </div>
      </div>
    </div>
  );
}
