import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../RootLayout";
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import ApplicantPage from "../ApplicantPage";
import RouteErrorPage from "../RouteErrorPage";

describe("router 404", () => {
  it("renders Not Found for unknown routes", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <RootLayout />,
          errorElement: <RouteErrorPage />,
          children: [
            { index: true, element: <HomePage /> },
            { path: "about", element: <AboutPage /> },
            { path: "applicant", element: <ApplicantPage /> },
          ],
        },
      ],
      { initialEntries: ["/this-route-does-not-exist"] }
    );

    render(<RouterProvider router={router} />);

    expect(await screen.findByTestId("page-not-found")).toBeInTheDocument();
  });
});
