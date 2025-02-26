<<<<<<< HEAD
import propTypes from "prop-types";
=======
import PropTypes from "prop-types";
>>>>>>> 6c1fcded92232d8c9465b850bc6fce76f6ccd017
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
<<<<<<< HEAD
  text: propTypes.string.isRequired,
};

=======
  text: PropTypes.string.isRequired,
};
>>>>>>> 6c1fcded92232d8c9465b850bc6fce76f6ccd017
export default Button;
