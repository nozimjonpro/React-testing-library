import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter custom hook", () => {
  test("render useCounter hook correctly", () => {
    const { result } = renderHook(useCounter);

    expect(result.current.count).toBe(0);
  });

  test("hook should accept initialCount", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("should decrement the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
