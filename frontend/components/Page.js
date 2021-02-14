import PropTypes from 'prop-types';
import Header from './Header';

function Page({ children }) {
  return (
    <div>
      <Header />
      <h2>I'm the Page bro</h2>
      {children}
    </div>
  );
}

export default Page;

Page.propTypes = {
  children: PropTypes.any,
};
