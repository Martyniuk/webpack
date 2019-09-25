export default (text = 'Hello!') => {
    const element = document.createElement('h1');

    element.innerHTML = text;

    element.addEventListener('click', async () => {
        element.textContent = 'fetching...';

        await (() => new Promise((resolve) => setTimeout(resolve, 2000)))();

        /*
        ** prefetch: отмечает ресурс как возможно пригодившийся в будущем (browser downloads while idle state)
        ** preload: отмечает ресурс как необходимый ближайшее время (browser downloads immediately)
         */
        const { default: text } = await import(
        /* webpackChunkName: "lazyLoadedText" */
            './lazyLoadedText',
        );

        element.textContent = text;
    });

    return element;
};
