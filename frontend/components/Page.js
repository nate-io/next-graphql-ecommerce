import PropTypes from 'prop-types';

function Page({ children }) {
  return (
    <div>
      <h2>I'm the Page bro</h2>
      {children}
    </div>
  );
}

export default Page;

Page.propTypes = {
  children: PropTypes.any,
};
