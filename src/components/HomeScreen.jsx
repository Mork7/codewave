export default function HomeScreen() {
  const paragraphStyles = "bg-slate-300 mb-4 p-2 rounded-xl w-80";

  return (
    <div className="flex items-center justify-center w">
      <div className="p-4 w-full">
        <p className={`${paragraphStyles} + ml-auto`}>
          <strong>Infinerty Web Solutions</strong> is committed to excellence in
          full-stack web application development, providing advanced and
          reliable solutions for businesses seeking digital superiority.
        </p>
        <p className={paragraphStyles}>
          Our mission is to harness cutting-edge technology to engineer
          high-performance web applications that drive operational efficiency
          and profitability.
        </p>
        <p className={`${paragraphStyles} + ml-auto`}>
          We are dedicated to surpassing industry benchmarks and propelling
          businesses towards their strategic objectives in a competitive digital
          marketplace.
        </p>
      </div>
    </div>
  );
}
