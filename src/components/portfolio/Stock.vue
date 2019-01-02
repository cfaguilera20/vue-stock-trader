<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success mb-4">
      <div class="card-header">
        {{stock.name}}
        <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
          >
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="quantity <= 0 || !Number.isInteger(quantity)"
          >Sell</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions(["sellStock"]),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: quantity
      };
      this.sellStock();
    }
  }
};
</script>