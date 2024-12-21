<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2 v-if="title" class="card-title">
        {{ title }}
      </h2>
      <slot name="subtitle" class="card-subtitle"></slot>
    </div>
    <slot></slot>
  </div>
</template>
