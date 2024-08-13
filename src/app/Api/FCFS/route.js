// FCFS:
// arrival time, burst time,complete time,turn around time and waiting time
// arrival time ke hisab se
// tat=ct-at
// wt=tat-bt,st-at
// avt tat and wt

import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { finish,start, arrival, burst } = body;
  let mm = true;
  if (mm) {
    // let turnaroound_time;
    // for (let index = 0; index < start.length; index++) {
    //   turnaroound_time[index] = finish[index] - arrival[index];
    // }

    return NextResponse.json({
      // start:start,
      // T: turnaroound_time
      T: "assa",
    });
  } else {
    return NextResponse.json({ error: "error" });
  }
}
