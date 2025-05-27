const LearningCard = ({ title, description, imgSrc }) => {
  return (
    <div className="w-1/2 mt-7 px-4">
      <img src={imgSrc} alt="icon" className="w-[70px] h-[50px] ml-4" />
      <h2 className="font-semibold text-sm mt-2">{title}</h2>
      <p className="mt-1">{description}</p>
    </div>
  );
};

const Learning = () => {
  return (
    <div className="mx-26 mt-6 p-6">
      <div className="text-4xl font-bold">
        <h1>Advantage</h1>
        <h1>Learning</h1>
      </div>

      <div className="flex flex-wrap">
        <LearningCard
          imgSrc="/images/game.png"
          title="On-Court Training"
          description="It builds muscle memory and sharpens reflexes through repetitive, high-intensity drills. It also boosts decision-making by simulating real-game situations."
        />
        <LearningCard
          imgSrc="/images/cricket.png"
          title="Fitness & Movement"
          description="Dedicated cricket-specific fitness programs focusing on agility, strength, and endurance. Monitoring player performance, correct posture, and prevent injury through proper technique."
        />
        <LearningCard
          imgSrc="/images/wicket.png"
          title="Performance Management"
          description="A coach helps track and analyze a player’s performance through regular assessments and match feedback."
        />
        <LearningCard
          imgSrc="/images/stadium.png"
          title="Tournament Travel"
          description="Tournament travel boosts adaptability by exposing players to diverse conditions and competition. It also strengthens team bonding and resilience through shared experiences."
        />
      </div>
    </div>
  );
};

export default Learning;
