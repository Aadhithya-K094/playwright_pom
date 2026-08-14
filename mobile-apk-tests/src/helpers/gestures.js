/**
 * Gesture Helpers for Mobile Testing
 */

export async function swipeUp() {
    await browser.execute("mobile: swipeGesture", {
        left: 100, top: 800, width: 200, height: 400,
        direction: "up", percent: 0.5
    });
}

export async function swipeDown() {
    await browser.execute("mobile: swipeGesture", {
        left: 100, top: 300, width: 200, height: 400,
        direction: "down", percent: 0.5
    });
}

export async function longPress(selector) {
    const element = await $(selector);
    await element.waitForDisplayed();
    await browser.execute("mobile: longClickGesture", {
        elementId: element.elementId,
        duration: 2000
    });
}

export async function doubleTap(selector) {
    const element = await $(selector);
    await element.waitForDisplayed();
    await browser.execute("mobile: doubleClickGesture", {
        elementId: element.elementId
    });
}

export async function scrollToText(text) {
    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`);
}

export async function pinchOpen() {
    await browser.execute("mobile: pinchOpenGesture", {
        left: 100, top: 400, width: 400, height: 400,
        percent: 0.75
    });
}
