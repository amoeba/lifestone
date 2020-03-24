<template>
  <div>
    <h3>Properties</h3>

    <ul class="tabbar">
      <li>
        <a
          href="#string"
          @click.prevent="switchTab(TAB.STRING)"
          :class="{ active: isActive(TAB.STRING) }"
        >
          STRING
          <span class="property-count">{{properties.string.length}}</span>
        </a>
      </li>
      <li>
        <a
          href="#int32"
          @click.prevent="switchTab(TAB.INT32)"
          :class="{ active: isActive(TAB.INT32) }"
        >
          INT32
          <span class="property-count">{{properties.int32.length}}</span>
        </a>
      </li>
      <li>
        <a
          href="#int64"
          @click.prevent="switchTab(TAB.INT64)"
          :class="{ active: isActive(TAB.INT64) }"
        >
          INT64
          <span class="property-count">{{properties.int64.length}}</span>
        </a>
      </li>
      <li>
        <a
          href="#float"
          @click.prevent="switchTab(TAB.FLOAT)"
          :class="{ active: isActive(TAB.FLOAT) }"
        >
          FLOAT
          <span class="property-count">{{properties.float.length}}</span>
        </a>
      </li>
      <li>
        <a
          href="#dataid"
          @click.prevent="switchTab(TAB.DATAID)"
          :class="{ active: isActive(TAB.DATAID) }"
        >
          DATAID
          <span class="property-count">{{properties.dataId.length}}</span>
        </a>
      </li>
      <li>
        <a
          href="#instanceid"
          @click.prevent="switchTab(TAB.INSTANCEID)"
          :class="{ active: isActive(TAB.INSTANCEID) }"
        >
          INSTANCEID
          <span class="property-count">{{properties.instanceId.length}}</span>
        </a>
      </li>
      <li>
        <a
          href="#bool"
          @click.prevent="switchTab(TAB.BOOL)"
          :class="{ active: isActive(TAB.BOOL) }"
        >
          BOOL
          <span class="property-count">{{properties.bool.length}}</span>
        </a>
      </li>
      <li>
        <a
          href="#position"
          @click.prevent="switchTab(TAB.POSITION)"
          :class="{ active: isActive(TAB.POSITION) }"
        >
          POSITION
          <span class="property-count">{{properties.position.length}}</span>
        </a>
      </li>
    </ul>

    <div :class="{ hidden: !isActive(TAB.STRING) }">
      <WeeniePropertiesTable v-model="properties.string" kind="string" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.INT32) }">
      <WeeniePropertiesTable v-model="properties.int32" kind="int32" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.INT64) }">
      <WeeniePropertiesTable v-model="properties.int64" kind="int64" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.FLOAT) }">
      <WeeniePropertiesTable v-model="properties.float" kind="float" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.DATAID) }">
      <WeeniePropertiesTable v-model="properties.dataId" kind="dataId" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.INSTANCEID) }">
      <WeeniePropertiesTable v-model="properties.instanceId" kind="instanceId" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.BOOL) }">
      <WeeniePropertiesTable v-model="properties.bool" kind="bool" @change="update" />
    </div>
    <div :class="{ hidden: !isActive(TAB.POSITION) }">
      <WeeniePropertiesTable v-model="properties.position" kind="position" @change="update" />
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
  props: {
    properties: {
      type: Object,
      required: true
    }
  },
  model: {
    prop: "properties",
    event: "change"
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
      this.$emit("change", this.properties);
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
