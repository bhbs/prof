fixture`DISPLAY TEST`
    .page`../index.html`;

test('Take screenshots', async t => {
    await t
        .resizeWindow(320, 100)
        .takeScreenshot({
            path: 'index.320.png',
            fullPage: true
        })
        .resizeWindow(768, 100)
        .takeScreenshot({
            path: 'index.768.png',
            fullPage: true
        })
        .resizeWindow(1440, 100)
        .takeScreenshot({
            path: 'index.1440.png',
            fullPage: true
        })
        .resizeWindow(1920, 100)
        .takeScreenshot({
            path: 'index.1920.png',
            fullPage: true
        })
        .resizeWindow(2560, 100)
        .takeScreenshot({
            path: 'index.2560.png',
            fullPage: true
        });
});
