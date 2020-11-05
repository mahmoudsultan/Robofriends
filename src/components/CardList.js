import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <>
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
    </>
  );
};

export default CardList;
