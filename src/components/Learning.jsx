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
    <div className=" mt-6 p-6">
      <div className="text-4xl font-bold">
        <h1 className="text-4xl font-extrabold">Advantage Learning</h1>
        <div className="h-1 bg-slate-600 mt-4"></div>
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
          imgSrc="/images/certificate.png"
          title="Certified Coaches"
          description="Experienced coaches provide personalized training plans, expert guidance, and mentorship to help players reach their full potential."
        />
        <LearningCard
          imgSrc="/images/Camera.png"
          title="Video Analysis"
          description="Video analysis allows players to review their techniques, strategies, and performance in detail, leading to improved skills and game understanding."
        />
        <LearningCard
          imgSrc="/images/group.png"
          title="Group Yoga Classes"
          description="Group yoga classes enhance flexibility, strength, and mental focus, providing a holistic approach to cricket training."
        />
      </div>
    </div>
  );
};

export default Learning;
