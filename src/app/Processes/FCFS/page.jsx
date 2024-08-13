// "use client";
// import React, { useState } from "react";

// const page = () => {

//   // let aa;
//   // let dd;
//   const [arrival, setArrival] = useState("");
//   const [burst, setBurst] = useState("");
//   const Numarrival = arrival.split(",").map((num) => num.trim());
//   let a = Numarrival.map((n) => parseInt(n));
//   const NumBurst = burst.split(",").map((num) => num.trim());
//   let d = NumBurst.map((n) => parseFloat(n));

//   // tat=ct-at
//   // // wt=tat-bt,st-at

//   // for (let index = 0; index < a.length; index++) {
//   //   let at = a[index];
//   //   let bt = d[index];
//   //   // console.log(`p${index} + ${at} + ${bt}`);
//   //   // let finish[index]=d.values[0];
//     let finish = [];
//   //   finish[index]=d[index-1]+d[index-1];
//   //   // console.log(`p${index} : ${finish.filter((n)=>n!==',')}`);
//   //   // let first=Math.min(a);
//     let st=[];

//   for (let index = 0; index < a.length; index++) {
//     let at = a[index];
//     let bt = d[index];

//     if (index === 0) {
//       st[index] = at;
//     } else {
//       st[index] = Math.max(at, finish[index - 1]);
//     }

//     // Calculate finish time
//     finish[index] = st[index] + bt;

//     // Log the process information
//     console.log(`p${index} Start Time: ${st[index]}, Finish Time: ${finish[index]}`);
//   }

//   //   if (a.length == d.length) {
//   //     //  aa=a.sort();
//   //     // dd = d.sort();
//   //     let at;
//   //     let bt;
//   //     for (let index = 0; index < a.length; index++) {
//   //      at = a[index] ;
//   //      bt = d[index] ;
//   //      console.log(`p${index} + ${at} + ${bt}`);
//   //      let wt = []; // Initialize wt as an empty array
//   //      //  wt[0] = 0;
//   //     //  wt[index] = bt[index - 1] + wt[index - 1];
//   //     //   console.log(wt);
//   //     let finish[0] =0;
//   //     finish[index] = burst+finish[index];
//   //     let turnarround=[];
//   //     turnarround[index]=finish[index]-a[index];
//   //     console.log('turnarround : '+turnarround);
//   //     wt[index]=turnarround[index]-burst[index]
//   //     console.log('waiting time : '+wt);
//   //     // if (index === 0) {
//   //     //   wt[index] = 0; // Base case
//   //     // } else {
//   //     //   wt[index] = d[index - 1] + (wt[index - 1] || 0); // Avoid accessing out of bounds
//   //     // }

//   //     // console.log(`waiting time ${wt}`);
//   //     // console.log(`avg ${wt}`);
//   //     }
//   //   }

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     if (aa && dd) {
//   //       // const response = await fetch("/Api/FCFS/", {
//   //       //   method: "POST",
//   //       //   headers: {
//   //       //     "Content-Type": "application/json",
//   //       //   },
//   //       //   body: JSON.stringify({
//   //       //     arrival: aa,
//   //       //     burst: dd,
//   //       //   }),
//   //       // });

//   //       // if (response.ok) {
//   //       //   const data = await response.json();
//   //       //   console.log(data.AT.arrival);
//   //       //   console.log(data.BT.burst);
//   //       // } else {
//   //       //   // setError("Invalid email or password");
//   //       // }
//   //     } else {
//   //       console.log("there is not same length");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //   }
//   // };

//   return (
//     <div className=" flex justify-center items-center h-screen flex-col  ">
//       <div className="  p-24 py-44 border-2 rounded-2xl bg-gray-100">
//         <h1 className=" uppercase">Fcfs</h1>
//         <br />
//         <form
//           action=""
//           className=" space-y-5"
//           //  onSubmit={handleSubmit}
//         >
//           <div className=" flex justify-between space-x-5">
//             <div className=" flex flex-col">
//               <label htmlFor="">Enter Arrival Time</label>
//               <br />
//               <label htmlFor="">Enter Burst Time</label>
//             </div>
//             <div className=" flex flex-col">
//               <input
//                 placeholder="e.g: 1,2,3,4"
//                 type="text"
//                 onChange={(e) => setArrival(e.target.value)}
//                 name=""
//                 id=""
//               />
//               <br />
//               <input
//                 placeholder="e.g: 1,2,3,4"
//                 type="text"
//                 onChange={(e) => setBurst(e.target.value)}
//                 name=""
//                 id=""
//               />
//             </div>
//           </div>
//           <button type="submit" className=" bg-gray-200 p-2 rounded-lg">
//             SUBMIT
//           </button>
//         </form>
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default page;

"use client";
import React, { useState } from "react";

const Page = () => {
  const [arrival, setArrival] = useState("");
  const [burst, setBurst] = useState("");

  // const calculateTimes = async () => {
  //   const arrivalTimes = arrival
  //     .split(",")
  //     .map((num) => num.trim())
  //     .map((num) => parseInt(num, 10));
  //   const burstTimes = burst
  //     .split(",")
  //     .map((num) => num.trim())
  //     .map((num) => parseFloat(num));

  //   if (arrivalTimes.length !== burstTimes.length) {
  //     console.error(
  //       "Arrival and Burst times arrays must be of the same length."
  //     );
  //     return;
  //   }

  //   const processes = arrivalTimes.map((at, index) => ({
  //     arrival: at,
  //     burst: burstTimes[index],
  //   }));

  //   processes.sort((a, b) => a.arrival - b.arrival);

  //   const sortedArrival = processes.map((p) => p.arrival);
  //   const sortedBurst = processes.map((p) => p.burst);

  //   let finish = [];
  //   let start = [];
  //   let at;
  //   let bt;
  //   let turnaroound_time=[];
  //   for (let index = 0; index < sortedArrival.length; index++) {
  //     at = sortedArrival[index];
  //     bt = sortedBurst[index];

  //     if (index === 0) {
  //       start[index] = at;
  //     } else {
  //       start[index] = Math.max(at, finish[index - 1]);
  //     }

  //     finish[index] = start[index] + bt;
      
  //     turnaroound_time[index] = finish[index] - arrival[index];

  //     console.log(
  //       `p${index} Start Time: ${start[index]}, t Time: ${turnaroound_time[index]}`
  //     );
  //   }

  //   // try {
  //   //   if (start && finish) {
  //   //     const response = await fetch("/Api/FCFS/", {
  //   //       method: "POST",
  //   //       headers: {
  //   //         "Content-Type": "application/json",
  //   //       },
  //   //       body: JSON.stringify({
  //   //         finish: finish,
  //   //         start: start,
  //   //         arrival: at,
  //   //         burst: bt,
  //   //       }),
  //   //     });

  //   //     if (response.ok) {
  //   //       const data = await response.json();
  //   //       // console.log(data.T);
  //   //       console.log(data);
  //   //     } else {
  //   //       // setError("Invalid email or password");
  //   //     }
  //   //   } else {
  //   //     console.log("there is not same length");
  //   //   }
  //   // } catch (error) {
  //   //   console.error("Error:");
  //   // }
  // };
  // const calculateTimes = async () => {
  //   const arrivalTimes = arrival
  //     .split(",")
  //     .map((num) => num.trim())
  //     .map((num) => parseInt(num, 10));
  //   const burstTimes = burst
  //     .split(",")
  //     .map((num) => num.trim())
  //     .map((num) => parseFloat(num));
  
  //   if (arrivalTimes.length !== burstTimes.length) {
  //     console.error("Arrival and Burst times arrays must be of the same length.");
  //     return;
  //   }
  
  //   const processes = arrivalTimes.map((at, index) => ({
  //     arrival: at,
  //     burst: burstTimes[index],
  //   }));
  
  //   processes.sort((a, b) => a.arrival - b.arrival);
  
  //   const sortedArrival = processes.map((p) => p.arrival);
  //   const sortedBurst = processes.map((p) => p.burst);
  
  //   let finish = [];
  //   let start = [];
  //   let turnaround_time = [];
  //   let waiting_time = [];
  
  //   for (let index = 0; index < sortedArrival.length; index++) {
  //     const at = sortedArrival[index];
  //     const bt = sortedBurst[index];
  
  //     if (index === 0) {
  //       start[index] = at;
  //     } else {
  //       start[index] = Math.max(at, finish[index - 1]);
  //     }
  
  //     finish[index] = start[index] + bt;
  //     turnaround_time[index] = finish[index] - sortedArrival[index];
  //     waiting_time[index] = turnaround_time[index] - bt;
  
  //     console.log(
  //       `p${index} Start Time: ${start[index]}, Turnaround Time: ${turnaround_time[index]}, Waiting Time: ${waiting_time[index]}`
  //     );
  //     // console.log(
  //     //   `p${index} AVG Turnaround Time: ${(turnaround_time/turnaround_time.length).toFixed(2)}, AVG Waiting Time: ${waiting_time/waiting_time.length}`
  //     // );
  //     const avgTurnaroundTime = turnaround_time / turnaround_time.length;
  //     const avgWaitingTime = waiting_time / waiting_time.length;
    
  //     console.log(
  //       `Average Turnaround Time: ${avgTurnaroundTime.toFixed(2)}, Average Waiting Time: ${avgWaitingTime.toFixed(2)}`
  //     );
  //   }
  
  //   // Uncomment and adjust this section if you want to send the data to an API
  //   // try {
  //   //   if (start && finish) {
  //   //     const response = await fetch("/Api/FCFS/", {
  //   //       method: "POST",
  //   //       headers: {
  //   //         "Content-Type": "application/json",
  //   //       },
  //   //       body: JSON.stringify({
  //   //         finish: finish,
  //   //         start: start,
  //   //         arrival: sortedArrival,
  //   //         burst: sortedBurst,
  //   //       }),
  //   //     });
  
  //   //     if (response.ok) {
  //   //       const data = await response.json();
  //   //       console.log(data);
  //   //     } else {
  //   //       console.error("API request failed.");
  //   //     }
  //   //   } else {
  //   //     console.log("Start and finish arrays are not available.");
  //   //   }
  //   // } catch (error) {
  //   //   console.error("Error:", error);
  //   // }
  // };
  const calculateTimes = async () => {
    const arrivalTimes = arrival
      .split(",")
      .map((num) => num.trim())
      .map((num) => parseInt(num, 10));
    const burstTimes = burst
      .split(",")
      .map((num) => num.trim())
      .map((num) => parseFloat(num));
  
    if (arrivalTimes.length !== burstTimes.length) {
      console.error("Arrival and Burst times arrays must be of the same length.");
      return;
    }
  
    const processes = arrivalTimes.map((at, index) => ({
      arrival: at,
      burst: burstTimes[index],
    }));
  
    processes.sort((a, b) => a.arrival - b.arrival);
  
    const sortedArrival = processes.map((p) => p.arrival);
    const sortedBurst = processes.map((p) => p.burst);
  
    let finish = [];
    let start = [];
    let turnaround_time = [];
    let waiting_time = [];
  
    for (let index = 0; index < sortedArrival.length; index++) {
      const at = sortedArrival[index];
      const bt = sortedBurst[index];
  
      if (index === 0) {
        start[index] = at;
      } else {
        start[index] = Math.max(at, finish[index - 1]);
      }
  
      finish[index] = start[index] + bt;
      turnaround_time[index] = finish[index] - sortedArrival[index];
      waiting_time[index] = turnaround_time[index] - bt;
  
      console.log(
        `p${index} Start Time: ${start[index]}, Turnaround Time: ${turnaround_time[index]}, Waiting Time: ${waiting_time[index]}`
      );
    }
  
    // Calculate average turnaround and waiting times
    const totalTurnaroundTime = turnaround_time.reduce((sum, time) => sum + time, 0);
    const totalWaitingTime = waiting_time.reduce((sum, time) => sum + time, 0);
  
    const avgTurnaroundTime = totalTurnaroundTime / turnaround_time.length;
    const avgWaitingTime = totalWaitingTime / waiting_time.length;
  
    console.log(
      `Average Turnaround Time: ${avgTurnaroundTime.toFixed(2)}, Average Waiting Time: ${avgWaitingTime.toFixed(2)}`
    );
  
    // Uncomment and adjust this section if you want to send the data to an API
    // try {
    //   if (start && finish) {
    //     const response = await fetch("/Api/FCFS/", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         finish: finish,
    //         start: start,
    //         arrival: sortedArrival,
    //         burst: sortedBurst,
    //       }),
    //     });
  
    //     if (response.ok) {
    //       const data = await response.json();
    //       console.log(data);
    //     } else {
    //       console.error("API request failed.");
    //     }
    //   } else {
    //     console.log("Start and finish arrays are not available.");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };
  
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="p-24 py-44 border-2 rounded-2xl bg-gray-100">
        <h1 className="uppercase">FCFS Scheduling</h1>
        <br />
        <form
          action=""
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            calculateTimes();
          }}
        >
          <div className="flex justify-between space-x-5">
            <div className="flex flex-col">
              <label htmlFor="">Enter Arrival Time</label>
              <br />
              <label htmlFor="">Enter Burst Time</label>
            </div>
            <div className="flex flex-col">
              <input
                placeholder="e.g: 1,2,3,4"
                type="text"
                onChange={(e) => setArrival(e.target.value)}
                name=""
                id=""
              />
              <br />
              <input
                placeholder="e.g: 1,2,3,4"
                type="text"
                onChange={(e) => setBurst(e.target.value)}
                name=""
                id=""
              />
            </div>
          </div>
          <button type="submit" className="bg-gray-200 p-2 rounded-lg">
            SUBMIT
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
