export const Input = ({ text }) => {
  return <input placeholder={text} style={inputStyles} id="search" />;
};

const inputStyles = {
  width: " 21.8rem",
  height: "3rem",
  borderRadius: "5px",
  border: "1px solid RGB(188, 188, 188)",
  outline: "none",
  marginBottom: "1vh",
  padding: "0 10px",
  color: "#1b1b1b",
};

export default Input;
