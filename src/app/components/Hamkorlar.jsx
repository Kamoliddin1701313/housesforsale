import { hamkorlar } from "../mock";

function Hamkorlar() {
  return (
    <div className="mx-auto">
      <h3 className="text-center mb-6 mt-10 text-[30px] text-black font-medium">
        Hamkorlar bilan fikr almashish
      </h3>
      <div className="grid grid-cols-4">
        {hamkorlar?.map((value, index) => (
          <div key={index}>
            <img src={value.img} className="h-[380px] w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hamkorlar;
