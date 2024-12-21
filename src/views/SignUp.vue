<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "../components/common/BaseInput.vue";
import BaseButton from "../components/common/BaseButton.vue";
import BaseCard from "../components/common/BaseCard.vue";
import BaseToast from "../components/common/BaseToast.vue";
import { useAuth } from "../composables/useAuth";

const name = ref("");
const email = ref("");
const password = ref("");
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref<"success" | "error">("success");

const { loading, error, signUp } = useAuth();

const handleSubmit = async (e: Event) => {
  e.preventDefault();

  const success = await signUp(name.value, email.value, password.value);
  
  if (success) {
    toastMessage.value = "Account successfully created!";
    toastType.value = "success";
  } else {
    toastMessage.value = error.value || "Failed to create account. Please try again.";
    toastType.value = "error";
  }
  showToast.value = true;
};
</script>

<template>
  <div class="">
    <div class="max-w-md w-full">
      <BaseCard title="Create a new account">
        <template #subtitle>
          <div class="flex items-center justify-center flex-col">
            Or
            <router-link
              to="/signin"
              class="font-medium text-primary hover:text-primary-dark"
            >
              sign in to your account
            </router-link>
          </div>
        </template>
        <form class="space-y-6" @submit="handleSubmit">
          <BaseInput v-model="name" type="text" label="Full name" required />
          <BaseInput
            v-model="email"
            type="email"
            label="Email address"
            required
          />
          <BaseInput
            v-model="password"
            type="password"
            label="Password"
            required
          />
          <div class="pt-2">
            <BaseButton type="submit" class="w-full" :loading="loading">
              Sign up
            </BaseButton>
          </div>
        </form>
      </BaseCard>
    </div>
    <BaseToast
      v-if="showToast"
      :message="toastMessage"
      :type="toastType"
      @close="showToast = false"
    />
  </div>
</template>
