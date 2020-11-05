import './Card.css'

const Card = ({ id, name, email }) => {
  return (
    <div className='dib tc ma3 pa3 br3 bw2 card grow shadow-2'>
      <img width="200" height="200" src={`https://robohash.org/${id}?200x200`} alt={`robot-${name}`} />
      <div>
        <h2 className='white f2'>{ name }</h2>
        <p className='white'>{ email }</p>
      </div>
    </div>
  );
}

export default Card;
