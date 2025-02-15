<template>
  <div :id="targetId"></div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'

const props = withDefaults(
  defineProps<{
    formId?: string,
    target?: string,
    region?: string
  }>(),
  {
    target: "hubspot-form",
    region: "na1"
  }
);

const targetId = computed(() => props.target || "hubspot-form");

onMounted(() => {
  const script = document.createElement('script')
  script.src = "//js.hsforms.net/forms/embed/v2.js"
  script.type = "text/javascript"
  script.charset = "utf-8"

  script.onload = () => {
    window.hbspt.forms.create({
      region: props.region,
      portalId: "21247113",
      formId: props.formId,
      target: "#" + targetId.value,
    })
  }

  document.body.appendChild(script)
})
</script>
