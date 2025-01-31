import { getUserById } from "../api/user";
import { useAuthStore } from "../stores/authStore";

export const useUser = () => {
  const authStore = useAuthStore();

  const getInfosProfil = async (id) => {
    try {
      const response = await getUserById(id);
      authStore.setUser(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  return { getInfosProfil };
};
