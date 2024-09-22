import PropTypes from "prop-types";
import { useState } from "react";

function NavbarItem({ text, textData, dropDown }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="relative hover:text-pink-600 transition-colors duration-300 cursor-pointer "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}

      {isDropdownVisible && (
        <div className="absolute left-0 mt-2 w-48 bg-white border shadow-md z-10">
          <ul>
            {textData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

NavbarItem.propTypes = {
  text: PropTypes.string.isRequired,
  textData: PropTypes.array.isRequired,
  dropDown: PropTypes.bool.isRequired,
};

export default NavbarItem;
