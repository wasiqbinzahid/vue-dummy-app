import { ref, computed } from 'vue';
import { authService } from '../services/auth';

export function useAuth() {
  const loading = ref(false);
  const error = ref<string | null>(null);
  const user = ref<{ name?: string; email: string } | null>(null);

  const isAuthenticated = computed(() => user.value !== null);

  const signIn = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;

    try {
      await authService.signIn({ email, password });
      user.value = { email }; // In real app, would get user data from API
      return true;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Something went wrong';
      return false;
    } finally {
      loading.value = false;
    }
  };

  const signUp = async (name: string, email: string, password: string) => {
    loading.value = true;
    error.value = null;

    try {
      await authService.signUp({ name, email, password });
      user.value = { name, email }; // In real app, would get user data from API
      return true;
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Something went wrong';
      return false;
    } finally {
      loading.value = false;
    }
  };

  const signOut = () => {
    user.value = null;
    // In real app, would call API and clear tokens
  };

  return {
    user,
    loading,
    error,
    isAuthenticated,
    signIn,
    signUp,
    signOut,
  };
} 