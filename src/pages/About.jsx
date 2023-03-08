import React from "react";

function About() {
  // Functions
  function hello(name) {
    return "Hello " + name;
  }

  const hello_ = (name) => {
    return "Hello Arrow " + name;
  };

  const hello__ = (name) => "Hello Arrow " + name;

  //
  // Arrays & Object
  let basic_array = [1, 2, 3, 4, 5];
  let basic_array_ = ["1", "2", "3", "4", "Hello", "Orange"];

  let basic_obj = {
    id: 1,
    name: "Chux",
    movie: "Chukastrofy",
    game: "Soccer",
  };

  let array_array = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 0],
    [11, 2, 3, 4, 5, 3, 5],
  ];

  let array_obj = [
    { id: 1, name: "Chux", movie: "Chukastrofy" },
    { id: 2, name: "Leye", movie: "Matrix" },
    { id: 3, name: "Arinze", movie: "Passion of Christ" },
  ];

  let array_obj_obj = [
    {
      id: 11,
      name: "Chukwuka",
      nickname: "Chux",
      address: {
        street: "234, London Close,",
        city:{ red: "Milan", blue: "Inter"},
        country: "Italy",
      },
    },
    {
      id: 12,
      name: "Idris",
      nickname: "Hunray",
      address: {
        street: "235, London Close,",
        city: "London City",
        country: "UK",
      },
    },
  ];

  //
  // Maps

  let playerToScore = [
    {
      pid: 9,
      name: "Giroud",
    },
    {
      pid: 7,
      name: "Saka",
    },
    {
      pid: 9,
      name: "Haaland",
    },
    {
      pid: 7,
      name: "Mbappe",
    },
    {
      pid: 9,
      name: "Osihmen",
    },
    {
      pid: 10,
      name: "Kane",
    },
    {
      pid: 9,
      name: "Lacazette",
    },
    {
      pid: 10,
      name: "L. Martinez",
    },
    {
      pid: 9,
      name: "Lewandoski",
    },
    {
      pid: 9,
      name: "Ben Yedder",
    },
  ]

  let players = playerToScore.map(player => ({ playername: player.name}));

  function pstatus(pst) { 
    pst.status = "pending";
    return pst;
  }

  let psta = playerToScore.map(pstatus);

  let scored = psta.map(ps => { ps.status = ps.name == "Osihmen"? "Scored" : "Did Not Score";
    return ps;
  });
  let filtap = playerToScore.filter((pts) => pts.name=="Osihmen");


  function mm(obj) {
    obj.date = "2022-02-22";
    return obj;
  }
  let mapx = array_obj.map(mm);
  let mapx_ = array_obj.map((a) => {
    a.date = a.id == 2 ? "2022-02-22" : "2022-02-21";
    return a;
  });
  let mapx__ = array_obj.map((a) => ({ ...a, date: "2022-02-22" }));
  let mapy = array_obj_obj.map((a) => ({ name: a.name, address: a.address.street + ", " + a.address.city + ", " + a.address.country }));

  // Filters
  function ff(obj) {
    return obj.id < 3;
  }
  let filta = array_obj.filter(ff);
  let filta_ = array_obj.filter((obj) => obj.id < 3);

  let filta_chux = array_obj.filter((obj) => obj.name == "Chux");

  return (
    <>
      <section className=" bg-blue-700">
        <div className="w-4/5 mx-auto h-80 flex items-center">
          <h1 className="text-9xl text-white ">About Us</h1>
        </div>
      </section>
      <main className=" min-h-96">
        <div className="w-4/5 mx-auto py-12">
          <div className="pb-8 mb-8 border-b border-gray-500">
            <h3 className="font-bold text-3xl">Functions</h3>
            <div>Basic Function - {hello("Chux")}</div>
            <div>Arrow Function - {hello_("Oliver Quinn")}</div>
            <div>Optimum Arrow Function - {hello__("Oliver Q")}</div>
          </div>
          <div className="pb-8 mb-8 border-b border-gray-500">
            <h3 className="font-bold text-3xl">Array \ Objects</h3>
            <div>
              Array - First: {basic_array[0]}, Items in array: {basic_array.length}
            </div>
            <div>
              Object - Movie: {basic_obj.movie}, Name: {basic_obj.name}
            </div>
            <div>Array of Array - Get 7: {array_array[1][1]}</div>
            <div>Array of Object - Get Arinze Movie: {array_obj[2].movie}</div>
            <div>Array of Object, Obj - Get Chux City: {array_obj_obj[0].address.city.red}</div>
            <div>Array of Object, Obj - Get Rival City: {array_obj_obj[0].address.city.blue}</div>
          </div>

          <div className="pb-8 mb-8 border-b border-gray-500">
            <h3 className="font-bold text-3xl">Maps</h3>

            <div>
              Original <br />
              {JSON.stringify(array_obj)}
            </div>
            <div>
              Map <br />
              {JSON.stringify(mapx)}
            </div>
            <div>
              Map2 <br />
              {JSON.stringify(mapx_)}
            </div>
            <div>
              Map3 <br />
              {JSON.stringify(mapx__)}
            </div>
            <div>
              MapY <br />
              {JSON.stringify(mapy)}
            </div>
            <div>
            Players to Score <br />
              {JSON.stringify(players)}<br />
              {JSON.stringify(psta)}<br />
              {JSON.stringify(scored)}<br />
            </div>
          </div>

          <div className="pb-8 mb-8 border-b border-gray-500">
            <h3 className="font-bold text-3xl">Filters</h3>

            <div>
              Filta <br />
              {JSON.stringify(filtap)}<br />
              {JSON.stringify(filta)}
            </div>
            <div>
              Filta Chux <br />
              {JSON.stringify(filta_chux)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
