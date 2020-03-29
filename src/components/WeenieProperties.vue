<template>
  <div>
    <h3>Properties</h3>
    <ul class="tabbar">
      <li>
        <a
          href="#string"
          :class="{ active: isActive(TAB.STRING) }"
          @click.prevent="switchTab(TAB.STRING)"
        >
          STRING
          <span class="property-count">{{ weenie.stringStats.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#int32"
          :class="{ active: isActive(TAB.INT32) }"
          @click.prevent="switchTab(TAB.INT32)"
        >
          INT32
          <span class="property-count">{{ weenie.intStats.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#int64"
          :class="{ active: isActive(TAB.INT64) }"
          @click.prevent="switchTab(TAB.INT64)"
        >
          INT64
          <span class="property-count">{{ weenie.int64Stats.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#float"
          :class="{ active: isActive(TAB.FLOAT) }"
          @click.prevent="switchTab(TAB.FLOAT)"
        >
          FLOAT
          <span class="property-count">{{ weenie.floatStats.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#dataid"
          :class="{ active: isActive(TAB.DATAID) }"
          @click.prevent="switchTab(TAB.DATAID)"
        >
          DATAID
          <span class="property-count">{{ weenie.didStats.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#instanceid"
          :class="{ active: isActive(TAB.INSTANCEID) }"
          @click.prevent="switchTab(TAB.INSTANCEID)"
        >
          INSTANCEID
          <span class="property-count">{{ weenie.iidStats.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#bool"
          :class="{ active: isActive(TAB.BOOL) }"
          @click.prevent="switchTab(TAB.BOOL)"
        >
          BOOL
          <span class="property-count">{{ weenie.boolStats.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#position"
          :class="{ active: isActive(TAB.POSITION) }"
          @click.prevent="switchTab(TAB.POSITION)"
        >
          POSITION
          <span class="property-count">{{ weenie.posStats.length }}</span>
        </a>
      </li>
    </ul>

    <div :class="{ hidden: !isActive(TAB.STRING) }">
      <WeeniePropertiesTable v-model="weenie.stringStats" kind="String" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.INT32) }">
      <WeeniePropertiesTable v-model="weenie.intStats" kind="Int32" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.INT64) }">
      <WeeniePropertiesTable v-model="weenie.int64Stats" kind="Int64" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.FLOAT) }">
      <WeeniePropertiesTable v-model="weenie.floatStats" kind="Float" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.DATAID) }">
      <WeeniePropertiesTable v-model="weenie.didStats" kind="DataID" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.INSTANCEID) }">
      <WeeniePropertiesTable v-model="weenie.iidStats" kind="InstanceID" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.BOOL) }">
      <WeeniePropertiesTable v-model="weenie.boolStats" kind="Bool" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.POSITION) }">
      <WeeniePropertiesTable v-model="weenie.posStats" kind="Position" @change="update" />
    </div>
  </div>
</template>

<script>
import WeeniePropertiesTable from "./WeeniePropertiesTable";
import { WEENIE_PROPERTY } from "../types/Weenie";

export default {
  name: "WeenieProperties",
  components: {
    WeeniePropertiesTable
  },
  model: {
    prop: "weenie",
    event: "change"
  },
  props: {
    weenie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      activeTab: WEENIE_PROPERTY.STRING
    };
  },
  computed: {
    TAB() {
      return WEENIE_PROPERTY;
    }
  },
  methods: {
    update() {
      this.$emit("change", this.weenie);
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
    isActive(tab) {
      return this.activeTab === tab;
    }
  }
};
</script>
