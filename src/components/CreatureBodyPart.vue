<template>
  <div class="row">
    <label>
      Type
      <select v-model="part.type" @change="update">
        <option v-for="(type, index) in types" :key="index">{{type}}</option>
      </select>
    </label>
    <h5>Damage</h5>
    <label>
      Damage Type
      <input type="text" v-model="part.damageType" @change="update" />
    </label>
    <label>
      Damage
      <input type="text" v-model="part.damage" @change="update" />
    </label>
    <label>
      Variance
      <input type="text" v-model="part.variance" @change="update" />
    </label>
    <h5>Armor</h5>
    <label>
      Height
      <input type="text" v-model="part.height" @change="update" />
    </label>
    <label>
      Base
      <input type="text" v-model="part.armor.base" @change="update" />
    </label>
    <label>
      Blunt
      <input type="text" v-model="part.armor.blunt" @change="update" />
    </label>
    <label>
      Pierce
      <input type="text" v-model="part.armor.pierce" @change="update" />
    </label>
    <label>
      Slash
      <input type="text" v-model="part.armor.slash" @change="update" />
    </label>
    <label>
      Acid
      <input type="text" v-model="part.armor.acid" @change="update" />
    </label>
    <label>
      Cold
      <input type="text" v-model="part.armor.cold" @change="update" />
    </label>
    <label>
      Fire
      <input type="text" v-model="part.armor.fire" @change="update" />
    </label>
    <label>
      Lightning
      <input type="text" v-model="part.armor.lightning" @change="update" />
    </label>
    <label>
      Nether
      <input type="text" v-model="part.armor.nether" @change="update" />
    </label>
    <h5>High</h5>
    <label>
      Front Left
      <input type="text" v-model="part.highLeftFront" @change="update" />
    </label>
    <label>
      Front Right
      <input type="text" v-model="part.highFrontRight" @change="update" />
    </label>
    <label>
      Back Left
      <input type="text" v-model="part.highLeftBack" @change="update" />
    </label>
    <label>
      Back Right
      <input type="text" v-model="part.highRightBack" @change="update" />
    </label>
    <h5>Mid</h5>
    <label>
      Front Left
      <input type="text" v-model="part.midLeftFront" @change="update" />
    </label>
    <label>
      Front Right
      <input type="text" v-model="part.midRightFront" @change="update" />
    </label>
    <label>
      Back Left
      <input type="text" v-model="part.midLeftBack" @change="update" />
    </label>
    <label>
      Back Right
      <input type="text" v-model="part.midRightBack" @change="update" />
    </label>
    <h5>Low</h5>
    <label>
      Front Left
      <input type="text" v-model="part.lowLeftFront" @change="update" />
    </label>
    <label>
      Front Right
      <input type="text" v-model="part.lowRightFront" @change="update" />
    </label>
    <label>
      Back Left
      <input type="text" v-model="part.highLeftBack" @change="update" />
    </label>
    <label>
      Back Right
      <input type="text" v-model="part.highRightBack" @change="update" />
    </label>
    <button @click="remove">Remove Part</button>
  </div>
</template>

<script>
import { BodyPartType } from "../types/Creature";

export default {
  name: "CreatureBodyPart",
  props: {
    part: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  model: {
    prop: "part",
    event: "change"
  },
  computed: {
    types() {
      return BodyPartType;
    }
  },
  methods: {
    remove() {
      this.$emit("remove", this.index);
    },
    update() {
      this.$emit("change", this.part);
    }
  }
};
</script>
