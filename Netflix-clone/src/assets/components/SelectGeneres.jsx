import { useState } from "react";

const TVShowsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between px-4">
        <div className="d-flex align-items-center">
          <h1 className="me-3 text-white">TV Shows</h1>
          <div className="dropdown">
            <button
              className="btn btn-dark dropdown-toggle generesButton"
              type="button"
              onClick={toggleDropdown}
              aria-expanded={isOpen ? "true" : "false"}
            >
              Genres
            </button>
            {isOpen && (
              <ul className="dropdown-menu show">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Horror
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Comedy
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Fantasy
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVShowsComponent;