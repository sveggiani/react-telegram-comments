import * as React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { TelegramComments } from "../src";
import {
  COMMENTS_APP_SCRIPT,
  TelegramCommentsProps,
} from "../src/TelegramComments";

const onLoadMock = jest.fn();

const basicConfig: TelegramCommentsProps = {
  websiteKey: "1234567890",
};

const extendedConfig: TelegramCommentsProps = {
  ...basicConfig,
  commentsNumber: 10,
  containerClassName: "test-container-class",
  customColor: "rebeccapurple",
  customHeight: 500,
  pageId: "fake-page-id",
  showColorfulNames: true,
  showDislikes: true,
  showIconOutlines: true,
  useDarkMode: true,
  wrapperClassName: "test-wrapper-class",
};

describe("Basic tests", () => {
  it(`doesn't render if no website key prop has been passed`, () => {
    render(<TelegramComments websiteKey={""} />);

    expect(screen.queryByTestId("rtc-container")).not.toBeInTheDocument();
  });

  it("renders without crashing and external script loads", async () => {
    render(<TelegramComments {...basicConfig} />);

    await new Promise(process.nextTick);

    await waitFor(() => {
      const script = document.querySelector(
        `script[src="${COMMENTS_APP_SCRIPT}"]`
      );

      expect(script).toBeInTheDocument();
      // TODO: is it possible to test if the script has actually loaded?
    });
  });

  it("renders and correctly assigns the onLoad callback", async () => {
    render(<TelegramComments {...basicConfig} onLoad={onLoadMock} />);

    await new Promise(process.nextTick);

    await waitFor(() => {
      const script = document.querySelector(
        `script[src="${COMMENTS_APP_SCRIPT}"]`
      );

      expect(onLoadMock).not.toHaveBeenCalled();
      fireEvent.load(script!);
      expect(onLoadMock).toHaveBeenCalledTimes(1);
    });
  });

  it("correctly renders with all passed props", async () => {
    render(<TelegramComments {...extendedConfig} />);

    await waitFor(() => {
      const script = document.querySelector(
        `script[src="${COMMENTS_APP_SCRIPT}"]`
      );

      expect(script).toBeInTheDocument();
      expect(script?.getAttribute("data-limit")).toBe("10");
      expect(script?.getAttribute("data-color")).toBe("rebeccapurple");
      expect(script?.getAttribute("data-height")).toBe("500");
      expect(script?.getAttribute("data-dark")).toBe("1");
      expect(script?.getAttribute("data-page-id")).toBe("fake-page-id");
      expect(script?.getAttribute("data-comments-app-website")).toBe(
        "1234567890"
      );
      expect(script?.getAttribute("data-colorful")).toBe("1");
      expect(script?.getAttribute("data-dislikes")).toBe("1");
      expect(script?.getAttribute("data-outlined")).toBe("1");

      expect(screen.getByTestId("rtc-container")).toHaveClass(
        "test-container-class"
      );
      expect(screen.getByTestId("rtc-wrapper")).toHaveClass(
        "test-wrapper-class"
      );
    });
  });
});
