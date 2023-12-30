class Product {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(products=[]){
    this.products = products;
  }
  updateQuality() {
    for (var i = 0; i < this.products.length; i++) {
      const isNotBrieOrConcertTickets = this.products[i].name != 'Aged Brie' && this.products[i].name != 'Backstage passes to a TAFKAL80ETC concert';
      if (isNotBrieOrConcertTickets) {
        this.lowerQualityOfNonSulfurasProduct(i);
      } else {
        if (this.products[i].quality < 50) {
          this.incrementQuality(i);
          if (this.products[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.products[i].sellIn < 11) {
              if (this.products[i].quality < 50) {
                this.incrementQuality(i);
              }
            }
            if (this.products[i].sellIn < 6) {
              if (this.products[i].quality < 50) {
                this.incrementQuality(i);
              }
            }
          }
        }
      }
      if (this.products[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.products[i].sellIn = this.products[i].sellIn - 1;
      }
      if (this.products[i].sellIn < 0) {
        if (this.products[i].name != 'Aged Brie') {
          if (this.products[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.products[i].quality > 0) {
              if (this.products[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.decrementQuality(i);
              }
            }
          } else {
            this.products[i].quality = this.products[i].quality - this.products[i].quality;
          }
        } else {
          if (this.products[i].quality < 50) {
            this.incrementQuality(i);
          }
        }
      }
    }

    return this.products;
  }

  decrementQuality(i) {
    this.products[i].quality = this.products[i].quality - 1;
  }

  incrementQuality(i) {
    this.products[i].quality = this.products[i].quality + 1;
  }

  lowerQualityOfNonSulfurasProduct(i) {
    if (this.products[i].quality > 0) {
      if (this.products[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.products[i].quality = this.products[i].quality - 1;
      }
    }
  }
}
module.exports = {
  Item: Product,
  Shop
}
