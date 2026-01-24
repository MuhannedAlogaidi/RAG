import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

import { router } from "../../router";

describe("router smoke", () => {
  it("renders the Home route", async () => {
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole("heading", { name: "Home" })).toBeInTheDocument();
  });
});
