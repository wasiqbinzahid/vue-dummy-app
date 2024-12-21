<script setup lang="ts">
import { ref } from 'vue';
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline';

interface Props {
  modelValue: string;
  type?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

// Define props explicitly to exclude them from $attrs
defineProps<Props>();

defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// Tell Vue to inherit attributes on the input element instead of the root element
defineOptions({
  inheritAttrs: false,
});

const showPassword = ref(false);
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="mb-4">
    <label
      v-if="label"
      class="block text-sm font-medium text-text-secondary mb-1"
    >
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <div class="relative">
      <input
        :type="type === 'password' ? (showPassword ? 'text' : 'password') : (type || 'text')"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :placeholder="placeholder"
        :required="required"
        class="input-field"
        v-bind="$attrs"
      />
      <button
        v-if="type === 'password'"
        type="button"
        class="absolute inset-y-0 right-0 pr-3 flex items-center"
        @click="togglePasswordVisibility"
      >
        <EyeIcon v-if="showPassword" class="h-5 w-5 text-gray-400" />
        <EyeSlashIcon v-else class="h-5 w-5 text-gray-400" />
      </button>
    </div>
  </div>
</template>
