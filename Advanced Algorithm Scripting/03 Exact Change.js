function drawer(price, cash, cid) {

    //VARIABLES
    // work out change due
    var change = cash - price;
    var cashAvailable = 0;
    var key = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];

    //reverse key and CID for final output
    key = key.reverse();
    cid = cid.reverse();

    //work out money available in cid
    for (i = 0; i < cid.length; i++) {
      cashAvailable += cid[i][1];
      cashAvailable = Math.round(cashAvailable * 100) / 100; //round cashavailable due to floating point arithmetic
    }

    //return closed
     if (cashAvailable === change) { //if cash available equals change
      return "Closed";
    }

    //for loop to go through values, take money, and change values in cid
    for (i = 0; i < cid.length; i++) {
      // if amount is less than change -take it all
      if (cid[i][1] < change) {
        change -= cid[i][1];
        change = Math.round(change * 100) / 100;
      }
      //else 
      else {
        cid[i][1] = Math.floor(change / key[i]) * key[i]; // currency left over in cid is current currency - currency taken out.
        change = Math.round(change % key[i] * 100) / 100; // change remaining is what is left after dividing currency amount into current change
      }
    }

    // destroy empty values
    var counter = 0;
    while (counter < cid.length) {
      if (cid[counter][1] === 0) {
        cid.splice(counter, 1);
        continue;
      } else {
        counter += 1;
      }
    }

    // return insufficient if cid cannot be used to give change in right amount
    if (change > 0) {
      return "Insufficient Funds";
    } else { //otherwise return the cid
      return cid;
    }

  } //end of function

drawer(3.26, 100.00, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
])