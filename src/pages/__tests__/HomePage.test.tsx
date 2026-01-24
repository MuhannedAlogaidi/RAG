import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import HomePage from "../HomePage";

describe("HomePage", () => {
  it("renders when routed to /", async () => {
    const router = createMemoryRouter([{ path: "/", element: <HomePage /> }], {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    expect(await screen.findByRole("heading", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByText("Baseline home page.")).toBeInTheDocument();
  });
});
