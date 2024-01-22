import CardLayout from "./CardLayout";

// eslint-disable-next-line react/prop-types
export default function HomeScreen({onPastProjectsClick}) {

  const handlePastProjectsClick = (buttonId) => {
    onPastProjectsClick(buttonId)
  }
  return (
    <div id="homescreen-container" className="flex flex-col items-center p-6">
      <section className="flex flex-col mb-10 items-center text-center">
        <h1 className="text-4xl">
          <strong>
            <span className="text-primary">INFINERTY</span> &lt;WebSolutions
            /&gt;
          </strong>
        </h1>
        <h2 className="text-2xl italic">
          Transforming Your Digital Dreams into Reality
        </h2>
      </section>
      <img
        src="https://usa.bootcampcdn.com/wp-content/uploads/sites/103/2019/10/Vanderbilt_7-800x412.png"
        alt=""
      />
      <CardLayout />
      <section
        id="how-this-works-section"
        className="flex flex-col text-center text-lg"
      >
        <h2 className="text-primary text-3xl font-bold">How This Works</h2>
        <p>
  Do you have a small business and need a webpage that clearly displays your products or services? Are you looking for a solution to store, update, and receive payments for your inventory? Perhaps you&apos;re an individual in need of a personal webpage. Whatever your needs, <strong>Infinerty Web Solutions</strong> is here to help. We specialize in designing and implementing web applications tailored to your individual or business requirements.
</p>
<br />
<p>
  Interested in seeing what we can do for you? Take a moment to check out our <button className="font-bold" onClick={() => handlePastProjectsClick('projects')}>past projects</button> and discover why our team might be the perfect choice for your web solution needs!
</p>

      </section>
    </div>
  );
}
