<script setup lang="ts">
import { ref } from "vue";
import BaseInput from "../components/common/BaseInput.vue";
import BaseButton from "../components/common/BaseButton.vue";
import BaseCard from "../components/common/BaseCard.vue";
import BaseToast from "../components/common/BaseToast.vue";
import { useAuth } from "../composables/useAuth";

const email = ref("");
const password = ref("");
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref<"success" | "error">("success");

const { loading, error, signIn } = useAuth();

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  
  const success = await signIn(email.value, password.value);
  
  if (success) {
    toastMessage.value = "Successfully signed in!";
    toastType.value = "success";
  } else {
    toastMessage.value = error.value || "Failed to sign in. Please try again.";
    toastType.value = "error";
  }
  showToast.value = true;
};
</script>

<template>
  <div class="">
    <div class="max-w-md w-full">
      <BaseCard title="Sign in to your account">
        <template #subtitle>
          <div class="flex items-center justify-center flex-col">
            Or
            <router-link
              to="/signup"
              class="font-medium text-primary hover:text-primary-dark"
            >
              create a new account
            </router-link>
          </div>
        </template>
        <form class="space-y-6" @submit="handleSubmit">
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
              Sign in
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
