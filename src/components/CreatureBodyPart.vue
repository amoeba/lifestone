<template>
  <div class="item">
    <div class="two-col row">
      <label>
        Type
        <select v-model="part.type" @change="update">
          <option v-for="(type, idx) in types" :key="idx" :value="type.id">{{ type.label }}</option>
        </select>
      </label>
      <div class="right">
        <button @click="remove">Remove Part</button>
      </div>
    </div>
    <div class="item">
      <h5>Damage</h5>
      <label>
        Type
        <select v-model="part.value.dtype" @change="update">
          <option v-for="(type, idx) in damageTypes" :key="idx" :value="type.id">{{ type.label }}</option>
        </select>
      </label>
      <label>
        Damage
        <input v-model="part.value.dval" type="text" @change="update" />
      </label>
      <label>
        Variance
        <input v-model="part.value.dvar" type="text" @change="update" />
      </label>
      <label>
        Height
        <input v-model="part.value.bh" type="text" @change="update" />
      </label>
    </div>
    <div class="item">
      <h5>Armor</h5>
      <label>
        Base
        <input v-model="part.value.acache.base_armor" type="text" @change="update" />
      </label>
      <label>
        Blunt
        <input v-model="part.value.acache.armor_vs_bludgeon" type="text" @change="update" />
      </label>
      <label>
        Pierce
        <input v-model="part.value.acache.armor_vs_pierce" type="text" @change="update" />
      </label>
      <label>
        Slash
        <input v-model="part.value.acache.armor_vs_slash" type="text" @change="update" />
      </label>
      <label>
        Acid
        <input v-model="part.value.acache.armor_vs_acid" type="text" @change="update" />
      </label>
      <label>
        Cold
        <input v-model="part.value.acache.armor_vs_cold" type="text" @change="update" />
      </label>
      <label>
        Fire
        <input v-model="part.value.acache.armor_vs_fire" type="text" @change="update" />
      </label>
      <label>
        Lightning
        <input v-model="part.value.acache.armor_vs_electric" type="text" @change="update" />
      </label>
      <label>
        Nether
        <input v-model="part.value.acache.armor_vs_nether" type="text" @change="update" />
      </label>
    </div>
    <div class="item">
      <h5>Damage</h5>
      <h6>High</h6>
      <label>
        Front Left
        <input v-model="part.value.bpsd.HLF" type="text" @change="update" />
      </label>
      <label>
        Front Right
        <input v-model="part.value.bpsd.HFR" type="text" @change="update" />
      </label>
      <label>
        Back Left
        <input v-model="part.value.bpsd.HLB" type="text" @change="update" />
      </label>
      <label>
        Back Right
        <input v-model="part.value.bpsd.HRB" type="text" @change="update" />
      </label>
      <h6>Mid</h6>
      <label>
        Front Left
        <input v-model="part.value.bpsd.MLF" type="text" @change="update" />
      </label>
      <label>
        Front Right
        <input v-model="part.value.bpsd.MRF" type="text" @change="update" />
      </label>
      <label>
        Back Left
        <input v-model="part.value.bpsd.MLB" type="text" @change="update" />
      </label>
      <label>
        Back Right
        <input v-model="part.value.bpsd.MRB" type="text" @change="update" />
      </label>
      <h6>Low</h6>
      <label>
        Front Left
        <input v-model="part.value.bpsd.LLF" type="text" @change="update" />
      </label>
      <label>
        Front Right
        <input v-model="part.value.bpsd.LRF" type="text" @change="update" />
      </label>
      <label>
        Back Left
        <input v-model="part.value.bpsd.HLB" type="text" @change="update" />
      </label>
      <label>
        Back Right
        <input v-model="part.value.bpsd.HRB" type="text" @change="update" />
      </label>
    </div>
  </div>
</template>

<script>
import { DamageType, BodyPartType } from "../types/BodyPart";
import { processEnum } from "../types/Util";
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
      return processEnum(BodyPartType);
    },
    damageTypes() {
      return processEnum(DamageType);
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
