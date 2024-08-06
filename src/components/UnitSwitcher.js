
/**
 * UnitSwitcher component is a functional component that allows the user to switch between the metric and imperial units of temperature.
 * It takes two props: units, which is a string indicating the current unit of temperature (metric or imperial), and setUnits, which is a function that sets the units prop.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.units - The current unit of temperature (metric or imperial).
 * @param {function} props.setUnits - The function that sets the units prop.
 * @return {JSX.Element} The UnitSwitcher component.
 */
const UnitSwitcher = ({ units, setUnits }) => {

  // onClick event handler that toggles the units prop between 'metric' and 'imperial'
  const handleClick = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <button onClick={handleClick}>
      {/* FontAwesome icon for thermometer */}
      <i className="fas fa-thermometer-half"></i>
      {/* Text indicating the current unit of temperature */}
      <span>
        Switch to {units === 'metric' ? 'Imperial' : 'Metric'} Units
      </span>
    </button>
  );
};

export default UnitSwitcher;

