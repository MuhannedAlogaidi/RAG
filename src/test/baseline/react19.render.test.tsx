import { describe, it, expect } from "vitest";
import { createRoot } from "react-dom/client";
import { act } from "react";

describe("React 19 baseline", () => {
  it("renders, updates, and unmounts using official APIs", async () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const root = createRoot(container);

    await act(async () => {
      root.render(<div>React 19 OK</div>);
    });

    expect(container.textContent).toBe("React 19 OK");

    await act(async () => {
      root.render(<div>Updated</div>);
    });

    expect(container.textContent).toBe("Updated");

    await act(async () => {
      root.unmount();
    });
  });
});
