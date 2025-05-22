import Image from "next/image";

const Learning = () => {
    return ( 
        <div className="mx-26 mt-6  p-6">
            <div className="text-4xl font-bold">
                <h1>Advantage</h1>
                <h1>Learning</h1>
            </div>

            <div className="flex flex-wrap">

                <div className="w-1/2 mt-7 px-4">
                    <img src="/images/game.png" alt="no icon" className="w-[70px] h-[50px] ml-4" />
                    <h2 className="font-semibold text-sm mt-2">On-Court Training</h2>
                    <p className="mt-1">
                        It builds muscle memory and sharpens reflexes through repetitive, high-intensity drills. It also boosts decision-making by simulating real-game situations.
                    </p>
                </div>

                <div className="w-1/2 mt-7 px-4">
                    <img src="/images/cricket.png" alt="no icon" className="w-[50px] h-[50px] ml-4" />
                    <h2 className="font-semibold text-sm mt-2">Fitness & Movement</h2>
                    <p className="mt-1">
                        Dedicated cricket-specific fitness programs focusing on agility, strength, and endurance. Monitoring player performance, correct posture, and prevent injury through proper technique.
                    </p>
                </div>

                <div className="w-1/2 mt-7 px-4">
                    <img src="/images/wicket.png" alt="no icon" className="w-[50px] h-[50px] ml-4" />
                    <h2 className="font-semibold text-sm mt-2">Performance Management</h2>
                    <p className="mt-1">
                        A coach helps track and analyze a player’s performance through regular assessments and match feedback.
                    </p>
                </div>

                <div className="w-1/2 mt-7 px-4">
                    <img src="/images/stadium.png" alt="no icon" className="w-[70px] h-[50px] ml-4" />
                    <h2 className="font-semibold text-sm mt-2">Tournament Travel</h2>
                    <p className="mt-1">
                        Tournament travel boosts adaptability by exposing players to diverse conditions and competition. It also strengthens team bonding and resilience through shared experiences.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Learning;
