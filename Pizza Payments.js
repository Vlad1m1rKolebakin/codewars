function michaelPays(costs) {
    if (costs < 5) {
      return parseFloat(costs.toFixed(2));
    }
    if (costs / 3 > 10) {
      return parseFloat((costs - 10).toFixed(2));
    } else {
      return parseFloat((costs / 3 + costs / 3).toFixed(2));
    }
  }
  