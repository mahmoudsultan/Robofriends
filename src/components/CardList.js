import Scroll from './Sroll';
import Card from './Card';

const CardList = ({ robots }) => {
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
