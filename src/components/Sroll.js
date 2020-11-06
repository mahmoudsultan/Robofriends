import './Scroll.css';

const Scroll = ({ children }) => {
  return (
    <div className='scrollable-on-mobile'>
      { children }
    </div>
  );
}

export default Scroll;
