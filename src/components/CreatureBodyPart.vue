<template>
  <div class="item">
    <div class="two-col row">
      <label>
        Type
        <select v-model="part.type" @change="update">
          <option v-for="(type, idx) in types" :key="idx">{{ type }}</option>
        </select>
      </label>
      <div class="right">
        <button @click="remove">Remove Part</button>
      </div>
    </div>
    <div class="item">
      <h5>Damage</h5>
      <label>
        Damage Type
        <input v-model="part.damageType" type="text" @change="update" />
      </label>
      <label>
        Damage
        <input v-model="part.damage" type="text" @change="update" />
      </label>
      <label>
        Variance
        <input v-model="part.variance" type="text" @change="update" />
      </label>
    </div>
    <div class="item">
      <h5>Armor</h5>
      <label>
        Height
        <input v-model="part.height" type="text" @change="update" />
      </label>
      <label>
        Base
        <input v-model="part.armor.base" type="text" @change="update" />
      </label>
      <label>
        Blunt
        <input v-model="part.armor.blunt" type="text" @change="update" />
      </label>
      <label>
        Pierce
        <input v-model="part.armor.pierce" type="text" @change="update" />
      </label>
      <label>
        Slash
        <input v-model="part.armor.slash" type="text" @change="update" />
      </label>
      <label>
        Acid
        <input v-model="part.armor.acid" type="text" @change="update" />
      </label>
      <label>
        Cold
        <input v-model="part.armor.cold" type="text" @change="update" />
      </label>
      <label>
        Fire
        <input v-model="part.armor.fire" type="text" @change="update" />
      </label>
      <label>
        Lightning
        <input v-model="part.armor.lightning" type="text" @change="update" />
      </label>
      <label>
        Nether
        <input v-model="part.armor.nether" type="text" @change="update" />
      </label>
    </div>
    <div class="item">
      <h6>Damage</h6>
      <h5>High</h5>
      <label>
        Front Left
        <input v-model="part.highLeftFront" type="text" @change="update" />
      </label>
      <label>
        Front Right
        <input v-model="part.highFrontRight" type="text" @change="update" />
      </label>
      <label>
        Back Left
        <input v-model="part.highLeftBack" type="text" @change="update" />
      </label>
      <label>
        Back Right
        <input v-model="part.highRightBack" type="text" @change="update" />
      </label>
      <h5>Mid</h5>
      <label>
        Front Left
        <input v-model="part.midLeftFront" type="text" @change="update" />
      </label>
      <label>
        Front Right
        <input v-model="part.midRightFront" type="text" @change="update" />
      </label>
      <label>
        Back Left
        <input v-model="part.midLeftBack" type="text" @change="update" />
      </label>
      <label>
        Back Right
        <input v-model="part.midRightBack" type="text" @change="update" />
      </label>
      <h5>Low</h5>
      <label>
        Front Left
        <input v-model="part.lowLeftFront" type="text" @change="update" />
      </label>
      <label>
        Front Right
        <input v-model="part.lowRightFront" type="text" @change="update" />
      </label>
      <label>
        Back Left
        <input v-model="part.highLeftBack" type="text" @change="update" />
      </label>
      <label>
        Back Right
        <input v-model="part.highRightBack" type="text" @change="update" />
      </label>
    </div>
  </div>
</template>

<script>
import { BodyPartType } from "../types/Creature";

export default {
  name: "CreatureBodyPart",
  model: {
    prop: "part",
    event: "change"
  },
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
