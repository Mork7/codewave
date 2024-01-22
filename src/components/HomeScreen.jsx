import CardLayout from "./CardLayout";

export default function HomeScreen() {
  return (
    <div id="homescreen-container" className="flex flex-col items-center p-6">
      <section className="flex flex-col mb-10 items-center text-center">
        <h1 className="text-3xl">
          <strong>
            <span style={{ color: "#254b67" }}>INFINERTY</span> &lt;WebSolutions
            /&gt;
          </strong>
        </h1>
        <h2 className="text-2xl italic text-customColor2">
          Transforming Your Digital Dreams into Reality
        </h2>
      </section>
      <img
        src="https://usa.bootcampcdn.com/wp-content/uploads/sites/103/2019/10/Vanderbilt_7-800x412.png"
        alt=""
      />
      <CardLayout />
    </div>
  );
}
