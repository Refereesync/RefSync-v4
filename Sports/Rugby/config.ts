// sports/rugby/config.ts

export default {
    name: "Rugby",
    halves: 2,
    halfDuration: 40 * 60, // 40 minutes in seconds
    sinBinDuration: 10 * 60,
    allowDraw: true,
    timeFormat: "mm:ss",
    cardTypes: ["Yellow", "Red"],
    extraTimers: ["Sin Bin"],
    scoring: {
      try: 5,
      conversion: 2,
      penalty: 3,
      dropGoal: 3,
    },
  };
  