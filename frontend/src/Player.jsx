/* eslint-disable react/prop-types */
const Player = ({ gameState }) => {
  return (
    <div className="flex flex-col items-center justify-center m-10 gap-2">
      <div className="p-2 rounded-md bg-violet-500 flex flex-col font-bold text-lg pb-1 gap-2 w-[300px] h-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        <h1 className="text-center font-bold text-lg">Moves</h1>
        <div className="flex flex-col gap-2 text-base">
          {gameState.moves.map((move, index) => (
            <div key={index} className="flex gap-2">
              <p className="font-bold">{index + 1}.</p>
              <p className="uppercase font-bold">{move.character}</p>
              <p className="font-bold">to </p>
              <p className="uppercase font-bold">{move.move}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" p-4  rounded-xl flex flex-row gap-10 items-start justify-start">
        <div className="p-2 rounded-md bg-violet-500">
          {" "}
          <div className="font-bold text-lg pb-1  flex flex-row gap-2">
            <p>Click</p>{" "}
            <div className="px-2 bg-black w-fit h-fit rounded-sm">1</div>{" "}
            <p>to Select P1</p>
          </div>
          <div className="font-bold text-lg pb-1  flex flex-row gap-2">
            <p>Click</p>{" "}
            <div className="px-2 bg-black w-fit h-fit rounded-sm">2</div>{" "}
            <p>to Select P2</p>
          </div>
          <div className="font-bold text-lg pb-1  flex flex-row gap-2">
            <p>Click</p>{" "}
            <div className="px-2 bg-black w-fit h-fit rounded-sm">3</div>{" "}
            <p>to Select P3</p>
          </div>
          <div className="font-bold text-lg pb-1  flex flex-row gap-2">
            <p>Click</p>{" "}
            <div className="px-2 bg-black w-fit h-fit rounded-sm">4</div>{" "}
            <p>to Select H1</p>
          </div>
          <div className="font-bold text-lg pb-1  flex flex-row gap-2">
            <p>Click</p>{" "}
            <div className="px-2 bg-black w-fit h-fit rounded-sm">5</div>{" "}
            <p>to Select H2</p>
          </div>
          <div className="font-bold text-lg pb-1  flex flex-row gap-2">
            <div>press</div>
            <div className="px-2 bg-black w-fit h-fit rounded-sm">Esc</div>
            <p>to clear </p>
          </div>
        </div>

        <div className="p-2 rounded-md bg-violet-500 flex flex-col font-bold text-lg pb-1 gap-2 ">
          <p>For Example: To move H2 to FL</p>
          <div className="flex gap-2">
            <div>1. press</div>
            <div className="px-2 bg-black w-fit rounded-sm">5</div>
          </div>
          <div className="flex gap-2">
            <div>2. press</div>
            <div className="px-2 bg-black w-fit rounded-sm">F</div>
          </div>
          <div className="flex gap-2">
            <div>3. press</div>
            <div className="px-2 bg-black w-fit rounded-sm">L</div>
          </div>
          <div className="flex gap-2">
            <div>4. press</div>
            <div className="px-2 bg-black w-fit rounded-sm">Enter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
