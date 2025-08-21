export interface SessionManager {
    setUser(userId: number): void;
    getUser(): number | null;
    clearUser(): void;
}
