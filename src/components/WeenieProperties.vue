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
          <span class="property-count">{{ properties.string.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#int32"
          :class="{ active: isActive(TAB.INT32) }"
          @click.prevent="switchTab(TAB.INT32)"
        >
          INT32
          <span class="property-count">{{ properties.int32.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#int64"
          :class="{ active: isActive(TAB.INT64) }"
          @click.prevent="switchTab(TAB.INT64)"
        >
          INT64
          <span class="property-count">{{ properties.int64.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#float"
          :class="{ active: isActive(TAB.FLOAT) }"
          @click.prevent="switchTab(TAB.FLOAT)"
        >
          FLOAT
          <span class="property-count">{{ properties.float.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#dataid"
          :class="{ active: isActive(TAB.DATAID) }"
          @click.prevent="switchTab(TAB.DATAID)"
        >
          DATAID
          <span class="property-count">{{ properties.dataId.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#instanceid"
          :class="{ active: isActive(TAB.INSTANCEID) }"
          @click.prevent="switchTab(TAB.INSTANCEID)"
        >
          INSTANCEID
          <span class="property-count">{{ properties.instanceId.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#bool"
          :class="{ active: isActive(TAB.BOOL) }"
          @click.prevent="switchTab(TAB.BOOL)"
        >
          BOOL
          <span class="property-count">{{ properties.bool.length }}</span>
        </a>
      </li>
      <li>
        <a
          href="#position"
          :class="{ active: isActive(TAB.POSITION) }"
          @click.prevent="switchTab(TAB.POSITION)"
        >
          POSITION
          <span class="property-count">{{ properties.position.length }}</span>
        </a>
      </li>
    </ul>

    <div :class="{ hidden: !isActive(TAB.STRING) }">
      <WeeniePropertiesTable
        v-model="properties.string"
        kind="string"
        @change="update"
      />
    </div>
    <div :class="{ hidden: !isActive(TAB.INT32) }">
      <WeeniePropertiesTable
        v-model="properties.int32"
        kind="int32"
        @change="update"
      />
    </div>
    <div :class="{ hidden: !isActive(TAB.INT64) }">
      <WeeniePropertiesTable
        v-model="properties.int64"
        kind="int64"
        @change="update"
      />
    </div>
    <div :class="{ hidden: !isActive(TAB.FLOAT) }">
      <WeeniePropertiesTable
        v-model="properties.float"
        kind="float"
        @change="update"
      />
    </div>
    <div :class="{ hidden: !isActive(TAB.DATAID) }">
      <WeeniePropertiesTable
        v-model="properties.dataId"
        kind="dataId"
        @change="update"
      />
    </div>
    <div :class="{ hidden: !isActive(TAB.INSTANCEID) }">
      <WeeniePropertiesTable
        v-model="properties.instanceId"
        kind="instanceId"
        @change="update"
      />
    </div>
    <div :class="{ hidden: !isActive(TAB.BOOL) }">
      <WeeniePropertiesTable
        v-model="properties.bool"
        kind="bool"
        @change="update"
      />
    </div>
    <div :class="{ hidden: !isActive(TAB.POSITION) }">
      <WeeniePropertiesTable
        v-model="properties.position"
        kind="position"
        @change="update"
      />
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
    prop: "properties",
    event: "change"
  },
  props: {
    properties: {
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
