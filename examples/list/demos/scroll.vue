<template>
  <t-list style="max-height: 200px" @scroll="scrollHandler">
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
    <t-list-item>列表内容的描述性文字</t-list-item>
  </t-list>
</template>

<script setup>
const scrollHandler = (e) => {
  console.log(e);
};
</script>
