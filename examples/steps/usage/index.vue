<!-- 该脚本为自动生成，如有需要请在 /script/generate-usage/index.js 中调整 -->
<template>
  <base-usage :code="usageCode" :config-list="configList" :panel-list="panelList" @PanelChange="onPanelChange">
    <template #steps="{ configProps }"
      ><t-steps :current="1" v-bind="configProps">
        <t-step-item title="步骤1" content="提示文字" />
        <t-step-item title="步骤2" content="提示文字" />
        <t-step-item title="步骤3" content="提示文字" /> </t-steps
    ></template>
  </base-usage>
</template>

<script setup lang="jsx">
/* eslint-disable */
import { ref, onMounted } from 'vue';
import configJson from './props.json';

const configList = ref(configJson);
const panelList = [{ label: 'steps', value: 'steps' }];

const usageCodeMap = {
  steps:
    '\n        <t-steps :current="1" v-bind="configProps">\n          <t-step-item title="步骤1" content="提示文字" />\n          <t-step-item title="步骤2" content="提示文字" />\n          <t-step-item title="步骤3" content="提示文字" />\n        </t-steps>\n      ',
};
const usageCode = ref(`<template>${usageCodeMap[panelList[0].value].trim()}</template>`);

function onPanelChange(panel) {
  usageCode.value = `<template>${usageCodeMap[panel].trim()}</template>`;
}
</script>
