import Scroll from './Sroll';
import Card from './Card';

const CardList = ({ robots }) => {
  if (!robots.length) {
    return <h2 className="tc">Nothing to show here...</h2>;
  }

  return (
    <>
      <Scroll>
      {
        robots.map((robot) => {
          return (
            <Card 
              key={`robot-${robot.id}`}
              id={robot.id} name={robot.name}
              email={robot.email} />
          );
        })
      }
      </Scroll>
    </>
  );
};

export default CardList;
