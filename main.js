// function printReceipt(barcodes) {
//     console.log(`
// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
// Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
// ----------------------
// Total: 23 (yuan)
// **********************`)
// }
var barcodes = [
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
  ];

 var itemInfo = [
    {
       barcode: 'ITEM000000',
       name: 'Coca-Cola',
       price: 3
     },
     {
       barcode: 'ITEM000001',
       name: 'Sprite',
       price: 3
     },
     {
       barcode: 'ITEM000002',
       name: 'Apple',
       price: 5
     },
     {
       barcode: 'ITEM000003',
       name: 'Litchi',
       price: 15
     },
     {
       barcode: 'ITEM000004',
       name: 'Battery',
       price: 2
     },
     {
       barcode: 'ITEM000005',
       name: 'Instant Noodles',
       price: 4
     }
 ]

function getItemCounts(barcodes) {
    var i;
    var items = [];
    for (i = 0; i < barcodes.length; i++) {
        var index = barcodeExitPosition(items, barcodes[i]);
        if (index == -1) {
            var newItem = {};
            newItem.barcode = barcodes[i];
            newItem.quantity = 1;
            items.push(newItem);
        } else {
            items[index].quantity = items[index].quantity + 1;
        }
    }
    return items;
}

function barcodeExitPosition(items, barcode) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].barcode == barcode) {
            return i;
        }
    }
    return -1;
}


function addInfoToItem(items) {
    for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < itemInfo.length; j++) {
            if (items[i].barcode == itemInfo[j].barcode) {
                items[i].name = itemInfo[j].name;
                items[i].price = itemInfo[j].price;
            }
        }
    }
    return items; //在这里，items数组中的每个对象包含属性：barcode, name, price, quantity;
}


function calculateSubTotal(items) {
    for (var i = 0; i < items.length; i++) {
        items[i].subTotal = items[i].price * items[i].quantity;
    }
    return items;
}



function formatItemsToString(items) {
    var result = "\n***<store earning no money>Receipt ***\n";
    var totalPrice = 0;
    for (var i = 0; i < items.length; i++) {
        totalPrice += items[i].subTotal;
        result += "Name: " + items[i].name + ", Quantity: " + items[i].quantity +
         ", Unit price: " + items[i].price + " (yuan), Subtotal: " +
         items[i].subTotal + " (yuan)\n";
    }
    result += "----------------------\n";
    result += "Total: " + totalPrice + " (yuan)\n"
    result += "**********************";
    return result;
}


 function printReceipt(barcodes) {
    var barcodeWithQuantity = getItemCounts(barcodes);
    var itemsWithDetail = addInfoToItem(barcodeWithQuantity);
    var completeItems = calculateSubTotal(itemsWithDetail);
    var result = formatItemsToString(completeItems);
    console.log(result);
 }

//  printReceipt(barcodes);

module.exports = {
    printReceipt
};
