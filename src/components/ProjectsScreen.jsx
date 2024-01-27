export default function ProductsScreen() {
  const projectClasses = "flex flex-col items-center mb-5 mx-1";
  const h2Classes = "text-xl";
  const imageClasses = "w-96 h-64 rounded-xl hover:shadow-2xl";

  return (
    <div id="projects-container">
      <h1 className="w-full text-center  text-primary text-4xl mb-3 font-bold">
        Our Past Projects
      </h1>
      <h2 className="text-center mb-5">
        There are not real projects* These are simply placeholders used to help define the layout.
      </h2>

      <section
        id="projects-grid-container"
        className="grid grid-cols-1 justify-items-center h- md:grid-cols-2 lg:grid-cols-3"
      >
        <div className={projectClasses}>
          <h2 className={h2Classes}>Project 0</h2>
          <img
            src="https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png"
            alt=""
            className={`${imageClasses} + hover:rotate-6`}
          />
        </div>
        <div className={projectClasses}>
          <h2 className={h2Classes}>Project 1</h2>
          <img
            src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/780adad3-1287-4a7d-9855-177eda23eaa7.jpeg"
            alt=""
            className={`${imageClasses} + hover:-rotate-6`}
          />
        </div>
        <div className={projectClasses}>
          <h2 className={h2Classes}>Project 2</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEiF7lTwSq8IDm6qIxfwQ9CacFmfnYO-DoQeNBqGbXVKaI9aNPThcijODZHl9k5hVsuA&usqp=CAU"
            alt=""
            className={`${imageClasses} + hover:rotate-6`}
          />
        </div>
        <div className={projectClasses}>
          <h2 className={h2Classes}>Project 3</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWrBvL-udaj5AkzTNBoCmiG_29gTld5Vc2tsKtp8VzQGUJDdsxgxBj-NCn-6lBrbeuq1s&usqp=CAU"
            alt=""
            className={`${imageClasses} + hover:-rotate-6`}
          />
        </div>
        <div className={projectClasses}>
          <h2 className={h2Classes}>Project 4</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6J6fHembPVY8FQLRCG4ZVR6doZBKeMscSUIOs3E3kuS7Z58ENkoU8sbKkgPfYPwuIYfA&usqp=CAU"
            alt=""
            className={`${imageClasses} + hover:rotate-6`}
          />
        </div>
        <div className={projectClasses}>
          <h2 className={h2Classes}>Project 5</h2>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4g_fGbaUuP3u62UUOeu6APuutgwOIU_yQfeAElTohIz62TXecO5hS2AdORdg6-h3RxLs&usqp=CAU"
            alt=""
            className={`${imageClasses} + hover:-rotate-6`}
          />
        </div>
      </section>
    </div>
  );
}
