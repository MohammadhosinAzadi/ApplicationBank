import { SessionManager } from "../Session/interface";

export const memorySessionManager: SessionManager = (() => {
    let userId: number | null = null;
    return {
      setUser(id: number): void {
        userId = id;
      },
      getUser(): number | null {
        return userId;
      },
      clearUser(): void {
        userId = null;
      },
    };
})();