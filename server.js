const lastBGPlayed = process.env.LAST_BG_PLAYED;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`The last boardgame I played is ${lastBGPlayed}`);
    await sleep(5000);
  }
}

main();
