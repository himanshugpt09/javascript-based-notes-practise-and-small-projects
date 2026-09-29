const warehouse = {
    pallets : [],
    nextPalletId : 1,
    PALLET_CAPACITY: 3,


    loadBox : function (box) {
        const index = this.pallets.findIndex((pallet) => pallet.boxes.length < this.PALLET_CAPACITY);
        if(index === -1){
            const newPallet = {id: this.nextPalletId, boxes: [box]};
            this.pallets.push(newPallet);
            this.nextPalletId = this.nextPalletId + 1;
            return;
        }

        this.pallets[index].boxes.push(box);
        console.log(`Loaded "${box}" onto Pallet #${this.pallets[index].id}.`);
    },

    rebalance: function () {
        if (this.pallets.length < 2){
            console.log("Not enough pallets to rebalance.");
            return;
        }

        let fullest = this.pallets[0];
        let emptiest = this.pallets[0];


        for(const pallet of this.pallets){
            if (pallet.boxes.length > fullest.boxes.length){
                fullest = pallet;
            }
            if (pallet.boxes.length < fullest.boxes.length){
                emptiest = pallet;
            }
        }

        if ( fullest === emptiest){
            console.log("All pallets already balanced.");
            return;
        }
while (
      fullest.boxes.length - emptiest.boxes.length > 1 &&
      emptiest.boxes.length < this.PALLET_CAPACITY
    ) {
      const [movedBox] = fullest.boxes.splice(fullest.boxes.length - 1, 1);
      emptiest.boxes.push(movedBox);
      console.log(`Rebalanced: moved "${movedBox}" from Pallet #${fullest.id} to Pallet #${emptiest.id}.`);
    }
  },

  getUtilizationReport: function () {
    const report = [];

    for (const pallet of this.pallets) {
      report.push({
        palletId: pallet.id,
        boxCount: pallet.boxes.length,
        capacity: this.PALLET_CAPACITY,
        percentFull: Math.round((pallet.boxes.length / this.PALLET_CAPACITY) * 100),
      });
    }

    return report;
  },
};

console.log("---- Loading Boxes ----");
["Box A", "Box B", "Box C", "Box D", "Box E", "Box F", "Box G"].forEach((box) => {
  warehouse.loadBox(box);
});

console.log("\n---- Utilization Before Rebalance ----");
warehouse.getUtilizationReport().forEach((r) => {
  console.log(`Pallet #${r.palletId}: ${r.boxCount}/${r.capacity} (${r.percentFull}%)`);
});

console.log("\n---- Rebalancing ----");
warehouse.rebalance();

console.log("\n---- Utilization After Rebalance ----");
warehouse.getUtilizationReport().forEach((r) => {
  console.log(`Pallet #${r.palletId}: ${r.boxCount}/${r.capacity} (${r.percentFull}%)`);
});