export declare type Options = {
    throttleTime?: number;
    onScrollBottom?: (e: Event) => void;
    onScrollTop?: (e: Event) => void;
    onScroll?: (e: Event) => void;
};
export default class EasyScrollBox {
    #private;
    constructor(ele: Element | string, options?: Options);
    private addListener;
    private onScroll;
    removeEventListener(): void;
}
