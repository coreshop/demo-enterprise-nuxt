<template>
  <div class="row bs-wizard" style="border-bottom:0;">
    <div
        class="col-sm-2 bs-wizard-step"
        :class="{ 'active': isStepActive(stepName), 'complete': isStepComplete(stepName), 'disabled': isStepDisabled(stepName) }"
        v-for="stepName in steps"
        :key="stepName"
    >
      <div class="text-center bs-wizard-stepnum">{{ stepName }}</div>
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
      <a href="#" class="bs-wizard-dot"></a>
      <div class="bs-wizard-info text-center"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    step: {
      type: String,
      default: '',
      required: true,
    },
  },
  data() {
    return {
      steps: ['cart', 'customer', 'address', 'shipping', 'payment', 'summary'],
    };
  },
  methods: {
    isStepActive(stepName: string) {
      const currentStepIndex = this.steps.indexOf(this.step);
      const stepIndex = this.steps.indexOf(stepName);
      return stepIndex === currentStepIndex;
    },
    isStepDisabled(stepName: string) {
      const currentStepIndex = this.steps.indexOf(this.step);
      const stepIndex = this.steps.indexOf(stepName);
      return stepIndex > currentStepIndex;
    },
    isStepComplete(stepName: string) {
      const currentStepIndex = this.steps.indexOf(this.step);
      const stepIndex = this.steps.indexOf(stepName);
      return stepIndex < currentStepIndex;
    },
  },
});
</script>
