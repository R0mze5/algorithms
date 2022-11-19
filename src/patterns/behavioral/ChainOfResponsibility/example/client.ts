// An ATM Dispenser that dispenses denominations of notes

/**
In the ATM example below, the chain is hard coded in the client first to dispense amounts of £50s, then £20s and then £10s in order.

This default chain order helps to ensure that the minimum number of notes will be dispensed. Otherwise, it might dispense 5 x £10 when it would have been better to dispense 1 x £50.
 */
import ATMDispenserChain from "./atm-dispenser-chain";

const ATM = new ATMDispenserChain();
console.log("Enter amount to withdrawal : ");
process.stdin.on("data", (data: string) => {
  if (parseInt(data, 10)) {
    const amount = parseInt(data, 10);
    if (amount < 10 || amount % 10 !== 0) {
      console.log("Amount should be positive and in multiple of 10s.");
    } else {
      // process the request
      ATM.chain1.handle(amount);
      console.log("Now go spoil yourself");
      process.exit();
    }
  } else {
    console.log("Please enter a number.");
  }
});
