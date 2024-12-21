<script setup lang="ts">
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted } from 'vue';

interface Props {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
    emit('close');
  }, props.duration || 3000);
});
</script>

<template>
  <Transition
    enter-active-class="transform ease-out duration-300 transition"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed top-4 right-4 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
    >
      <div class="p-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <CheckCircleIcon
              v-if="type === 'success'"
              class="h-6 w-6 text-green-400"
            />
            <XCircleIcon v-else class="h-6 w-6 text-red-400" />
          </div>
          <div class="ml-3 w-0 flex-1">
            <p class="text-sm text-gray-500">
              {{ message }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template> 